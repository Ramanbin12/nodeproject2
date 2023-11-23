const { insertModuleService,selectModuleService,updateModuleService,deleteModuleService}=require("../services/moduleservice")
const insertModuleController=(req,res)=>{
    insertModuleService(req,res)
}
const selectModuleController=(req,res)=>{
    selectModuleService(req,res)
}
const deleteModuleController=(req,res)=>{
    deleteModuleService(req,res)
}
const updateModuleController=(req,res)=>{
    updateModuleService(req,res)
}
module.exports={insertModuleController,selectModuleController,updateModuleController,deleteModuleController}