import { DataTypes, Sequelize, UniqueConstraintError } from "sequelize";
import sequelize from "../database.js";
import { defaultValueSchemable } from "sequelize/lib/utils";

//This funtion is for test the conection whit the data base.
function testContection () {
    try {
        sequelize.authenticate()
        console.log("Checking the database conection.")
    } catch(error) {
        throw new Error(`ERROR\nCan't check the conection:${error}`)
    }
}
testContection()

//This is the model of the book.
const Book = sequelize.define({
    title:{
        type:DataTypes.TEXT,
        allowNull: false,
    },
    author:{
        type:DataTypes.TEXT,
        defaultValue:"Anonimus",
    },
    isbn:{
        type:DataTypes.INTEGER,
        allowNull:false,
        unique:true
    },
    category:{
        type:DataTypes.TEXT,
        defaultValue:"Unknow",
    },
    state:{
        type:DataTypes.TEXT,
        defaultValue:"Avilable"
    },
    tableName:'Books',
    timestamps:true
})

//Synchornize the models whit the data base.
try {
    sequelize.sync()
} catch (error) {
    throw new Error(`ERROR\nCan't synchronize the models whit the database: ${error}`)
}

export { Book }