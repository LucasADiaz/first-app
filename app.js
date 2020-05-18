const logger = require('./logger');
const dir = require('./dir');



//crear un metodo que se obtenga todos los archivos, que se mande por path

dir.fileSync('./');
dir.fileAsync('./');

//crear un metodo para hacer un print de todos los archivos

dir.allFiles();

//a partir de todos los archivos, hacer un sort y despues imprimirlo

dir.inOrden('./');

// console.log('invertido | reverse');
// dir.inverseOrden('./');

//log de la cantidad de archivos que empiecen con una letra en particular
dir.countFilesWithLetter('./', 'a');