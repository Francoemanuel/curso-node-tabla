const argv = require('yargs')
            .option('b',{
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base de la tabla de multiplicar'
            })
            .option('l',{
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe: 'Muestra la tabla en la consola'
            })
            .option('h',{
                alias: 'hasta',
                type: 'number',
                demandOption: true,
                describe: 'Hasta que numero multiplico?'
            })
            .check( (argv, options) => {
                if(isNaN(argv.b)){
                    throw 'La base tiene que ser un numero'
                }
                if(argv.h > 20){
                    throw 'Ingrese un numero menor'
                }
                return true;
            })
            .argv;

module.exports = argv;