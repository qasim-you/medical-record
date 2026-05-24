const fs = require('fs');
const path = require('path');
const dir = 'diagrams';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.drawio'));

files.forEach(file => {
    const fp = path.join(dir, file);
    let content = fs.readFileSync(fp, 'utf8');
    
    // For any edge that has a value (text) but doesn't have labelBackgroundColor, add it.
    // An edge typically has edge="1"
    content = content.replace(/<mxCell([^>]*?)edge="1"([^>]*?)style="([^"]*)"([^>]*?)>/g, (match, p1, p2, style, p4) => {
        if (!style.includes('labelBackgroundColor')) {
            style += ';labelBackgroundColor=#ffffff;';
        }
        return `<mxCell${p1}edge="1"${p2}style="${style}"${p4}>`;
    });

    fs.writeFileSync(fp, content);
    console.log('Fixed background color for ' + file);
});
