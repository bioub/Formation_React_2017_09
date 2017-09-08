const moment = require('moment');

class Horloge {
    constructor(format) {
        this._format = format;

        this.update = this.update.bind(this);
    }
    start() {
        setInterval(this.update, 1000);
    }
    update() {
        console.log(moment().format(this._format));
    }
}

const clock = new Horloge('HH:mm:ss');
clock.update();
clock.start();