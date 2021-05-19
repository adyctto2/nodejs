const fs = require("fs");

// const crearArchivo = (base  = 5) => {
//     return new Promise ( (resolve, reject) => {
//         console.log('=============================');
//         console.log(`TABLA DEL ${base}`);
//         console.log('=============================');
//         let salida = '';
//         for (let index = 1; index <= 10; index++){
//             salida += `${base} x ${index} = ${index*base}\n`;
//         }
//         console.log(salida);
//         fs.writeFileSync(`tabla-${base}.txt`, salida);
//         resolve(`tabla-${base}.txt`);
//     });
// }

const crearArchivo = async (base  = 5) => {
    try {
        
        console.log('=============================');
        console.log(`TABLA DEL ${base}`);
        console.log('=============================');
        let salida = '';
        for (let index = 1; index <= 10; index++){
            salida += `${base} x ${index} = ${index*base}\n`;
        }
        console.log(salida);
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (error) {
        console.log(err)
    }
}
module.exports = {
    crearArchivo
}