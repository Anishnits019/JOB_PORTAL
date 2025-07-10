// import JobApplication from '../Models/jobApplications.js';
// import userModel from '../Models/User.js'
// export const getUserDetails=async(req,res)=>{
//     const {email}=req.query;
//     try{
//     const user_details=userModel.findOne({email}).select('name,image')
//     return res.json({
//         success:message,
//         message:user_details
//     })
//     }catch(error){
//      return res.json({
//     success:false,
//     message:error.message
// })
//     }
//  }
//  export const applyforJob =async(req,res)=>{
//          const {jobId}=req.body
//          const userId=req.auth.userId
//          try{
//              const isAlreadyApplied=await JobApplication.find({jobId,userId})
//              if(isAlreadyApplied.length>0){
//                 return res.json({
//                     success:false,message:'alreadyApplied'
//                 })
//              }
//              const jobData= await Job.findById(jobId)
//              if(!jobData){
//                 return res.json({succes:false})
//              }
//              await JobApplication.create({
//                 companyId:jobData.compnayId,
//                 // userId:,
//                 // jobId:,
//                 date:Date.now()
//              })
//              return res.json({succes:true,
//                 message:'Applied SuccessFully'
//              })
//          }catch(error){
//                res.json({
//                 success:false,
//                })
//          }
//  }

//  export const getUserJobApplications=async(req,res)=>{
//     try{
//         const userId= req.auth.userId
//         const appliaction =await JobApplication.find({userId}).popuplate('companyId','name email image').populaet('JobId' ,'title description loaction category')
//     }

//  }
// export const updateUserResume=async(req,res)=>{
//         try{
//             const userId=req.auth.userId

//             const resumeFile=req.resumeFile
//             const userData= await UserActivation.findById(userId)

//             if(resumeFile){
//                 const resuemUplaod=await cloudinary.uploader.upload(resumeFile.path)
//                 userData.resume =resumeUpload.secure_url
//             }
//         }
//   }
