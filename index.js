//Includes packages needed for the application
const fs = require('fs');
const inquirer = require('inquirer');
const utils = require('./utils/generateMarkdown.js');

//Question array for user input
const questions = [
    {
        type: 'input',
        message: 'Please enter a title for your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please enter a description for your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please detail installation instruction for your project.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please enter usage details for your project.',
        name: 'usage',
    },
    {
        type: 'rawlist',
        message: 'What license was your project created with?',
        name: 'license',
        choices: [
            "MPL",
            "GPL",
            "Apache",
            "MIT",
            "CC",
            "BSD"
        ]
    },
    {
        type: 'input',
        message: 'Please enter contribution information for your project.',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Please enter testing information for your project.',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Please enter your GitHub.',
        name: 'github',
    },
];

//init
function init() {
    inquirer.prompt(questions).then((answers) => {
        utils.generateMarkdown(answers);
    });
}

//Runs the whole thing
init();