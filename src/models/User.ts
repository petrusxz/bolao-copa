import { Hint } from './Hint';

export class User{
    
    email: string = null;
    key: string = null;
    name: string = null;
    phone: string = null;
    hints: Hint[] = null;


    constructor(values: Object = {}) {
        Object.keys(this).forEach(key => {
            if (values.hasOwnProperty(key))
                this[key] = values[key];
        });
    }
}