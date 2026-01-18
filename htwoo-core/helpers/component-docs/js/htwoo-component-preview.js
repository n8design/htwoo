/**
 * htwoo-component-preview Web Component
 *
 * Renders hTWOo components in an isolated Shadow DOM with Pattern Lab CSS/JS.
 * This ensures complete style isolation from the documentation page.
 *
 * Usage:
 *   <htwoo-component-preview pattern="atoms-buttons-button-standard">
 *   </htwoo-component-preview>
 */

class HtwooComponentPreview extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.stylesLoaded = false;
  }

  static get observedAttributes() {
    return ['pattern'];
  }

  connectedCallback() {
    this.render();
    this.loadStyles().then(() => {
      const patternPath = this.getAttribute('pattern');
      if (patternPath) {
        this.loadComponent(patternPath);
      }
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'pattern' && oldValue !== newValue && newValue && this.stylesLoaded) {
      this.loadComponent(newValue);
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style id="base-styles">
        :host {
          display: block;
          padding: 2rem;
          background: var(--white, #ffffff);
          border-radius: 4px;
          min-height: 60px;
        }

        :host([loading]) .preview-content {
          opacity: 0.5;
        }

        .preview-content {
          transition: opacity 0.2s ease;
        }

        .loading-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          color: var(--neutralSecondary, #666);
          font-family: var(--fontFamily, system-ui, -apple-system, sans-serif);
        }

        .error-message {
          padding: 1rem;
          background: var(--errorBackground, #fde7e9);
          border: 1px solid var(--errorText, #a80000);
          border-radius: 4px;
          color: var(--errorText, #a80000);
          font-family: var(--fontFamily, system-ui, -apple-system, sans-serif);
        }

        /* Ensure interactive components work */
        .preview-content button,
        .preview-content a,
        .preview-content input,
        .preview-content select,
        .preview-content textarea {
          cursor: pointer;
        }

        .preview-content input,
        .preview-content select,
        .preview-content textarea {
          cursor: text;
        }
      </style>

      <div class="preview-content" id="content">
        <div class="loading-indicator">Loading component...</div>
      </div>
    `;
  }

  async loadStyles() {
    try {
      // Fetch the main hTWOo CSS and transform :root to :host for Shadow DOM compatibility
      const [styleResponse, scaffoldResponse] = await Promise.all([
        fetch('/htwoo-core/css/style.css'),
        fetch('/htwoo-core/css/pattern-scaffolding.css')
      ]);

      if (styleResponse.ok) {
        let styleCSS = await styleResponse.text();
        // Transform :root to :host for Shadow DOM - CSS custom properties need this
        styleCSS = styleCSS.replace(/:root\s*\{/g, ':host {');

        const styleEl = document.createElement('style');
        styleEl.id = 'htwoo-styles';
        styleEl.textContent = styleCSS;
        this.shadowRoot.insertBefore(styleEl, this.shadowRoot.getElementById('base-styles'));
      }

      if (scaffoldResponse.ok) {
        let scaffoldCSS = await scaffoldResponse.text();
        scaffoldCSS = scaffoldCSS.replace(/:root\s*\{/g, ':host {');

        const scaffoldEl = document.createElement('style');
        scaffoldEl.id = 'scaffold-styles';
        scaffoldEl.textContent = scaffoldCSS;
        this.shadowRoot.insertBefore(scaffoldEl, this.shadowRoot.getElementById('base-styles'));
      }

      this.stylesLoaded = true;
    } catch (error) {
      console.error('Error loading hTWOo styles:', error);
      this.stylesLoaded = true; // Continue anyway
    }
  }

  async loadComponent(patternPath) {
    this.setAttribute('loading', '');
    const contentEl = this.shadowRoot.getElementById('content');

    try {
      // Try to load the markup-only HTML from Pattern Lab output
      const response = await fetch(
        `/htwoo-core/patterns/${patternPath}/${patternPath}.markup-only.html`
      );

      if (!response.ok) {
        throw new Error(`Component not found: ${patternPath}`);
      }

      const html = await response.text();
      contentEl.innerHTML = html;

      // Initialize interactive components if needed
      this.initializeInteractiveComponents();

      this.removeAttribute('loading');
    } catch (error) {
      console.error('Error loading component:', error);
      contentEl.innerHTML = `
        <div class="error-message">
          <strong>Unable to load component preview</strong>
          <p>${error.message}</p>
          <p>Try viewing in <a href="/htwoo-core/?p=${patternPath}" target="_blank">Pattern Lab</a></p>
        </div>
      `;
      this.removeAttribute('loading');
    }
  }

  initializeInteractiveComponents() {
    // Load hTWOo JS for interactive components (dialogs, accordions, etc.)
    // Only load if not already loaded
    const existingScript = this.shadowRoot.querySelector('script[data-htwoo-js]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.setAttribute('data-htwoo-js', 'true');
      script.src = '/htwoo-core/js/main.js';
      script.onerror = () => {
        console.warn('hTWOo JS not available for interactive components');
      };
      this.shadowRoot.appendChild(script);
    }

    // Add click handlers for buttons to show visual feedback
    const buttons = this.shadowRoot.querySelectorAll('button:not([disabled])');
    buttons.forEach(btn => {
      if (!btn.hasAttribute('data-preview-handler')) {
        btn.setAttribute('data-preview-handler', 'true');
        btn.addEventListener('click', (e) => {
          // Prevent form submission in preview
          e.preventDefault();
          // Add visual feedback
          btn.style.transform = 'scale(0.98)';
          setTimeout(() => {
            btn.style.transform = '';
          }, 150);
        });
      }
    });
  }

  // Public method to reload the component
  reload() {
    const patternPath = this.getAttribute('pattern');
    if (patternPath) {
      this.loadComponent(patternPath);
    }
  }
}

// Register the custom element
if (!customElements.get('htwoo-component-preview')) {
  customElements.define('htwoo-component-preview', HtwooComponentPreview);
}
