const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

// File paths
const filepaths = [
    './public/patterns//atoms-avatar-avatar-16/atoms-avatar-avatar-16.rendered.html',
    './public/patterns//atoms-avatar-avatar-16/atoms-avatar-avatar-16.markup-only.html',
    './public/patterns//organism-dialogs-dialog-sidebar-right/organism-dialogs-dialog-sidebar-right.markup-only.html',
    './public/patterns//organism-dialogs-dialog-sidebar-right/organism-dialogs-dialog-sidebar-right.rendered.html',
    './public/patterns//organism-quick-links-grid-quick-links-grid-grid/organism-quick-links-grid-quick-links-grid-grid.rendered.html',
    './public/patterns//organism-quick-links-grid-quick-links-grid-grid/organism-quick-links-grid-quick-links-grid-grid.markup-only.html',
    './public/patterns//molecules-media/index.html',
    './public/patterns//molecules-persona-persona-24/molecules-persona-persona-24.markup-only.html',
    './public/patterns//molecules-persona-persona-24/molecules-persona-persona-24.rendered.html'
];

// Function to convert filename to SEO sitename
function filenameToSitename(filename) {
    const basename = path.basename(filename, path.extname(filename)); // Get basename without extension
    const queryParam = 'q=fixed_value'; // Fixed value for query parameter
    return `${basename}?${queryParam}`;
}

// Create sitemap stream
const stream = new SitemapStream({ hostname: 'https://example.com' }); // Replace 'example.com' with your actual domain

// Add URLs to sitemap stream
filepaths.forEach(filepath => {
    const sitename = filenameToSitename(filepath);
    stream.write({ url: sitename, changefreq: 'daily', priority: 0.5 });
});
stream.end();

// Write sitemap to file
streamToPromise(stream)
    .then((sm) => { 
        fs.writeFileSync('sitemap.xml', sm);
    })
  .catch (console.error);



console.log('Sitemap generated successfully!');
