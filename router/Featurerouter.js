const {insertFeatureController,selectFeatureController,updateFeatureController,deleteFeatureController}=require("../controllers/featureController")

const app=require("../index")
app.get("/selectFeature",selectFeatureController)
app.post("/insertFeature",insertFeatureController)
app.delete("/deleteFeature",deleteFeatureController)
app.patch("/updateFeature",updateFeatureController) 