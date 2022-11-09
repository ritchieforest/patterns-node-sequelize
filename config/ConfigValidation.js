const fs=require("fs");
const { type } = require("os");
const allTables=require("../services/tools/tables");

const casePropertyValue=(type)=>{
    let cadena="";
    let type_case=type.Type.indexOf("(")>0?type.Type.substring(0,type.Type.indexOf("(")):type.Type;
    let size=type.Type.indexOf("(")>0?type.Type.substring(type.Type.indexOf("(")+1,type.Type.indexOf(")")):null;
    switch (type_case) {
        case "varchar":
            cadena+=" \n\t\t"+type.Field+": Joi.string()\n\t\t\t"
            cadena+=type.Null==='NO'?".required()\n\t\t\t":'';
            cadena+=".min(1).max("+size+")\n\t\t\t";
            cadena+=".regex(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/),\n\t\t\t"
            break;
        case "int":
            cadena+=" \n\t\t"+type.Field+": Joi.number()\n\t\t\t"
            cadena+=type.Null==='NO'?".required()\n\t\t\t":'';
            cadena+=".integer()\n\t\t\t";
            cadena+=".min(1),\n\t\t\t";
            break; 
        case "datetime":
            cadena+=" \n\t\t"+type.Field+": Joi.date()\n\t\t\t"
            cadena+=type.Null==='NO'?".required()\n\t\t\t":'';
            cadena+=".raw(),\n\t\t\t";
            break;
        case "decimal":
            cadena+=" \n\t\t"+type.Field+": Joi.number()\n\t\t\t"
            cadena+=type.Null==='NO'?".required()\n\t\t\t":'';
            cadena+=".min(1)\n\t\t\t";
            cadena+=".precision(2)\n\t\t\t,";
            break;
        default:
            break;
    }
    return cadena;
}

const allValidateToString=(object)=>{
    let cadenaAdd="";
    let cadenaUpdate="";
    let cadenaDrop="";
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key]["columns"];
            for (let index = 0; index < element.length; index++) {
                const fields = element[index];
                if(fields.Key=="PRI"){
                    cadenaUpdate+=casePropertyValue(fields)
                    cadenaDrop+=casePropertyValue(fields)
                }else{
                    cadenaAdd+=casePropertyValue(fields)
                    cadenaUpdate+=casePropertyValue(fields)
                }
            }
const contenido=`
const { ValidationError, Joi } = require('express-validation')

const ${key}Add = {
    body: Joi.object({
        ${cadenaAdd}
    })
}
const ${key}Update = {
    body: Joi.object({
        ${cadenaUpdate}
    })
}
const ${key}Drop = {
    body: Joi.object({
        ${cadenaDrop}
    })
}
module.exports={
    "add${key}": ${key}Add,
    "update${key}":${key}Update,
    "delete${key}": ${key}Drop
}

`;
            let nombre_archivo="../validation/"+key+".js"
            fs.writeFile(nombre_archivo, contenido, (err) => {
                if (err)
                    console.log(err);
                else {
                    console.log("File written successfully\n");
                    console.log("The written has the following contents:");
                    //console.log(fs.readFileSync("tables.js", "utf8"));
                }
            });
            cadenaAdd="";
            cadenaDrop="";
            cadenaUpdate="";
        }
    }
 
}
allValidateToString(allTables);

// module.exports={
//     allValidateToString:allValidateToString,
// }


