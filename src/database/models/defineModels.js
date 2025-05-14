import { DataTypes, Sequelize, UniqueConstraintError } from "sequelize";
import sequelize from "../database.js";
import { defaultValueSchemable } from "sequelize/lib/utils";

function testContection () {
    try {
        sequelize.authenticate()
        console.log("Checking the database conection.")
    } catch(error) {
        throw new Error("ERROR\nCan't check the conection:${error}")
    }
}
testContection()

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

export { Book }