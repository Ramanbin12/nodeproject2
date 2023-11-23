const userRole = require("../models/Role.model");
const user=require("../models/user.model")
const selectuser=async()=>{
    console.log("nnnn")
    const data= await user.findAll();
    return data
}
const insertuser=async(id,firstName,LastName,email,mobileNumber,password,role_id)=>{
    return await user.create({id,firstName,LastName,email,mobileNumber,password,role_id})
}
const updateuser=async(req,res)=>{
const {email,updatemail}=req.body
const data=await user.findOne({where:{email}})
data.email=updatemail
return await data.save()
}
const deleteuser=async(id)=>{
    return await user.destroy({where:{id}})
}
const mailexits=async(email)=>{

    return await user.findOne({ where: { email } })

}
const selectuserRole=async(email)=>{
    return await user.findOne({
        where:{email},
        include:userRole
        })
}
module.exports={insertuser,updateuser,deleteuser,selectuser,mailexits,selectuserRole}