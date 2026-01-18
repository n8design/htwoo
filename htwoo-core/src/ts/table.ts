/**
 * Position types for sticky tables
 */
enum Position {
  LEFT = 'left',
  RIGHT = 'right',
  TOP = 'top',
  BOTTOM = 'bottom'
}

/**
 * Handle collapse and expand actions for collapsible tables
 * @param event - Click event
 */
const collapseAndExpand = (event: Event): void => {
  const target = event.target as HTMLElement;
  const parentRow = target.closest("tr");
  
  if (!parentRow) return;
  
  const parentTable = target.closest("table");
  if (!parentTable) return;
  
  const section = parentRow.dataset.sectionheader;
  if (!section) return;
  
  let query: string;
  
  if (section === "all") {
    query = "tr[data-section]";
  } else {
    query = `tr[data-section=${section}]`;
  }

  const sectionRows = parentTable.querySelectorAll(query);

  for (let i = 0; i < sectionRows.length; i++) {
    const currentItem = sectionRows[i];

    if (currentItem.classList.contains('is-hidden')) {
      currentItem.classList.remove('is-hidden');
      currentItem.classList.add('is-visible');
      currentItem.setAttribute('aria-hidden', 'false');
      parentRow.setAttribute('aria-expanded', 'true');
    } else {
      currentItem.classList.add('is-hidden');
      currentItem.classList.remove('is-visible');
      currentItem.setAttribute('aria-hidden', 'true');
      parentRow.setAttribute('aria-expanded', 'false');
    }
  }

  if (section === "all") {
    const subSection = document.querySelectorAll("tbody tr.collapsable");
    
    if (parentRow.getAttribute('aria-expanded') === "true") {
      for (let i = 0; i < subSection.length; i++) {
        const currentItem = subSection[i];
        currentItem.setAttribute('aria-hidden', 'false');
        currentItem.setAttribute('aria-expanded', 'true');
      }
    } else {
      for (let i = 0; i < subSection.length; i++) {
        const currentItem = subSection[i];
        currentItem.setAttribute('aria-hidden', 'true');
        currentItem.setAttribute('aria-expanded', 'false');
      }
    }
  }
}

/**
 * Initialize collapsible functionality for tables
 */
const initCollapsability = (): void => {
  const collapseTables = document.querySelectorAll('.hoo-table.is-collapsable');
  
  collapseTables.forEach(table => {
    const collapseRows = table.querySelectorAll('.collapsable');
    
    collapseRows.forEach(tableRow => {
      tableRow.addEventListener('click', collapseAndExpand);
    });
  });
}

/**
 * The position object for sticky positioning
 */
const position = {
  "left": Position.LEFT,
  "right": Position.RIGHT,
  "top": Position.TOP,
  "bottom": Position.BOTTOM
};

/**
 * Fix the offset for sticky elements
 * @param parent - Parent element
 * @param selector - Selector for sticky elements
 * @param offset - Position offset type
 */
const stickyOffsetFixup = (parent: Element, selector: string, offset: Position): void => {
  const innerDefinition = parent.querySelectorAll(selector);

  for (let j = 0; j < innerDefinition.length; j++) {
    const innerElement = innerDefinition[j] as HTMLElement;

    if (offset === Position.LEFT) {
      innerElement.style[offset] = innerElement.offsetLeft + "px";
    }
    if (offset === Position.RIGHT) {
      innerElement.style[offset] = (innerElement as any).offsetRight + "px";
    }
    if (offset === Position.TOP) {
      innerElement.style[offset] = innerElement.offsetTop + "px";
    }
    if (offset === Position.BOTTOM) {
      innerElement.style[offset] = (innerElement as any).offsetBottom + "px";
    }
  }
}

/**
 * Initialize sticky table functionality
 */
const initSticky = (): void => {
  const allStickyTables = document.querySelectorAll("table.sticky");

  for (let i = 0; i < allStickyTables.length; i++) {
    const stickyTable = allStickyTables[i];
    
    stickyOffsetFixup(stickyTable, "tr td.is-sticky.left", Position.LEFT);
    stickyOffsetFixup(stickyTable, "tr th.is-sticky.left", Position.LEFT);
  }
}

/**
 * Initialize all table functionality
 */
export const initTables = (): void => {
  initCollapsability();
  initSticky();
}
