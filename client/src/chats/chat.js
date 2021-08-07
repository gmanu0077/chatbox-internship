import react,{Component}from 'react'
import axios from 'axios'
import Card from './messages'
import '../style/box.css'
import '../style/App.css'


class Chat extends Component{
state={
    topic:"",
    data:[]
    
}
componentDidMount(){
    
    axios.get("http://localhost:7000/chat/topics")
    .then((data)=>{
        this.setState({
            data:data.data
        })
    })
    this.setState({
        topic:this.props.history.location.state
    })
}
back=()=>{
    this.props.history.push('/')
}

render(){
    console.log(this.state)

return(
     <div className="main container">
     
    <div className="box1 container ">
    <button className="btn right" onClick={this.back}>back</button>
     <Card  topic={this.state.topic} mess={this.state.data} back={this.back}/>
     
    </div>
    
    <div className="inp container center ">
    
    <button className="btn right" onClick={this.sub}>send</button>
    
     <input className="left" id="new" onChange={this.cha} onSubmit={this.sub} placeholder="message" value={this.state.new} />
    
     </div>
     
    </div>
)




}



}



export default Chat;