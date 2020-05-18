const fs = require('fs');
const logger = require('./logger');


//metodo que devuelve un array con los archivos de todo el directorio './' 
allFiles = () => {
    let rootDir = fs.readdirSync('./');
    logger.log('todas las rutas', rootDir);
}


//metodo que devuelve un array con los archivos del directorio seleccionado | Sync
fileSync = (path) => {
    let rootDir = fs.readdirSync(path);
    logger.log('por path | sync', rootDir);
}


//metodo que devuelve un array con los archivos del directorio seleccionado | Async
fileAsync = (path) => {
    // leer directorio / Asincrono
    fs.readdir(path, (err, files) => {
        (err) ? logger.log(err): logger.log('por path | async', files);
    });
}


//metodo que devuelve un array con los archivos del directorio seleccionado | en orden inverso
inverseOrden = (path) => {
    let rootDir = fs.readdirSync(path).reverse();
    //otra forma
    // let rootInverseOrden = rootDir.reverse();
    logger.log('Inverso | sync', rootDir);
}


//metodo que devuelve un array con los archivos del directorio seleccionado | ordenado
inOrden = (path) => {
    let rootDir = fs.readdirSync(path).sort();
    //otra forma
    // let rootInOrden = rootDir.sort();
    logger.log('En orden | sync', rootDir);
}


// si queremos controlar el error
countFilesWithLetter = (path, letter) => {
    fs.readdir(path, (error, archivos) => {
        //si da error, lo mostramos
        if (error) {
            logger.log('error: ', error);
        } else {
            //de existir archivos, entonces contamos las coincidencias
            let count = 0;
            archivos.forEach(element => {
                if (element.charAt(0) === letter) {
                    count++;
                }
            });
            logger.log(`El numero de archivos que comienzan con '${letter}' `, count);
        }
    });
}



// se exportan las funciones a utilizar como un objeto
module.exports = {
    fileSync,
    fileAsync,
    allFiles,
    inverseOrden,
    inOrden,
    countFilesWithLetter
}