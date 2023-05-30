import './Header.css';
import Logo from '../../assets/logo.jpeg'
import { Search } from '../Search/Index';
import { Link } from 'react-router-dom';

export function Header (props){

    return(
        <div className="header">
            <Link to = '/'>  
                <div className='logo'>
                    <img className='logo-img' src={Logo}/> 
                    <div className='text-logo'>
                        <div style={{fontSize:"40px", fontWeight:"bold"}}>We</div>
                        <div style={{fontSize:"27px", fontWeight:"bold", marginTop:"-15px"}}>Care</div>
                    </div> 
                </div>
            </Link> 
           
            <div className="buttons">
                <div className='button'><Link to ='/events'>Eventos</Link></div>   
                <div className='button'><Link to ='/republic'>Repúblicas</Link></div>   
                <div className='button'><Link to ='/community'>Comunidades</Link></div>      
            </div>
            
            <div className='search'><Search></Search> </div>
        </div>
    )
}