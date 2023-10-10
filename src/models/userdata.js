const dbConn = require('../../config/dbConfig');
const locate_user = 2;
const usermodel = function (userdata)
{

      this.firstname = userdata.firstname;
      this.lastname = userdata.lastname;
      this.mobileno = userdata.mobileno;
      this.email = userdata.email;
      this.userid = userdata.userid

}


// register locate user

usermodel.createlocateuser = (reqdata,result)=>{

    
     var values = {userid:reqdata.userid,firstname:reqdata.firstname,lastname:reqdata.lastname,mobileno:reqdata.mobileno,usertype:locate_user,email:reqdata.email}
     dbConn.query('insert into locate_user SET ?',values,(err,res)=>{
        if(err)
           result(null,err);
        result(null,res);
         
     });

}

// get user data by mobileno

usermodel.getuserdata = (reqdata,result)=>{
   dbConn.query('select * from locate_user where mobileno = ?',reqdata.mobileno,(err,res)=>{
     if(err)
        result(null,err);
      result(null,res);
   });
}

// get user data by id

usermodel.getuserdatabyid = (reqdata,result)=>{
   dbConn.query('select * from locate_user where userid = ?',reqdata.userid,(err,res)=>{
     if(err)
        result(null,err);
      result(null,res);
   });
}
module.exports = usermodel;