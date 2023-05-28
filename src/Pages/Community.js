import { BannerCommunity } from "../components/BannerCommunity/BannerCommunity";
import { Toplist } from "../components/Toplist/Toplist";
import { Baseboard } from "../components/Baseboard/Baseboard";
import { useEffect } from "react";
import { getData } from "../service/api";
import React from "react";
export function Community(){
    const [occurs, setOccurs] = React.useState([])
    useEffect(() => {
        getData().then(result => {
            console.log(result)
            setOccurs(result)
        })
    }, []);
    return(
        <div>
            <BannerCommunity></BannerCommunity>
            {occurs.map(value => {
                return <Toplist title={value.data.title} textTop ={value.data.alt} data = {value.data}></Toplist>
            })}
            <Baseboard></Baseboard>
        </div>
    )
}