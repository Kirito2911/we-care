import './RepComp.css';

export function RepComp(){
    return(
        <div className="republic">
            <div className="repTitle">Repúblicas</div>
            <div className="find">
                <div className="theme">
                    <div className="category">Tema</div>
                    <div className="label">Todos os Tópicos</div>
                </div>
                <div className="theme">
                    <div className="category">País/Região</div>
                    <div className="label">Todas as regiões/países</div>
                </div>
                <div className="button">Procurar</div>
            </div>
            <div className="news">
                <div className="new">
                    <div className="picRep">
                        <div className="desc">DIREITOS HUMANOS</div>
                    </div>
                    <div className="titleNews">Relatório de Impacto do Fundo</div>
                </div>
                <div className="new">
                    <div className="picRep">
                        <div className="desc">DISCRIMINAÇÃO LEGAL</div>
                    </div>
                    <div className="titleNews">Uma montanha em meus ombros:</div>
                </div>
                <div className="new">
                    <div className="picRep">
                        <div className="desc">SAÚDE MENTAL</div>
                    </div>
                    <div className="titleNews">LGBTQ vive em conflito e crise</div>
                </div>
            </div>
        </div>
    )
}