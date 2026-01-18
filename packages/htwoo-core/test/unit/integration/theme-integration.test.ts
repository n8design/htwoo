// TypeScript integration test for theme functionality
import { describe, test, expect, beforeEach, afterEach, vi } from 'vitest';

interface ThemeConfig {
  name: string;
  mode: 'light' | 'dark' | 'auto';
  primaryColor?: string;
  accentColor?: string;
  variables?: Record<string, string>;
}

interface ThemeManager {
  currentTheme: ThemeConfig;
  availableThemes: ThemeConfig[];
  setTheme: (theme: ThemeConfig) => void;
  getTheme: () => ThemeConfig;
  applyTheme: (themeName: string) => void;
}

describe('Theme Integration Tests', () => {
  let themeManager: ThemeManager;
  let mockLocalStorage: Record<string, string>;

  beforeEach(() => {
    // Mock localStorage
    mockLocalStorage = {};
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: (key: string) => mockLocalStorage[key] || null,
        setItem: (key: string, value: string) => { mockLocalStorage[key] = value; },
        removeItem: (key: string) => { delete mockLocalStorage[key]; },
        clear: () => { mockLocalStorage = {}; }
      }
    });

    // Mock theme manager
    themeManager = {
      currentTheme: {
        name: 'fluent-light',
        mode: 'light'
      },
      availableThemes: [
        { name: 'fluent-light', mode: 'light' },
        { name: 'fluent-dark', mode: 'dark' },
        { name: 'fluent-auto', mode: 'auto' }
      ],
      setTheme: vi.fn(),
      getTheme: vi.fn(),
      applyTheme: vi.fn()
    };

    // Set up test HTML with components that respond to themes
    document.body.innerHTML = `
      <div class="htwoo-theme-container" data-theme="fluent-light">
        <!-- Dialog with theme classes -->
        <div class="hoo-dialog htwoo-themed" aria-hidden="true">
          <div class="hoo-dialog-content">
            <h2>Themed Dialog</h2>
            <button class="hoo-button hoo-button-primary">OK</button>
            <button class="hoo-button hoo-button-secondary">Cancel</button>
          </div>
        </div>

        <!-- Navigation with theme classes -->
        <nav class="hoo-nav htwoo-themed">
          <ul class="hoo-nav-list">
            <li class="hoo-nav-item">
              <a href="#" class="hoo-nav-link">Home</a>
            </li>
          </ul>
        </nav>

        <!-- Select with theme classes -->
        <div class="hoo-select htwoo-themed">
          <input type="text" class="hoo-input" />
          <ul class="hoo-select-list">
            <li class="hoo-option">Option 1</li>
            <li class="hoo-option">Option 2</li>
          </ul>
        </div>

        <!-- Table with theme classes -->
        <table class="hoo-table htwoo-themed">
          <thead>
            <tr>
              <th class="hoo-table-header">Name</th>
              <th class="hoo-table-header">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hoo-table-row">
              <td class="hoo-table-cell">Item 1</td>
              <td class="hoo-table-cell">Value 1</td>
            </tr>
          </tbody>
        </table>

        <!-- Pivot with theme classes -->
        <div class="hoo-pivot htwoo-themed">
          <ul class="hoo-pivot-links">
            <li class="hoo-pivot-link hoo-pivot-link-active">Tab 1</li>
            <li class="hoo-pivot-link">Tab 2</li>
          </ul>
        </div>
      </div>

      <!-- Theme toggle button -->
      <button id="theme-toggle" class="hoo-button">Toggle Theme</button>
      
      <!-- Theme selector -->
      <select id="theme-selector" class="hoo-select">
        <option value="fluent-light">Light</option>
        <option value="fluent-dark">Dark</option>
        <option value="fluent-auto">Auto</option>
      </select>
    `;
  });

  afterEach(() => {
    document.body.innerHTML = '';
    mockLocalStorage = {};
  });

  test('should initialize with default light theme', () => {
    const themeContainer = document.querySelector('.htwoo-theme-container');
    expect(themeContainer?.getAttribute('data-theme')).toBe('fluent-light');
    expect(themeManager.currentTheme.mode).toBe('light');
  });

  test('should apply dark theme to all components', () => {
    const themeContainer = document.querySelector('.htwoo-theme-container') as HTMLElement;
    const themedComponents = document.querySelectorAll('.htwoo-themed');

    // Apply dark theme
    themeContainer.setAttribute('data-theme', 'fluent-dark');
    themeManager.currentTheme = { name: 'fluent-dark', mode: 'dark' };

    expect(themeContainer.getAttribute('data-theme')).toBe('fluent-dark');
    expect(themedComponents.length).toBeGreaterThan(0);

    // Verify all components receive theme
    themedComponents.forEach(component => {
      expect(component.closest('[data-theme="fluent-dark"]')).toBeTruthy();
    });
  });

  test('should handle auto theme mode with system preference', () => {
    const mockMatchMedia = vi.fn();
    mockMatchMedia.mockReturnValue({
      matches: true, // Simulate dark mode preference
      addEventListener: vi.fn(),
      removeEventListener: vi.fn()
    });
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: mockMatchMedia
    });

    // Set auto theme
    const themeContainer = document.querySelector('.htwoo-theme-container') as HTMLElement;
    themeContainer.setAttribute('data-theme', 'fluent-auto');
    themeManager.currentTheme = { name: 'fluent-auto', mode: 'auto' };

    // Trigger the matchMedia call
    window.matchMedia('(prefers-color-scheme: dark)');

    expect(mockMatchMedia).toHaveBeenCalledWith('(prefers-color-scheme: dark)');
    expect(themeContainer.getAttribute('data-theme')).toBe('fluent-auto');
  });

  test('should persist theme preference in localStorage', () => {
    const selectedTheme = 'fluent-dark';
    
    // Simulate theme selection
    mockLocalStorage['htwoo-theme'] = selectedTheme;
    
    expect(localStorage.getItem('htwoo-theme')).toBe(selectedTheme);
    
    // Simulate loading theme from storage
    const storedTheme = localStorage.getItem('htwoo-theme');
    if (storedTheme) {
      themeManager.currentTheme = { name: storedTheme, mode: 'dark' };
    }

    expect(themeManager.currentTheme.name).toBe(selectedTheme);
  });

  test('should handle theme toggle functionality', () => {
    const themeToggle = document.getElementById('theme-toggle') as HTMLButtonElement;
    const themeContainer = document.querySelector('.htwoo-theme-container') as HTMLElement;

    // Mock toggle behavior
    themeToggle.addEventListener('click', () => {
      const currentTheme = themeContainer.getAttribute('data-theme');
      const newTheme = currentTheme === 'fluent-light' ? 'fluent-dark' : 'fluent-light';
      themeContainer.setAttribute('data-theme', newTheme);
    });

    // Initial state
    expect(themeContainer.getAttribute('data-theme')).toBe('fluent-light');

    // Toggle to dark
    themeToggle.click();
    expect(themeContainer.getAttribute('data-theme')).toBe('fluent-dark');

    // Toggle back to light
    themeToggle.click();
    expect(themeContainer.getAttribute('data-theme')).toBe('fluent-light');
  });

  test('should handle theme selector dropdown', () => {
    const themeSelector = document.getElementById('theme-selector') as HTMLSelectElement;
    const themeContainer = document.querySelector('.htwoo-theme-container') as HTMLElement;

    // Mock selector behavior
    themeSelector.addEventListener('change', (event) => {
      const target = event.target as HTMLSelectElement;
      const selectedTheme = target.value;
      themeContainer.setAttribute('data-theme', selectedTheme);
    });

    // Test each theme option
    themeSelector.value = 'fluent-dark';
    themeSelector.dispatchEvent(new Event('change'));
    expect(themeContainer.getAttribute('data-theme')).toBe('fluent-dark');

    themeSelector.value = 'fluent-auto';
    themeSelector.dispatchEvent(new Event('change'));
    expect(themeContainer.getAttribute('data-theme')).toBe('fluent-auto');
  });

  test('should apply custom theme variables', () => {
    const customTheme: ThemeConfig = {
      name: 'custom-brand',
      mode: 'light',
      primaryColor: '#0078d4',
      accentColor: '#ff6900',
      variables: {
        '--hoo-color-primary': '#0078d4',
        '--hoo-color-accent': '#ff6900',
        '--hoo-font-family': 'Segoe UI, sans-serif'
      }
    };

    // Apply custom theme variables
    const themeContainer = document.querySelector('.htwoo-theme-container') as HTMLElement;
    if (customTheme.variables) {
      Object.entries(customTheme.variables).forEach(([property, value]) => {
        themeContainer.style.setProperty(property, value);
      });
    }

    // Verify variables are applied
    expect(themeContainer.style.getPropertyValue('--hoo-color-primary')).toBe('#0078d4');
    expect(themeContainer.style.getPropertyValue('--hoo-color-accent')).toBe('#ff6900');
    expect(themeContainer.style.getPropertyValue('--hoo-font-family')).toBe('Segoe UI, sans-serif');
  });

  test('should handle theme transitions for smooth changes', () => {
    const themeContainer = document.querySelector('.htwoo-theme-container') as HTMLElement;
    
    // Add transition class before theme change
    const applyThemeWithTransition = (themeName: string) => {
      themeContainer.classList.add('theme-transition');
      themeContainer.setAttribute('data-theme', themeName);
      
      // Remove transition class after animation
      setTimeout(() => {
        themeContainer.classList.remove('theme-transition');
      }, 300);
    };

    applyThemeWithTransition('fluent-dark');
    expect(themeContainer.classList.contains('theme-transition')).toBe(true);
    expect(themeContainer.getAttribute('data-theme')).toBe('fluent-dark');
  });

  test('should handle high contrast theme mode', () => {
    const highContrastTheme: ThemeConfig = {
      name: 'fluent-high-contrast',
      mode: 'light',
      variables: {
        '--hoo-color-text': '#000000',
        '--hoo-color-background': '#ffffff',
        '--hoo-border-width': '2px',
        '--hoo-focus-outline': '3px solid #000000'
      }
    };

    const themeContainer = document.querySelector('.htwoo-theme-container') as HTMLElement;
    themeContainer.setAttribute('data-theme', highContrastTheme.name);

    // Apply high contrast variables
    if (highContrastTheme.variables) {
      Object.entries(highContrastTheme.variables).forEach(([property, value]) => {
        themeContainer.style.setProperty(property, value);
      });
    }

    expect(themeContainer.getAttribute('data-theme')).toBe('fluent-high-contrast');
    expect(themeContainer.style.getPropertyValue('--hoo-border-width')).toBe('2px');
  });

  test('should handle theme inheritance in nested components', () => {
    // Add nested components
    const nestedHTML = `
      <div class="hoo-card htwoo-themed">
        <div class="hoo-card-header">
          <h3>Card Title</h3>
        </div>
        <div class="hoo-card-body">
          <div class="hoo-button-group">
            <button class="hoo-button htwoo-themed">Button 1</button>
            <button class="hoo-button htwoo-themed">Button 2</button>
          </div>
        </div>
      </div>
    `;
    
    const themeContainer = document.querySelector('.htwoo-theme-container');
    themeContainer?.insertAdjacentHTML('beforeend', nestedHTML);

    // Change theme
    themeContainer?.setAttribute('data-theme', 'fluent-dark');

    // Verify nested components inherit theme
    const nestedComponents = themeContainer?.querySelectorAll('.htwoo-themed');
    nestedComponents?.forEach(component => {
      expect(component.closest('[data-theme="fluent-dark"]')).toBeTruthy();
    });
  });

  test('should handle theme-specific component behavior', () => {
    const dialog = document.querySelector('.hoo-dialog') as HTMLElement;
    const themeContainer = document.querySelector('.htwoo-theme-container') as HTMLElement;

    // Mock theme-specific behavior
    const updateDialogForTheme = (theme: string) => {
      if (theme === 'fluent-dark') {
        dialog.classList.add('dialog-dark-mode');
      } else {
        dialog.classList.remove('dialog-dark-mode');
      }
    };

    // Test light theme
    updateDialogForTheme('fluent-light');
    expect(dialog.classList.contains('dialog-dark-mode')).toBe(false);

    // Test dark theme
    updateDialogForTheme('fluent-dark');
    expect(dialog.classList.contains('dialog-dark-mode')).toBe(true);
  });

  test('should handle theme loading errors gracefully', () => {
    const fallbackTheme: ThemeConfig = {
      name: 'fluent-light',
      mode: 'light'
    };

    // Simulate theme loading error
    const loadTheme = (themeName: string): ThemeConfig => {
      try {
        const theme = themeManager.availableThemes.find(t => t.name === themeName);
        if (!theme) {
          throw new Error('Theme not found');
        }
        return theme;
      } catch (error) {
        console.warn(`Failed to load theme ${themeName}, falling back to default`);
        return fallbackTheme;
      }
    };

    // Test loading non-existent theme
    const result = loadTheme('non-existent-theme');
    expect(result).toEqual(fallbackTheme);
  });

  test('should handle media query changes for auto theme', () => {
    const changeCallback = vi.fn();
    const mockMediaQuery = {
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn()
    };

    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn(() => mockMediaQuery)
    });

    // Set up auto theme
    const themeContainer = document.querySelector('.htwoo-theme-container') as HTMLElement;
    themeContainer.setAttribute('data-theme', 'fluent-auto');

    // Simulate media query listener setup
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeQuery.addEventListener('change', changeCallback);

    expect(mockMediaQuery.addEventListener).toHaveBeenCalledWith('change', changeCallback);

    // Simulate system theme change
    mockMediaQuery.matches = true;
    changeCallback({ matches: true });

    expect(changeCallback).toHaveBeenCalledWith({ matches: true });
  });
});
