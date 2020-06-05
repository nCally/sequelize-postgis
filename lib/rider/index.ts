
import { allRiders, addRider } from "./functions";

export default class {

    async add(name, device, geom:any){ return await addRider(name, device, geom); }

    async all(){ return await allRiders(); }

}