const {DataTypes}=require("sequelize")
const sequelize=require("../database/datasource")
const userRole = require("./Module.model")
const Feature = require("./Feature.model")
const fetaure_role=sequelize.define("feature_role",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    }
})
fetaure_role.belongsTo(userRole,{
    foreignKey:"Role_id",
    onDelete:"CASCADE"
})

fetaure_role.belongsTo(Feature,{
    foreignKey:"feature_id",
    onDelete:"CASCADE"
})
// userRole.belongsToMany(Feature,{through:fetaure_role})
// Feature.belongsToMany(userRole,{through:fetaure_role})

module.exports=fetaure_role