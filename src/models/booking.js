const dbConn = require('../../config/dbConfig');

var bookingmodel = function (bookingdata)
{
  
      this.bookingid =  bookingdata.bookingid;
      this.userid = bookingdata.userid;
      this.registrationno = bookingdata.registrationno;
      this.workshopid = bookingdata.workshopid;
      this.servicename = bookingdata.servicename;
      this.comments = bookingdata.comments;
      this.status = bookingdata.status;
      this.date_booking = bookingdata.date_booking;
      this.time_booking = bookingdata.time_booking;
      this.createddatetime = bookingdata.createddatetime;
      this.updateddatetime = bookingdata.updateddatetime;

}

// create booking

bookingmodel.createbooking = (reqdata,result)=>{


      var values = {bookingid:reqdata.bookingid,userid:reqdata.userid,registrationno:reqdata.registrationno,workshopid:reqdata.workshopid,
            servicename:reqdata.servicename,comments:reqdata.comments,status:'OPEN',date_booking:reqdata.date_booking,time_booking:reqdata.time_booking,
                 createddatetime:reqdata.createddatetime,updateddatetime:null};

      dbConn.query('insert into locate_booking_request SET ?',values,(err,res)=>{

                  if(err)
                   result(null,err);
                  result(null,res);
                
      });

}

// check status 
 
bookingmodel.checkbookingstatus = (reqdata,result)=>
{
      dbConn.query('select * from locate_booking_request where workshopid = ? and status = ?',[reqdata.workshopid,reqdata.status],(err,res)=>{
             
            if(err)
            result(null,err);
           result(null,res);
      });
}

// update booking request

bookingmodel.updatebookingrequest = (reqdata,result)=>
{
      var values = {status:reqdata.status,updateddatetime:reqdata.updateddatetime};
      dbConn.query('UPDATE locate_booking_request SET ? where bookingid = ?',[values,reqdata.bookingid],(err,res)=>{
            if(err)
            result(null,err);
           result(null,res);
      });
}


// get booking data by user id
bookingmodel.getbookingbyuserid = (reqdata,result)=>
{
      dbConn.query('select * from locate_booking_request where userid = ?',reqdata.userid,(err,res)=>{
            if(err)
            result(null,err);
           result(null,res);
      });
}



module.exports = bookingmodel;