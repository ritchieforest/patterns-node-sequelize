const fs=require("fs");
const { type } = require("os");
const allTables=require("../services/tools/tables");

const allFormedMiddleValidation=async(object)=>{
    let bool=false
    for (const key in object) {
        let verifyData="const verifyDataRelation"+key.substr(12,key.length).charAt(0).toUpperCase()+key.substr(13,key.length).replace("_",'')+"=async(req,res,next)=>{\n try{\n";
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key]["allRelationReferenced"];
            if(element.length==0){
                bool=true
            }
            verifyData+="   if(!Object.keys(req.body).includes('detalle')){\n";
            for (let index = 0; index < element.length; index++) {  
                verifyRequire="const "
                verifyData+="       if(Object.keys(req.body).includes('fk_"+element[index].REFERENCED_COLUMN_NAME.split("_")[1]+"')){\n";
                verifyData+="           const verifyData=await findDataByTable('"+element[index].REFERENCED_TABLE_NAME+"','"+element[index].REFERENCED_COLUMN_NAME+"',{'"+element[index].REFERENCED_COLUMN_NAME+"':req.body.fk_"+element[index].REFERENCED_COLUMN_NAME.split("_")[1]+"})\n";
                verifyData+="           if(verifyData==null) throw new Error('No esta referenciado a '+req.body.fk_"+element[index].REFERENCED_COLUMN_NAME.split("_")[1]+"+' la informacion enviada: '+"+element[index].REFERENCED_COLUMN_NAME.split("_")[1]+")\n"
                verifyData+="       }else{\n"
                verifyData+="           throw new Error(' Verifique la informacion enviada de "+element[index].REFERENCED_TABLE_NAME.substring(12,element[index].REFERENCED_TABLE_NAME.length)+"')\n"
                verifyData+="       }\n\n"
            }
           verifyData+="   }\n"
           verifyData+="   next();\n"
           verifyData+=" }catch (e) {\n"
           verifyData+="    return {\n"
           verifyData+="        'status':false,'message':'Dato no encontrado','debug':e.message\n"
           verifyData+="    }\n"
           verifyData+=" }\n"
           verifyData+="}"

           if(bool==false){
                const generarArchivo=await allGenerateArchive(key,verifyData)
           }
           verifyData="";
           bool=false
        }
    }
}
const allGenerateArchive=async(tabla,code)=>{
    const contenido=`
    
const {findDataByTable}=require("../helpers/database");

${code}

module.exports={
    verifyDataRelation${tabla.substr(12,tabla.length).charAt(0).toUpperCase()+tabla.substr(13,tabla.length).replace("_",'')}:verifyDataRelation${tabla.substr(12,tabla.length).charAt(0).toUpperCase()+tabla.substr(13,tabla.length).replace("_",'')}
};
    `;
    fs.writeFile("../middleware/"+tabla+".js", contenido, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
          console.log("The written has the following contents:");
          //console.log(fs.readFileSync("tables.js", "utf8"));
        }
    });
}

allFormedMiddleValidation(allTables)