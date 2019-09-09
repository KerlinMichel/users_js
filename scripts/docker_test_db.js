const path = require('path');

require('dotenv').config({path: path.join(__dirname, '../.env')});

const { exec } = require('child_process');

const DOCKER_INS_NAME = 'test-db';

const runDockerDB = () => {
    const command = `docker run --name ${DOCKER_INS_NAME} -e POSTGRES_USER=${process.env.DB_USER} ` +
                    `-e POSTGRES_PASSWORD=${process.env.DB_PASSWORD} -e POSTGRES_DB=${process.env.DB_NAME} ` +
                    `-p ${process.env.DB_PORT}:5432 -d postgres`;

    exec(command, (err, stdout, stderr) => {
        if(err) {
            console.log('Error while trying to run command:');
            console.log('Command: ' + command);
            console.log('Error:');
            console.log(err);
            return;
        }

        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    });
}

const stopDockerDB = () => {
    const stopCommand = `docker stop ${DOCKER_INS_NAME}`;
    const removeCommand = `docker rm ${DOCKER_INS_NAME}`;

    exec(stopCommand, (err, stdout, stderr) => {
        if(err) {
            console.log('Error while trying to run command:');
            console.log('Command: ' + command);
            console.log('Error:');
            console.log(err);
            return;
        }

        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);

        exec(removeCommand, (err, stdout, stderr) => {
            if(err) {
                console.log('Error while trying to run command:');
                console.log('Command: ' + command);
                console.log('Error:');
                console.log(err);
                return;
            }
    
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
        });
    });
}

if(process.argv.length <= 2) {
    console.log('Incorrect arguments.');
    console.log('Usage: node docker_test_db.js (run|stop)');
    process.exit(1);
}

if(process.argv[2] === 'run' ) {
    runDockerDB();
} else if(process.argv[2] === 'stop') {
    stopDockerDB();
} else {
    console.log('Incorrect arguments.');
    console.log('Usage: node docker_test_db.js (run|stop)');
    process.exit(1);
}

module.exports = {
    runDockerDB: runDockerDB,
    stopDockerDB: stopDockerDB
}