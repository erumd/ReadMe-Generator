//store inquier package in the inquirer 
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
//import fs(file system)
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [];
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Title of project',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Description',
      name: 'description',
    },
    {
        type: 'input',
        message: 'Installation Instructions',
        name: 'installation',
      //   choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
      },
    {
      type: 'input',
      message: 'Usage Information',
      name: 'usage',
    },
    {
        type: 'input',
        message: 'Contribution Guidelines ',
        name: 'contribution',
      },
      {
        type: 'input',
        message: 'Test',
        name: 'test',
      },
      {
        type: 'input',
        message: 'License',
        name: 'license',
        choices: [ 
          'MIT (Short and to the point. It lets people do almost anything they want with your project.) ', 
        'GNU GPLv3 (Lets people do almost anything they want with your project, except distributing closed source versions.'
        ],
      },
  ])
  .then((data) => {
    const answers= 
      
      //dont need const bc using data. using data variable to pass it to the right file
      console.log (typeof data);

      //bc have object ant want string
    //   JSON.stringify(data);


    `# Your Project Title
    ${data.title}

    ## Description 
    ${data.description}
    
    ## Installation
    ${data.installation}
    
    ## Usage
    ${data.usage}
    
    ## Contribution
    ${data.contribution}
    
    ## Test
    ${data.test}
    
    
    ## License
    ${data.license}
    `
      
// TODO: Create a function to write README file
      fs.writeFile('README.md', (JSON.stringify(data)), (err) => (err) ? console.error(err) : console.log('file created!'));

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
    
// TUTOR
    // const title; 
    // function generateTitle(data.title) {
    //     return (
    //         `##title ${data.title}`
    //     )
    // }

    

});