// Module CommonJS
// exporter: module.exports = maFonction (1 seul export)
// ou module.exports.maFonction (plusieurs exports)
// importer : const maFonction = require('./monFichier');
const moment = require('moment');

class Horloge {
    constructor(format) {
        this._format = format;
        this.update = this.update.bind(this);
    }
    start() {
        this.update();
        setInterval(this.update, 1000);
    }
    update() {
        console.log(moment().format(this._format));
    }
}

const clock = new Horloge('HH:mm:ss');
clock.start();