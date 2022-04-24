const generateTeam = team => {

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
}

// export the team and generate the HTML page
module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">${generateTeam(team)}</div>
        </div>
    </div>
</body>
</html>
    `;
};