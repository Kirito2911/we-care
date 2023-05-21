import './Baseboard.css'
import IconFb from '../../assets/facebook_icon.jpg'
import IconInsta from '../../assets/insta_icon.jpg'
import IconLink from '../../assets/linkedin_icon.jpg'
import IconTt from '../../assets/twitter_icon.jpg'
import IconYt from '../../assets/youtube_icon.jpg'

export function Baseboard(){
    return(
        <div className = 'baseboard'>
            <div className='partners'>
                <div className = 'title'>PARCERIAS</div>
                <div className = 'links'>
                    <div className = 'link'>Programa Trans Global</div>
                    <div className = 'link'>LBQ Connect</div>
                </div>
            </div>
            <div className='social'>
                <div className = 'contact'> Fale conosco </div>
                <div className= 'socialButtons'>
                    <div className= 'socialButton'><img className = 'iconsSocial' src = {IconFb}/></div>
                    <div className= 'socialButton'><img className = 'iconsSocial' src = {IconInsta}/></div>
                    <div className= 'socialButton'><img className = 'iconsSocial' src = {IconLink}/></div>
                    <div className= 'socialButton'><img className = 'iconsSocial' src = {IconTt}/></div>
                    <div className= 'socialButton'><img className = 'iconsSocial' src = {IconYt}/></div>
                </div>
            </div>




        </div>
    )
}