const {insertRoleController,updateRoleController,deleteRoleController,selectRoleController}=require("../controllers/roleControllers")

const app=require("../index")
app.get("/selectRole",selectRoleController)
app.post("/insertRole",insertRoleController)
app.delete("/deleteRole",deleteRoleController)
app.patch("/updateRole",updateRoleController)