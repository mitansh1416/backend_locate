const dbConn = require('../../config/dbConfig');

var brandsmodel = function (brandsdata)
{
 
     this.idcategory = brandsdata.idcategory;
     this.brandname = brandsdata.brandname;
    

}

// get brands according to category id

brandsmodel.getbrandsbycategoryid = (reqdata,result)=>
{
    dbConn.query('select * from vehicle_brands where vehicle_category_id = ?',reqdata.idcategory,(err,res)=>{
      
        if(err)
        result(null,err);
       result(null,res);

    });
}

// get brand id by brand name

brandsmodel.getidbybrandname = (reqdata,result)=>
{
    dbConn.query('select id from vehicle_brands where name = ?',reqdata.brandname,(err,res)=>{

        if(err)
        result(null,err);
       result(null,res);
    })
}


module.exports = brandsmodel;