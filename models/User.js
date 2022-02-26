const { stringify } = require("nodemon/lib/utils")

const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    username:{
        type:String,
        reqired: true,
        min:3,
        max:20,
        unique: true,
    },
    email:{
        type:String,
        reqired: true,
        unique: true,
        max:20,
    },
    password:{
        type:String,
        reqired: true,
        min:6,
    },
    profilePicture:{
        type:String,
        default:"",
    },
    coverPicture:{
        type:String,
        default:"",
    },
    followers:{
        type:Array,
        default:[],

    },
    following:{
        type:Array,
        default:[],
    },
    isAdmin:{
        type:Boolean,
        default: false,
    },
    desc:{
        type:String,
        max:50
    },
    city:{
        type:String,
        max:50
    },
    from:{
        type:String,
        max:50
    },
    relationship:{
        type:Number,
        enum:[1,2,3]
    },


},
{timestamps:true}

);
module.exports = mongoose.model("User", UserSchema);
