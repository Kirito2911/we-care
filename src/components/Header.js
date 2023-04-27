import './Header.css';
import Logo from '../assets/logo.jpeg'
import { Search } from './Search/Index';

export function Header (props){

    return(
        <div className="header">
            <div className='logo'> 
                <img className='logo-img' src={Logo}/> 
                <div className='text-logo'>
                    <div style={{fontSize:"40px", fontWeight:"bold"}}>We</div>
                    <div style={{fontSize:"27px", fontWeight:"bold", marginTop:"-15px"}}>Care</div>
                </div> 
            </div>
            <div className="buttons">
                <div className='button'>Eventos</div>   
                <div className='button'>Repúblicas</div>   
                <div className='button'>Comunidades</div>   
                <div className='button'>Sobre nós</div>      
            </div>
            
            <div className='search'><Search></Search> </div>
        </div>
    )
}