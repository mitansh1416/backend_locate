const vehiclemodel = require('../models/createvehiclemodel');
const usermodel = require('../models/userdata');
const transactionmodel = require('../models/createtransaction');
const workshopmodel = require('../models/workshop');
const servicemodel = require('../models/serviceoffered');
const vehicletypemodel = require('../models/vehicletype');
const servicemodelstatus = require('../models/service');
const bookingmodel = require('../models/booking');
const brandsmodel = require('../models/brands');
const variantsmodel = require('../models/variants');
// create user  vehicle 

exports.createuservehicle = (req, res) => {

  const reqdata = new vehiclemodel(req.body);

  vehiclemodel.insertvehicledata(reqdata, (err, data) => {
      if (err)
          res.send(err);
      res.send({ status: true, message: "user vehicle   created", data: data });

  });
}
// get vehicle data by  user id

exports.getvehicledata = (req,res)=>{


   const reqdata = new vehiclemodel(req.body);

   vehiclemodel.getuservehicledata(reqdata,(err,data)=>{

       if(err)
          res.send(err);
      res.send(data);
   });


}

// get vehicle data by  reg no

exports.getvehicledatabyregno = (req,res)=>{


  const reqdata = new vehiclemodel(req.body);

  vehiclemodel.getuservehicledatabyregno(reqdata,(err,data)=>{

      if(err)
         res.send(err);
     res.send(data);
  });


}

// register locate user

exports.registerlocateuser = (req,res)=>{

 const reqdata = new usermodel(req.body);

  usermodel.createlocateuser(reqdata,(err,data)=>{

       
        if(err)
          res.send(err);
        res.send({ status: true, message: " locate  user created", data: data });
  });    




}

// create transaction

exports.createrequest = (req,res)=>{

 const reqdata = new transactionmodel(req.body);
 transactionmodel.createrequest(reqdata,(err,data)=>{


 
   
      if(err)
         res.send(err);
      res.send({ status: true, message: " request created", data: data });




 });


}

// update request
 
exports.updaterequest = (req,res)=>{

 
    const reqdata = new transactionmodel(req.body);
    transactionmodel.updaterequest(reqdata,(err,data)=>{


    
        
      if(err)
      res.send(err);
   res.send({ status: true, message: " request updated", data: data });





    });




}
// update request by worskhop id
exports.updaterequestworkshop = (req,res)=>{

 
  const reqdata = new transactionmodel(req.body);
  transactionmodel.updaterequestworkshopid(reqdata,(err,data)=>{


  
      
    if(err)
    res.send(err);
 res.send({ status: true, message: " request updated", data: data });





  });




}
// update workshop status
exports.updateworkshopstatus = (req,res)=>{
  const reqdata = new transactionmodel(req.body);
  transactionmodel.updateworkshopstatus(reqdata,(err,data)=>{
       
    if(err)
    res.send(err);
 res.send({ status: true, message: " request updated", data: data });
  });
}
// get request by user id

exports.checkrequestuserid = (req,res)=>
{
  const reqdata = new  transactionmodel(req.body);
  transactionmodel.checkrequestbyid(reqdata,(err,data)=>{
    if(err)
      res.send(err);
    res.send(data);
  });
}

//check request
exports.checkrequest = (req,res)=>{
  transactionmodel.checkrequest((err,data)=>{
    if(err)
      res.send(err);
    res.send(data);
  });
}

// get workshop data
exports.getworkshopdata = (req,res)=>{
  workshopmodel.getworkshopdata((err,data)=>{
    if(err)
    res.send(err);
  res.send(data);
  });
}

// get worskhop by id
exports.getworskhopbyid = (req,res)=>
{
  const reqdata = new  workshopmodel(req.body);
  workshopmodel.getworkshopbyid(reqdata,(err,data)=>{


     
    if(err)
    res.send(err);
  res.send(data);



  });
}

// get worskhop by cityname
exports.getworskhopbycityname = (req,res)=>
{
  const reqdata = new  workshopmodel(req.body);
  workshopmodel.getworkshopbycityname(reqdata,(err,data)=>{


     
    if(err)
    res.send(err);
  res.send(data);



  });
}

// get workshop status 
exports.getworkshopstatus = (req,res)=>{
  const reqdata = new  transactionmodel(req.body);
  transactionmodel.checkworkshopstatus(reqdata,(err,data)=>{
    if(err)
      res.send(err);
    res.send(data);
  });
}


//get service data

exports.getservicedata = (req,res)=>{
  servicemodel.getservicedata((err,data)=>{
    if(err)
    res.send(err);
  res.send(data);
  });
}

// get vehicle type

exports.getvehicletype = (req,res)=>{
  vehicletypemodel.getvehcieltype((err,data)=>{
    if(err)
    res.send(err);
  res.send(data);
  });
}

