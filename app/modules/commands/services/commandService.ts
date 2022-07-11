import { RpnCalcBase } from "../../../core/rpnCalcBase";
import { CommandTypes } from "../enums/commandTypes";
import { CommandLookup } from "../lookups/commandLookup";
import { ErrorsLookup } from '../../shared/lookups/errorsLookup';
import { Command } from "../models/command";

export class CommandService extends RpnCalcBase {
    

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
        const operands = this.numberStackService.getOperands();

        if (operands != null){
            const sum = Number(operands.numberA) + Number(operands.numberB);
            this.numberStackService.addNumberToStack(sum);
        }

        return false;
    }

    private handleSubtract(): boolean {
        const operands = this.numberStackService.getOperands();

        if (operands != null) {
            const difference = Number(operands.numberA) - Number(operands.numberB);
            this.numberStackService.addNumberToStack(difference);
        }

        return false;
    }

    private handleMultiply(): boolean {
        const operands = this.numberStackService.getOperands();

        if (operands != null) { 
            const product = Number(operands.numberA) * Number(operands.numberB);
            this.numberStackService.addNumberToStack(product);
        }

        return false;
    }

    private handleDivide(): boolean {
        const operands = this.numberStackService.getOperands();
        let product = 0;
        if (operands && operands.numberB != 0){
            if (operands != null) { 
                product = Number(operands.numberA) / Number(operands.numberB);
                this.numberStackService.addNumberToStack(product);
            }
        } else {
            if(operands != null){
                this.numberStackService.reverseOperands(operands);
            }
            this.formatterService.printErrorMsg(ErrorsLookup.divideByZeroError);
        }
        
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
            case this.commandTypes.h: 
            case this.commandTypes.help:
                return this.handleHelp();
        
            case this.commandTypes.q: 
            case this.commandTypes.quit:
                return this.handleQuit();

            case this.commandTypes.c: 
            case this.commandTypes.clear:
                return this.handleClear();

            case this.commandTypes.cl: 
            case this.commandTypes.clearAll:
                return this.handleClear(true);
                
            case this.commandTypes.a: 
            case this.commandTypes.add:
                return this.handleAdd();

            case this.commandTypes.s: 
            case this.commandTypes.subtract:
                return this.handleSubtract();

            case this.commandTypes.m: 
            case this.commandTypes.multiply:
                return this.handleMultiply();

            case this.commandTypes.d: 
            case this.commandTypes.divide:
                return this.handleDivide();

            default:
                this.formatterService.printErrorMsg(ErrorsLookup.notACommandError)
                return false;
        }
    }
}