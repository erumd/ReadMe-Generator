// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  // [badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
  //return `![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
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

## Contribute
${data.contribution}

## Tests
${data.test}

## License
${data.license}

`;
}

module.exports = generateMarkdown;
