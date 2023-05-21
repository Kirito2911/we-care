import { Banner } from "../components/Banner/Banner"
import { Baseboard } from "../components/Baseboard/Baseboard"
import { Explain } from "../components/Explain/Explain"

export function Home(){
    return(
        <div>
            <Banner></Banner>
            <Explain></Explain>
            <Baseboard></Baseboard>
        </div>
    )
}