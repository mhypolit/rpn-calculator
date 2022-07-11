import { isNaN } from "core-js/core/number";

export class Utilities {
    constructor(){}

    public isNumeric(value: any): boolean {
        let r = new RegExp(/^-?[0-9]\d*(\.\d+)?$/);
        return r.test(value);
    }
}