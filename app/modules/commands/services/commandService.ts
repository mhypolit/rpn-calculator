import { CommandTypes } from "../enums/commandTypes";
import { CommandLookup } from "../lookups/commandLookup";
import { Command } from "../models/command";

export class CommandService{
    constructor(){}

    public runCommand(commands: CommandTypes){
        if (commands == CommandTypes.help){
           console.log(`Usage: RPN Calculator allows for easy calculation of complex math problem by utilizing stacks of number 
                        and the 4 common operators (addition, subtraction, multiplication, division)`);
           console.log('');
           console.log('Commands:')
           CommandLookup.forEach((command: Command) => {
                console.log(`${command.name}   ${command.description}`);
           });
        }
    }
}