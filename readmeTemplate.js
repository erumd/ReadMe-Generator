const readmeTemplate = (license, data, badge, link) => `
[![License](https://img.shields.io/badge/license-${badge}-${data.color})](${link})
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
* [Installation](#installation)
- [Usage Information](#usage)
* [Usage](#usage)
- [Issues](#Issues)
- [Contribute](#Contribute)
- [Tests](#Tests)
- [Questions](#Questions)
- [License](#License)
* [License](#license)



* [Credits](#credits)


## Installation
${data.installation}

## Usage 
${data.usage}

## Contribute
${data.contribution}

## Tests
${data.test}

## License
${license}
`;

module.exports = readmeTemplate;
