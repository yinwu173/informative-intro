// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'None')
    return '';
  if (license == 'MIT')
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  if (license == 'Mozilla')
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
${renderLicenseBadge(response.license)}
## Description of the Project
${response.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#questions)
* [Username](#username)
* [Email](#email)

### Installation
${response.installation}
### Usage
${response.usage}
### License
${response.license}
### Contributions
${response.contributions}
### Tests
${response.tests}
### Questions
${response.questions}
### Github Username
${response.username}
### Email Address
${response.email}
`;
}

module.exports = generateMarkdown;
