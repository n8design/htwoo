// require 

// const baseWatch = (cb) =>{

//     watch(['src/**/*.scss'], styles);
//     watch(['src/**/*.js'], series(scripts, webpack));

//     watch(['config/**.json']).on('change', ()=>{
//         server.reload()
//     })

//     watch([`${config.patternDir}**/*.hbs`])
//         .on('add', (path) => {
//             configGenerator.added(path);
//             compileTemplates().then(() => {
//                 server.reload();
//             })

//         })
//         .on('change', (path) => {
//             configGenerator.changed(path);
//             compileTemplates().then(() => {
//                 server.reload();
//             })
//         })
//         .on('unlink', (path) => {
//             configGenerator.deleted(path);
//             compileTemplates().then(() => {
//                 server.reload();
//             })
//         });

//     cb();

// }