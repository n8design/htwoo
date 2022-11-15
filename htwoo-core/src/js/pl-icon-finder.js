console.debug('Hello world');
let filledIcons = document.getElementById('icons-filled');
let regularIcons = document.getElementById('icons-regular');

console.debug(filledIcons);
console.debug(regularIcons);

let allIconsFilled = document.getElementsByTagName('symbol');
let fragmentFilled = document.createDocumentFragment();

for (let item in allIconsFilled) {

    // console.debug(allIconsFilled[item].id);

    let currentIcon = allIconsFilled[item];
    // console.debug(currentIcon.getAttribute('viewBox'));

    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    try {

        svg.setAttribute(
            'viewBox',
            currentIcon.getAttribute('viewBox')
        );


    } catch {


        console.error(`No baseVal defined: ${currentIcon.id}`)

    }

    svg.innerHTML = currentIcon.innerHTML;
    svg.id = currentIcon.id;

    fragmentFilled.appendChild(svg);
    
    // console.debug(svg);

}

let plIcongrid = document.querySelector('.pl-icongrid');
console.debug(plIcongrid);
plIcongrid.appendChild(fragmentFilled);