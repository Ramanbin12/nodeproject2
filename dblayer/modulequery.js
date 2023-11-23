const Module=require("../models/Module.model")
const selectModule=async()=>{
    return await Module.findAll()
}
const insertModule=async(req,res)=>{
    const {Module_id,Module_name,parent_id}=req.body
    console.log("module_id,Module_name,parent_id", Module_id,Module_name,parent_id)

    return await Module.create(req.body)
}

const updateModule=async(id,updatedModuleName,updatedParent_id)=>{
const data=await Module.findOne({where:{Module_id:id}})

console.log("data",data)
data.Module_Name=updatedModuleName
data.parent_id=updatedParent_id
return await data.save()
}
const deleteModule=async(id)=>{
    return await Module.destroy({where:{Module_id:id}})
}
module.exports={selectModule,updateModule,insertModule,deleteModule}
