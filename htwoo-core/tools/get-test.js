const fs = require('fs');
const path = require('path');
const patterns = require(path.join(__dirname, '../public/styleguide/data/patternlab-data.cjs'));

const allPatterns = [];

const getItems = (name, items, group) => {

    items.forEach(item => {

        if (group == 'items') {

            // console.debug(name, item.patternName);

            allPatterns.push({
                name: `${name}.${item.patternName.replace(/\//ig, '')}`,
                path: item.patternPath
            })

        }

        if (group == 'group') {

            if (item.patternSubgroupItems.length !== 0) {

                getItems(`${name}.${item.patternSubgroupUC}`, item.patternSubgroupItems, 'subgroup');

            }

        }

        if (group == 'subgroup') {

            // console.log('debug', name, item);
            allPatterns.push({
                name: `${name}.${item.patternName.replace(/\//ig, '')}`,
                path: item.patternPath
            })

        }

    });

};

const getPatterns = () => {


    const nodes = patterns.navItems.patternGroups;
    nodes.forEach((patternGroups) => {

        let name = patternGroups.patternGroupUC;
        let patternItems = patternGroups.patternItems;
        let patternGroup = patternGroups.patternGroupItems;

        if (patternItems && patternItems.length > 0) {
            getItems(name, patternItems, 'items');
        }
        if (patternGroup && patternGroup.length > 0) {
            getItems(name, patternGroup, 'group');
        }

    })

    return allPatterns.filter(item =>{
        return item.path.indexOf('index.html') === -1;
    }).filter(item => {

        return (item.path.indexOf('Pages') === -1 && item.path.indexOf('Templates')  === -1)

    });

};

exports.getPatterns = getPatterns;