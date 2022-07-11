#!/usr/bin/env node 

import './polyfills.ts'
import { RpnCalcBase } from './core/rpnCalcBase';
import { CommandService } from './modules/commands/services/commandService';
import { HeaderLookup } from './modules/shared/lookups/headerLookup';
import { ErrorsLookup } from './modules/shared/lookups/errorsLookup';

export class Main extends RpnCalcBase {
    private readonly commandService: CommandService = new CommandService();

    constructor(){
        super();
        this.run();
    }

    async run(arg?: string) {
        this.clear();
        this.formatterService.formatHeader(HeaderLookup.mainHeader);
        this.commandService.runCommand(this.commandTypes.help);

        let exitProgram: boolean = false;

        while (exitProgram == false) 
        {
            try {
                this.formatterService.printNewLine();

                this.numberStackService.showNumberStack();

                const command = await this.commandService.handleCommandEnter();

                if(this.utilities.isNumeric(command)){
                    this.numberStackService.addNumberToStack(command as number);
                } else {       
                    exitProgram = this.commandService.runCommand(command);
                }

                this.formatterService.printDivider();
            } catch (error) {
                this.formatterService.printErrorMsg(ErrorsLookup.runtimeError);
                this.formatterService.printErrorMsg(error as string);
            }
     
        }
    }
}

const main = new Main();