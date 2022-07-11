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

    private handleHelp(): boolean {
        console.log(CommandLookup.usage);
        console.log('Commands:\n')
        CommandLookup.commandList.forEach((command: Command) => {
            console.log(`${command.name}   ${command.description} \n`);
        });

        return false;
    }

    private handleQuit(): boolean {
        return true;
    }

    private handleClear(isClearAll: boolean = false): boolean {
        if (isClearAll) {
            this.numberStackService.removeAllNumberFromStack();
        } else {
            this.numberStackService.pullNumberFromStack();
        }

        return false;
    }

    private handleAdd(): boolean {
        const numberA = this.numberStackService.pullNumberFromStack();
        const numberB = this.numberStackService.pullNumberFromStack();
        const sum = Number(numberA) + Number(numberB);
        this.numberStackService.addNumberToStack(sum);

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

    public runCommand(commands: CommandTypes): any {
        switch (commands) {
            case CommandTypes.help:
                return this.handleHelp();

            case CommandTypes.h:
                return this.handleHelp();
        
            case CommandTypes.quit:
                return this.handleQuit();

            case CommandTypes.q:
                return this.handleQuit();

            case CommandTypes.clear:
                return this.handleClear();

            case CommandTypes.c:
                return this.handleClear();

            case CommandTypes.clearAll:
                return this.handleClear(true);

            case CommandTypes.cl:
                return this.handleClear(true);
                
            case CommandTypes.a:
                return this.handleAdd();

            case CommandTypes.add:
                return this.handleAdd();
            default:
                return false;
        }
    }
}