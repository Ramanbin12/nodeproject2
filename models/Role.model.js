const {DataTypes}=require("sequelize")
const sequelize=require("../database/datasource")
const userRole=sequelize.define("userRole",{
    role_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    role:{
        type:DataTypes.STRING,
        allowNull:false
    }
    
})
module.exports=userRole