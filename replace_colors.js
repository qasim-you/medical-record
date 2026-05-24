const fs = require('fs');
const path = require('path');

const directoriesToScan = ['client/app', 'client/components'];

function replaceColors(content) {
    let newContent = content;

    // Indigo replacements (Primary)
    newContent = newContent.replace(/hover:bg-indigo-[0-9]{3}(\/[0-9]+)?/g, 'hover:bg-primary/90');
    newContent = newContent.replace(/bg-indigo-[0-9]{3}\/([0-9]+)/g, 'bg-primary/$1');
    newContent = newContent.replace(/bg-indigo-[0-9]{3}/g, 'bg-primary');

    newContent = newContent.replace(/text-indigo-[0-9]{3}\/([0-9]+)/g, 'text-primary/$1');
    newContent = newContent.replace(/text-indigo-[0-9]{3}/g, 'text-primary');

    newContent = newContent.replace(/border-indigo-[0-9]{3}\/([0-9]+)/g, 'border-primary/$1');
    newContent = newContent.replace(/border-indigo-[0-9]{3}/g, 'border-primary');
    newContent = newContent.replace(/border-t-indigo-[0-9]{3}/g, 'border-t-primary');
    newContent = newContent.replace(/hover:border-indigo-[0-9]{3}(\/[0-9]+)?/g, 'hover:border-primary/50');

    newContent = newContent.replace(/shadow-indigo-[0-9]{3}\/([0-9]+)/g, 'shadow-primary/$1');
    newContent = newContent.replace(/shadow-indigo-[0-9]{3}/g, 'shadow-primary/20');

    newContent = newContent.replace(/ring-indigo-[0-9]{3}\/([0-9]+)/g, 'ring-primary/$1');
    newContent = newContent.replace(/ring-indigo-[0-9]{3}/g, 'ring-primary');

    // Gradient colors
    newContent = newContent.replace(/from-indigo-[0-9]{3}/g, 'from-primary');
    newContent = newContent.replace(/to-indigo-[0-9]{3}/g, 'to-primary');
    newContent = newContent.replace(/from-blue-[0-9]{3}/g, 'from-primary');
    newContent = newContent.replace(/to-blue-[0-9]{3}/g, 'to-primary');
    newContent = newContent.replace(/hover:from-blue-[0-9]{3}/g, 'hover:from-primary/90');
    newContent = newContent.replace(/hover:to-indigo-[0-9]{3}/g, 'hover:to-primary/90');

    newContent = newContent.replace(/via-purple-[0-9]{3}/g, 'via-secondary');
    newContent = newContent.replace(/to-rose-[0-9]{3}/g, 'to-accent');

    newContent = newContent.replace(/shadow-blue-[0-9]{3}\/([0-9]+)/g, 'shadow-primary/$1');

    // Other generic Tailwind colors to Shadcn
    newContent = newContent.replace(/text-slate-500/g, 'text-muted-foreground');
    newContent = newContent.replace(/border-slate-[0-9]{3}/g, 'border-border');

    return newContent;
}

function walkSync(currentDirPath, callback) {
    fs.readdirSync(currentDirPath).forEach(function (name) {
        const filePath = path.join(currentDirPath, name);
        const stat = fs.statSync(filePath);
        if (stat.isFile() && (filePath.endsWith('.js') || filePath.endsWith('.jsx'))) {
            callback(filePath, stat);
        } else if (stat.isDirectory()) {
            walkSync(filePath, callback);
        }
    });
}

let modifiedFiles = 0;

directoriesToScan.forEach(dir => {
    const fullPath = path.join(__dirname, dir);
    if (fs.existsSync(fullPath)) {
        walkSync(fullPath, function (filePath) {
            const content = fs.readFileSync(filePath, 'utf8');
            const newContent = replaceColors(content);
            if (content !== newContent) {
                fs.writeFileSync(filePath, newContent, 'utf8');
                console.log(`Updated: ${filePath}`);
                modifiedFiles++;
            }
        });
    }
});

console.log(`Total files updated: ${modifiedFiles}`);
