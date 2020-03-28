
import Rider from "../../rider";

async function allRiders(req,res){
    res.status(200).json({
        data:await new Rider().all()
    })
}

export const Riders = {
    all: allRiders
}