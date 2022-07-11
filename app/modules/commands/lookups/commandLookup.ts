import { CommandTypes } from "../enums/commandTypes";

export const CommandLookup = {
    commandList: [
        {name: `${CommandTypes.q},  ${CommandTypes.quit}`, description: '-Closes Program.'},
        {name: `${CommandTypes.h},  ${CommandTypes.help}`, description: '-Outputs help informtion for all command for this calculator.'},
        {name: `${CommandTypes.c},  ${CommandTypes.clear}`, description: '-Clears last number entered or calculated.'},
        {name: `${CommandTypes.cl},  ${CommandTypes.clearAll}`, description: '-Clears all numbers entered or calculated.'},
        {name: `${CommandTypes.a},  ${CommandTypes.add}`, description: '-Adds last two operands added to the stack.'},
        {name: `${CommandTypes.s},  ${CommandTypes.subtract}`, description: '-Subtract last two operands added to the stack.'},
        {name: `${CommandTypes.m},  ${CommandTypes.multiply}`, description: '-Multiply last two operands added to the stack.'},
        {name: `${CommandTypes.d},  ${CommandTypes.divide}`, description: '-Divide last two operands added to the stack.'},
    ],
    commandPrompt: `Please enter a number or command, press "enter" to submit: (Need Help? Type ${CommandTypes.h} or ${CommandTypes.help})\n`,
    usage: `Usage: RPN Calculator allows for easy calculation of complex math problem by utilizing stacks of number 
        and the 4 common operators (addition, subtraction, multiplication, division)\n`,
    adding: 'Adding numbers:',
    subtracting: 'Subtracting numbers:',
    multiplying: 'Multiplying numbers:',
    dividing: 'Dividing numbers:',
    addResult: 'Sum is:',
    subtractResult: 'Difference is:',
    multiplyResult: 'Product is:',
    divideResult: 'Quotient is: ',
}