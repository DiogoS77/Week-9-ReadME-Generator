const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
const questions = require('./utils/questions')

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