const fs = require('fs');

let listar = (base, limit) => {
    console.log(mult(base, limit));
}

let mult = (base, limit) => {
    let data = '';
    for (let i = 1; i <= limit; i++) {
        data += (`${base} * ${i} = ${base*i}\n`);
    }
    return data;
}

let crearArchivo = (base, limit) => {
    return new Promise((resovle, reject) => {
        if (!Number(base)) {
            reject('No es un número');
            return;
        }
        let data = mult(base, limit);
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resovle(`tablas/tabla-${base}.txt`)
        });
    });
}

module.exports = {
    crearArchivo,
    listar
}