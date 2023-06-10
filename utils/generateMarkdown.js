function renderLicenseBadge(license) {
  return license !== 'None' ? `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)` : '';
}

function renderLicenseLink(license) {
  return license !== 'None' ? '\n* [License](#license)\n' : '';
}

function renderLicenseSection(license) {
  return license !== 'None' ? `## License\n\nThis project is licensed under the ${license} license.` : '';
}

function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Demo](#demo)
- [Features](#features)
- [License](#license)
- [Questions](#questions)

## Installation
To install the necessary dependencies, run the following command:
\`\`\`
${data.installation}
\`\`\`

## Features
${data.feature ? `${data.feature}\n` : ''}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
To run tests, use the following command:
\`\`\`
${data.test}
\`\`\`

## Demo
${data.demo ? `- [Demo](${data.demo})\n` : ''}

${licenseSection}

## Questions
For any questions or inquiries, feel free to reach out to me:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;