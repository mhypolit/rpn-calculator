import { FormatterService } from '../../formatter/services/formatterService';

export class Utilities {
    private readonly formatterService: FormatterService = new FormatterService();

    constructor(){}

    public isNumeric(value: any): boolean {
        let r = new RegExp(/^-?[0-9]\d*(\.\d+)?$/);
        const isNumeric = r.test(value);
        
        return isNumeric;
    }
}