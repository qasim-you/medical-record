const fs = require('fs');
let content = fs.readFileSync('diagrams/03_sequence_diagram_overall.drawio', 'utf8');

// Replace the source and target attributes on edges to prevent snapping issues
content = content.replace(/ source="[^"]*"/g, '');
content = content.replace(/ target="[^"]*"/g, '');

// Ensure all text on lines has a white background so the line doesn't strike through it
// And ensure orthogonal routing
content = content.replace(/style="html=1;verticalAlign=bottom;endArrow=([^"]+)"/g, 'style="html=1;verticalAlign=bottom;endArrow=$1;labelBackgroundColor=#ffffff;edgeStyle=orthogonalEdgeStyle;rounded=0;fontSize=12;"');

fs.writeFileSync('diagrams/03_sequence_diagram_overall.drawio', content);
console.log('Fixed sequence diagram layout.');
