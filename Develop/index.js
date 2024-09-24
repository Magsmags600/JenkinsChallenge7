// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
import fs from 'fs';
import inquirer from 'inquirer'

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Describe the User Story:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Describe when your project will be used.'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'List the collaborators:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None']
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:'
  }
];

// Function to generate the license badge based on user's choice
function generateLicenseBadge(license) {
  if (license !== 'None') {
    return `![License](https://img.shields.io/badge/License-${license.replace(' ', '%20')}-blue.svg)`;
  }
  return '';
}

// Function to generate the README file content
function generateReadMe(answers) {
  return `
# ${answers.title}

${generateLicenseBadge(answers.license)}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
If you have any questions, feel free to contact me:

- GitHub: [${answers.github}](https://github.com/${answers.github})
- Email: ${answers.email}
`;
}

// Function to initialize the app
function init() {
  inquirer.prompt(questions)
    .then(answers => {
      const readmeContent = generateReadMe(answers);

      // Write README file
      fs.writeFile('README2.md', readmeContent, (err) => {
        if (err) {
          console.error('Error writing file:', err);
        } else {
          console.log('Successfully generated README.md');
        }
      });
    })
    .catch((error) => {
      console.error('Error during prompting:', error);
    });
}

// Call the init function to start the application
init();
