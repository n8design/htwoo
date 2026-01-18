/**
 * hTWOo Component Documentation Scripts
 *
 * Provides search functionality and clipboard copy support.
 */

(function() {
  'use strict';

  // Search Index Management
  let searchIndex = null;
  let searchData = null;

  // Initialize when DOM is ready
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initSearch();
    initClipboard();
  }

  // ============================================
  // Search Functionality
  // ============================================

  async function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    if (!searchInput || !searchResults) return;

    // Load search index
    try {
      const response = await fetch('/htwoo-components/js/search-index.json');
      if (response.ok) {
        searchData = await response.json();
        console.log(`Loaded search index with ${searchData.length} components`);
      }
    } catch (error) {
      console.warn('Search index not available:', error);
      return;
    }

    // Search input handler with debounce
    let debounceTimer;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        performSearch(e.target.value, searchResults);
      }, 200);
    });

    // Close results on outside click
    document.addEventListener('click', (e) => {
      if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.classList.remove('active');
      }
    });

    // Keyboard navigation
    searchInput.addEventListener('keydown', (e) => {
      handleSearchKeyboard(e, searchResults);
    });

    // Focus shows results if there's a query
    searchInput.addEventListener('focus', () => {
      if (searchInput.value.trim().length >= 2) {
        performSearch(searchInput.value, searchResults);
      }
    });
  }

  function performSearch(query, resultsContainer) {
    query = query.trim().toLowerCase();

    if (query.length < 2) {
      resultsContainer.classList.remove('active');
      resultsContainer.innerHTML = '';
      return;
    }

    if (!searchData) {
      resultsContainer.innerHTML = '<div class="search-result"><em>Search not available</em></div>';
      resultsContainer.classList.add('active');
      return;
    }

    // Simple search - match against title, description, category
    const results = searchData.filter(item => {
      const searchableText = [
        item.title,
        item.description,
        item.category,
        item.subcategory,
        item.content
      ].join(' ').toLowerCase();

      return searchableText.includes(query);
    }).slice(0, 10); // Limit to 10 results

    if (results.length === 0) {
      resultsContainer.innerHTML = '<div class="search-result"><em>No results found</em></div>';
    } else {
      resultsContainer.innerHTML = results.map((item, index) => `
        <a href="${item.href}" class="search-result" data-index="${index}">
          <div class="search-result-title">${highlightMatch(item.title, query)}</div>
          <div class="search-result-category">${item.category}${item.subcategory ? ' / ' + item.subcategory : ''}</div>
        </a>
      `).join('');
    }

    resultsContainer.classList.add('active');
  }

  function highlightMatch(text, query) {
    if (!query) return escapeHtml(text);
    const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
    return escapeHtml(text).replace(regex, '<strong>$1</strong>');
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function handleSearchKeyboard(e, resultsContainer) {
    const results = resultsContainer.querySelectorAll('.search-result[href]');
    if (results.length === 0) return;

    const activeResult = resultsContainer.querySelector('.search-result.active-result');
    let activeIndex = activeResult ? parseInt(activeResult.dataset.index, 10) : -1;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        activeIndex = Math.min(activeIndex + 1, results.length - 1);
        updateActiveResult(results, activeIndex);
        break;

      case 'ArrowUp':
        e.preventDefault();
        activeIndex = Math.max(activeIndex - 1, 0);
        updateActiveResult(results, activeIndex);
        break;

      case 'Enter':
        e.preventDefault();
        if (activeResult) {
          window.location.href = activeResult.href;
        }
        break;

      case 'Escape':
        resultsContainer.classList.remove('active');
        break;
    }
  }

  function updateActiveResult(results, activeIndex) {
    results.forEach((result, index) => {
      if (index === activeIndex) {
        result.classList.add('active-result');
        result.scrollIntoView({ block: 'nearest' });
      } else {
        result.classList.remove('active-result');
      }
    });
  }

  // ============================================
  // Clipboard Copy Functionality
  // ============================================

  function initClipboard() {
    document.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', handleCopy);
    });
  }

  async function handleCopy(e) {
    const btn = e.target;
    const targetSelector = btn.dataset.clipboardTarget;
    const targetEl = document.querySelector(targetSelector);

    if (!targetEl) return;

    const text = targetEl.textContent;

    try {
      await navigator.clipboard.writeText(text);
      showCopyFeedback(btn, true);
    } catch (err) {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();

      try {
        document.execCommand('copy');
        showCopyFeedback(btn, true);
      } catch (fallbackErr) {
        showCopyFeedback(btn, false);
        console.error('Copy failed:', fallbackErr);
      }

      document.body.removeChild(textarea);
    }
  }

  function showCopyFeedback(btn, success) {
    const originalText = btn.textContent;

    if (success) {
      btn.textContent = 'Copied!';
      btn.classList.add('copied');
    } else {
      btn.textContent = 'Failed';
    }

    setTimeout(() => {
      btn.textContent = originalText;
      btn.classList.remove('copied');
    }, 2000);
  }

  // ============================================
  // Prism.js Code Highlighting
  // ============================================

  // Re-highlight code blocks if Prism is available
  if (typeof Prism !== 'undefined') {
    Prism.highlightAll();
  }

})();
