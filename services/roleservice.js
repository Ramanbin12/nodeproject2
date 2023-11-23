const {selectRole,updateRole,insertRole,deleteRole}=require("../dblayer/rolequery")
const to=require("await-to-js").to
const responseHandler=require("../cors/ResponseHandler")
const {statusCode,messages}=require("../cors/constant")
const selectRoleService=async(req,res)=>{
    const[err,data]=await to(selectRole())
    if(err){
        await responseHandler({
            statusCode:statusCode.BAD_STATUS,
            error:true,
            res,
            message:err.message
        })

    }
    else{
        await responseHandler({statusCode:statusCode.OK_STATUS,message:messages.SELECT_MESSAGE,res,data:data})
    }
}
const insertRoleService=async(req,res)=>{
    const[error,data]=await to (insertRole(req,res))
    if(error){
        return await responseHandler({
            statusCode:statusCode.BAD_STATUS,
            error:true,
            res,
            message:error.message
        })
    }
    return await responseHandler({statusCode:statusCode.CREATED_STATUS,message:messages.INSERT_MESSAGE,res,data})
}
const updateRoleService=async(req,res)=>{
    const id=req.query.id
    const updatedrole=req.body.updatedRole
    const[error,data]=await to(updateRole(id,updatedrole))
    if(error){
        return await responseHandler({
            statusCode:statusCode.BAD_STATUS,
            error:true,
            res,
            message:error.message
        })
    }
    return await responseHandler({statusCode:statusCode.OK_STATUS,message:messages.UPDATE_MESSAGE,res,data})
}
const deleteRoleService=async(req,res)=>{
    const id=req.query.id
    const[error,data]=await to(deleteRole(id))
    if(error){
        return await responseHandler({
            statusCode:statusCode.BAD_STATUS,
            error:true,
            res,
            message:error.message
        })
    }
    return await responseHandler({statusCode:statusCode.OK_STATUS,message:messages.DELETE_MESSAGE,res,data})

}


module.exports={selectRoleService,insertRoleService,updateRoleService,deleteRoleService}

