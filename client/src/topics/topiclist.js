import React from 'react'
import '../style/App.css';
import '../style/mes.css'
 


const Card=({mess,open})=>{
    
    const cards=mess?( mess.map(chat =>{ 
         
             return(
                <div className="container " key={chat._id}>
            
                <div className="center">
                    <div className="cd right card white  lighten-1   z-depth-3">
                     
                        <div className="card-title center teal-text "><a><span onClick={()=>{open(chat.topic)}}><h5>{chat.topic}</h5></span></a></div>
                        
                          
                        </div>
                        
                        
                       
                        
                    
                </div>
            </div>


             )

         }
    )
        
    
    ):( <div className="container">
    <div className="container ">
    <div className="container">
    <h3 className="card #00e676 green accent-3 white-text  center">NO WORK</h3>
    </div>
    
    </div>
    
    </div>) 

     


    
    return(
        <div className="content">
         
            {cards}
            
        </div>
    )
}

export default Card;