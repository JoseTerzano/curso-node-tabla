import { writeFileSync } from 'node:fs';
import 'colors';
export const crearArchivo = async( base = 5, listar, hasta ) => {
    try {
        
        let salida, consola = '';
        
        
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.trap} ${i} = ${base * i}\n`.gray;
        };
        
        if (listar){
            console.log('=============='.green);
            console.log(`Tabla del ${base}`.rainbow);
            console.log('=============='.green);
            console.log(consola);
        }
        
        writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt creada`;
        
    } catch (error) {
        throw error;
    }
    
};




// const crearArchivo = (base = 5) => {

//     return new Promise ((resolve, reject) => {

//         console.log('==============');
//         console.log(`Tabla del ${base}`);
//         console.log('==============');
    
//         let salida = '';
        
    
//         for (let i = 1; i < 11; i++) {
//             salida += `${base} x ${i} = ${base * i}\n`;
//         };
    
//         console.log(salida);
    
//         writeFileSync(`tabla-${base}.txt`, salida);
    
//         resolve(`tabla-${base}.txt creada`);


//     })

// };