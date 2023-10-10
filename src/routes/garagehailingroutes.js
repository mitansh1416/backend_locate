const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

//Main  route

router.get('/',(req,res)=>{

    res.send("Server Base URL");
});

//import controller
const garagehailingcontroller = require('../controllers/garagecontroller');

// create user vehicle

router.post('/createvehicle',garagehailingcontroller.createuservehicle);

// get user vehicle by user id

router.post('/getuservehicle',garagehailingcontroller.getvehicledata);

// get user vehicle by reg no

router.post('/getuservehiclebyregno',garagehailingcontroller.getvehicledatabyregno);


// register locate user

router.post('/registeruser',garagehailingcontroller.registerlocateuser);

// create request

router.post('/createrequest',garagehailingcontroller.createrequest);

// update request

router.post('/updaterequest',garagehailingcontroller.updaterequest);

// update request

router.post('/updaterequestbyworkshopid',garagehailingcontroller.updaterequestworkshop);

// check request

router.get('/checkrequest',garagehailingcontroller.checkrequest);

// check request by id

router.post('/checkrequestbyid',garagehailingcontroller.checkrequestuserid);

// get workshop data

router.get('/getworkshopdata',garagehailingcontroller.getworkshopdata);

// update workshop status

router.post('/updateworkshopstatus',garagehailingcontroller.updateworkshopstatus);

// get workshop data by id
router.post('/getworkshopbyid',garagehailingcontroller.getworskhopbyid);

// get workshop data by city name
router.post('/getworkshopbycityname',garagehailingcontroller.getworskhopbycityname);
// get workshop status
router.post('/getworkshopstatus',garagehailingcontroller.getworkshopstatus);

// get service data
router.get('/getservicedata',garagehailingcontroller.getservicedata);
// get vehcile type data
router.get('/getvehicletype',garagehailingcontroller.getvehicletype);
// get vehcile type data by id
router.post('/getvehicletypebyid',garagehailingcontroller.getvehicletypebyid);
// get vehcile type  id by name
router.post('/getvehicletypeidbyname',garagehailingcontroller.getvehicletypeidbyname);
// get user data
router.post('/getuserdata',garagehailingcontroller.getuserdata);
// get user data by id
router.post('/getuserdatabyid',garagehailingcontroller.getuserdatabyid);
// get history
router.post('/gethistory',garagehailingcontroller.gethistory);
// delete vehicle
router.post('/deletevehicle',garagehailingcontroller.deletevehicle);

// edit vehicle
router.post('/editvehicle',garagehailingcontroller.edituservehicle);
// get hailing status
router.post('/gethailingstatus',garagehailingcontroller.getgargagehailingstatus);
// get vehicle type by registration no
router.post('/getvehicletypebyregistrationno',garagehailingcontroller.getvehicletypebyregistrationno);
// create booking request
router.post('/createbookingrequest',garagehailingcontroller.createbookingrequest);
// check booking rrquest
router.post('/checkbookingrequest',garagehailingcontroller.checkbookingrequest);
//update booking update
router.post('/updatebookingstatus',garagehailingcontroller.updatebookingstatus);
// get booking data by user id
router.post('/getbookingbyuserid',garagehailingcontroller.getbookingbyuserid);
// get vehicle model
router.post('/getvehiclemodelbyregno',garagehailingcontroller.getvehiclemodelbyregistration);
// get brands by vehicle category
router.post('/getbrandsbyvehiclecategory',garagehailingcontroller.getbrandsbycategoryid);
// get id by brand name
router.post('/getidbybrandname',garagehailingcontroller.getidbybrandname);
// get variants by brands
router.post('/getvariantsbybrandsid',garagehailingcontroller.getvariantsbybrandid);
module.exports = router;