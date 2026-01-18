// Improved from:
// Origin 1: https://24ways.org/2019/making-a-better-custom-select-element/
// Origin 2: https://css-tricks.com/making-a-better-custom-select-element/
// Code Pen: https://codepen.io/chriscoyier/pen/yLyyZrr

/**
 * States for the select component
 */
type SelectState = 'initial' | 'opened' | 'filtered' | 'closed';

/**
 * Direction for keyboard navigation
 */
type FocusDirection = 'input' | 'forward' | 'back';

/**
 * Initialize an accessible custom select element
 * @param listItem - The custom select container element
 */
export const ariaSelect = (listItem: HTMLElement): void => {
  console.debug('ariaSelect', listItem);
  
  // Get elements within the select component
  const csSelector = listItem;
  console.log('csSelector', csSelector);
  
  const csInput = csSelector.querySelector('input') as HTMLInputElement;
  if (!csInput) {
    console.error('Input element not found within select component');
    return;
  }
  
  const csList = csSelector.querySelector('ul') as HTMLUListElement;
  if (!csList) {
    console.error('List element not found within select component');
    return;
  }
  
  const csOptions = csList.querySelectorAll('li.hoo-option');
  if (!csOptions || csOptions.length === 0) {
    console.warn('No options found within select component');
  }
  
  const csIcons = csSelector.querySelectorAll('svg');
  
  // Status element to announce to screen readers
  const csStatus = document.querySelector('#custom-select-status') as HTMLElement;
  if (!csStatus) {
    console.warn('Status element #custom-select-status not found');
  }
  
  // Convert NodeList to Array for easier manipulation
  const aOptions = Array.from(csOptions) as HTMLLIElement[];

  // Create and set start point for the state tracker
  let csState: SelectState = "initial";
  
  // Set up ARIA attributes for accessibility
  csSelector.setAttribute('role', 'combobox');
  csSelector.setAttribute('aria-haspopup', 'listbox');
  csSelector.setAttribute('aria-owns', 'custom-select-list'); // container owns the list...
  csInput.setAttribute('aria-autocomplete', 'both');
  csInput.setAttribute('aria-controls', 'custom-select-list'); // ...but the input controls it
  csList.setAttribute('role', 'listbox');
  
  csOptions.forEach((option) => {
    option.setAttribute('role', 'option');
    option.setAttribute('tabindex', "-1"); // make li elements keyboard focusable by script only
  });
  
  // Set up status message for screen readers
  if (csStatus) {
    csStatus.textContent = csOptions.length + " options available. Arrow down to browse or start typing to filter.";
  }
  
  // Initial state
  toggleList('Shut');

  /**
   * Toggle the visibility of the dropdown list
   * @param whichWay - 'Open' or 'Shut'
   */
  function toggleList(whichWay: 'Open' | 'Shut'): void {
    if (whichWay === 'Open') {
      csList.classList.remove('hidden-all');
      csSelector.setAttribute('aria-expanded', 'true');
    } else { // === 'Shut'
      csList.classList.add('hidden-all');
      csSelector.setAttribute('aria-expanded', 'false');
    }
  }

  /**
   * Find the currently focused element
   * @returns The element that currently has focus
   */
  function findFocus(): Element {
    return document.activeElement as Element;
  }

  /**
   * Move focus between elements
   * @param fromHere - Current element with focus
   * @param toThere - Direction to move focus ('input', 'forward', or 'back')
   */
  function moveFocus(fromHere: Element, toThere: FocusDirection): void {
    // Get currently visible options
    const aCurrentOptions = aOptions.filter((option) => {
      return option.style.display === '';
    });
    
    // Don't move if no options are visible
    if (aCurrentOptions.length === 0) {
      return;
    }
    
    if (toThere === 'input') {
      csInput.focus();
      return;
    }
    
    // Handle focus movement based on starting point
    switch (fromHere) {
      case csInput:
        if (toThere === 'forward') {
          aCurrentOptions[0].focus();
        } else if (toThere === 'back') {
          aCurrentOptions[aCurrentOptions.length - 1].focus();
        }
        break;
        
      case csOptions[0]:
        if (toThere === 'forward') {
          aCurrentOptions[1]?.focus();
        } else if (toThere === 'back') {
          csInput.focus();
        }
        break;
        
      case csOptions[csOptions.length - 1]:
        if (toThere === 'forward') {
          aCurrentOptions[0].focus();
        } else if (toThere === 'back') {
          aCurrentOptions[aCurrentOptions.length - 2]?.focus();
        }
        break;
        
      default: // middle list or filtered items 
        const currentItem = findFocus();
        const whichOne = aCurrentOptions.indexOf(currentItem as HTMLLIElement);
        
        if (toThere === 'forward') {
          const nextOne = aCurrentOptions[whichOne + 1];
          if (nextOne) nextOne.focus();
        } else if (toThere === 'back' && whichOne > 0) {
          const previousOne = aCurrentOptions[whichOne - 1];
          if (previousOne) previousOne.focus();
        } else { // if whichOne = 0
          csInput.focus();
        }
        break;
    }
  }

  /**
   * Filter options based on input value
   */
  function doFilter(): void {
    const terms = csInput.value;
    const aFilteredOptions = aOptions.filter((option) => {
      return option.innerText.toUpperCase().startsWith(terms.toUpperCase());
    });
    
    console.debug(aFilteredOptions);
    
    // Hide all options first
    csOptions.forEach(option => (option as HTMLElement).style.display = "none");
    
    // Show only filtered options
    aFilteredOptions.forEach((option) => {
      option.style.display = "";
    });
    
    setState('filtered');
    updateStatus(aFilteredOptions.length);
  }

  /**
   * Update status message for screen readers
   * @param howMany - Number of options currently available
   */
  function updateStatus(howMany: number): void {
    if (csStatus) {
      csStatus.textContent = howMany + " options available.";
    }
  }

  /**
   * Make a selection from the dropdown
   * @param whichOption - The selected option element
   */
  function makeChoice(whichOption: HTMLElement): void {
    const optionValue = whichOption.dataset.value;
    if (optionValue) {
      csInput.value = optionValue;
    }
    moveFocus(document.activeElement as Element, 'input');
  }

  /**
   * Update the component state
   * @param newState - The new state to set
   */
  function setState(newState: SelectState): void {
    csState = newState;
  }

  /**
   * Handle keyboard navigation and actions
   * @param whichKey - The key that was pressed
   */
  function doKeyAction(whichKey: string): void {
    const currentFocus = findFocus();
    
    switch (whichKey) {
      case 'Enter':
        if (csState === 'initial') {
          // if state = initial, toggleOpen and set state to opened
          toggleList('Open');
          setState('opened');
        } else if (csState === 'opened' && currentFocus.tagName === 'LI') {
          // if state = opened and focus on list, makeChoice and set state to closed
          makeChoice(currentFocus as HTMLElement);
          toggleList('Shut');
          setState('closed');
        } else if (csState === 'opened' && currentFocus === csInput) {
          // if state = opened and focus on input, close it
          toggleList('Shut');
          setState('closed');
        } else if (csState === 'filtered' && currentFocus.tagName === 'LI') {
          // if state = filtered and focus on list, makeChoice and set state to closed
          makeChoice(currentFocus as HTMLElement);
          toggleList('Shut');
          setState('closed');
        } else if (csState === 'filtered' && currentFocus === csInput) {
          // if state = filtered and focus on input, set state to opened
          toggleList('Open');
          setState('opened');
        } else { // i.e. csState is closed, or csState is opened/filtered but other focus point?
          // if state = closed, set state to filtered? i.e. open but keep existing input? 
          toggleList('Open');
          setState('filtered');
        }
        break;

      case 'Escape':
        // if state = opened or filtered, set state to initial
        if (csState === 'opened' || csState === 'filtered') {
          toggleList('Shut');
          setState('initial');
        }
        break;

      case 'ArrowDown':
        if (csState === 'initial' || csState === 'closed') {
          // if state = initial or closed, set state to opened and moveFocus to first
          toggleList('Open');
          moveFocus(csInput, 'forward');
          setState('opened');
        } else {
          // if state is opened or filtered, move focus forward
          toggleList('Open');
          moveFocus(currentFocus, 'forward');
        }
        break;
        
      case 'ArrowUp':
        if (csState === 'initial' || csState === 'closed') {
          // if state = initial or closed, set state to opened and moveFocus to last
          toggleList('Open');
          moveFocus(csInput, 'back');
          setState('opened');
        } else {
          // if state is opened or filtered, move focus back
          moveFocus(currentFocus, 'back');
        }
        break;
        
      default:
        if (csState === 'initial') {
          // if state = initial, toggle open, doFilter and set state to filtered
          toggleList('Open');
          doFilter();
          setState('filtered');
        } else if (csState === 'opened') {
          // if state = opened, doFilter and set state to filtered
          doFilter();
          setState('filtered');
        } else if (csState === 'closed') {
          // if state = closed, doFilter and set state to filtered
          doFilter();
          setState('filtered');
        } else { // already filtered
          doFilter();
        }
        break;
    }
  }
  
  // Event Listeners
  // Handle clicks on the custom select
  csSelector.addEventListener('click', function (e) {
    const currentFocus = findFocus();
    
    switch (csState) {
      case 'initial': // if state = initial, toggleOpen and set state to opened
        toggleList('Open');
        setState('opened');
        break;
        
      case 'opened':
        // if state = opened and focus on input, toggleShut and set state to initial
        if (currentFocus === csInput) {
          toggleList('Shut');
          setState('initial');
        } else if (currentFocus.tagName === 'LI') {
          // if state = opened and focus on list, makeChoice, toggleShut and set state to closed
          makeChoice(currentFocus as HTMLElement);
          toggleList('Shut');
          setState('closed');
        }
        break;
        
      case 'filtered':
        // if state = filtered and focus on list, makeChoice and set state to closed
        if (currentFocus.tagName === 'LI') {
          makeChoice(currentFocus as HTMLElement);
          toggleList('Shut');
          setState('closed');
        } // if state = filtered and focus on input, do nothing (wait for next user input)
        break;
        
      case 'closed': // if state = closed, toggleOpen and set state to filtered? or opened?
        toggleList('Open');
        setState('filtered');
        break;
    }
  });

  // Handle keyboard events
  csSelector.addEventListener('keyup', function (e) {
    doKeyAction(e.key);
  });

  // Close the select when clicking outside
  document.addEventListener('click', function (e) {
    const target = e.target as Element;
    if (!target.closest('.hoo-select')) {
      // click outside of the custom group
      toggleList('Shut');
      setState('initial');
    }
  });
}

/**
 * Update visibility of optgroups based on their children's visibility
 */
function updateOptgroupVisibility(): void {
  const optgroups = document.querySelectorAll('.hoo-optgroup');

  optgroups.forEach(optgroup => {
    const options = optgroup.querySelectorAll('.hoo-option');
    const hasVisibleOption = Array.from(options).some(option =>
      (option as HTMLElement).style.display !== 'none'
    );

    // Hide or show the optgroup based on visibility of its options
    (optgroup as HTMLElement).style.display = hasVisibleOption ? '' : 'none';
  });
}

// Run initially to set visibility
updateOptgroupVisibility();

// Setup mutation observer to handle dynamic changes
const selectDropdown = document.querySelector('.hoo-select-dropdown');
if (selectDropdown) {
  const observer = new MutationObserver(() => {
    updateOptgroupVisibility();
  });

  observer.observe(selectDropdown, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['style'] // Monitor only style changes
  });
}
