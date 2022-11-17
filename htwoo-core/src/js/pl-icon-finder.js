let filledIcons = document.getElementById('icons-filled');
let regularIcons = document.getElementById('icons-regular');
let iconGrid = document.querySelector('.pl-icongrid');

console.debug(filledIcons);
console.debug(regularIcons);

let files = document.querySelectorAll('.object-embedd');
console.debug(files);

let toggle = document.getElementsByName('pl-overview-toggle');
if (toggle.length > 0) {
    toggle[0].addEventListener('change', (evt) => {
        console.debug(evt, evt.target.checked);
        if (evt.target.checked) {

            let iconsFilled = document.querySelectorAll("[data-icontype='filled']");
            let iconsRegular = document.querySelectorAll("[data-icontype='regular']");
            
            for (let icon of iconsFilled) {
                icon.classList.remove('hidden');
            }
            
            for (let icon of iconsRegular) {
                icon.classList.add('hidden');
            }

        } else {

            let iconsFilled = document.querySelectorAll("[data-icontype='filled']");
            let iconsRegular = document.querySelectorAll("[data-icontype='regular']");
            
            for (let icon of iconsFilled) {
                icon.classList.add('hidden');
            }
            
            for (let icon of iconsRegular) {
                icon.classList.remove('hidden');
            }

        }
    })
}

/** Init - Loading **/
(async () => {

    const t0 = performance.now();
    const allUrls = [];

    for (const file of files) {
        console.debug(file.href);
        allUrls.push(file.href);
    }

    const texts = await Promise.all(allUrls.map(async (url) => {

        const resp = await fetch(url, {
            cache: 'force-cache'
        });

        return resp.text();

    }))

    const docFragment = new DocumentFragment();

    texts.forEach((text, index) => {

        const DOMparser = new DOMParser();
        const doc = DOMparser.parseFromString(text, 'text/html');

        const svgSymbols = doc.body.getElementsByTagName('symbol');
        const svgRoot = doc.body.querySelector('svg');
        const svgType = svgRoot.getAttribute('data-icontype')

        for (const svgSymbol of svgSymbols) {

            let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

            svg.innerHTML = svgSymbol.innerHTML;
            svg.id = svgSymbol.id;

            if (svgSymbol.hasAttribute('viewBox')) {

                svg.setAttribute('viewBox', svgSymbol.getAttribute('viewBox'));

            }

            svg.classList.add('pl-svg-symbol');
            svg.setAttribute('data-icontype', svgType);

            if (svgType === 'filled') {
                svg.classList.add('hidden');
            }

            docFragment.appendChild(svg);

        };

    });

    // console.debug(docFragment);

    iconGrid.appendChild(docFragment);

    const t1 = performance.now();
    console.debug(`Call to doSomething took ${t1 - t0} milliseconds.`);

})();


// filledElement.document.addEventListener('readystatechange', (event) => {
//     console.debug(event);
// });

// const ready = (event) => {
//     console.debug(
//         event.readyState, 
//         filledElement.contentDocument,
//         filledElement.contentDocument.innerHTML
//     );
// };

// // document.addEventListener('readystatechange', ready);

// document.addEventListener('readystatechange', function(ev) {
//     console.log(document.readyState)
// });

// console.debug(window.document.readyState);

// let allIconsFilled = document.getElementsByTagName('symbol');
// let fragmentFilled = document.createDocumentFragment();

// for (let item in allIconsFilled) {

//     // console.debug(allIconsFilled[item].id);

//     let currentIcon = allIconsFilled[item];
//     // console.debug(currentIcon.getAttribute('viewBox'));

//     let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

//     try {

//         svg.setAttribute(
//             'viewBox',
//             currentIcon.getAttribute('viewBox')
//         );


//     } catch {


//         console.error(`No baseVal defined: ${currentIcon.id}`)

//     }

//     svg.innerHTML = currentIcon.innerHTML;
//     svg.id = currentIcon.id;

//     fragmentFilled.appendChild(svg);

//     // console.debug(svg);

// }

// let plIcongrid = document.querySelector('.pl-icongrid');
// console.debug(plIcongrid);
// plIcongrid.appendChild(fragmentFilled);