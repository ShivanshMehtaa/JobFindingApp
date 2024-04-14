import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide your Name"],
        minLength:[3, "Name must contain at least 3 characters"],
        maxLength:[30,"Name cannot exceed 30 characters"],
    },
    email:{
        type:String,
        required:[true,"Please provide your Email"],
        validate:[validator.isEmail, "Please provide a valid email"],
    },
    phone: {
        type: Number,
        required: [true, "Please enter your Phone Number!"],
    },
    password: {
        type: String,
        required: [true, "Please provide a Password!"],
        minLength: [8, "Password must contain at least 8 characters!"],
        maxLength: [32, "Password cannot exceed 32 characters!"],
        select: false,
    },
    role: {
        type: String,
        required: [true, "Please select a role"],
        enum: ["Job Seeker", "Employer"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

//jaise hi kuch enter hua db mei yeh scripts run kar jayengi apne aap

// hashing the password
userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next()
    }
    this.password = await bcrypt.hash(this.password,10);
})

//comparing passwords 
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// generating the jwt token when a user registers
userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};
  
export const User = mongoose.model("User", userSchema);