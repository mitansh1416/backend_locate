const dbConn = require('../../config/dbConfig');

var variantsmodel = function (variantsdata)
{
 
     this.idbrand = variantsdata.idbrand;
    

}

// get brands according to category id

variantsmodel.getvariantsbybrandid = (reqdata,result)=>
{
    dbConn.query('select * from vehicle_variants where vehicle_brand_id = ?',reqdata.idbrand,(err,res)=>{
      
        if(err)
        result(null,err);
       result(null,res);

    });
}


module.exports = variantsmodel;