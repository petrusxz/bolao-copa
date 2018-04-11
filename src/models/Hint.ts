import { Match } from './Match';
import { User } from './User';

export class Hint{

    matches: Match[] = null;
    user: User = null;
    creationDate: Date = null;
    lastChangeDate: Date = null;
    points: number = 0;

    constructor(values: Object = {}) {
        Object.keys(this).forEach(key => {
            if (values.hasOwnProperty(key))
                this[key] = values[key];
        });
    }
}