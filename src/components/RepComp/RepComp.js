import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import './RepComp.css';
import React from 'react';

export function RepComp(){
    const [age, setAge] = React.useState('');
    const [option, setOption] = React.useState(["Manaus", "São Paulo"]);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
    return(
        <div className="republic">
            <div className="repTitle">Repúblicas</div>
            <div className="find">
                <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
    onChange={handleChange}
    sx={{backgroundColor: "white"}}
  >
    {option.map((value)=>{return <MenuItem value={value}>{value}</MenuItem>})}
  </Select>
</FormControl>
                <div className="theme">
                    <div className="category">País/Região</div>
                    <div className="labelRep">Todas as regiões/países</div>
                </div>
                <div className="buttonSearch">Procurar</div>
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