define((function () { 'use strict';

    class HOODialog {

        #launcher;
        #dialog;
        #dialogType;
        #closer;
        #options = {
            closer: null,
            backdropCloser: true,
            escCloser: true
        };

        /** Options for modal dialog */
        static options = {
            closer: null,
            backdropCloser: true,
            escCloser: true
        }

        /**
         * Enum of available dialog types
         */
        static dialogType = {
            DIALOG: 'dialog',
            MODAL: 'modal'
        }

        /**
         * Open the dialog
         */
        #showDialog = () => {

            console.debug('-> Fired showDialog -- ', this.#dialog);

            if (this.#dialogType === HOODialog.dialogType.DIALOG) {

                this.#dialog.show();

            } else if (this.#dialogType === HOODialog.dialogType.MODAL) {

                this.#dialog.showModal();
                // FIX: Make backdrop click optional
                // Capture click on backdrop
                this.#dialog.addEventListener('click', this.#backdropClick);
            } else {
                throw new Error(`Invalid dialog type specified for ${this.#dialog}`);
            }

            if (this.#closer) {
                this.#closer.addEventListener('click', this.#closeDialog);
            }

            const autofocus = this.#dialog.querySelector('[autofocus]');

            if (autofocus) {
                console.debug('No Autofocus');
                dialogElement.focus();
            }

            // Capture close on ESC click
            this.#dialog.addEventListener('keydown', this.#keyboardClose);

        }

        #backdropClick = (event) => {

            var rect = this.#dialog.getBoundingClientRect();

            var isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
                rect.left <= event.clientX && event.clientX <= rect.left + rect.width);

            // console.debug('Event Target', event.target);
            // console.debug(
            //     'Rect Top', rect.top,'\n',
            //     'Rect Height', rect.height,'\n',
            //     'Client Top', event.clientY,'\n',
            //     'Rect Left', rect.left,'\n',
            //     'Rect Width', rect.width,'\n',
            //     'Client Left', event.clientX,'\n',
            // )
            // 
            // console.debug(
            //     'Rect Top', rect.top, event.clientY, rect.top+rect.height,'\n',
            //     'Rect left', rect.left, event.clientX, rect.left+rect.width,'\n',
            // )
            

            if (!isInDialog && event.target === this.#dialog) {

                this.#dialog.close();

            }

        }

        /**
         * Close the dialog on keyCode ESC
         */
        #keyboardClose = (event) => {

            if (event.keyCode === 27) {
                this.#dialog.close();
            }

        }

        /**
         * Close the dialog used for custom event or close button
         */
        #closeDialog = (event) => {
            console.debug('closing dialog');
            this.#dialog.close();
        }

        constructor(launcher, dialog, dialogType = HOODialog.dialogType.DIALOG,
            options = HOODialog.options) {

            console.debug("Register dialog", dialogType);

            // query DOM elements
            const launchElement = document.querySelector(launcher),
                dialogElement = document.querySelector(dialog);


            if (!launchElement) {
                throw new Error(`Launcher '${launcher}' Element cannot be found`);
            }

            this.#launcher = launchElement;

            if (!dialogElement) {
                throw new Error(`Dialog '${dialog}' Element not found`);
            }

            this.#dialog = dialogElement;

            this.#launcher.addEventListener('click', this.#showDialog);

            this.#dialogType = dialogType;

            options.closer === undefined? this.#options.closer = null : options.closer;
            options.backdropCloser === undefined? this.#options.backdropCloser = true : options.backdropCloser;
            options.escCloser === undefined? this.#options.escCloser = true : options.escCloser;

            this.#options = options;

            // in case a close button is defined fo the dialog
            if (options.closer !== null) {

                const closerElement = dialogElement.querySelector(options.closer);
                
                this.#options.closer = options.closer;

                if (closerElement) {
                    this.#closer = closerElement;
                }
            }

            console.debug('AFTER LAUNCH ::: ', this.#dialogType, this.#launcher, this.#dialog, this.#closer);

        }

    }

    // Origin 1: https://24ways.org/2019/making-a-better-custom-select-element/
    // Origin 2: https://css-tricks.com/making-a-better-custom-select-element/
    // Code Pen: https://codepen.io/chriscoyier/pen/yLyyZrr
    // SETUP
    // /////////////////////////////////
    // assign names to things we'll need to use more than once

    const ariaSelect = (listItem) => {

      console.debug('ariaSelect', listItem);
      // console.log('listItem',listItem);
      const csSelector = listItem; // the input, svg and ul as a group
      console.log('csSelector', csSelector);
      const csInput = csSelector.querySelector('input');
      // console.log('csInput', csInput);
      const csList = csSelector.querySelector('ul');
      // console.log('csList', csList);
      const csOptions = csList.querySelectorAll('li.hoo-option');
      // console.log('csOptions', csOptions);
      csSelector.querySelectorAll('svg');
      // console.log('csIcons', csIcons);
      const csStatus = document.querySelector('#custom-select-status');
      // console.log('csStatus', csStatus);
      const aOptions = Array.from(csOptions);

      // when JS is loaded, set up our starting point
      // if JS fails to load, the custom select remains a plain text input
      // create and set start point for the state tracker
      let csState = "initial";
      // inform assistive tech (screen readers) of the names & roles of the elements in our group
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
      // set up a message to keep screen reader users informed of what the custom input is for/doing
      csStatus.textContent = csOptions.length + " options available. Arrow down to browse or start typing to filter.";
      toggleList('Shut');

      // EVENTS
      // /////////////////////////////////
      csSelector.addEventListener('click', function (e) {
        const currentFocus = findFocus();
        switch (csState) {
          case 'initial': // if state = initial, toggleOpen and set state to opened
            toggleList('Open');
            setState('opened');
            break
          case 'opened':
            // if state = opened and focus on input, toggleShut and set state to initial
            if (currentFocus === csInput) {
              toggleList('Shut');
              setState('initial');
            } else if (currentFocus.tagName === 'LI') {
              // if state = opened and focus on list, makeChoice, toggleShut and set state to closed
              makeChoice(currentFocus);
              toggleList('Shut');
              setState('closed');
            }
            break
          case 'filtered':
            // if state = filtered and focus on list, makeChoice and set state to closed
            if (currentFocus.tagName === 'LI') {
              makeChoice(currentFocus);
              toggleList('Shut');
              setState('closed');
            } // if state = filtered and focus on input, do nothing (wait for next user input)

            break
          case 'closed': // if state = closed, toggleOpen and set state to filtered? or opened?
            toggleList('Open');
            setState('filtered');
            break
        }
      });

      csSelector.addEventListener('keyup', function (e) {
        doKeyAction(e.key);
      });

      document.addEventListener('click', function (e) {
        if (!e.target.closest('.hoo-select')) {
          // click outside of the custom group
          toggleList('Shut');
          setState('initial');
        }
      });

      // FUNCTIONS 
      // /////////////////////////////////

      function toggleList(whichWay) {
        if (whichWay === 'Open') {
          csList.classList.remove('hidden-all');
          csSelector.setAttribute('aria-expanded', 'true');
        } else { // === 'Shut'
          csList.classList.add('hidden-all');
          csSelector.setAttribute('aria-expanded', 'false');
        }
      }

      function findFocus() {
        const focusPoint = document.activeElement;
        return focusPoint
      }

      function moveFocus(fromHere, toThere) {
        // grab the currently showing options, which might have been filtered
        const aCurrentOptions = aOptions.filter(function (option) {
          if (option.style.display === '') {
            return true
          }
        });
        // don't move if all options have been filtered out
        if (aCurrentOptions.length === 0) {
          return
        }
        if (toThere === 'input') {
          csInput.focus();
        }
        // possible start points
        switch (fromHere) {
          case csInput:
            if (toThere === 'forward') {
              aCurrentOptions[0].focus();
            } else if (toThere === 'back') {
              aCurrentOptions[aCurrentOptions.length - 1].focus();
            }
            break
          case csOptions[0]:
            if (toThere === 'forward') {
              aCurrentOptions[1].focus();
            } else if (toThere === 'back') {
              csInput.focus();
            }
            break
          case csOptions[csOptions.length - 1]:
            if (toThere === 'forward') {
              aCurrentOptions[0].focus();
            } else if (toThere === 'back') {
              aCurrentOptions[aCurrentOptions.length - 2].focus();
            }
            break
          default: // middle list or filtered items 
            const currentItem = findFocus();
            const whichOne = aCurrentOptions.indexOf(currentItem);
            if (toThere === 'forward') {
              const nextOne = aCurrentOptions[whichOne + 1];
              nextOne.focus();
            } else if (toThere === 'back' && whichOne > 0) {
              const previousOne = aCurrentOptions[whichOne - 1];
              previousOne.focus();
            } else { // if whichOne = 0
              csInput.focus();
            }
            break
        }
      }

      function doFilter() {
        const terms = csInput.value;
        const aFilteredOptions = aOptions.filter(function (option) {
          if (option.innerText.toUpperCase().startsWith(terms.toUpperCase())) {
            return true
          }
        });
        console.debug(aFilteredOptions);
        csOptions.forEach(option => option.style.display = "none");
        aFilteredOptions.forEach(function (option) {
          option.style.display = "";
        });
        setState('filtered');
        updateStatus(aFilteredOptions.length);
      }

      function updateStatus(howMany) {
        csStatus.textContent = howMany + " options available.";
      }

      function makeChoice(whichOption) {
        const optionValue = whichOption.dataset.value;
        csInput.value = optionValue;
        moveFocus(document.activeElement, 'input');
        // update aria-selected, if using
      }

      function setState(newState) {
        switch (newState) {
          case 'initial':
            csState = 'initial';
            break
          case 'opened':
            csState = 'opened';
            break
          case 'filtered':
            csState = 'filtered';
            break
          case 'closed':
            csState = 'closed';
        }
        // console.log({csState})
      }

      function doKeyAction(whichKey) {
        const currentFocus = findFocus();
        switch (whichKey) {
          case 'Enter':
            if (csState === 'initial') {
              // if state = initial, toggleOpen and set state to opened
              toggleList('Open');
              setState('opened');
            } else if (csState === 'opened' && currentFocus.tagName === 'LI') {
              // if state = opened and focus on list, makeChoice and set state to closed
              makeChoice(currentFocus);
              toggleList('Shut');
              setState('closed');
            } else if (csState === 'opened' && currentFocus === csInput) {
              // if state = opened and focus on input, close it
              toggleList('Shut');
              setState('closed');
            } else if (csState === 'filtered' && currentFocus.tagName === 'LI') {
              // if state = filtered and focus on list, makeChoice and set state to closed
              makeChoice(currentFocus);
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
            break

          case 'Escape':
            // if state = initial, do nothing
            // if state = opened or filtered, set state to initial
            // if state = closed, do nothing
            if (csState === 'opened' || csState === 'filtered') {
              toggleList('Shut');
              setState('initial');
            }
            break

          case 'ArrowDown':
            if (csState === 'initial' || csState === 'closed') {
              // if state = initial or closed, set state to opened and moveFocus to first
              toggleList('Open');
              moveFocus(csInput, 'forward');
              setState('opened');
            } else {
              // if state = opened and focus on input, moveFocus to first
              // if state = opened and focus on list, moveFocus to next/first
              // if state = filtered and focus on input, moveFocus to first
              // if state = filtered and focus on list, moveFocus to next/first
              toggleList('Open');
              moveFocus(currentFocus, 'forward');
            }
            break
          case 'ArrowUp':
            if (csState === 'initial' || csState === 'closed') {
              // if state = initial, set state to opened and moveFocus to last
              // if state = closed, set state to opened and moveFocus to last
              toggleList('Open');
              moveFocus(csInput, 'back');
              setState('opened');
            } else {
              // if state = opened and focus on input, moveFocus to last
              // if state = opened and focus on list, moveFocus to prev/last
              // if state = filtered and focus on input, moveFocus to last
              // if state = filtered and focus on list, moveFocus to prev/last
              moveFocus(currentFocus, 'back');
            }
            break
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
            break
        }
      }
    };

    function updateOptgroupVisibility() {
      const optgroups = document.querySelectorAll('.hoo-optgroup');

      optgroups.forEach(optgroup => {
        const options = optgroup.querySelectorAll('.hoo-option');
        const hasVisibleOption = Array.from(options).some(option =>
          option.style.display !== 'none'
        );

        // Hide or show the optgroup based on visibility of its options
        optgroup.style.display = hasVisibleOption ? '' : 'none';
      });
    }

    // Run initially to set visibility
    updateOptgroupVisibility();

    // Example: Attach to a mutation observer to handle dynamic changes
    const observer = new MutationObserver(() => {
      updateOptgroupVisibility();
    });

    if (document.querySelector('.hoo-select-dropdown')) {
      observer.observe(document.querySelector('.hoo-select-dropdown'), {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style'] // Monitor only style changes
      });
    }

    const collapseAndExpand = (event) => {

        const parentRow = event.target.closest("tr");
        // console.debug("Parent Row", parentRow);

        const parentTable = event.target.closest("table");
        // console.debug("Current Table", parentTable);

        const section = parentRow.dataset.sectionheader;
        // console.debug("Current Section", section);

        let query = null;

        if (section === "all") {
            query = "tr[data-section]";
        } else {
            query = 'tr[data-section=' + section + ']';
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

            let subSection = document.querySelectorAll("tbody tr.collapsable");

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

    };

    const initCollapsability = () => {

        const collapseTable = document.querySelectorAll('.hoo-table.is-collapsable');
        collapseTable.forEach(table => {

            const collapseRow = table.querySelectorAll('.collapsable');

            collapseRow.forEach(tableRow => {
                tableRow.addEventListener('click', collapseAndExpand);
            });

        });

    };

    const position = {
        "left": "left"};

    const stickyOffsetFixup = (parent, selector, offset) => {

        const innerDefinition = parent.querySelectorAll(selector);

        for (let j = 0; j < innerDefinition.length; j++) {

            const innerElement = innerDefinition[j];

            {
                innerElement.style[offset] = innerElement.offsetLeft + "px";
            }

        }

    };

    const initSticky = () => {

        const allStickyTables = document.querySelectorAll("table.sticky");

        for (let i = 0; i < allStickyTables.length; i++) {

            const stickyTable = allStickyTables[i];

            stickyOffsetFixup(stickyTable, "tr td.is-sticky.left", position.left);
            stickyOffsetFixup(stickyTable, "tr th.is-sticky.left", position.left);

        }
    };

    const initTables = () => {

        initCollapsability();
        initSticky();

    };

    const elemPivotBar = '.hoo-pivotbar';
    const elemPivotButton = '.hoo-button-pivot';
    const dropDownPivotButton = '.hoo-navitem-text';
    const stateIsActive = 'is-active';

    const changePivot = (event) => {
        event.preventDefault();

        console.log(event.target);

        let currentButton = event.target.classList.contains(elemPivotButton.substr(1)) ? event.target : event.target.closest(elemPivotButton);
        if (!currentButton) {
            currentButton = event.target.classList.contains(dropDownPivotButton.substr(1)) ? event.target : event.target.closest(dropDownPivotButton);
        }

        const currentPivotBar = event.target.closest(elemPivotBar);

        const allButtons = currentPivotBar.querySelectorAll(elemPivotButton);

        allButtons.forEach(item => {
            item.classList.remove(stateIsActive);
        });

        currentButton.classList.add(stateIsActive);
        
    };


    const initPivot = () => {

        // register event on regular buttons
        const pivotBarsButtons = document.querySelectorAll(`${elemPivotBar} ${elemPivotButton}`);
        pivotBarsButtons.forEach(pivotBarsButton => {
            pivotBarsButton.dataset.ref = pivotBarsButton.textContent.trim();
            pivotBarsButton.addEventListener('click', changePivot);
        });

    };

    /** MENU ITEM */

    const resetCurrentPage = (allNavItems) => {

        allNavItems.forEach((item) => {

            item.removeAttribute('aria-current');

        });

    };

    const handleNavItemClick = (event) => {

        let curClickItem = event.target;

        if (!curClickItem.classList.contains('hoo-buttonitem') && !curClickItem.classList.contains('hoo-icon')) {
            let curNavItem = curClickItem.closest('.hoo-navitem');

            if (curNavItem) {

                let curNav = curClickItem.closest('.hoo-nav');
                let allNavItems = curNav.querySelectorAll('* .hoo-navitem');

                resetCurrentPage(allNavItems);

                curNavItem.setAttribute('aria-current', true);

            }
        }

    };

    const handleIconClick = (event) => {

        let curIcon = event.target;
        let subMenu = curIcon.closest('.hoo-navitem');

        if (subMenu.getAttribute('aria-expanded') === 'true') {
            subMenu.setAttribute('aria-expanded', false);
        } else {
            subMenu.setAttribute('aria-expanded', true);
        }



    };

    const initMenu = () => {

        let navMenus = document.querySelectorAll('.hoo-nav');

        navMenus.forEach(nav => {

            let navItems = nav.querySelectorAll('.hoo-navitem');
            navItems.forEach(navItem => {

                navItem.addEventListener('click', handleNavItemClick);

            });

            let navIcons = nav.querySelectorAll('.hoo-buttonicon');
            navIcons.forEach(navIcon => {
                navIcon.addEventListener('click', handleIconClick);
            });

        });

    };

    class FileUploadHandler {
        _files = [];
        _fileLable = null;
        _fileControl = null;
        _originalFileControl = null;
        _infileOutput = null;

        dragOver = (event) => {
            event.preventDefault();
            this._fileLabel.classList.add('drag-over'); // Visual feedback
        }

        dragLeave = (event) => {
            event.preventDefault();
            this._fileLabel.classList.remove('drag-over');
        };

        dragDrop = (event) => {
            event.preventDefault();
            this._fileLabel.classList.remove('drag-over');

            const files = event.dataTransfer.files;
            if (files.length > 0) {
                console.log('Files dropped:', files);
                this.fileChangedEvent({ target: { files } });
            }
        }

        fileChangedEvent = (event) => {
            let files;
            console.debug('FileUploadHandler.fileChanged', event);

            if (event.target.files.length === 0) {
                this._infileOutput.innerHTML = "";
                return;
            }

            files = Array.from(event.target.files);

            const fileOutput = document.createElement('ul');
            fileOutput.classList.add('hoo-infile-list');
            console.debug('FileUploadHandler', files);
            files.forEach(file => {
                const fileItem = document.createElement('li');
                fileItem.innerText = file.name;
                fileOutput.appendChild(fileItem);
            });

            this._infileOutput.innerHTML = `<div class='hoo-infile-selection'>${this._infileOutput.title || 'Files Selected'}</div>${fileOutput.outerHTML}`;
        }

        constructor(htmlElement) {
            this._fileControl = htmlElement;
            console.debug('FileUploadHandler', this._fileControl);
            this._fileLabel = htmlElement.querySelector('.hoo-infile-label');
            this._fileLabel.addEventListener('dragover', this.dragOver);
            this._fileLabel.addEventListener('dragleave', this.dragLeave);
            this._fileLabel.addEventListener('drop', this.dragDrop);

            this._originalFileControl = this._fileControl.querySelector('.hoo-infile-context');
            console.debug('FileUploadHandler', this._originalFileControl, this._originalFileControl.getAttribute('aria-describedby'));
            this._originalFileControl.addEventListener('change', this.fileChangedEvent);

            let describedBy = this._originalFileControl.getAttribute('aria-describedby');
            console.debug('FileUploadHandler', describedBy, this._infileOutput, `#${describedBy.trim()}`);

            this._infileOutput = document.querySelector(`#${describedBy.trim()}`);
            console.debug('Infile Output:', this._infileOutput);
        }
    }

    const overflowItems = [];
    const defaultOffset = 40; // Default offset for overflow width

    /**
     * 
     * @param {*} targetWidth width of the '.hoo-overflow'
     * @param {*} children all child elements inside the '.hoo-overflow' container
     * @param {*} curContainer current '.hoo-overflow' container
     */
    const getOverflowItems = (targetWidth, children, curContainer, itemIndex) => {

        let curOverFlowItems = overflowItems[itemIndex].filter(item => {
            return item.overallWidth > targetWidth - defaultOffset;
        });

        let curItems = overflowItems[itemIndex].filter(item => {
            return item.overallWidth < targetWidth - defaultOffset;
        });

        // Flyout Button ellipses
        let overflowControl = curContainer.querySelector('.hoo-buttonicon-overflow .hoo-buttonflyout');

        if (overflowControl && overflowControl.children.length < curOverFlowItems.length) {

            for (let i = 0; i < curOverFlowItems.length; i++) {

                if (curContainer.querySelector("[data-ref=" + curOverFlowItems[i].ref + "]") !== null) {

                    let listItem = document.createElement('li');

                    // Moves the Element into a new list item with all Events attached
                    listItem.appendChild(
                        curContainer.querySelector("[data-ref=" + curOverFlowItems[i].ref + "]")
                    );

                    // Append list item
                    overflowControl.appendChild(listItem);

                }

            }
        }

        if(overflowControl.children.length !== 0){
        
            var buttonEnabled = overflowControl.closest('.hoo-buttonicon-overflow');
            
            if(buttonEnabled){
                buttonEnabled.classList.add('is-active');
            }
        
        } else {
            
            var buttonEnabled = overflowControl.closest('.hoo-buttonicon-overflow');
        
            if(buttonEnabled){
                buttonEnabled.classList.remove('is-active');
            }
        
        }

        if (overflowControl && overflowControl.children.length > curOverFlowItems.length) {

            for (let i = 0; i < curItems.length; i++) {

                if (overflowControl.querySelector("[data-ref=" + curItems[i].ref + "]") !== null) {

                    let overflowElement = overflowControl.querySelector("[data-ref=" + curItems[i].ref + "]");

                    // Move elements back from overflow menu
                    curContainer.appendChild(overflowElement);

                }

            }

        }


        /**
         * Cleanup left over <li> elements
         */
        for(let i = 0; i < overflowControl.children.length; i++){

            if(overflowControl.children[i].children.length === 0){

                overflowControl.children[i].remove();

            }

        }


    };


    /**
     * Handle all entries in the overflow menu
     */
    const entryHandler = (entry, index) => {

        let childButtons = entry.target.parentElement.querySelectorAll('.hoo-overflow > *');

        getOverflowItems(entry.target.parentElement.clientWidth, childButtons, entry.target, index);

    };

    /**
     * 
     * @param {ResizeObserverEntry} entries 
     * @param {ResizeObserver} observer 
     */
    const overflow = (entries, observer) => {

        // handle the overflow behaviour for all '.hoo.overflow' container
        entries.forEach((item, index) => {

            initOverflowElements(item.target.children, index);
            // handle the resizing:::
            entryHandler(item, index);

        });

    };

    /**
     * 
     * @param {HTMLCollection} children 
     * @param {number} index 
     */
    const initOverflowElements = (children, index) => {

        let overallWidth = 0;

        if (overflowItems.length <= index) {

            overflowItems[index] = [];

            for (let i = 0; i < children.length; i++) {

                overallWidth += children[i].clientWidth;

                if (!children[i].classList.contains("hoo-buttonicon-overflow")) {

                    let currentItem = {
                        chlld: children[i],
                        ref: "ref-" + index + "-" + i,
                        width: children[i].clientWidth,
                        overallWidth: overallWidth
                    };

                    children[i].dataset.ref = currentItem.ref;

                    overflowItems[index].push(currentItem);

                }

            }

        }

    };

    /// OnInit register [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) all overflow container
    const init = () => {

        let items = document.querySelectorAll('.hoo-overflow');

        if (items.length !== 0) {

            const ofObserver = new ResizeObserver(overflow);

            items.forEach(item => {

                ofObserver.observe(item);

            });

        }

    };

    const splitButtonReg = (classSelector, handleWith) => {

        let allSplitButtons = document.querySelectorAll(classSelector);

        allSplitButtons.forEach(element => {

            element.addEventListener('click', (event) => {
                handleWith(event);
            });

        });

    };

    const _btnFlyOut = (curSplitButton, parentElement) => {

        // console.log(curSplitButton)
        // set aria values
        let ariaPressed = curSplitButton.getAttribute('aria-pressed');
        if (ariaPressed === undefined) {
            curSplitButton.setAttribute('aria-pressed', true);
        } else {
            curSplitButton.setAttribute('aria-pressed', !ariaPressed);
        }

        parentElement.classList.toggle('show-flyout');

    };

    const buttonClick = (event) => {

        let curSplitButton = event.target;
        let parentElement = curSplitButton.parentElement;

        _btnFlyOut(curSplitButton, parentElement);

    };

    const splitButtonClick = (event) => {

        console.log("\nEVENT: splitButtonClick");
        let curSplitButton = event.target;
        let parentElement = curSplitButton.parentElement;

        _btnFlyOut(curSplitButton, parentElement);

    };

    const animateDeleteAndSlide = (event) => {


        let eventTarget = event.target;
        let animationClass = eventTarget.parentElement.dataset.animation;

        // Add class
        eventTarget.classList.add(animationClass);

        let computedStyles = window.getComputedStyle(eventTarget);
        let animationDuration = parseFloat(computedStyles.getPropertyValue('animation-duration')) * 1000;


        console.log(
            computedStyles,
            computedStyles.getPropertyValue('animation-duration'),
            animationDuration
            // parseFloat(computedStyles.getPropertyValue('animation-duration')),
            // parseInt("16s")
        );

        setTimeout(
            () => {
                eventTarget.remove();
            }, animationDuration
        );

    };

    const animateAddAndSlide = (event) => {

        let eventTarget = event.target;

        let animationClass = eventTarget.parentElement.dataset.animation;

        // Add class
        eventTarget.classList.add(animationClass);

        let newDomElement = document.importNode(eventTarget, true);
        newDomElement.classList.add(animationClass);

        let computedStyles = window.getComputedStyle(newDomElement);
        let animationDuration = parseFloat(computedStyles.getPropertyValue('animation-duration')) * 1000;


        event.target.parentElement.appendChild(newDomElement);

        newDomElement.addEventListener('click', animateAddAndSlide);

        console.log(
            computedStyles,
            computedStyles.getPropertyValue('animation-duration'),
            animationDuration
            // parseFloat(computedStyles.getPropertyValue('animation-duration')),
            // parseInt("16s")
        );

        setTimeout(
            () => {
                newDomElement.classList.remove('anim-add-slide');
            }, animationDuration
        );

    };

    const registerAnimation = (classname, handleWith) => {

        let animAtionBlocks = document.querySelectorAll(classname + ' > .sg-anim-block');

        animAtionBlocks.forEach(element => {
            element.addEventListener('click', handleWith);
        });

    };

    const registerInputHandler = (classname) => {
        const allFileHandler = document.querySelectorAll(classname);
        allFileHandler.forEach(fileHandler => {
            new FileUploadHandler(fileHandler);
        });
    };

    const registerAriaSelect = () => {

        let selects = document.querySelectorAll('.hoo-select');

        console.debug('ALL SELECTED', selects);

        if (selects) {
            selects.forEach((item, idx) => {
                console.debug(item, idx);
                ariaSelect(item);
            });
        }
    };

    const registerDialog = () => {

        try{
            let dialog1 = new HOODialog('#btn-dialog', '#myDialog', HOODialog.dialogType.DIALOG, { closer: '#closer-dlg' });
            let dialog2 = new HOODialog('#btn-modal-dialog', '#myDialog-1', HOODialog.dialogType.MODAL, { closer: '#closer-mdl' });
        } catch (e) {
        }

    };


    const afterLoaded = () => {

        registerDialog();

        splitButtonReg('.hoo-buttonsplit > .hoo-buttonsplit-carret', splitButtonClick);
        splitButtonReg('.hoo-buttonsplit-primary > .hoo-buttonsplit-carret', splitButtonClick);
        splitButtonReg('button.hoo-buttonicon-overflow', buttonClick);

        splitButtonReg('button.hoo-buttoncmd', buttonClick);
        splitButtonReg('button.hoo-buttoncmdbar', buttonClick);
        splitButtonReg('button.hoo-buttonicon-flyout', buttonClick);
        splitButtonReg('button.hoo-buttoncontext', buttonClick);


        registerAnimation('.anim-deleteNslide', animateDeleteAndSlide);
        registerAnimation('.anim-addNslide', animateAddAndSlide);
        registerInputHandler('.hoo-input-file');

        // registerDialog();
        registerAriaSelect();

        /** Init Table Helper */
        initTables();
        /** Init Pivot Bars */
        initPivot();
        /** Init Menu Bars */
        initMenu();

        init();

        // new InputMask();

        setTimeout(() => {
            let tmpHidden = document.querySelectorAll('.tmp-hidden');

            console.log(tmpHidden);

            tmpHidden.forEach(item => {
                item.addEventListener("focus", (event) => {

                    event.target.classList.remove('.tmp-hidden');

                    console.log(tmpHidden);

                });
            });
        }, 1000);


    };

    window.onload = afterLoaded();

}));
