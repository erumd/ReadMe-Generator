const readmeTemplate = (license, data, badge, link) => `
[![License](https://img.shields.io/badge/license-${badge}-${data.color})](${link})
# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribute](#contribution)
* [Tests](#tests)
- [Questions](#questions)
* [License](#license)




## Installation
${data.installation}

## Usage 
${data.usage}

## Contribute
${data.contribution}

## Tests
${data.test}

## Questions
${data.questions}
(https://img.shields.io/badge/license-${badge}-${data.color})](${link})
(https://https://github.com/${data.GitHub})
${data.GitHub}
If you have any questions or would like to contribute email me at ${data.email} 

## License
${license}
`;

module.exports = readmeTemplate;
