const {DataTypes}=require("sequelize")
const sequelize=require("../database/datasource")
const Module=sequelize.define("Module",{
 Module_id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    allowNull:false
 },
 Module_Name:{
    type:DataTypes.STRING,
    allowNull:false
 },
 parent_id:{
    type:DataTypes.INTEGER,
    allowNull:true
 }
    
})

module.exports=Module