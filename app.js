const logger = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs');

// se comprueba las rutas
let pathObj = path.parse(__filename);

logger.log('path', pathObj);

// Memoria libre y ocupada
let freeMem = os.freemem();
let totalMem = os.totalmem();

logger.log(freeMem, totalMem);

// leer directorio | Sincrono

let rootDir = fs.readdirSync('./')


// leer directorio / Asincrono
fs.readdir('./', (err, files) => {
    (err) ? console.log(err): console.log('async', files);
});

console.log('sync', rootDir);