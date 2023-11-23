const {selectPermission,updatePermission,insertPermission,deletePermission}=require("../dblayer/permissionquery")
const to=require("await-to-js").to
const responseHandler=require("../cors/ResponseHandler")
const {statusCode,messages}=require("../cors/constant")
const selectPermissionService=async(req,res)=>{
    const[err,data]=await to(selectPermission())
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
const insertPermissionService=async(req,res)=>{
    const[error,data]=await to (insertPermission(req,res))
    if(error){
        return await responseHandler({
            statusCode:statusCode.BAD_STATUS,
            error:true,
            res,
            message:error.message
        })
    }
    return await responseHandler({statusCode:statusCode.CREATED_STATUS,message:messages.Permission_MESSAGE,res,data})
}
const updatePermissionService=async(req,res)=>{
    const id=req.query.id
    
    const updatedPermissionName=req.body.updatedPermissionName
    const updatedParent_id=req.body.updatedParent_id
    if(updatedPermissionName && updatedParent_id){
    const[error,data]=await to(updatePermission(id,updatedPermissionName,updatedParent_id))
    
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
else{
    const[error,data]=await to(updatePermission(id,updatedPermissionName))
    
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
}
const deletePermissionService=async(req,res)=>{
    const id=req.query.id
    const[error,data]=await to(deletePermission(id))
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


module.exports={selectPermissionService,insertPermissionService,updatePermissionService,deletePermissionService}

