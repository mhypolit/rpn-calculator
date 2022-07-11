import { CommandTypes } from "../enums/commandTypes";

export const CommandLookup = {
    commandList: [
        {name: `${CommandTypes.h},  ${CommandTypes.help}`, description: 'Outputs help informtion for all command for this calculator.'}
    ],
    commandPrompt: `Please enter a number or command, press "enter" to submit: (Need Help? Type ${CommandTypes.h} or ${CommandTypes.help})\n`,
    usage: `Usage: RPN Calculator allows for easy calculation of complex math problem by utilizing stacks of number 
        and the 4 common operators (addition, subtraction, multiplication, division)\n`
}