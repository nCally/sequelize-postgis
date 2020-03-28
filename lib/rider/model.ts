
import { Model, DataTypes } from "sequelize";
import db from "../db";

/**
 * The Rider class model.
 * So since I'm using typescript...
 * I found out I understood it (I mean sequelize) more with the structure below... since whether I use the .define method or this class method all are still the same thing... extend the class Sequelize Model class.
 */

class Rider extends Model {
    id:any
    name:string
    device:string
    geom:any
}

Rider.init({
    id:{
        type:DataTypes.UUID,
        primaryKey:true,
        defaultValue:DataTypes.UUIDV4
    },
    name:DataTypes.STRING,
    device:DataTypes.STRING,
    geom:{
        type:DataTypes.GEOMETRY("POINT"),
        allowNull:false
    }
}, { sequelize:db })

export default Rider;