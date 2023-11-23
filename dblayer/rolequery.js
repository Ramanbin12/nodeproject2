const userRole=require("../models/Role.model")
const selectRole=async()=>{
    return await userRole.findAll()
}
const insertRole=async(req,res)=>{
    const {role_id,role,description}=req.body
    console.log("user_id,role,descriptin", role_id, role, description)

    return await userRole.create(req.body)
}

const updateRole=async(id,updatedRole)=>{
const data=await userRole.findOne({where:{role_id:id}})
console.log(data,data)
data.role=updatedRole
return await data.save()
}
const deleteRole=async(id)=>{
    return await userRole.destroy({where:{role_id:id}})
}
module.exports={insertRole,selectRole,updateRole,deleteRole}
