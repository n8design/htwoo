import { createServer } from 'http';
import { resolve, join } from 'path';
import serveStatic from 'serve-static';
import { readdir, stat } from 'fs/promises';

export interface PatternInfo {
  name: string;
  url: string;
  path: string;
  category: 'atoms' | 'molecules' | 'organism' | 'pages' | 'templates' | 'design-tokens';
}

export class AccessibilityTestServer {
  private server: any;
  private port: number;
  private publicDir: string;

  constructor(port = 3001) {
    this.port = port;
    this.publicDir = resolve(__dirname, '../../public');
  }

  async start(): Promise<void> {
    const serve = serveStatic(this.publicDir, {
      index: ['index.html'],
      dotfiles: 'deny'
    });

    this.server = createServer((req, res) => {
      serve(req, res, () => {
        res.statusCode = 404;
        res.end('Not found');
      });
    });

    return new Promise((resolve, reject) => {
      this.server.listen(this.port, async (err: any) => {
        if (err) {
          reject(err);
        } else {
          console.log(`Test server running at http://localhost:${this.port}`);
          // Give the server a moment to be fully ready
          await new Promise(r => setTimeout(r, 500));
          resolve();
        }
      });
    });
  }

  async stop(): Promise<void> {
    if (this.server) {
      return new Promise((resolve) => {
        this.server.close(() => {
          console.log('Test server stopped');
          resolve();
        });
      });
    }
  }

  getBaseUrl(): string {
    return `http://localhost:${this.port}`;
  }

  async getPatternList(): Promise<PatternInfo[]> {
    const patterns: PatternInfo[] = [];
    const patternsDir = join(this.publicDir, 'patterns');

    try {
      const entries = await readdir(patternsDir, { withFileTypes: true });
      
      for (const entry of entries) {
        if (entry.isDirectory()) {
          const categoryName = this.extractCategory(entry.name);
          const patternPath = join(patternsDir, entry.name);
          
          // Check if there's a .rendered.html file in the pattern directory
          try {
            const renderedHtmlPath = join(patternPath, `${entry.name}.rendered.html`);
            await stat(renderedHtmlPath);
            
            patterns.push({
              name: entry.name,
              url: `/patterns/${entry.name}/${entry.name}.rendered.html`,
              path: patternPath,
              category: categoryName
            });
          } catch {
            // No .rendered.html file, skip this pattern
            console.log(`Skipping ${entry.name} - no .rendered.html found`);
          }
        }
      }
    } catch (error) {
      console.error('Error reading patterns directory:', error);
    }

    return patterns.sort((a, b) => a.name.localeCompare(b.name));
  }

  private extractCategory(patternName: string): PatternInfo['category'] {
    if (patternName.startsWith('atoms-')) return 'atoms';
    if (patternName.startsWith('molecules-')) return 'molecules';
    if (patternName.startsWith('organism-')) return 'organism';
    if (patternName.startsWith('pages-')) return 'pages';
    if (patternName.startsWith('templates-')) return 'templates';
    if (patternName.startsWith('design-tokens-')) return 'design-tokens';
    return 'atoms'; // default fallback
  }

  async getCriticalPatterns(): Promise<PatternInfo[]> {
    const allPatterns = await this.getPatternList();
    
    // Define critical patterns that should always be tested
    const criticalPatternNames = [
      'atoms-buttons-button-primary',
      'atoms-buttons-button-standard',
      'atoms-input-input-text',
      'atoms-input-checkbox',
      'atoms-input-radiobutton',
      'atoms-input-select',
      'molecules-forms-field',
      'molecules-menus-nav',
      'organism-cards-document-card',
      'organism-dialogs-modal-dialog',
      'organism-facepiles-facepile'
    ];

    return allPatterns.filter(pattern => 
      criticalPatternNames.some(name => pattern.name.includes(name))
    );
  }

  async getPatternsByCategory(category: PatternInfo['category']): Promise<PatternInfo[]> {
    const allPatterns = await this.getPatternList();
    return allPatterns.filter(pattern => pattern.category === category);
  }

  async healthCheck(retries = 3, delay = 1000): Promise<boolean> {
    for (let i = 0; i < retries; i++) {
      try {
        // Try to fetch a known file instead of directory listing
        const response = await fetch(`${this.getBaseUrl()}/index.html`);
        if (response.ok) {
          return true;
        }
      } catch (error) {
        console.error(`Health check attempt ${i + 1} failed:`, error);
      }
      
      if (i < retries - 1) {
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
    return false;
  }
}

export const testServer = new AccessibilityTestServer();
