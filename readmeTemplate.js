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



* [Credits](#credits)


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
${data.GitHub}
${data.email}

## License
${license}
`;

module.exports = readmeTemplate;
