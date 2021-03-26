const collapseAndExpand = (event) => {
    console.debug(event);

    const parentRow = event.target.closest("tr");
    console.debug("Parent Row", parentRow);

    const parentTable = event.target.closest("table");
    console.debug("Current Table", parentTable);

    const section = parentRow.dataset.sectionheader;
    console.debug("Current Section", section);

    let query = null;

    if (section === "all") {
        query = "tr[data-section]";
    } else {
        query = 'tr[data-section=' + section + ']';
    }

    const sectionRows = parentTable.querySelectorAll(query);
    console.debug("Section Row", sectionRows);

    for (let i = 0; i < sectionRows.length; i++) {

        console.debug(sectionRows[i]);
        console.debug(sectionRows[i].classList);

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
            console.log(' TRUUUUUUUEEE ');

            for (let i = 0; i < subSection.length; i++) {

                const currentItem = subSection[i];

                currentItem.setAttribute('aria-hidden', 'false');
                currentItem.setAttribute('aria-expanded', 'true');
                
            }
            
        } else {
            console.log(' FALSE ');

            for (let i = 0; i < subSection.length; i++) {

                const currentItem = subSection[i];

                currentItem.setAttribute('aria-hidden', 'true');
                currentItem.setAttribute('aria-expanded', 'false');   
                
            }

        }

    }

}

export const init = () => {

    const collapseTable = document.querySelectorAll('.lqd-table.is-collapsable');
    collapseTable.forEach(table => {

        console.debug("Collapse Table:", collapseTable);

        const collapseRow = table.querySelectorAll('.collapsable');

        console.debug("Collapse Row", collapseRow);

        collapseRow.forEach(tableRow => {
            tableRow.addEventListener('click', collapseAndExpand);
        })
    })

}