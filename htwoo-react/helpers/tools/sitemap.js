const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

// Read Storybook's index.json from docs folder
const indexPath = path.join(__dirname, '../../../docs/htwoo-react/index.json');
const indexJson = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));

// Create sitemap stream
const stream = new SitemapStream({ hostname: 'https://htwoo.io/htwoo-react/' });

// Add URLs from Storybook entries
Object.values(indexJson.entries).forEach(entry => {
    // Convert entry id to Storybook URL format: ?path=/story/entry-id or ?path=/docs/entry-id
    const pathType = entry.type === 'docs' ? 'docs' : 'story';
    const url = `?path=/${pathType}/${entry.id}`;
    stream.write({ url, changefreq: 'weekly', priority: 0.5 });
});

stream.end();

// Write sitemap to docs folder
streamToPromise(stream)
    .then((sm) => {
        fs.writeFileSync(path.join(__dirname, '../../../docs/htwoo-react/sitemap.xml'), sm);
        console.log('Storybook sitemap generated successfully!');
    })
    .catch(console.error);
