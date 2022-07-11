export class NumberStackService {
    public static numberStack: number[] = [];

    constructor(){}

    public addNumberToStack(command: number): void {
        NumberStackService.numberStack.push(command);
    }

    public pullNumberFromStack(): number {
        const number = NumberStackService.numberStack.pop();
        console.log(`Pulling number: ${number}`);
        return number || 0;
    }

    public removeAllNumberFromStack(): void {
        NumberStackService.numberStack.splice(0, NumberStackService.numberStack.length);
        console.log(`Removing all values`);
    }

    public showNumberStack(): void {
        NumberStackService.numberStack.forEach((value)=>{
            console.log(`${value}`);
        });
    }
}