import { CommandService } from '../../modules/commands/services/commandService';
import { CommandTypes } from "../../modules/commands/enums/commandTypes";

describe("Test Return from Quit command", () => {
    const commandService = new CommandService();

    test("should return true to close the program...", () => {
        expect(commandService.runCommand(CommandTypes.quit)).toBeTruthy;
    });
});

describe("Test return from add command", () => {
    const commandService = new CommandService();

    test("should return false...", () => {
        expect(commandService.runCommand(CommandTypes.add)).toBeFalsy;
    });
});

describe("Test return from subtract command", () => {
    const commandService = new CommandService();

    test("should return false...", () => {
        expect(commandService.runCommand(CommandTypes.subtract)).toBeFalsy;
    });
});


describe("Test return from multiply command", () => {
    const commandService = new CommandService();

    test("should return false...", () => {
        expect(commandService.runCommand(CommandTypes.multiply)).toBeFalsy;
    });
});


describe("Test return from divide command", () => {
    const commandService = new CommandService();

    test("should return false...", () => {
        expect(commandService.runCommand(CommandTypes.divide)).toBeFalsy;
    });
});


// required with this small example
// to make the isolatedModules config happy
export {}