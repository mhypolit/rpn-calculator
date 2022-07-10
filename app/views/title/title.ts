export class Title{
    constructor(){}

    public showTitle(title: string){
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
}