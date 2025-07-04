import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const argv = yargs(hideBin(process.argv))
                    .options({
                        'b': {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicar'
                        },
                        'l': {
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'Muestra la tabla en consola'
                        },
                        'h': {
                        alias: 'hasta',
                        type: 'number',
                        default: 10,
                        describe: 'Es hasta que numero se va a multipicar'
                        }
                        })
                .check( (argv, options) => {
                    if( isNaN( argv.b) ) {
                        throw new Error('La base debe ser un numero')
                    }
                    return true;
                }  )
                .parse();