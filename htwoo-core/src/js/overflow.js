const overflowItems = [];
const defaultOffset = 32; // Default offset for overflow width

const getOverflowItems = (targetWidth, children, curContainer) => {

    let overallWidth = defaultOffset,
        parentContainer = curContainer.parentElement;

    let overflowItems = {
        items: [],
        firstIndex: null,
        realWidth: null
    }

    for (let i = 0; i < children.length; i++) {

        overallWidth += children[i].clientWidth;

        if (overallWidth >= targetWidth) {

            if (overflowItems.firstIndex === null) {
                overflowItems.firstIndex = i;
            }

            overflowItems.items.push(children[i])

            children[i].classList.add('is-overflow-item');
            // Accessibility
            children[i].setAttribute('aria-hidden', true);
            // console.log(" OVERFLOW ::: >>>");
        } else {
            overflowItems.realWidth = overallWidth;
            children[i].classList.remove('is-overflow-item');
            children[i].removeAttribute('aria-hidden');
        }


    }

    let overflowButton = parentContainer.querySelector("div.hoo-buttonicon-overflow");

    if (overflowItems.firstIndex === null) {

        overflowButton.classList.add('is-hidden');

    } else {

        overflowButton.classList.remove('is-hidden');

    }

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

    const childButtons = entry.target.querySelectorAll('.hoo-button-pivot');

    getOverflowItems(entry.target.parentElement.clientWidth, childButtons, entry.target);

}

const overflow = (entries, observer) => {

    entries.forEach(entryHandler);

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
