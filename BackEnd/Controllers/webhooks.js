import {Webhook} from "svix"
import userModel from '../Models/User.js'

export const clerkWebHooks=async(req,res)=>{
    try{
          const whook= new Webhook(process.env.CLERK_WEBHOOK_SECRET)
          await whook.verify(JSON.stringify(req.body),{
            "svix-id":req.headers["svix-id"],
            "svix-timestamp":req.headers["svix-timestamp"],
            "svix-signature":req.headers["svix-signature"]
          })
          const {data,type}=req.body

          // Swicth cases for diffenrt event
          switch(type){
            case 'user.created':{
               const userData={
                _id:data.id,
                email:data.email_addresses[0].email_address, // it is ia n array
                 name:data.first_name +" " +data.last_name,
                
               }
               await userModel.create(userData)
               break;
            }
            case 'user.updated':{
                const userData={
                email:data.email_addresses[0].email_address, // it is ia n array
                 name:data.first_name +" " +data.last_name,
                
               }
               await userModel.findByIdAndUpdate(data.id,
                userData,{new:true,upsert:true})
                break;
            }
            case 'user.deleted':{
               await userModel.findByIdAndDelete(data.id)
               break;
            }
               
          }
    } 
          catch(error){
                   console.log(error.message);
                   res.json({success:false,error:'Webhooks error'})
          }
        }
    
