import { RepComp } from "../components/RepComp/RepComp";
import { Baseboard } from "../components/Baseboard/Baseboard";
import React, { useEffect } from "react";
import { getDataRepublic } from "../service/api";


export function Republic(){
    const [occurs, setOccurs] = React.useState([])
    useEffect(() => {
        getDataRepublic().then(result => {
            console.log(result)
            setOccurs(result)
        })
    }, []);
    return(            
        <div>
            <RepComp data = {occurs}></RepComp> 
            <Baseboard></Baseboard>
        </div>
    )
}