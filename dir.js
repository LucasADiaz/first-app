const fs = require('fs');
const logger = require('./logger');


//metodo que devuelve un array con los archivos de todo el directorio './' 
getAllFiles = (path) => {
    let rootDir = fs.readdirSync(path);
    return rootDir;
}

//metodo que imprime todos los archivos de todo el directorio './' 
printAllFiles = () => {
    fs.readdir('./', (error, files) => {
        (error) ? logger.log('error es: ', error): logger.log('todas las rutas (sin parametro)', files);
    });

}




//metodo que imprime un array con los archivos del directorio seleccionado | en orden inverso
inverseOrden = (path) => {
    fs.readdir(path, (error, files) => {
        (error) ? logger.log('error es: ', error): logger.log('Imprimir en Orden Inverso', files.sort().reverse());
    });
}


//metodo que devuelve un array con los archivos del directorio seleccionado | ordenado
inOrden = (path) => {
    fs.readdir(path, (error, files) => {
        (error) ? logger.log('error es: ', error): logger.log('Imprimir en Orden', files.sort());
    });
}


// metodo que imprime la cantidad de archivos que inician con una letra ingresada por parametro
countFilesWithLetter = (path, letter) => {
    fs.readdir(path, (error, files) => {
        //si da error, lo mostramos
        if (error) {
            logger.log('error: ', error);
        } else {
            //de existir archivos, entonces contamos las coincidencias
            let count = 0;
            files.forEach(element => {
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
    getAllFiles,
    printAllFiles,
    inverseOrden,
    inOrden,
    countFilesWithLetter
}

// module.exports.getAllFiles = getAllFiles;
// module.exports.printAllFiles = printAllFiles;
// module.exports.inverseOrden = inverseOrden;
// module.exports.inOrden = inOrden;
// module.exports.countFilesWithLetter = countFilesWithLetter;