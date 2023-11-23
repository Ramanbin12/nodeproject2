const Permission=require("../models/Feature_Role.model")
const selectPermission=async()=>{
    return await Permission.findAll()
}
const insertPermission=async(req,res)=>{
    const { id,Role_id,feature_id}=req.body
    console.log("id,Role_id,feature_id", id,Role_id,feature_id)

    return await Permission.create(req.body)
}

const updatePermission=async(id,updatedRole_id,updatefeature_id)=>{
const data=await Permission.findOne({where:{Permission_id:id}})
console.log("data",data)
data.Role_id=updatedRole_id
data.feature_id=updatefeature_id
return await data.save()
}
const deletePermission=async(id)=>{
    return await Permission.destroy({where:{id:id}})
}
module.exports={selectPermission,updatePermission,insertPermission,deletePermission}
