# patterns-node-sequelize

Este proyecto nacio con la finalidad de disminuir el tiempo de desarrollo de APIs
Pero para la misma, se deben cumplir ciertos requisitos.

1-Los esquemas de bases de datos deben seguir alguna nomenclatura de creación ej:
Tabla: sys_targ_01_tajeta
--campo:systarg01_descripcion
--primary-key: id_systarg01


En cuanto a la estructura de directorios en la carpeta config y posicionado en la misma desde la terminal, se encuentra todos los archivos que al ejectutarse como:
### node [nombre del archivo]

se creara los archivos correspondientes a la misma.

## Comandos disponibles

Como mencione anteriormente los comandos disponibles solamente se ejecutan si desde la terminal se encuentra dentro de la carpeta

### node configMiddleValidation.js

Este comando crea todos los archivos de validación que corresponden a saber si existe o no el foreign key de una tabla que se esta por guardar



