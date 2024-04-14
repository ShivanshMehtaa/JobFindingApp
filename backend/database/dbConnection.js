import mongoose from 'mongoose';

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
     dbName:"MERN_STACK_JOB_SEEKING"   
    }).then(()=>{
        console.log('connected to databse');
    }).catch((err)=>{
        console.log('error connecting to database')
    })
}