// get user data
exports.getuserdata = (req,res)=>{
  const reqdata = new usermodel(req.body);
  usermodel.getuserdata(reqdata,(err,data)=>{
    if(err)
      res.send(err);
    res.send(data);
  });
}
// get user data by id
exports.getuserdatabyid = (req,res)=>{
  const reqdata = new usermodel(req.body);
  usermodel.getuserdatabyid(reqdata,(err,data)=>{
    if(err)
      res.send(err);
    res.send(data);
  });
}

// get history
exports.gethistory = (req,res)=>{
  const reqdata = new transactionmodel(req.body);
  transactionmodel.gethistory(reqdata,(err,data)=>{
    if(err)
    res.send(err);
  res.send(data);
  });
}

// delete user vehicle
exports.deletevehicle = (req,res)=>
{
  const reqdata = new vehiclemodel(req.body);
  vehiclemodel.deletevehicle(reqdata,(err,data)=>{
    if(err)
    res.send(err);
 res.send({ status: true, message: "deleted", data: data });
  });
}

// edit user vehicle 

exports.edituservehicle = (req,res)=>
{
  const reqdata = new vehiclemodel(req.body);
  vehiclemodel.editvehicle(reqdata,(err,data)=>{
    if(err)
    res.send(err);
 res.send({ status: true, message: "edited", data: data });
  });
}

// get garagehailing service status

exports.getgargagehailingstatus = (req,res)=>{
  const reqdata = new servicemodelstatus(req.body);
  servicemodelstatus.getgaragehailingstatus(reqdata,(err,data)=>{
    if(err)
     res.send(err);
    res.send(data);
  });
}

// get vehicle type by id

exports.getvehicletypebyid = (req,res)=>{
  const reqdata = new vehicletypemodel(req.body);
  vehicletypemodel.getvehcieltypebyid(reqdata,(err,data)=>{
    if(err)
     res.send(err);
    res.send(data);
  });
}
// get vehicle type id by name

exports.getvehicletypeidbyname = (req,res)=>{
  const reqdata = new vehicletypemodel(req.body);
  vehicletypemodel.getvehicleytypeidbyname(reqdata,(err,data)=>{
    if(err)
     res.send(err);
    res.send(data);
  });
}

// get vehicle category by registrationno 

exports.getvehicletypebyregistrationno = (req,res)=>
{
  const reqdata = new vehiclemodel(req.body);
  vehiclemodel.getcategoryidbyregistrationno(reqdata,(err,data)=>{
    if(err)
    res.send(err);
   res.send(data);
  });
}

// create booking request

exports.createbookingrequest = (req,res)=>
{
  const reqdata = new bookingmodel(req.body);
  bookingmodel.createbooking(reqdata,(err,data)=>{
    if(err)
    res.send(err);
 res.send({ status: true, message: "Booking request created", data: data });
  });
}


// check booking request

exports.checkbookingrequest = (req,res)=>{

 
   const reqdata = new bookingmodel(req.body);
   bookingmodel.checkbookingstatus(reqdata,(err,data)=>{

    
     
    if(err)
    res.send(err);
   res.send(data);
    

   });

}

// update booking status

exports.updatebookingstatus = (req,res)=>{
  const reqdata = new bookingmodel(req.body);
  bookingmodel.updatebookingrequest(reqdata,(err,data)=>{
    if(err)
    res.send(err);
 res.send({ status: true, message: "Booking request updated", data: data });
  });
}

// get booking data by user id
exports.getbookingbyuserid = (req,res)=>
{
  const reqdata = new bookingmodel(req.body);
  bookingmodel.getbookingbyuserid(reqdata,(err,data)=>{
    if(err)
    res.send(err);
   res.send(data);
    
  });
}

// get vehicle model by registration no
exports.getvehiclemodelbyregistration = (req,res)=>
{
  const reqdata = new vehiclemodel(req.body);
  vehiclemodel.getvehiclemodelbyregistration(reqdata,(err,data)=>{
       if(err)
        res.send(err);
      res.send(data);
  });
}

// get brands by vehicle category

exports.getbrandsbycategoryid = (req,res)=>
{
  const reqdata = new brandsmodel(req.body);
  brandsmodel.getbrandsbycategoryid(reqdata,(err,data)=>{
    if(err)
    res.send(err);
  res.send(data);
  });
}
// get brand id by name
exports.getidbybrandname = (req,res)=>
{
  const reqdata = new brandsmodel(req.body);
  brandsmodel.getidbybrandname(reqdata,(err,data)=>
  {
    if(err)
    res.send(err);
  res.send(data);
  });
}

// get variants by brand id
exports.getvariantsbybrandid = (req,res)=>
{
  const reqdata = new variantsmodel(req.body);
  variantsmodel.getvariantsbybrandid(reqdata,(err,data)=>{
    if(err)
    res.send(err);
  res.send(data);
  });
}