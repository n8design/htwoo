let overflowItems = [];

const getOverflowItems = (targetWidth, children, curContainer) => {

    let overallWidth = 32;

    // console.log("CHILD Count:::", children.length);

    // console.log(">>>>>>>>>>>>>>> ---------- <<<<<<<<<<<<<<<<<");

    let overflowItems = {
        items: [],
        firstIndex: null
    }

    for (let i = 0; i < children.length; i++) {

        overallWidth += children[i].clientWidth;
        // console.log("Overall Width ::: ", overallWidth, targetWidth, overallWidth > targetWidth);

        if (overallWidth >= targetWidth) {

            // console.log("Overall Happened ::: ", overallWidth, targetWidth);
            if (overflowItems.firstIndex === null) {
                overflowItems.firstIndex = i;
            }

            overflowItems.items.push(children[i])
            children[i].classList.add('is-overflow-item');
            // console.log(" OVERFLOW ::: >>>");
        } else {
            children[i].classList.remove('is-overflow-item');
        }


    }

    // console.log(overflowItems);
    let items = curContainer.parentElement.querySelectorAll('.hoo-buttonflyout li');

    items.forEach((item, index) => {

        // console.log(overflowItems.firstIndex, index);

        if (index < overflowItems.firstIndex) {

            item.style.display = "none"

        } else {

            item.style = null

        }

    });

}

const entryHandler = (entry, index) => {

    const childButtons = entry.target.querySelectorAll('.hoo-button-pivot');

    // console.log("Entry        ::: ", entry.target.querySelectorAll('.hoo-button-pivot'));
    // console.log("Client Width ::: ", entry.target.clientWidth);


    getOverflowItems(entry.target.parentElement.clientWidth, childButtons, entry.target);


}

const overflow = (entries, observer) => {

    // console.log("Entries  :::", entries);
    // console.log("Observer :::", observer);

    entries.forEach(entryHandler);

}

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

// const entryHandler = (entry, index) => {

//     let targetElements = getOverflowItems(entry.target.clientWidth, entry.target.children),
//         children = entry.target.children;

//     if (overflowItems[index] && overflowItems[index].hiddenElementCount != targetElements.length) {

//         if (targetElements.length > overflowItems[index].hiddenElementCount) {

//             targetElements.forEach(item => {
//                 // item.style.visibility = "hidden";
//                 // item.classList.add("is-overflow-item");

//             })

//         }

//         if (targetElements.length < overflowItems[index].hiddenElementCount) {

//             for (let childIndex = 0; childIndex < children.length; childIndex++) {

//                 // children[childIndex].classList.add("is-overflow-item")
//             }

//             targetElements.forEach(item => {
//                 // item.style.visibility = "hidden";
//                 // item.classList.add("is-overflow-item");
//             })

//         }


//     }

//     overflowItems[index] = {
//         clientWidth: entry.target.clientWidth,
//         hiddenElements: targetElements,
//         hiddenElementCount: targetElements.length
//     }

//     console.log(overflowItems);

// }
// const entryHandler = (entry, index) => {

//     let targetElements = getOverflowItems(entry.target.clientWidth, entry.target.children),
//         children = entry.target.children;

//     if (overflowItems[index] && overflowItems[index].hiddenElementCount != targetElements.length) {

//         if (targetElements.length > overflowItems[index].hiddenElementCount) {

//             targetElements.forEach(item => {
//                 // item.style.visibility = "hidden";
//                 // item.classList.add("is-overflow-item");

//             })

//         }

//         if (targetElements.length < overflowItems[index].hiddenElementCount) {

//             for (let childIndex = 0; childIndex < children.length; childIndex++) {

//                 // children[childIndex].classList.add("is-overflow-item")
//             }

//             targetElements.forEach(item => {
//                 // item.style.visibility = "hidden";
//                 // item.classList.add("is-overflow-item");
//             })

//         }


//     }

//     overflowItems[index] = {
//         clientWidth: entry.target.clientWidth,
//         hiddenElements: targetElements,
//         hiddenElementCount: targetElements.length
//     }

//     console.log(overflowItems);

// }


// var overflowItems = null;

// const sumInnerElements = (items, containerWidth) => {

//     let overallWidth = 0;
//     let overflowElements = {};
//     overflowElements.children = [];



//     for (let i = 0; i < items.length; i++) {

//         let curItem = items[i];
//         overallWidth += curItem.clientWidth;

//         overflowElements.children.push({
//             target: items[i],
//             offset: overallWidth,
//             width: items[i].clientWidth
//         })

//     }

//     overflowElements.width = overallWidth;

//     return overflowElements;
// }

// const ofFunction = (entries, observer) => {
//     entries.forEach(element => {
//         const curTarget = element.target;

//         const boundingBox = curTarget.getBoundingClientRect();
//         // console.log(boundingBox);
//         // console.log(curTarget.clientWidth);

//         let allChildElements = sumInnerElements(curTarget.children, boundingBox.width);

//         // console.log(allChildElements);

//         let allOverflowItems = allChildElements.children.filter(item => {
//             return item.offset > boundingBox.width;
//         });


//         this.overflowItems === null ? allOverflowItems : ;

//         window.requestAnimationFrame(() => {
//             allChildElements.children.forEach(item => {

//                 if (item.target.style.display !== null) {
//                     console.log(item, 'Assign display NULL');
//                     item.target.style = null;
//                 }
//             })

//             allOverflowItems.forEach(item => {
//                 if (item.target.style.display !== "none") {
//                     console.log(item, 'Assign display >NONE<');
//                     item.target.style.display = "none";
//                 }
//             });
//         })


//     });
// }

// const ofObserver = new ResizeObserver(ofFunction);

// var allOverflows = document.querySelectorAll('.has-overflow');

// console.log(allOverflows);

// allOverflows.forEach(item => {
//     setTimeout(() => {
//         ofObserver.observe(item, {
//             subtree: true,
//             childList: true
//         });
//     }, 1000)
// })