export default {
    input: {
        path: 'src',
    },
    output: {
        path: 'public',
    },
    scss: {
        includePaths: ['./node_modules'],
    },
    html: {
        disabled: true
    },
    hotreload: {
        port: 8080,
        excludeExtensions: ['.map', '.d.ts', '.html', '.htm', '.hbs']
    },
    watch: {
        paths: ['src'],
        ignored: [
            '**/node_modules/**',
            '**/.*',
            '**/*.hbs',
            '**/*.html'
        ]
    }
};