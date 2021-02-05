const readmeTemplate = (license, data, badge, link) => `
[![License](https://img.shields.io/badge/license-${badge}-${data.color})](${link})
# ${data.title}
## Description
${data.description}
## Table of Contents
- [Installation](#Installation)
- [Usage Information](#Usage-Information)
- [Issues](#Issues)
- [Contribute](#Contribute)
- [Tests](#Tests)
- [Questions](#Questions)
- [License](#License)
## Installation
${data.installation}
## Usage 
${data.usage}
## Issues
${data.issues}
## Contribute
${data.contribute}
## Tests
${data.test}

## License
${license}
`;

module.exports = readmeTemplate;