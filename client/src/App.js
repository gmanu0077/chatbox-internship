import Topic from './topics/topics'
import Chat from './chats/chat'
import {BrowserRouter,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Route exact path="/" component={Topic}/>
     <Route exact path="/chat" component={Chat}/>
   

    </BrowserRouter>
      
    </div>
  );
}

export default App;
