
import { Sequelize } from "sequelize";

export default new Sequelize(
    'location','maps_user','', { dialect:'postgres' } );
