const fs = require('fs');
const util = require('util');

const logSync = (path, msg) => {
    fs.appendFileSync(path, (new Date()) + msg + '\n');
};

const exempleSync = () => {
    try {
        fs.statSync('logs');
    }
    catch (err) {
        fs.mkdirSync('logs');
    }

    try {
        logSync('logs/app.log', 'Ligne 1');
        logSync('logs/app.log', 'Ligne 2');
        logSync('logs/app.log', 'Ligne 3');
        logSync('logs/app.log', 'Ligne 4');
    }
    catch (err) {
        console.log('Erreur : '  + err.message);
    }
};

/*
console.time('exempleSync()');
exempleSync();
console.timeEnd('exempleSync()');
*/

const logAsync = (path, msg, cb) => {
    fs.appendFile(path, (new Date()) + msg + '\n', cb);
};

const exempleAsync = (cb) => {

    const next = () => {
        logAsync('logs/app.log', 'Ligne 1', (err) => {
            if (err) {
                console.log('Erreur : '  + err.message);
            }
            logAsync('logs/app.log', 'Ligne 2', (err) => {
                if (err) {
                    console.log('Erreur : '  + err.message);
                }
                logAsync('logs/app.log', 'Ligne 3', (err) => {
                    if (err) {
                        console.log('Erreur : '  + err.message);
                    }
                    logAsync('logs/app.log', 'Ligne 4', (err) => {
                        if (err) {
                            console.log('Erreur : '  + err.message);
                        }
                        cb();
                    });
                });
            });
        });
    };

    fs.stat('logs', (err) => {
        if (err) {
            return fs.mkdir('logs', next);
        }
        next();
    });
};

/*
console.time('exempleAsync()');
exempleAsync(() => {});
console.timeEnd('exempleAsync()');
*/

const logPromise = (path, msg) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(path, (new Date()) + msg + '\n', (err) => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
};

const statPromise = util.promisify(fs.stat);
const mkdirPromise = util.promisify(fs.mkdir);

const exemplePromise = function() {
    return statPromise('logs')
        .catch(err => mkdirPromise('logs'))
        .then(() => logPromise('logs/app.log', 'Ligne 1'))
        .then(() => logPromise('logs/app.log', 'Ligne 2'))
        .then(() => logPromise('logs/app.log', 'Ligne 3'))
        .then(() => logPromise('logs/app.log', 'Ligne 4'))
        .catch(err => console.log('Erreur : '  + err.message));
};

/*
console.time('exemplePromise()');
exemplePromise()
    .then(() => {

    });
console.timeEnd('exemplePromise()')
*/

const exempleES8 = async function () {
    try {
        await statPromise('logs');
    }
    catch (err) {
        await mkdirPromise('logs');
    }

    try {
        await logPromise('logs/app.log', 'Ligne 1');
        await logPromise('logs/app.log', 'Ligne 2');
        await logPromise('logs/app.log', 'Ligne 3');
        await logPromise('logs/app.log', 'Ligne 4');
    }
    catch (err) {
        console.log('Erreur : '  + err.message);
    }
};

console.time('exempleES8()');
exempleES8();
console.timeEnd('exempleES8()');
