import './Toplist.css';

export function Toplist(props){
    return(
        <div className="toplist">
            <div className="description">
                <div className="titleToplist">{props.title}</div>
                <div className="text">{props.textTop}</div>

            </div>
            <div className="picture"></div>
            <div className="topics">
                <div className="titleTopics">Destaques do programa</div>
                <div className="list"></div>
            </div>
        </div>
    )
}