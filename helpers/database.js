const sequelize=require("../database")
const findDataByTable = async (tabla,column, where) => {
    try {        
        let sql = "SELECT " + column + " AS ID FROM " + tabla + " WHERE "
        for (const key in where) {
            if (Object.hasOwnProperty.call(where, key)) {
                sql+=" id_"+key.split("_")[1]+"='"+where[key]+"' AND ";
            }
        }
        sql=sql.substr(0,sql.length-5);
        const query=await sequelize.query(sql);
        if(query[0].length>0){
            const result=JSON.parse(JSON.stringify(query[0],null,2))
            return result
        }else{
            return null
        }
    } catch (error) {
        console.log({
            "status": false,
            "error": error.message,
            "code": error.code
        })
    }
}
//writeCodeTable();
module.exports={
    findDataByTable:findDataByTable
}