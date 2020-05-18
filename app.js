const dir = require('./dir');
const logger = require('./logger');


//crear un metodo que se obtenga todos los archivos, que se mande por path
arreglo = dir.getAllFiles('./');
logger.log('el arreglo resultante es : ', arreglo);


//crear un metodo para hacer un print de todos los archivos
dir.printAllFiles('./')


//a partir de todos los archivos, hacer un sort y despues imprimirlo | se lo realizo con sort y reverse
dir.inOrden('./');
dir.inverseOrden('./');


//log de la cantidad de archivos que empiecen con una letra en particular
dir.countFilesWithLetter('./', 'a');