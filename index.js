const core = require('@actions/core');
const xpath = require('xpath');
const DOMParser = require('xmldom').DOMParser;
const fs = require('fs');

try {
    const documentString = core.getInput('documentString');
    const filename = core.getInput('filename');    
    const expression = core.getInput('expression');
    const namespaces = core.getInput('namespaces');
    
    const content = documentString || fs.readFileSync(filename, 'utf8');
    const document = new DOMParser().parseFromString(content);
    const select = namespaces
        ? xpath.useNamespaces(JSON.parse(namespaces)) 
        : xpath.select;
    const nodes = select(expression, document);

    const result = nodes.map(node => node.toString()).join("\n");
    core.setOutput("result", result);

} catch (error) {
    core.setFailed(error.message);
}
