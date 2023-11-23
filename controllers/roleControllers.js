const {insertRoleService,selectRoleService,updateRoleService,deleteRoleService}=require("../services/roleservice")
const insertRoleController=(req,res)=>{
    insertRoleService(req,res)
}
const selectRoleController=(req,res)=>{
    selectRoleService(req,res)
}
const deleteRoleController=(req,res)=>{
    deleteRoleService(req,res)
}
const updateRoleController=(req,res)=>{
    updateRoleService(req,res)
}
module.exports={insertRoleController,selectRoleController,updateRoleController,deleteRoleController}