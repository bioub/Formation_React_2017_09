import { format } from 'date-fns';

export class Horloge {
    constructor(conteneur, format = 'HH:mm:ss') {
        this._conteneur = conteneur;
        this._format = format;
        this.update = this.update.bind(this);
    }

    start() {
        this.update();
        setInterval(this.update, 1000);
    }

    update() {
        this._conteneur.innerText = format(new Date(), this._format);
    }
}

