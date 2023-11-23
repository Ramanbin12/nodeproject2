const {insertModuleController,selectModuleController,updateModuleController,deleteModuleController}=require("../controllers/moduleController")

const app=require("../index")
app.get("/selectModule",selectModuleController)
app.post("/insertModule",insertModuleController)
app.delete("/deleteModule",deleteModuleController)
app.patch("/updateModule",updateModuleController) 