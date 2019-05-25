const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', options)
    .command('crear', 'Crea la tabla de multiplicar', options)
    .help()
    .argv;

module.exports = {
    argv
}