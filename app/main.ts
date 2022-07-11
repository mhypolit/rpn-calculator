#!/usr/bin/env node 

import './polyfills.ts'
import { RpnCalcBase } from './core/rpnCalcBase';
import { FormatterService } from './modules/formatter/services/formatterService';
import { CommandService } from './modules/commands/services/commandService';
import { CommandTypes } from './modules/commands/enums/commandTypes';
import { HeaderLookup } from './modules/shared/lookups/headerLookup';
import { Utilities } from './modules/shared/services/utilities';
import { NumberStackService } from './modules/numberStack/services/numberStackService';

export class Main extends RpnCalcBase {
    private readonly formatterService: FormatterService = new FormatterService();
    private readonly commandService: CommandService = new CommandService();
    private readonly utilities: Utilities = new Utilities();
    private readonly numberStackService: NumberStackService = new NumberStackService();

    constructor(){
        super();
        this.run();
    }

    async run(arg?: string) {
        this.clear();
        this.formatterService.formatHeader(HeaderLookup.mainHeader);
        this.commandService.runCommand(CommandTypes.help);

        let runProgram: boolean = true;

        while (runProgram == true) 
        {
            this.formatterService.printNewLine();

            this.numberStackService.showNumberStack();

            const command = await this.commandService.handleCommandEnter();

            if(this.utilities.isNumeric(command)){
                this.numberStackService.addNumberToStack(command as number);
            } else {       
                runProgram = this.commandService.runCommand(command);
            }

            this.formatterService.printDivider();
        }
    }
}

const main = new Main();