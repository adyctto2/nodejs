// const saludar = (nombre) =>{
//     return `Saludos ${nombre}`;
// }
// console.log( saludar('Juan Fernando'));

// TEMPLATES
// let var1 = 'guido'
// let var2 = 'lopez'
// const mensaje = `${var1} ${var2}`
// console.log(mensaje)



Empleado = [
    {
        id : 1,
        nombre : 'juan'
    },
    {
        id : 2,
        nombre : 'Carlos'
    },
    {
        id : 3,
        nombre : 'Ramon'
    },
];
Salario = [
    {
        id : 1,
        salario : 1000
    },
    {
        id : 2,
        salario : 2000
    },
];
// const getEmpleado = (id, callback) => {
//     const empleado = Empleado.find(e => e.id === id)
//     if(empleado){
//         callback(null, empleado)
//     } else{
//         callback(`El empleado con id ${id} no fue encontrado`)
//     }
// }
// const getSalario = (id, callback) => {
//     const salario = Salario.find(e => e.id === id)
//     if(salario) 
//         callback(null, salario)
//     else
//         callback(`El id ${id} no existe en la lista de salarios`)
// }
// getEmpleado(6,(err, empleado) =>{
//     if(err){
//         console.log('ERROR');
//          return console.log(err);
//     }
//     getSalario(empleado.id, (err, salario) =>{
//         if(err){
//             console.log('ERROR')
//             console.log(err)
//         }
//         else{
//             console.log('el empleado:', empleado.nombre, 'tiene un salario de ', salario.salario)
//         }
//     })
// })





const getEmpleado = (id) => {
    return new Promise ( (resolve, reject) => {
        const empleado = Empleado.find(e => e.id === id);
        (empleado)? resolve(empleado): reject(`No existe el empleado con id ${id}`)
    });
};
const getSalario = (id) => {
    return new Promise ( (resolve, reject) => {
        const salario = Salario.find( e => e.id === id)?.salario;
        (salario)? resolve(salario) : reject(`No existe el salario para el id ${id}`)
    });
};
const id = 3;
// getEmpleado( id )
//     .then( empleado => {
//         nombre = empleado.nombre;
//         return getSalario(empleado.id);
//     })
//     .then( salario => {
//         console.log(`El empleado con nombre: ${nombre} tiene un salario de: ${salario}`);
//     })
//     .catch( err => console.log(err));

const getInfoUser = async() => {
    try {
        let  empleado = await getEmpleado(id);
        let salario = await getSalario(empleado.id);
        return `El salario del empleado ${empleado.nombre} es de ${salario}`;
    } catch (error) {
        throw(error);        
    }
}
getInfoUser(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));
