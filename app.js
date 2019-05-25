const argv = require('./config/yargs').argv;
const { crearArchivo, listar } = require('./multiplicar/mult');

let command = argv._[0];
switch (command) {
    case "listar":
        listar(argv.base, argv.limit);
        break;
    case "crear":
        crearArchivo(argv.base, argv.limit)
            .then(archivo => console.log(archivo))
            .catch(err => console.log(err));
        break;
    default:
        console.log("Comando no reconocido");
        break;
}