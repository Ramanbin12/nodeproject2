const { insertPermissionService,selectPermissionService,updatePermissionService,deletePermissionService}=require("../services/permissionservice")
const insertPermissionController=(req,res)=>{
    insertPermissionService(req,res)
}
const selectPermissionController=(req,res)=>{
    selectPermissionService(req,res)
}
const deletePermissionController=(req,res)=>{
    deletePermissionService(req,res)
}
const updatePermissionController=(req,res)=>{
    updatePermissionService(req,res)
}
module.exports={insertPermissionController,selectPermissionController,updatePermissionController,deletePermissionController}