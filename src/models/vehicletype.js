const dbConn = require('../../config/dbConfig');


const vehicletypemodel = function(vehicletypedata)
{
     this.typename = vehicletypedata.typename;
     this.id = vehicletypedata.id;
}

// get vehicletype data

vehicletypemodel.getvehcieltype = (result)=>
{

    dbConn.query('select * from Vehicle_Categories where name = ? or name = ? or name = ?',['Bikes','Cars','3 Wheelers'],(err,res)=>{
        if(err)
        result(null,err);
     result(null,res);
    });   
}

// get vehile type by id
vehicletypemodel.getvehcieltypebyid = (reqdata,result)=>
{

    dbConn.query('select * from Vehicle_Categories where id = ?',reqdata.id,(err,res)=>{
        if(err)
        result(null,err);
     result(null,res);
    });   
}


// get vehicle type id by name
vehicletypemodel.getvehicleytypeidbyname = (reqdata,result)=>
{
    dbConn.query('select id from Vehicle_Categories where name = ?',reqdata.typename,(err,res)=>{
        if(err)
        result(null,err);
     result(null,res)
    });
}
module.exports = vehicletypemodel;