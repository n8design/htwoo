const overflowItems = [];
const defaultOffset = 40; // Default offset for overflow width

/**
 * 
 * @param {*} targetWidth width of the '.hoo-overflow'
 * @param {*} children all child elements inside the '.hoo-overflow' container
 * @param {*} curContainer current '.hoo-overflow' container
 */
const getOverflowItems = (targetWidth, children, curContainer) => {

    let overallWidth = defaultOffset,
        parentContainer = curContainer.parentElement;

    let overflowItems = {
        items: [],
        firstIndex: null,
        realWidth: null
    }

    // Loop over all child elements and try to find where the first overflow happen
    for (let i = 0; i < children.length; i++) {

        overallWidth += children[i].clientWidth;

        if (overallWidth >= targetWidth) {

            if (overflowItems.firstIndex === null) {
                overflowItems.firstIndex = i;
            }

            overflowItems.items.push(children[i])

            // Hide Element
            children[i].classList.add('is-overflow-item');
            // Accessibility
            children[i].setAttribute('aria-hidden', true);
        } else {
            overflowItems.realWidth = overallWidth;
            children[i].classList.remove('is-overflow-item');
            children[i].removeAttribute('aria-hidden');
        }

    }

    // Set the right element in the overflow container drop down
    let overflowButton = parentContainer.querySelector("div.hoo-buttonicon-overflow");

    if (overflowItems.firstIndex === null) {

        overflowButton.classList.add('is-hidden');

    } else {

        overflowButton.classList.remove('is-hidden');

    }

    // Show and hide all elements that are hidden in the '.hoo-overflow' container
    let items = parentContainer.querySelectorAll('.hoo-buttonflyout li');

    items.forEach((item, index) => {

        if (index < overflowItems.firstIndex) {

            item.style.display = "none"

        } else {

            item.style = null

        }

    });

}

const entryHandler = (entry, index) => {

    // query for all pivot buttons
    console.log(
        entry.target,
        entry.target.parentElement,
        entry.target.parentElement.querySelectorAll('.hoo-overflow'),
        entry.target.parentElement.querySelectorAll('.hoo-overflow > *'),
        entry.target.querySelectorAll('.hoo-overflow > div')
        );
    let childButtons = entry.target.parentElement.querySelectorAll('.hoo-overflow > *');
    console.log('Child Button ::: ', childButtons);
    getOverflowItems(entry.target.parentElement.clientWidth, childButtons, entry.target);


    

}

const overflow = (entries, observer) => {

    // handle the overflow behaviour for all '.hoo.overflow' container
    entries.forEach(entryHandler);

}

/// OnInit register [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) all overflow container
export const init = () => {

    let items = document.querySelectorAll('.hoo-overflow');
    console.log(items);

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
