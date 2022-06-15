//Includes packages needed for the application
const fs = require('fs');

//Renders license badge
const renderLicenseBadge = (type) => {
  let color;
  if (type === "MPL") color = "red";
  if (type === "GPL") color = "orange";
  if (type === "Apache") color = "goldenrod";
  if (type === "MIT") color = "green";
  if (type === "CC") color = "blue";
  if (type === "BSD") color = "purple";

  return (
`
<img src="https://img.shields.io/badge/license-${type}-${color}" alt="${type}" height="40">
`
  )
}

//Generates README file
const generateMarkdown = ({ title, description, installation, usage, license, contributing, tests, github }) => {
  console.log('GENERATING README, PLEASE WAIT...');
  const template = (
`# ${title}
${renderLicenseBadge(license)}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## License
${license}

## Contributing
${contributing}

## Tests
${tests}

## Questions
Contact me on my GitHub at ${github}.`
  );
  fs.writeFileSync(`./output/${title.toUpperCase()}.md`, template);
  console.log('README GENERATED!');
  process.exit();
};

module.exports = { generateMarkdown };