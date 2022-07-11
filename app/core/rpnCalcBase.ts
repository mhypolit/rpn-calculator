import { Utilities } from '../modules/shared/services/utilities';
import { NumberStackService } from '../modules/numberStack/services/numberStackService';
import { FormatterService } from '../modules/formatter/services/formatterService';
import { CommandTypes } from '../modules/commands/enums/commandTypes';

export abstract class RpnCalcBase {
    protected readonly utilities: Utilities = new Utilities();
    protected readonly numberStackService: NumberStackService = new NumberStackService();
    protected readonly formatterService: FormatterService = new FormatterService();
    protected readonly clear: any;
    protected readonly commandTypes = CommandTypes;

    constructor(){
        this.clear = require('clear');
    }
}