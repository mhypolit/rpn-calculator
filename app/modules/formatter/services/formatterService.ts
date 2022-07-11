export class FormatterService {
    constructor(){}

    public formatHeader(title: string){
        const figlet = require('figlet');
        const chalk = require('chalk');

        console.log(
            chalk.blue(
                figlet.textSync(title, {
                    font: 'Slant'
                })
            )
        );
    }

    public printErrorMsg(msg: string){
        const chalk = require('chalk');

        console.log(chalk.red(
            msg
        ));
    }

    public printNewLine(){
        console.log('\n'); 
    }

    public printDivider(){
        console.log('------------------------------------------------------------------------------------------------------------');
    }
}