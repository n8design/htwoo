const supportedThemes = [
    "blue",
    "gray",
    "purple",
    "darkblue",
    "green",
    "red",
    "darkyellow",
    "orange",
    "teal",
    "teams.light",
    "teams.hc",
    "teams.dark"
]

const localStoredThemes = {};

const convertTheme = (data, themeName) => {

    if (typeof data === 'object') {

        const keys = Object.keys(data);

        const themeVars = []
        for (let key in keys) {
            themeVars.push(`--${keys[key]}:${data[keys[key]]}`);
        }

        const themeCSSVars = themeVars.join(';');

        localStoredThemes[themeName] = themeCSSVars;

        localStorage.setItem('availableThemes', JSON.stringify(localStoredThemes));
    }

    return data;
}

const applyTheme = (themename) => {

    const allThemes = JSON.parse(localStorage.getItem('availableThemes'));

    const currentTheme = allThemes[themename];

    // pattern example check
    const pec = document.querySelectorAll('.pl-js-pattern-example');

    if (pec.length !== 0) {
        document.head.insertAdjacentHTML('beforeend',
            `<style>
    .pl-c-pattern{
        ${currentTheme}';
        color: var(--bodyText);
        background-color: var(--bodyBackground);
    }
    .pl-js-pattern-example{
        color: var(--bodyText);
        padding: 0.5rem 0 1.35rem;
        background-color: var(--bodyBackground);
    }
    .pl-c-pattern__header{
        background-color: white;
    }
</style>`);
        // document.body.style = ;
    } else {
        document.body.style = currentTheme + ';color: var(--bodyText);';
    }

}

const loadThemes = async () => {

    for (let theme in supportedThemes)
        // Load Teams Theme
        await fetch(`../../js/themeswitch/themes/${supportedThemes[theme]}.theme.json`).then(response => {

            return response.json();

        }).then(data => {
            return convertTheme(data, supportedThemes[theme])
        });

}

if (localStorage.getItem('availableThemes') === null) {

    await loadThemes();

}

if (!sessionStorage.getItem('currentTheme')) {

    sessionStorage.setItem('currentTheme', 'teal')
    applyTheme(sessionStorage.getItem('currentTheme'));

} else {

    applyTheme(sessionStorage.getItem('currentTheme'));

}

// Listen for Storage changes
window.addEventListener('storage', (event) =>{
    if(event.key === 'currentTheme'){
        applyTheme(event.newValue);
    }
})