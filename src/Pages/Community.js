import { BannerCommunity } from "../components/BannerCommunity/BannerCommunity";
import { Toplist } from "../components/Toplist/Toplist";

export function Community(){
    return(
        <div>
            <BannerCommunity></BannerCommunity>
            <Toplist title="LBQ Connect" textTop ="LBQ Connect é um programa feminista global que
                visa impulsionar o trabalho e a visibilidade do ativismo lésbico,
                bissexual e queer em todo o mundo."></Toplist>
            <Toplist title="Programa Trans" textTop ="Programa trans é uma programa com intuito de ajudar
            as pessoas trans com apoio emocional, inserção e oferecer varias oportunidades."></Toplist>
        </div>
    )
}