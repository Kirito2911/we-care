import './Toplist.css';

export function Toplist(props){
    return(
        <div className="toplist">
            <div className="description">
                <div className="titleToplist">{props.title}</div>
                <div className="text">LBQ Connect é um programa feminista global que
                visa impulsionar o trabalho e a visibilidade do ativismo lésbico,
                bissexual e queer em todo o mundo.</div>

            </div>
            <div className="picture"></div>
            <div className="topics">
                <div className="titleTopics">Destaques do programa</div>
                <div className="list"></div>
            </div>
        </div>
    )
}