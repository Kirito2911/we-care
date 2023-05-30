import React, { useEffect } from "react";
import { getDataEvent } from "../service/api";
import { Baseboard } from "../components/Baseboard/Baseboard";
import { Event } from "../components/Event/Event";

export function Events(props){
    const [party, setParty] = React.useState([])
    useEffect(() => {
        getDataEvent().then(result => {
            console.log(result)
            setParty(result)
        })
    }, []);
    
    return(
        <>
        <Event data = {party}></Event>
        <Baseboard></Baseboard>
        </>
    )
}