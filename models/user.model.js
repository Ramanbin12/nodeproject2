const { DataTypes}=require('sequelize')
const userRole=require("../models/Role.model")
const sequelize=require("../database/datasource")
const user=sequelize.define('user',{
    id:{
        type:DataTypes.INTEGER,
        unique:true,
        primaryKey:true
    },
    firstName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    LastName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        unique:'email',
        allowNull:false
    },
    mobileNumber:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
})
user.belongsTo(userRole,{
    foreignKey:"role_id",
    onDelete:"SET NULL"
})
userRole.hasMany(user,{
    foreignKey:"role_id"
})
module.exports=user