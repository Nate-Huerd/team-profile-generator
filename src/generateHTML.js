const generateManager = function (manager) {
    return `
        <div class="container">
            <div class="col-4">
                <div class="card-header">
                    <h3 class="employee-name">${manager.name}</h3>
                    <h4>Manager</h4>
                </div>
                <div class="card-body">
                    <p class="employee-id">${manager.id}</p>
                    <p class="employee-email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                    <p class="manager-office">Office #: ${manager.office}</p>
                </div>
            </div>
        </div>
    `;
}

const generateEngineer = function (engineer) {
    return `
        <div class="container">
            <div class="col-4">
                <div class="card-header">
                    <h3 class="employee-name">${engineer.name}</h3>
                    <h4>Engineer</h4>
                </div>
                <div class="card-body">
                    <p class="employee-id">${engineer.id}</p>
                    <p class="employee-email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                    <p class="engineer-github">GitHub: ${engineer.github}</p>
                </div>
            </div>
        </div>
    `;
}

const generateIntern = function (intern) {
    return `
        <div class="container">
            <div class="col-4">
                <div class="card-header">
                    <h3 class="employee-name">${intern.name}</h3>
                    <h4>Intern</h4>
                </div>
                <div class="card-body">
                    <p class="employee-id">${intern.id}</p>
                    <p class="employee-email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                    <p class="intern-school">School: ${intern.school}</p>
                </div>
            </div>
        </div>
    `;
};

generateHTML = (data) => {
    // add array?
}