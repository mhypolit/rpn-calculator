import { Operands } from '../models/operands';
import { FormatterService } from '../../formatter/services/formatterService';
import { ErrorsLookup } from '../../shared/lookups/errorsLookup';

export class NumberStackService {
    private readonly formatterService: FormatterService = new FormatterService();
    public static numberStack: number[] = [];

    constructor(){}

    public addNumberToStack(value: number): void {
        NumberStackService.numberStack.push(value);
    }

    public pullNumberFromStack(): number | undefined {
        const number = NumberStackService.numberStack.pop();
        console.log(`Pulling number: ${number}`);
        return number;
    }

    public removeAllNumberFromStack(): void {
        NumberStackService.numberStack.splice(0, NumberStackService.numberStack.length);
        console.log(`Removing all values`);
    }

    public showNumberStack(): void {
        NumberStackService.numberStack.forEach((value, i)=>{
            if (i == NumberStackService.numberStack.length - 1) {
                console.log(`> ${value}`);
            } else {
                console.log(`${value}`);
            }
        });
    }

    public getOperands(): Operands | null {
        let operands: Operands = {
            numberA: undefined,
            numberB: undefined
        };

        if (NumberStackService.numberStack.length <= 1) {
            this.formatterService.printErrorMsg(ErrorsLookup.noOperandsError);
        } else {     
            operands.numberA = this.pullNumberFromStack();
            operands.numberB = this.pullNumberFromStack();
        }
        
        const notAFullStack: Boolean =  operands.numberA == undefined || operands.numberB == undefined;
        return notAFullStack ? null : operands;
    }

    public reverseOperands(operands: Operands): void {
        this.addNumberToStack(operands.numberB || 0);
        this.addNumberToStack(operands.numberA || 0);
    }
}