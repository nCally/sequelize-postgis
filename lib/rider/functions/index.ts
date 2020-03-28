
import Rider from "../model";

type Coord = {
    lat:number,
    lng:number
}

export const addRider = async function(name:string, device:string, coord:Coord){
    const point = { type:"POINT", coordinates:[coord.lng, coord.lat] }
    await Rider.create({
        name,
        device,
        geom:point
    })
}

export const allRiders = async function(){
    return await Rider.findAll();
}