const dbConn = require('../../config/dbConfig');

var servicemodle = function(servicedata)
{
    this.service = servicedata.service;
    this.status   = servicedata.status;
}


// get status

servicemodle.getgaragehailingstatus = (reqdata,result)=>{

    dbConn.query('select * from locate_toggle where service = ? ',reqdata.service,(err,res)=>{
            
         if(err)
          result(null,err)
        result(null,res);

    });
}

module.exports = servicemodle;