const { options } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('yargs')
                .option('b',{
                    alias : 'base',
                    type : 'number',
                    demandOption : true
                })
                .check( (argv, options) => {
                    if( isNaN(arg.a)){
                        throw 'la base tiene que ser un numero'
                    }
                    return true;
                })
                .argv;
console.clear();
// const[,,arg] = process.argv;
// const[,base = 5] = arg.split('=');

console.log(argv.base);

// const base = 8;
// crearArchivo( base )
// .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
// .catch(err => console.log(err));