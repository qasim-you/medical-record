const fs = require('fs');
let content = fs.readFileSync('diagrams/03_sequence_diagram_overall.drawio', 'utf8');

// Remove source=... and target=... from edges
content = content.replace(/source="[^"]*"/g, '');
content = content.replace(/target="[^"]*"/g, '');

// Also, the text labels on edges need labelBackgroundColor=#ffffff so they aren't crossed out by the line
content = content.replace(/style="html=1;verticalAlign=bottom;endArrow=([^"]+)"/g, 'style="html=1;verticalAlign=bottom;endArrow=$1;labelBackgroundColor=#ffffff;edgeStyle=orthogonalEdgeStyle;rounded=0;"');

fs.writeFileSync('diagrams/03_sequence_diagram_overall.drawio', content);
console.log('Diagram fixed');
