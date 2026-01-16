const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');


// Function to convert file path to SEO-friendly URL
// Links to .rendered.html files for SEO (bots see full HTML content)
function filenameToSitename(filePath) {
    // filePath is like: atoms-avatar-avatar/atoms-avatar-avatar.rendered.html
    // Output: patterns/atoms-avatar-avatar/atoms-avatar-avatar.rendered.html
    return `patterns/${filePath}`;
}

// Try public/patterns first (during build), fall back to docs (for standalone run)
let patternsDir = path.join(process.cwd(), 'public/patterns');
if (!fs.existsSync(patternsDir)) {
    patternsDir = path.join(process.cwd(), '../docs/htwoo-core/patterns');
}

let files = fs.readdirSync(patternsDir, { recursive: true });

if (files) {
    files = files.filter(file => file.endsWith('.rendered.html'));
    // console.debug('Generating sitemaps...', files);


    // Create sitemap stream
    const stream = new SitemapStream({ hostname: 'https://htwoo.io/htwoo-core/' });

    // Add URLs to sitemap stream - use full path to .rendered.html files
    files.forEach(filePath => {
        const sitename = filenameToSitename(filePath);
        stream.write({ url: sitename, changefreq: 'weekly', priority: 0.5 });
    });
    stream.end();

    // Determine output path
    let outputPath = '../docs/htwoo-core/sitemap.xml';
    if (!fs.existsSync(path.dirname(path.join(process.cwd(), outputPath)))) {
        outputPath = path.join(process.cwd(), '../docs/htwoo-core/sitemap.xml');
    }

    // Write sitemap to file
    streamToPromise(stream)
        .then((sm) => {
            fs.writeFileSync(outputPath, sm);
        })
        .catch(console.error);



    console.log('Sitemap generated successfully!');

}




