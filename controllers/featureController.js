const { insertFeatureService,selectFeatureService,updateFeatureService,deleteFeatureService}=require("../services/featureservice")
const insertFeatureController=(req,res)=>{
    insertFeatureService(req,res)
}
const selectFeatureController=(req,res)=>{
    selectFeatureService(req,res)
}
const deleteFeatureController=(req,res)=>{
    deleteFeatureService(req,res)
}
const updateFeatureController=(req,res)=>{
    updateFeatureService(req,res)
}
module.exports={insertFeatureController,selectFeatureController,updateFeatureController,deleteFeatureController}