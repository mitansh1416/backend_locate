const dbConn = require('../../config/dbConfig');

var transactionmodel = function (transactiondata)
{

    this.transactionid   = transactiondata.transactionid;
    this.workshopid      = transactiondata.workshopid;
    this.registrationno  = transactiondata.registrationno;
    this.createddatetime = transactiondata.createddatetime;
    this.updateddatetime = transactiondata.updateddatetime;
    this.status          = transactiondata.status;
    this.currentlatlong  = transactiondata.currentlatlong;
    this.userid          = transactiondata.userid;
    this.servicename = transactiondata.servicename;
    this.workshopidstring = transactiondata.workshopidstring;
     
}

// create request

transactionmodel.createrequest = (reqdata,result)=>{


var values = {workshopid:null,registrationno:reqdata.registrationno,createddatetime:reqdata.createddatetime,updateddatetime:null,status:reqdata.status,currentlatlong:reqdata.currentlatlong,userid:reqdata.userid};

dbConn.query('insert into locate_transaction SET ?',values,(err,res)=>{


     var Id = res.insertId;
      var values ={transactionid:Id,servicename:reqdata.servicename};
      dbConn.query('insert into locate_serviceavailed set ?',values,(err,res)=>{
        var idstring = reqdata.workshopidstring;
        var list = idstring.split(',');
        for (var i = 0; i < list.length; i++) {
 
          var values ={workshopid:list[i],status:'NEW',transactionid:Id,userid:reqdata.userid,createddatetime:reqdata.createddatetime,updateddatetime:reqdata.updateddatetime};
          
          
          dbConn.query('insert into locate_garagestatus set ?',values,(err,res)=>{

            if(err)
            result(null,err);
          
  
          });

        }
       
        result(null,res);

      });
      
});
}


// update request 

transactionmodel.updaterequest = (reqdata,result)=>{

    var values ={workshopid:reqdata.workshopid,updateddatetime:reqdata.updateddatetime,status:reqdata.status};

    dbConn.query('update locate_transaction set ? where userid = ? and status = ? or status = ?',[values,reqdata.userid,'OPEN','SENT'],(err,res)=>{

 
            if(err)
              result(null,err);
            result(null,res);


    });
}

// update request by workshop id
transactionmodel.updaterequestworkshopid = (reqdata,result)=>{

  var values ={updateddatetime:reqdata.updateddatetime,status:reqdata.status};

  dbConn.query('update locate_transaction set ? where userid = ? and status = ?  AND workshopid = ?',[values,reqdata.userid,'ACCEPTED',reqdata.workshopid],(err,res)=>{


          if(err)
            result(null,err);
          result(null,res);


  });
}


// REQUEST CHECK 

transactionmodel.checkrequest = (result)=>{
    dbConn.query('select * from locate_transaction where status = ?','SENT',(err,res)=>{

        if(err)
           result(null,err);
       result(null,res);
    });
}

// get request by user id

transactionmodel.checkrequestbyid =(reqdata,result)=>{
    dbConn.query('select * from locate_transaction where  userid = ? and status = ? or status = ?',[reqdata.userid,'OPEN','ACCEPTED'],(err,res)=>{
        
        if(err)
          result(null,err);
        result(null,res);
    });
}

// get workshop status 

transactionmodel.checkworkshopstatus = (reqdata,result)=>{
  dbConn.query('select * from locate_garagestatus where userid = ? and transactionid = ? and workshopid = ?',[reqdata.userid,reqdata.transactionid,reqdata.workshopid],(err,res)=>{

    if(err)
    result(null,err);
  result(null,res);
  });
}

// update garage status

transactionmodel.updateworkshopstatus = (reqdata,result)=>{

   var values = {status:reqdata.status,updateddatetime:reqdata.updateddatetime};

   dbConn.query('update locate_garagestatus set ? where userid = ? and workshopid = ? and transactionid = ?',[values,reqdata.userid,reqdata.workshopid,reqdata.transactionid],(err,res)=>{



      
    if(err)
    result(null,err);
  result(null,res);
     




   });



}

transactionmodel.gethistory = (reqdata,result)=>{


 
   dbConn.query('select * from locate_transaction where userid = ?',reqdata.userid,(err,res)=>{
    if(err)
     result(null,err);
    result(null,res);
   });





}

module.exports = transactionmodel