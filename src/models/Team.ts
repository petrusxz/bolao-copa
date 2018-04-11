export class Team {
    name: string = null;
    // Jogos: number = 0;
    ponits: number = 0;
    wons: number = 0;
    drawns: number = 0;
    losts: number = 0;
    gf: number = 0;
    ga: number = 0;
    gd: number = 0;


    constructor(values: Object = {}) {
        Object.keys(this).forEach(key => {
            if (values.hasOwnProperty(key))
                this[key] = values[key];
        });
    }
}
