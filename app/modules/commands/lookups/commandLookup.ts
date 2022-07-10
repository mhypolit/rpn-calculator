import { CommandTypes } from "../enums/commandTypes";
import { Command } from "../models/command";

export const CommandLookup: Command[] = [
    {name: `-${CommandTypes.h},  --${CommandTypes.help}`, description: 'Outputs help informtion for all command for this calculator.'}
]