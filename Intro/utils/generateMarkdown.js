// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== none)
    return '';
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
