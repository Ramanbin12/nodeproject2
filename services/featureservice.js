const {selectFeature,updateFeature,insertFeature,deleteFeature}=require("../dblayer/featurequery")
const to=require("await-to-js").to
const responseHandler=require("../cors/ResponseHandler")
const {statusCode,messages}=require("../cors/constant")
const selectFeatureService=async(req,res)=>{
    const[err,data]=await to(selectFeature())
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
const insertFeatureService=async(req,res)=>{
    const[error,data]=await to (insertFeature(req,res))
    if(error){
        return await responseHandler({
            statusCode:statusCode.BAD_STATUS,
            error:true,
            res,
            message:error.message
        })
    }
    return await responseHandler({statusCode:statusCode.CREATED_STATUS,message:messages.Feature_MESSAGE,res,data})
}
const updateFeatureService=async(req,res)=>{
    const id=req.query.id
    
    const updatedFeatureName=req.body.updatedFeatureName
    const updatedParent_id=req.body.updatedParent_id
    const[error,data]=await to(updateFeature(id,updatedFeatureName,updatedParent_id))
    
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
const deleteFeatureService=async(req,res)=>{
    const id=req.query.id
    const[error,data]=await to(deleteFeature(id))
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


module.exports={selectFeatureService,insertFeatureService,updateFeatureService,deleteFeatureService}

