/**
 * Interface for overflow item information
 */
interface OverflowItem {
  chlld: Element;
  ref: string;
  width: number;
  overallWidth: number;
}

/**
 * Array to store overflow items for each container
 */
const overflowItems: OverflowItem[][] = [];

/**
 * Default offset for overflow width calculations
 */
const defaultOffset = 40;

/**
 * Handle overflow items based on available container width
 * @param targetWidth - Width of the overflow container
 * @param children - Child elements inside the overflow container
 * @param curContainer - Current overflow container
 * @param itemIndex - Index of the current container
 */
const getOverflowItems = (
  targetWidth: number, 
  children: HTMLCollection, 
  curContainer: Element, 
  itemIndex: number
): void => {
  // Filter items that should go into overflow
  let curOverFlowItems = overflowItems[itemIndex].filter(item => {
    return item.overallWidth > targetWidth - defaultOffset;
  });

  // Filter items that can fit in the container
  let curItems = overflowItems[itemIndex].filter(item => {
    return item.overallWidth < targetWidth - defaultOffset;
  });

  // Flyout Button ellipses
  const overflowControl = curContainer.querySelector('.hoo-buttonicon-overflow .hoo-buttonflyout');
  if (!overflowControl) return;

  // Add items to overflow menu
  if (overflowControl && overflowControl.children.length < curOverFlowItems.length) {
    for (let i = 0; i < curOverFlowItems.length; i++) {
      const itemRef = curOverFlowItems[i].ref;
      const element = curContainer.querySelector(`[data-ref="${itemRef}"]`);
      
      if (element) {
        let listItem = document.createElement('li');
        // Moves the Element into a new list item with all Events attached
        listItem.appendChild(element);
        // Append list item
        overflowControl.appendChild(listItem);
      }
    }
  }

  // Toggle overflow button visibility
  if (overflowControl.children.length !== 0) {
    const buttonEnabled = overflowControl.closest('.hoo-buttonicon-overflow') as HTMLElement;
    if (buttonEnabled) {
      buttonEnabled.classList.add('is-active');
    }
  } else {
    const buttonEnabled = overflowControl.closest('.hoo-buttonicon-overflow') as HTMLElement;
    if (buttonEnabled) {
      buttonEnabled.classList.remove('is-active');
    }
  }

  // Move items back from overflow if there's room
  if (overflowControl && overflowControl.children.length > curOverFlowItems.length) {
    for (let i = 0; i < curItems.length; i++) {
      const itemRef = curItems[i].ref;
      const overflowElement = overflowControl.querySelector(`[data-ref="${itemRef}"]`);
      
      if (overflowElement) {
        // Move elements back from overflow menu
        curContainer.appendChild(overflowElement);
      }
    }
  }

  /**
   * Cleanup empty <li> elements
   */
  for (let i = 0; i < overflowControl.children.length; i++) {
    if (overflowControl.children[i].children.length === 0) {
      overflowControl.children[i].remove();
    }
  }
}

/**
 * Handle all entries in the overflow menu
 * @param entry - ResizeObserver entry
 * @param index - Index of the entry
 */
const entryHandler = (entry: ResizeObserverEntry, index: number): void => {
  const parent = entry.target.parentElement;
  if (!parent) return;
  
  const childButtons = Array.from(parent.querySelectorAll('.hoo-overflow > *'));
  if (childButtons.length > 0) {
    getOverflowItems(
      parent.clientWidth, 
      childButtons as unknown as HTMLCollection, 
      entry.target, 
      index
    );
  }
}

/**
 * Handle the overflow behavior for all '.hoo.overflow' containers
 * @param entries - ResizeObserver entries
 */
const overflow = (entries: ResizeObserverEntry[]): void => {
  // Handle the overflow behaviour for all '.hoo.overflow' containers
  entries.forEach((item, index) => {
    if (item.target.children) {
      initOverflowElements(item.target.children, index);
      // Handle the resizing
      entryHandler(item, index);
    }
  });
}

/**
 * Initialize overflow elements data
 * @param children - Collection of child elements
 * @param index - Container index
 */
const initOverflowElements = (children: HTMLCollection, index: number): void => {
  let overallWidth = 0;

  if (overflowItems.length <= index) {
    overflowItems[index] = [];

    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement;
      overallWidth += child.clientWidth;

      if (!child.classList.contains("hoo-buttonicon-overflow")) {
        const currentItem: OverflowItem = {
          chlld: child,
          ref: "ref-" + index + "-" + i,
          width: child.clientWidth,
          overallWidth: overallWidth
        };

        child.dataset.ref = currentItem.ref;
        overflowItems[index].push(currentItem);
      }
    }
  }
}

/**
 * Initialize overflow functionality by setting up ResizeObserver
 * for all overflow containers
 */
export const init = (): void => {
  const items = document.querySelectorAll('.hoo-overflow');

  if (items.length !== 0) {
    const ofObserver = new ResizeObserver(overflow);

    items.forEach(item => {
      ofObserver.observe(item);
    });
  }
}
