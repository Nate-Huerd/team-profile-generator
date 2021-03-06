const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const path = require('path');

// node modules
const fs = require('fs');
const inquirer = require('inquirer');

// output directory
const OUTPUT_DIR = path.resolve(__dirname, 'output')
const outputPath = path.join(OUTPUT_DIR, 'team.html');

// render template
const render = require('./src/generateHTML.js');

// arrays for teamMembers and id
const teamMembers = [];
const idArray = [];

// list prompts for mgr., eng., and int.
// Need name, id, and email (and office # for mgr's) (and github for eng.) (and school for interns)

function appMenu() {
    function createManager() {
        console.log('Create team');
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "Please enter the team manager's name",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please list the team manager's name";
                }
            },
            {
                type: 'input',
                name: 'managerId',
                message: "Please enter the team manager's ID",
                validate: answer => {
                    // add regular expression for validation
                    const pass = answer.match(/^[1-9]\d*$/);
                    if (pass) {
                        return true;
                    }
                    return "Please list the team manager's ID";
                }
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "Please enter the team manager's email address",
                validate: answer => {
                    // add regular expression for validation
                    const pass = answer.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);
                    if (pass) {
                        return true;
                    }
                    return "Please enter the team manager's email address";
                }
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: "Please enter the team manager's office number",
                // add regular expression for validation
                validate: answer => {
                    const pass = answer.match(/^[1-9]\d*$/);
                    if (pass) {
                        return true;
                    }
                    return "Please enter the team manager's office number";
                }
            }
            // answers function
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            // push to teamMembers and idArray
            teamMembers.push(manager);
            idArray.push(answers.managerId);
            createTeam();
        });
    }
    // createTeam function
    function createTeam() {
        // inquirer prompt here
        inquirer.prompt ([
            {
                type: 'list',
                name: 'memberChoice',
                message: 'Add a team member',
                choices: [
                    'Engineer',
                    'Intern',
                    'Do not add a team member'
                ]
            }
        // case based on user choice
        ]).then(userChoice => {
            switch (userChoice.memberChoice) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                default:
                    buildTeam();
            }
        });
    }

    // addEngineer function
    function addEngineer() {
        // inquirer prompt here
        inquirer.prompt ([
            {
                type: 'input',
                name: 'engineerName',
                message: 'Please enter the name of the engineer',
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the engineer's name";
                }
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "Please enter the engineer's id",
                validate: answer => {
                    // validation
                    const pass = answer.match(/^[1-9]\d*$/);
                    if (pass) {
                        // check if the ID exists. If so, return message.
                        if(idArray.includes(answer)) {
                            return 'This ID is taken, please enter a new ID';
                        } else {
                            return true;
                        }
                    }
                    // if it does not pass
                    return 'Please enter a valid ID';
                }
            },
            {
                type: 'input',
                name: 'engineerGitHub',
                message: "Please enter the engineer's GitHub",
                validate: answer => {
                    if (answer !== "") {
                      return true;
                    }
                    return "Please enter the engineer's GitHub";
                  }
                }
                // push user input
              ]).then(answers => {
                const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
                teamMembers.push(engineer);
                idArray.push(answers.engineerId);
                createTeam();
              });
            }
          
            function addIntern() {
              inquirer.prompt([
                {
                  type: 'input',
                  name: 'internName',
                  message: "Enter your intern's name?",
                  validate: answer => {
                    if (answer !== "") {
                      return true;
                    }
                    return "Please enter your intern's name";
                  }
                },
                {
                  type: 'input',
                  name: 'internId',
                  message: "What is your intern's id?",
                  validate: answer => {
                    const pass = answer.match(/^[1-9]\d*$/);
                    if (pass) {
                      if (idArray.includes(answer)) {
                        return 'This ID is already taken';
                      } else {
                        return true;
                      }
          
                    }
                    return 'Please enter a valid ID';
                  }
                },
                {
                  type: 'input',
                  name: 'internEmail',
                  message: "What is your intern's email address?",
                  validate: answer => {
                    const pass = answer.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);
                    if (pass) {
                      return true;
                    }
                    return 'Please enter a valid email address';
                  }
                },
                {
                  type: 'input',
                  name: 'internSchool',
                  message: "What is your intern's school?",
                  validate: answer => {
                    if (answer !== "") {
                      return true;
                    }
                    return "Please enter your intern's school";
                  }
                }
              ]).then(answers => {
                const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
                teamMembers.push(intern);
                idArray.push(answers.internId);
                createTeam();
              });
            }
          
            function buildTeam() {
              // Create the output directory if the output path doesn't exist
              if (!fs.existsSync(OUTPUT_DIR)) {
                fs.mkdirSync(OUTPUT_DIR)
              }
              // writeFileSync function
              fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
            }
          
    createManager();
          
}
          
appMenu();
          








/* start of mine
const addManager = () => {
    return inquirer.prompt ([
        {
            // name
            type: 'input',
            name: 'name',
            message: "Please list the team manager's name",

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please list the team manager's name");
                    return false;
                }
            }

        },
        {
            // id
            type: 'input',
            name: 'id',
            message: "Please enter the team manager's ID",

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please list the team manager's ID");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the team manager's email address",

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's email address");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "Please enter the team manager's office number",

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's office number");
                    return false;
                }
            }
        },
    ])
};

const addEngineer = () => {
    return inquirer.prompt ([
        {
            // name
            type: 'input',
            name: 'name',
            message: "Please list the engineer's name",

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please list the engineer's name");
                    return false;
                }
            }

        },
        {
            // id
            type: 'input',
            name: 'id',
            message: "Please enter the engineer's ID",

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please list the engineer's ID");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the engineer's email address",

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's email address");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the engineer's GitHub",

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's GitHub");
                    return false;
                }
            }
        },
    ])   
};
const addIntern = () => {
    return inquirer.prompt ([
        {
            // name
            type: 'input',
            name: 'name',
            message: "Please list the intern's name",

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please list the intern's name");
                    return false;
                }
            }

        },
        {
            // id
            type: 'input',
            name: 'id',
            message: "Please enter the intern's ID",

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please list the intern's ID");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the intern's email address",

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's email address");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the engineer's school",

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's school");
                    return false;
                }
            }
        },
    ])
};

const addEmployee = () => {
    return inquirer.prompt ([
        {
            // name
            type: 'input',
            name: 'name',
            message: "Please list the employee's name",

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please list the employee's name");
                    return false;
                }
            }

        },
        {
            // id
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID",

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please list the employee's ID");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email address",

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's email address");
                    return false;
                }
            }
        },
    ])
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return('Error');
        } else {
            console.log('Team profile has been created.')
        }
    })
};

end of mine */
