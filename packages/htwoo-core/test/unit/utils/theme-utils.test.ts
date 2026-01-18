import { describe, test, expect, vi } from 'vitest';

/**
 * Type definition for a theme configuration
 */
interface ThemeConfig {
  id: string;
  name: string;
  colors: {
    primary: string;
    secondary?: string;
    background: string;
    text: string;
    [key: string]: string | undefined;
  };
  fonts?: {
    heading?: string;
    body?: string;
    [key: string]: string | undefined;
  };
}

/**
 * Mocked theme utility functions for testing
 */
class ThemeUtils {
  private activeTheme: ThemeConfig | null = null;
  private themes: Map<string, ThemeConfig> = new Map();
  
  /**
   * Register a new theme
   * @param theme The theme configuration to register
   */
  registerTheme(theme: ThemeConfig): void {
    if (!theme.id || !theme.name || !theme.colors) {
      throw new Error('Invalid theme configuration');
    }
    this.themes.set(theme.id, theme);
  }
  
  /**
   * Get a theme by ID
   * @param id The theme ID
   * @returns The theme configuration or null if not found
   */
  getTheme(id: string): ThemeConfig | null {
    return this.themes.get(id) || null;
  }
  
  /**
   * Apply a theme to the document
   * @param id The theme ID to apply
   * @returns true if the theme was applied successfully, false otherwise
   */
  applyTheme(id: string): boolean {
    const theme = this.getTheme(id);
    if (!theme) return false;
    
    this.activeTheme = theme;
    
    // Apply theme colors to CSS variables
    Object.entries(theme.colors).forEach(([key, value]) => {
      if (value) {
        document.documentElement.style.setProperty(`--hoo-theme-${key}`, value);
      }
    });
    
    // Apply theme fonts if defined
    if (theme.fonts) {
      Object.entries(theme.fonts).forEach(([key, value]) => {
        if (value) {
          document.documentElement.style.setProperty(`--hoo-font-${key}`, value);
        }
      });
    }
    
    // Add theme class to document
    document.documentElement.classList.forEach(cls => {
      if (cls.startsWith('hoo-theme-')) {
        document.documentElement.classList.remove(cls);
      }
    });
    document.documentElement.classList.add(`hoo-theme-${theme.id}`);
    
    return true;
  }
  
  /**
   * Get the currently active theme
   * @returns The active theme configuration or null if none is active
   */
  getActiveTheme(): ThemeConfig | null {
    return this.activeTheme;
  }
}

describe('Theme Utilities', () => {
  let themeUtils: ThemeUtils;
  
  // Example themes for testing
  const lightTheme: ThemeConfig = {
    id: 'light',
    name: 'Light Theme',
    colors: {
      primary: '#0078d4',
      secondary: '#2b88d8',
      background: '#ffffff',
      text: '#323130',
      accent: '#ffaa44'
    },
    fonts: {
      heading: 'Segoe UI Light',
      body: 'Segoe UI'
    }
  };
  
  const darkTheme: ThemeConfig = {
    id: 'dark',
    name: 'Dark Theme',
    colors: {
      primary: '#2899f5',
      secondary: '#71afe5',
      background: '#201f1f',
      text: '#f3f2f1',
      accent: '#ff8c00'
    },
    fonts: {
      heading: 'Segoe UI Light',
      body: 'Segoe UI'
    }
  };
  
  beforeEach(() => {
    // Clean up document before each test
    document.documentElement.className = '';
    document.documentElement.style.cssText = '';
    
    // Create new instance for each test
    themeUtils = new ThemeUtils();
    
    // Register test themes
    themeUtils.registerTheme(lightTheme);
    themeUtils.registerTheme(darkTheme);
  });
  
  test('should register and retrieve themes by ID', () => {
    const theme = themeUtils.getTheme('light');
    expect(theme).not.toBeNull();
    expect(theme?.id).toBe('light');
    expect(theme?.name).toBe('Light Theme');
    expect(theme?.colors.primary).toBe('#0078d4');
  });
  
  test('should return null for non-existent themes', () => {
    expect(themeUtils.getTheme('nonexistent')).toBeNull();
  });
  
  test('should throw error for invalid theme configurations', () => {
    const invalidTheme = {
      id: 'invalid'
      // Missing name and colors
    } as ThemeConfig;
    
    expect(() => themeUtils.registerTheme(invalidTheme)).toThrow('Invalid theme configuration');
  });
  
  test('should apply theme CSS variables and classes', () => {
    themeUtils.applyTheme('dark');
    
    // Check that CSS variables were applied
    expect(document.documentElement.style.getPropertyValue('--hoo-theme-primary')).toBe('#2899f5');
    expect(document.documentElement.style.getPropertyValue('--hoo-theme-background')).toBe('#201f1f');
    expect(document.documentElement.style.getPropertyValue('--hoo-font-body')).toBe('Segoe UI');
    
    // Check that theme class was added
    expect(document.documentElement.classList.contains('hoo-theme-dark')).toBe(true);
    
    // Verify active theme
    const activeTheme = themeUtils.getActiveTheme();
    expect(activeTheme?.id).toBe('dark');
  });
  
  test('should switch between themes', () => {
    // Apply light theme first
    themeUtils.applyTheme('light');
    expect(document.documentElement.classList.contains('hoo-theme-light')).toBe(true);
    expect(document.documentElement.style.getPropertyValue('--hoo-theme-background')).toBe('#ffffff');
    
    // Then switch to dark theme
    themeUtils.applyTheme('dark');
    expect(document.documentElement.classList.contains('hoo-theme-light')).toBe(false);
    expect(document.documentElement.classList.contains('hoo-theme-dark')).toBe(true);
    expect(document.documentElement.style.getPropertyValue('--hoo-theme-background')).toBe('#201f1f');
  });
  
  test('should return false when applying non-existent theme', () => {
    expect(themeUtils.applyTheme('nonexistent')).toBe(false);
    expect(themeUtils.getActiveTheme()).toBeNull();
  });
});
