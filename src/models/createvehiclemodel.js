
const dbConn = require('../../config/dbConfig');

//vehicle model

const vehiclemodel = function (vehicledata)
{
    this.registrationno  = vehicledata.registrationno;
    this.vehicletypename = vehicledata.vehicletypename;
    this.brand = vehicledata.brand;
    this.model = vehicledata.model;
    this.manufactureyear = vehicledata.manufactureyear;
    this.userid = vehicledata.userid;
    this.editregistration = vehicledata.editregistration;
}

// insert data 

vehiclemodel.insertvehicledata = async(vehiclereqdata, result)=>{
 
    var vehicletypeid = await new Promise((resolve,reject)=>{

             dbConn.query('select id from Vehicle_Categories where name = ?',vehiclereqdata.vehicletypename,(err,res)=>{
                resolve(res[0]['id']);
             });

    });
 
    var values = {registrationno:vehiclereqdata.registrationno,vehicletype:vehicletypeid,brand:vehiclereqdata.brand,model:vehiclereqdata.model,manufactureyear:vehiclereqdata.manufactureyear,userid:vehiclereqdata.userid};
    dbConn.query('insert into locate_vehicledata SET ?',values,(err,res)=>{
        
       
        result(null, res);

    });

}

// get vehicle data according to userid

vehiclemodel.getuservehicledata = async(reqdata,result)=>{

   
   

   
    dbConn.query('select * from locate_vehicledata where userid = ?',reqdata.userid,(err,res)=>{

        if(err)
        result(null,err);
     result(null,res)
    });
}
// get vehicle data according to reg no

vehiclemodel.getuservehicledatabyregno = async(reqdata,result)=>{

   
   

   
    dbConn.query('select * from locate_vehicledata where registrationno = ?',reqdata.registrationno,(err,res)=>{

        if(err)
        result(null,err);
     result(null,res)
    });
}

// delete vehicle

vehiclemodel.deletevehicle = (reqdata,result)=>{
    dbConn.query('delete from locate_vehicledata where userid = ? and registrationno = ?',[reqdata.userid,reqdata.registrationno],(err,res)=>{
        if(err)
         result(null,err);
        result(null,res);
    });
}

// edit vehicle

vehiclemodel.editvehicle =async (reqdata,result)=>


{
    var vehicletypeid = await new Promise((resolve,reject)=>{

        dbConn.query('select id from Vehicle_Categories where name = ?',reqdata.vehicletypename,(err,res)=>{
           resolve(res[0]['id']);
        });
    
    });
    dbConn.query('update locate_vehicledata set ? where userid = ? and registrationno = ?',[{registrationno:reqdata.editregistration,vehicletype:vehicletypeid,brand:reqdata.brand,model:reqdata.model,manufactureyear:reqdata.manufactureyear,userid:reqdata.userid},reqdata.userid,reqdata.registrationno],(err,res)=>{

        if(err)
         result(null,err);
        result(null,res);

    });
}

// get vehicle category id by registrationno
vehiclemodel.getcategoryidbyregistrationno = async(reqdata,result)=>{
    dbConn.query('select vehicletype from locate_vehicledata where registrationno = ?',reqdata.registrationno,(err,res)=>{
        if(err)
        result(null,err);
       result(null,res);
    });
}


// get vehicle model
vehiclemodel.getvehiclemodelbyregistration = (reqdata,result)=>
{
 
      dbConn.query('select model from locate_vehicledata where registrationno = ?',reqdata.registrationno,(err,res)=>{
        if(err)
        result(null,err);
       result(null,res);
      });
}



module.exports = vehiclemodel;