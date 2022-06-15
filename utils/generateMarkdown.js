//Includes packages needed for the application
const fs = require('fs');

//Renders license badge
const renderLicenseBadge = (type) => {
  let color;
  if (type === "MPL") color = "red";
  if (type === "GPL") color = "gray";
  if (type === "Apache") color = "green";
  if (type === "MIT") color = "blue";
  if (type === "CC") color = "purple";
  if (type === "BSD") color = "goldenrod";

  return (
`
<img src="https://img.shields.io/badge/license-${type}-${color}" alt="${type}" height="44">
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
${github}`
  );
  fs.writeFileSync(`./output/${title.toUpperCase()}.md`, template);
  console.log('README GENERATED!');
  process.exit();
};

module.exports = { generateMarkdown };