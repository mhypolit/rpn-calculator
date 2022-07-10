#!/usr/bin/env node 

import './polyfills.ts'
import { RpnCalcBase } from './core/rpnCalcBase';
import { Title } from './views/title/title';
import { CommandService } from './modules/commands/services/commandService';
import { CommandTypes } from './modules/commands/enums/commandTypes';

export class Main extends RpnCalcBase {
    private readonly title: Title = new Title();
    private readonly commandService: CommandService = new CommandService();

    constructor(){
        super();
        this.run();
    }

    run(arg?: string): void {
        this.clear();
        this.title.showTitle('RPN Calculator');
        this.commandService.runCommand(CommandTypes[CommandTypes.help]);
    }
}

const main = new Main();