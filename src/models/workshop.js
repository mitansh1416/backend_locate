const dbConn = require('../../config/dbConfig');



var workshopmodel = function(workshopdata)
{
    this.id = workshopdata.id;
    this.workshopname = workshopdata.workshopname;
    this.address = workshopdata.address;
    this.lat = workshopdata.lat;
    this.long = workshopdata.long;
    this.mobileno = workshopdata.mobileno;
    this.city = workshopdata.city;
}

// get all workshop
workshopmodel.getworkshopdata = (result)=>
{

   

    dbConn.query('select workshops.id,workshops.shop_name,locations.address_1,locations.latitude,locations.longitude,workshops.phone_number,workshops.vehicle_category_id from workshops inner join locations on workshops.id = locations.workshop_id',(err,res)=>{

          
        if(err)
           result(null,err);
       result(null,res);
    });

}


// get workshop data by id
workshopmodel.getworkshopbyid = (reqdata,result)=>
{
    dbConn.query('select workshops.id,workshops.shop_name,locations.address_1,locations.latitude,locations.longitude,workshops.phone_number,workshops.vehicle_category_id from workshops inner join locations on workshops.id = locations.workshop_id where workshops.id = ?',reqdata.id,(err,res)=>{
        if(err)
        result(null,err);
    result(null,res);
    });
}

// get workshop data by cityname
workshopmodel.getworkshopbycityname = (reqdata,result)=>{
    dbConn.query('select workshops.id,workshops.shop_name,locations.address_1,locations.latitude,locations.longitude,workshops.phone_number,locations.city,workshops.vehicle_category_id from workshops inner join locations on workshops.id = locations.workshop_id where locations.city = ?',reqdata.city,(err,res)=>{
        if(err)
        result(null,err);
    result(null,res);
    });
}


module.exports = workshopmodel;

