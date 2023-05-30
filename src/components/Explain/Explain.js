import "./Explain.css"
import TheFs from '../../assets/theFs.jpg'
export function Explain(){
    return(
        <div className="usBanner">
            <div className = "tittleUs"> Quem Somos?
                <div className = "us">
                <img className = "picUs" src = {TheFs}/>
                <div className = "descUs">Somos alunos de ciência da computação, esse projeto inicialmente surgiu 
                    como um projeto da faculdade, mas gostamos tanto da ideia que decidimos dar continuadade
                    e tentar ajudar o máximo de pessoas que pudermos</div>
                </div>
            </div>

        </div>
    )
}