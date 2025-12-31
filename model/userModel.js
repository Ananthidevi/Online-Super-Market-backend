const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({ //schema-for the datalike name
    username :{
        type : String,
        required : true
    },
    email : {
         type : String,
         required : true,
         unique : true 

    },
    password:{
      type : String,
         required : true  
    },
    mobilenumber: {
        type: Number,
         required : true  
    },
    role:{
        type:String,
        enum:['admin' ,'user'],
        required: true
    }
});

const User = mongoose.model("user" , userSchema);//user-collection name
module.exports = User;