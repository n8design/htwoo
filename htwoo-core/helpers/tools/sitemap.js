const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');


// Function to convert filename to SEO sitename
function filenameToSitename(filename) {
    const queryParam = `p=${filename}`; // Fixed value for query parameter
    return `?${queryParam}`;
}

let files = fs.readdirSync(path.join(process.cwd(), 'public/patterns'), { recursive: true });

if (files) {
    files = files.filter(file => file.endsWith('.rendered.html'));
    let fileBaseName = files.map(file => path.basename(file, '.rendered.html'));
    console.debug(fileBaseName);
    console.debug('Generating sitemaps...', fileBaseName);


    // Create sitemap stream
    const stream = new SitemapStream({ hostname: 'https://lab.n8d.studio/htwoo/htwoo-core/' }); // Replace 'example.com' with your actual domain

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
        .catch(console.error);



    console.log('Sitemap generated successfully!');

}




