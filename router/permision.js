const {insertPermissionController,selectPermissionController,updatePermissionController,deletePermissionController}=require("../controllers/permissionController")

const app=require("../index")
app.get("/selectPermission",selectPermissionController)
app.post("/insertPermission",insertPermissionController)
app.delete("/deletePermission",deletePermissionController)
app.patch("/updatePermission",updatePermissionController) 