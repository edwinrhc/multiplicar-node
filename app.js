//  es un paquete
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const {
    crearArchivo, listarTabla
} = require('./multiplicar/multiplicar');

let comando = argv._[0];

// console.log(argv);

switch (comando) {

    case 'listar':
    listarTabla(argv.base, argv.limite);
        console.log('Listar');
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green( archivo )))
            .catch(e => console.log(e));
        console.log('Crear');
        break;
    default:
        console.log('Comando no reconocido');

}


// console.log(process.argv);

// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];


// console.log(argv);

// console.log('Limite', argv.limite);