const sequelize=require("../database")
const fs=require("fs")
const array=[];

const ArrayObjectToString=async(object)=>{
    let result="{";
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
            result=""+result+key+":\r"+JSON.stringify(element)+",\r"
        }
    }
    result=result+"}";
    return result;
}
const allTables = async()=>{
    const result=[];
    const all=await sequelize.query('show tables');
    const tables=JSON.parse(JSON.stringify(all[0],null,2))
    for (let index = 0; index < tables.length; index++) {
        const element = Object.entries(tables[index])[0][1];
        result.push(element)
    }
    return result;
}
const allColumnasByTable=async()=>{
    const listCol=array;
    const tables =await allTables();
    for (let index = 0; index < tables.length; index++) {
        let obj={}
        const all=await sequelize.query('SHOW COLUMNS FROM '+tables[index]);
        obj["columns"]=JSON.parse(JSON.stringify(all[0],null,2));
        obj["allTablesReferenced"]=await allForeignKeyByTabla(tables[index]);
        obj["allRelationReferenced"]=await allRelationKeyByTabla(tables[index]);

        listCol[tables[index]]=obj
    }
    return listCol;
}
const allForeignKeyByTabla=async(table)=>{
    let query=`SELECT
    TABLE_NAME,
    COLUMN_NAME,
    CONSTRAINT_NAME,
    REFERENCED_TABLE_NAME,
    REFERENCED_COLUMN_NAME
FROM
    INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE
	REFERENCED_TABLE_SCHEMA = 'tanjiro_system'
    AND REFERENCED_TABLE_NAME = '${table}'`
    const all=await sequelize.query(query);
    const listTableRef=JSON.parse(JSON.stringify(all[0],null,2))
    return listTableRef;
}
const allRelationKeyByTabla=async(table)=>{
    let query=`SELECT
    TABLE_NAME,
    COLUMN_NAME,
    CONSTRAINT_NAME,
    REFERENCED_TABLE_NAME,
    REFERENCED_COLUMN_NAME
FROM
    INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE
	REFERENCED_TABLE_SCHEMA = 'tanjiro_system'
    AND TABLE_NAME = '${table}'`
    const all=await sequelize.query(query);
    const listTableRef=JSON.parse(JSON.stringify(all[0],null,2))
    return listTableRef;
}
const writeCodeTable=async()=>{
    const allCol=await allColumnasByTable();

    let allColParsed=await ArrayObjectToString(allCol);
    const contenido=`
    
    const allTables=${allColParsed}
    
    module.exports=allTables;
    `;
    fs.writeFile("../services/tools/tables.js", contenido, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
          console.log("The written has the following contents:");
          //console.log(fs.readFileSync("tables.js", "utf8"));
        }
    });
}
writeCodeTable()
