'use strict';

const fs = require('fs');
const templates = require('./templates');
const deleteKeys = require('./deleteKeys');

// ToDo: Parameterise this!
// deleteKeys(template, process.argv[2]);
Object.keys(templates).forEach(key => {
    templates[key] = deleteKeys(templates[key], ['examples', 'invalidExamples']);
});

fs.mkdir('./dist', {recursive: true}, makeDirErr => {
    if (makeDirErr) {
        throw makeDirErr;
    }

    fs.writeFile('./dist/template.json', JSON.stringify(templates), {}, writeFileErr => {
        if (writeFileErr) {
            throw writeFileErr;
        }
    });
});
