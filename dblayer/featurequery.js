const Feature=require("../models/Feature.model")
const selectFeature=async()=>{
    return await Feature.findAll()
}
const insertFeature=async(req,res)=>{
    const {feature_id,feature_name,Module_id}=req.body
    console.log("feature_id,feature_name,Module_id", feature_id,feature_name,Module_id)

    return await Feature.create(req.body)
}
// const insertFeature=async(req,res)=>{
//     const {feature_id,feature_name,Module_id,rolepermission}=req.body
//     console.log("feature_id,feature_name,Module_id", feature_id,feature_name,Module_id,rolepermission)

//     return await Feature.create(req.body.feature_id,)
// }

const updateFeature=async(id,updatedFeatureName,updateModuleId)=>{
const data=await Feature.findOne({where:{feature_id:id}})
console.log("data",data)
data.feature_name=updatedFeatureName
data.Module_id=updateModuleId
return await data.save()
}
const deleteFeature=async(id)=>{
    return await Feature.destroy({where:{feature_id:id}})
}
module.exports={selectFeature,updateFeature,insertFeature,deleteFeature}
