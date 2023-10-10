const dbConn = require('../../config/dbConfig');


const servicemodel = function(servicedata)
{
     this.servicename = servicedata.servicename;
}

// get service data

servicemodel.getservicedata = (result)=>
{

    dbConn.query('select * from locate_serviceoffered',(err,res)=>{
        if(err)
        result(null,err);
     result(null,res);
    });   
}

module.exports = servicemodel;