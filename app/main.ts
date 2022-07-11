#!/usr/bin/env node 

import './polyfills.ts'
import { RpnCalcBase } from './core/rpnCalcBase';
import { CommandService } from './modules/commands/services/commandService';
import { HeaderLookup } from './modules/shared/lookups/headerLookup';
import { ErrorsLookup } from './modules/shared/lookups/errorsLookup';
import { CommandTypes } from './modules/commands/enums/commandTypes';

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

                const enteredCommand = await this.commandService.handleCommandEnter();

                const commandArray:string[] =  await this.commandService.splitCommandBySpaces(enteredCommand);

                commandArray.forEach((command)=> {
                    if(this.utilities.isNumeric(command)) {
                        const numberCommand =  parseFloat(command);
                        this.numberStackService.addNumberToStack(numberCommand);
                    } else {       
                        exitProgram = this.commandService.runCommand(command as CommandTypes);
                    }
                });

                this.formatterService.printDivider();
            } catch (error) {
                this.formatterService.printErrorMsg(ErrorsLookup.runtimeError);
                this.formatterService.printErrorMsg(error as string);
            }
     
        }
    }
}

const main = new Main();