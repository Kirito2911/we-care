import './Event.css'
import IconCalendar from '../../assets/calendarIcon.png'

export function Event(props){
   return(
       <div className = 'event'>
            {props.data.map(value =>{
                return(
                    <div className = 'oneEvent'>
                        <div className ='imgEvent' style={{backgroundImage: "url("+value.data.img+")", backgroundSize: "cover"}}>
                            <div className='titleEvent'>
                                {value.data.name}
                            </div>
                        </div>
                        <div className = 'descEvent'>
                            {value.data.desc}
                        </div>
                        <div className = 'infoEvent'>
                            <img className = 'iconEvent' src = {IconCalendar}/>
                            <div className = 'dataEvent'>
                                {value.data.date}
                            </div>
                            
                        </div>
                    </div>
                )
            
            })}
            


       </div>
   )
}