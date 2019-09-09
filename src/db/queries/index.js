
const fs = require('fs');
const path = require('path');

const scripts = {};

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach( f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? 
        walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
};

walkDir(__dirname, function(filePath) {
    if(path.basename(filePath) !== "index.js") {
        const scriptContents = fs.readFileSync(filePath, 'utf8');
        const scriptName = path.basename(filePath).split('.')[0];
        scripts[scriptName] = scriptContents;
    }
});

module.exports = scripts;