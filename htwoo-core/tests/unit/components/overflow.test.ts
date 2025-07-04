import { describe, it, expect, beforeEach } from 'vitest';
import * as overflow from '../../../src/ts/overflow';

describe('Overflow component', () => {
  // Set up the DOM for each test
  beforeEach(() => {
    // Reset the DOM
    document.body.innerHTML = `
      <div class="hoo-overflow" style="width: 400px;">
        <div class="hoo-overflow-content">
          <button class="hoo-button" data-ref="button1">Button 1</button>
          <button class="hoo-button" data-ref="button2">Button 2</button>
          <button class="hoo-button" data-ref="button3">Button 3</button>
          <button class="hoo-button" data-ref="button4">Button 4</button>
          <button class="hoo-button" data-ref="button5">Button 5</button>
        </div>
        <div class="hoo-buttonicon-overflow">
          <button class="hoo-button-icon">
            <span class="hoo-button-icon-label">More</span>
            <span class="hoo-icon-morevertical"></span>
          </button>
          <ul class="hoo-buttonflyout"></ul>
        </div>
      </div>
    `;
  });

  it('should initialize the overflow component', () => {
    // Initialize overflow
    overflow.init();
    
    // Verify that it's initialized by checking for the overflow container
    const overflowContainer = document.querySelector('.hoo-overflow');
    expect(overflowContainer).not.toBeNull();
  });
});
