import { crearArchivo } from './helpers/multiplicar.js';
import { argv } from './config/yargs.js';

console.clear();

console.log('base: yargs 👉', argv.b);

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo, 'nombreArchivo'))
    .catch( err => console.log(err) )