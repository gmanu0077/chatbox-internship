import React from 'react'
import '../style/mes.css'
 


const Card=({mess,topic})=>{
    
    const cards=mess?( mess.map(chat =>{ 
                if(chat.topic==topic){
                    console.log(topic,"topixx",chat)
                    chat.messages.map(chats=>{
                
                    if(chats.from==="Ram"){
                        console.log(chats,"ram rsam",chats.message)
                        return(
                           <div className="row" key={chat._id} >
                          <h1>hello </h1>
                           <div className="right col l6 s10 m7">
                               <div className="cd right card green  lighten-1   z-depth-3">
                                
                                   <div className="card-title center teal-text text-lighten-1"><h7>{chats.message}</h7></div>
                                   
                                     
                                   </div>
                                   
                                   
                                  
                                   
                               
                           </div>
                       </div>
           
           
                        )}
                        else{
                           return(
                               <div className="row" key={chats._id}>
                             
                               <div className="right col l6 s10 m7">
                                   <div className="cd left card grey  lighten-1   z-depth-3">
                                    
                                       <div className="card-title center teal-text text-lighten-1"><h7>{chats.message}</h7></div>
                                       
                                         <p className="right">{chats.from}</p>
                                       </div>
                                       
                                       
                                      
                                       
                                   
                               </div>
                           </div>
               
               
                            )
           
                        }
                })      
                   
             }
         }
    )
        
    
    ):( <div className="container">
    <div className="container ">
    <div className="container">
    <h3 className="card #00e676 green accent-3 white-text  center">NO TOPICS</h3>
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