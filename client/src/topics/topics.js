import react,{Component}from 'react'
import axios from 'axios'
import Card from './topiclist'
import '../style/box.css'


class Topic extends Component{
state={
    data:[],
  
    
}
componentDidMount(){
    
    axios.get("http://localhost:7000/chat/topics")
    .then((data)=>{
        this.setState({
            data:data.data
        })
    })
  


}
openchat=(topic)=>{
   this.props.history.push("/chat",topic)
}





render(){
    console.log(this.state)

return(
     <div className="main container">
    <div className="box container ">

     <Card mess={this.state.data} open={this.openchat}/>
     
    </div>
    
    
    </div>
)




}



}



export default Topic;