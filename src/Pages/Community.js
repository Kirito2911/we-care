import { BannerCommunity } from "../components/BannerCommunity/BannerCommunity";
import { Toplist } from "../components/Toplist/Toplist";

export function Community(){
    return(
        <div>
            <BannerCommunity></BannerCommunity>
            <Toplist title="LBQ Connect"></Toplist>
            <Toplist title="Programa Trans"></Toplist>
        </div>
    )
}