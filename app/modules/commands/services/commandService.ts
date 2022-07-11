import { RpnCalcBase } from "../../../core/rpnCalcBase";
import { CommandTypes } from "../enums/commandTypes";
import { CommandLookup } from "../lookups/commandLookup";
import { Command } from "../models/command";
import { NumberStackService } from "../../numberStack/services/numberStackService"

export class CommandService extends RpnCalcBase{
    private readonly numberStackService: NumberStackService = new NumberStackService();

    constructor(){
        super();
    }

    public runCommand(commands: CommandTypes): any {
        switch (commands) {
            case CommandTypes.help:
                return this.helpCommand();

            case CommandTypes.h:
                return this.helpCommand();
        
            case CommandTypes.quit:
                return this.quitCommand();

            case CommandTypes.q:
                return this.quitCommand();

            case CommandTypes.clear:
                return this.clearCommand();

            case CommandTypes.c:
                return this.clearCommand();

            case CommandTypes.clearAll:
                return this.clearCommand(true);

            case CommandTypes.cl:
                return this.clearCommand(true);
             
            default:
                return true;
        }
    }

    private helpCommand(): boolean {
        console.log(CommandLookup.usage);
        console.log('Commands:\n')
        CommandLookup.commandList.forEach((command: Command) => {
            console.log(`${command.name}   ${command.description} \n`);
        });
        return true;
    }

    private quitCommand(): boolean {
        return false;
    }

    private clearCommand(isClearAll: boolean = false): boolean {
        if (isClearAll) {
            this.numberStackService.removeAllNumberFromStack();
        } else {
            this.numberStackService.removeNumberFromStack();
        }
        return true;
    }

    public async handleCommandEnter(): Promise<any> {
        const readline = require("readline");

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        const command = await new Promise((resolve) => {
            rl.question(
              CommandLookup.commandPrompt, resolve
            );
        });

        rl.close(); 

        return command;
    }
}