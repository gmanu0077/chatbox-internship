import React from 'react'
import '../style/mes.css'



const Card = ({ mess, topic,user }) => {

    const cards = mess ? (mess.map(chat => {
        if (chat.topic == topic) {
            
            return chat.messages.map(chats => {
                if (chats.from == user) {
                    
                    return (
                        <div className="row">
                           
                            <div className="right col l6 s10 m7">
                                <div className="cd right card green  lighten-1   z-depth-3">

                                    <div className="card-title center white-text text-lighten-1"><h7>{chats.message}</h7></div>


                                </div>





                            </div>
                        </div>


                    )
                }
                else {
                    return (
                        <div className="row" key={chats._id}>

                            <div className="left col l6 s10 m7">
                                <div className="cd left card grey  lighten-1   z-depth-3">

                                    <div className="card-title center  text-lighten-1"><h7>{chats.message}</h7></div>

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


    ) : (<div className="container">
        <div className="container ">
            <div className="container">
                <h3 className="card #00e676 green accent-3 white-text  center">NO Chats</h3>
            </div>

        </div>

    </div>)





    return (
        <div className="content">

            {cards}

        </div>
    )
}

export default Card;