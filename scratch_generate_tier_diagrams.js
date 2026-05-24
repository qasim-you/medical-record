const fs = require('fs');
const path = require('path');

const templateStart = `<mxfile host="app.diagrams.net">
  <diagram name="Page-1" id="diag_id">
    <mxGraphModel dx="1000" dy="800" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="827" pageHeight="1169" background="#ffffff" math="0" shadow="0">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />`;

const templateEnd = `      </root>
    </mxGraphModel>
  </diagram>
</mxfile>`;

// 1-Tier Diagram
const tier1Xml = templateStart + `
        <mxCell id="box" value="Local Developer Machine (1-Tier)" style="swimlane;whiteSpace=wrap;html=1;fillColor=#ffffff;strokeColor=#000000;fontColor=#000000;" vertex="1" parent="1">
          <mxGeometry x="160" y="160" width="400" height="300" as="geometry" />
        </mxCell>
        <mxCell id="fe" value="Next.js Frontend (Browser)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffffff;strokeColor=#000000;fontColor=#000000;" vertex="1" parent="box">
          <mxGeometry x="100" y="60" width="200" height="60" as="geometry" />
        </mxCell>
        <mxCell id="node" value="Hardhat Local Node" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffffff;strokeColor=#000000;fontColor=#000000;" vertex="1" parent="box">
          <mxGeometry x="100" y="160" width="200" height="60" as="geometry" />
        </mxCell>
        <mxCell id="arr" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;endArrow=classic;endFill=1;strokeColor=#000000;" edge="1" parent="box" source="fe" target="node">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
` + templateEnd;

// 2-Tier Diagram
const tier2Xml = templateStart + `
        <mxCell id="t1" value="Tier 1: Client" style="swimlane;whiteSpace=wrap;html=1;fillColor=#ffffff;strokeColor=#000000;fontColor=#000000;" vertex="1" parent="1">
          <mxGeometry x="120" y="200" width="240" height="200" as="geometry" />
        </mxCell>
        <mxCell id="fe2" value="Web3 Frontend&#xa;+ MetaMask" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffffff;strokeColor=#000000;fontColor=#000000;" vertex="1" parent="t1">
          <mxGeometry x="40" y="70" width="160" height="60" as="geometry" />
        </mxCell>
        <mxCell id="t2" value="Tier 2: Server / State" style="swimlane;whiteSpace=wrap;html=1;fillColor=#ffffff;strokeColor=#000000;fontColor=#000000;" vertex="1" parent="1">
          <mxGeometry x="480" y="200" width="240" height="200" as="geometry" />
        </mxCell>
        <mxCell id="sc" value="Ethereum Blockchain&#xa;+ Smart Contract" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffffff;strokeColor=#000000;fontColor=#000000;" vertex="1" parent="t2">
          <mxGeometry x="40" y="70" width="160" height="60" as="geometry" />
        </mxCell>
        <mxCell id="arr1" value="Transactions / Data" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;endArrow=classic;startArrow=classic;endFill=1;strokeColor=#000000;labelBackgroundColor=#ffffff;" edge="1" parent="1" source="t1" target="t2">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>
` + templateEnd;

// 3-Tier Diagram
const tier3Xml = templateStart + `
        <mxCell id="tt1" value="Tier 1: Presentation" style="swimlane;whiteSpace=wrap;html=1;fillColor=#ffffff;strokeColor=#000000;fontColor=#000000;" vertex="1" parent="1">
          <mxGeometry x="320" y="80" width="200" height="120" as="geometry" />
        </mxCell>
        <mxCell id="ffe" value="HealthChain Frontend" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffffff;strokeColor=#000000;fontColor=#000000;" vertex="1" parent="tt1">
          <mxGeometry x="20" y="40" width="160" height="60" as="geometry" />
        </mxCell>

        <mxCell id="tt2" value="Tier 2: Logical State" style="swimlane;whiteSpace=wrap;html=1;fillColor=#ffffff;strokeColor=#000000;fontColor=#000000;" vertex="1" parent="1">
          <mxGeometry x="120" y="320" width="200" height="120" as="geometry" />
        </mxCell>
        <mxCell id="fsc" value="Smart Contract" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffffff;strokeColor=#000000;fontColor=#000000;" vertex="1" parent="tt2">
          <mxGeometry x="20" y="40" width="160" height="60" as="geometry" />
        </mxCell>

        <mxCell id="tt3" value="Tier 3: File Storage" style="swimlane;whiteSpace=wrap;html=1;fillColor=#ffffff;strokeColor=#000000;fontColor=#000000;" vertex="1" parent="1">
          <mxGeometry x="520" y="320" width="200" height="120" as="geometry" />
        </mxCell>
        <mxCell id="fipfs" value="IPFS / Pinata" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#ffffff;strokeColor=#000000;fontColor=#000000;" vertex="1" parent="tt3">
          <mxGeometry x="20" y="40" width="160" height="60" as="geometry" />
        </mxCell>

        <mxCell id="a1" value="Blockchain RPC" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;endArrow=classic;startArrow=classic;endFill=1;strokeColor=#000000;labelBackgroundColor=#ffffff;" edge="1" parent="1" source="tt1" target="tt2">
          <mxGeometry relative="1" as="geometry">
             <Array as="points">
                <mxPoint x="220" y="140" />
             </Array>
          </mxGeometry>
        </mxCell>
        
        <mxCell id="a2" value="HTTPS Upload" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;endArrow=classic;startArrow=classic;endFill=1;strokeColor=#000000;labelBackgroundColor=#ffffff;" edge="1" parent="1" source="tt1" target="tt3">
          <mxGeometry relative="1" as="geometry">
             <Array as="points">
                <mxPoint x="620" y="140" />
             </Array>
          </mxGeometry>
        </mxCell>
` + templateEnd;

fs.writeFileSync(path.join('diagrams', '14_1_tier_architecture.drawio'), tier1Xml);
fs.writeFileSync(path.join('diagrams', '15_2_tier_architecture.drawio'), tier2Xml);
fs.writeFileSync(path.join('diagrams', '16_3_tier_architecture.drawio'), tier3Xml);
console.log('Diagrams generated successfully.');
