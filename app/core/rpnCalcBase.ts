export abstract class RpnCalcBase {
    protected readonly clear: any;
    protected numberStack: number[];

    constructor(){
        this.clear = require('clear');
        this.numberStack = [];
    }
}