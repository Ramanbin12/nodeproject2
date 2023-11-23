const {DataTypes}=require("sequelize")
const sequelize=require("../database/datasource")
// const { Module } = require("module")
const Module=require("./Module.model")
const Feature=sequelize.define("Feature",{
    feature_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
  },

  feature_name:{
    type:DataTypes.STRING,
    allowNull:false
  }
  
})
Feature.belongsTo(Module,{
    foreignKey:"Module_id",
    onDelete:"CASCADE"
})
module.exports=Feature