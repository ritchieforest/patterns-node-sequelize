# patterns-node-sequelize

Este proyecto nacio con la finalidad de disminuir el tiempo de desarrollo de APIs. Pero para la misma, se deben cumplir ciertos requisitos.

1-Los esquemas de bases de datos deben seguir alguna nomenclatura de creación ej:

Tabla: sys_targ_01_tajeta

--campo:systarg01_descripcion

--primary-key: id_systarg01

Nos quedaría sys_[cuatro letras que representen la tabla]_[numero de tabla]_[nombre de la tabla]

En cuanto a la estructura de directorios en la carpeta config y posicionado en la misma desde la terminal, se encuentra todos los archivos que al ejectutarse como:
### node [nombre del archivo]

se creara los archivos correspondientes a la misma.

## Comandos disponibles

Como mencione anteriormente los comandos disponibles solamente se ejecutan si desde la terminal se encuentra dentro de la carpeta

### node configTableAndRelationship.js
Este comando crea un archivo con todas las tablas, campos, relaciones foraneas, y su columnas referenciadas, que sera necesario para que los demas archivos  en un formato de json y lo exporta para luego ser utilizado por las demas funciones.

### node configMiddleValidation.js

Este comando crea todos los archivos de validación que corresponden a saber si existe o no el foreign key de un dato que se esta por guardar en una tabla.

### node ConfigValidation.js

Este comando crea todos los archivos que corresponden a las validaciones de express-validation dentro de la carpeta validaciones






