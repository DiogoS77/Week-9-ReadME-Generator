const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is your project name?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project'
  },
  {
    type: 'input',
    name: 'feature',
    message: 'What are the key features of your project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command should be run to install dependencies?',
    default: 'npm i'
  },
  {
    type: 'input',
    name: 'test',
    message: 'What command should be run to run tests?',
    default: 'npm test'
  },
  {
    type: 'input',
    name: 'demo',
    message: 'Do you have a demo or live example of your project? If yes, provide the URL.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repo?'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repo?'
  }
];

async function init() {
    try {
      console.log('Generating README...');
      const inquirerResponses = await inquirer.prompt(questions);
      const markdown = generateMarkdown({ ...inquirerResponses });
      writeToFile('README.md', markdown);
      console.log('README generated successfully!');
    } catch (error) {
      console.error('An error occurred while generating the README:', error);
    }
  }
  
  function writeToFile(fileName, data) {
    const filePath = path.join(process.cwd(), fileName);
    fs.writeFileSync(filePath, data);
  }
  
  init();