#!/usr/bin/env node 

import './polyfills.ts'
import { RpnCalcBase } from './core/rpnCalcBase';
import { FormatterService } from './modules/formatter/services/formatterService';
import { CommandService } from './modules/commands/services/commandService';
import { CommandTypes } from './modules/commands/enums/commandTypes';
import { HeaderLookup } from './modules/shared/lookups/headerLookup';

export class Main extends RpnCalcBase {
    private readonly formatterService: FormatterService = new FormatterService();
    private readonly commandService: CommandService = new CommandService();

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
            const command = await this.commandService.handleCommandEnter();
            runProgram = this.commandService.runCommand(command);
        }
    }
}

const main = new Main();