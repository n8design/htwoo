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

    let overflowControl = curContainer.querySelector('.hoo-buttonicon-overflow .hoo-buttonflyout');

    if (overflowControl && overflowControl.children.length < curOverFlowItems.length) {

        for (let i = 0; i < curOverFlowItems.length; i++) {

            if (curContainer.querySelector("[data-ref=" + curOverFlowItems[i].ref + "]") !== null) {

                let listItem = document.createElement('li');

                listItem.appendChild(
                    curContainer.querySelector("[data-ref=" + curOverFlowItems[i].ref + "]")
                );
                overflowControl.appendChild(listItem);

            }

        }
    }

    if(overflowControl.children.length !== 0){
    
        var buttonEnabled = overflowControl.closest('.hoo-buttonicon-overflow');
        
        console.log("IS ACTIVE", overflowItems, buttonEnabled);
    
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


}


/**
 * Handle all entries in the overflow menu
 */
const entryHandler = (entry, index) => {

    let childButtons = entry.target.parentElement.querySelectorAll('.hoo-overflow > *');

    getOverflowItems(entry.target.parentElement.clientWidth, childButtons, entry.target, index);

}

/**
 * 
 * @param {ResizeObserverEntry} entries 
 * @param {ResizeObserver} observer 
 */
const overflow = (entries, observer) => {

    // handle the overflow behaviour for all '.hoo.overflow' container
    entries.forEach((item, index) => {

        initOverflowElements(item.target.children, index);
        entryHandler(item, index);

    });

}

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
                }

                children[i].dataset.ref = currentItem.ref;

                overflowItems[index].push(currentItem);

            }

        }

    }

}

/// OnInit register [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) all overflow container
export const init = () => {

    let items = document.querySelectorAll('.hoo-overflow');

    if (items.length !== 0) {

        const ofObserver = new ResizeObserver(overflow);

        items.forEach(item => {

            ofObserver.observe(item, {
                subtree: true,
                childList: true
            });

        })

    }

}