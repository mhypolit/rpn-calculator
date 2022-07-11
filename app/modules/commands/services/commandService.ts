import { RpnCalcBase } from "../../../core/rpnCalcBase";
import { CommandTypes } from "../enums/commandTypes";
import { CommandLookup } from "../lookups/commandLookup";
import { Command } from "../models/command";

export class CommandService extends RpnCalcBase{
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