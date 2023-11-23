const {selectModule,updateModule,insertModule,deleteModule}=require("../dblayer/modulequery")
const to=require("await-to-js").to
const responseHandler=require("../cors/ResponseHandler")
const {statusCode,messages}=require("../cors/constant")
const selectModuleService=async(req,res)=>{
    const[err,data]=await to(selectModule())
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
const insertModuleService=async(req,res)=>{
    const[error,data]=await to (insertModule(req,res))
    if(error){
        return await responseHandler({
            statusCode:statusCode.BAD_STATUS,
            error:true,
            res,
            message:error.message
        })
    }
    return await responseHandler({statusCode:statusCode.CREATED_STATUS,message:messages.MODULE_MESSAGE,res,data})
}
const updateModuleService=async(req,res)=>{
    const id=req.query.id
    const updatedModuleName=req.body.updatedModuleName
    const updatedParent_id=req.body.updatedParent_id
    const[error,data]=await to(updateModule(id,updatedModuleName,updatedParent_id))
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
const deleteModuleService=async(req,res)=>{
    const id=req.query.id
    const[error,data]=await to(deleteModule(id))
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


module.exports={selectModuleService,insertModuleService,updateModuleService,deleteModuleService}

