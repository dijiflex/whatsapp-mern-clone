
import { useEffect } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from "pusher-js";

function App() {
    useEffect(() => {
        
    }, [])
    useEffect(() => {
        const pusher = new Pusher('9437e4eacdd7efa52e4e', {
            cluster: 'mt1'
          });
      
          var channel = pusher.subscribe('messages');
          channel.bind('inserted', function(data) {
            alert(JSON.stringify(data));
          });
        return () => {
           
        }
    }, [])
  return (
    <div className="app">
      <div className='app__body'>
        {/* Sidebar Component */}
        <Sidebar />
      {/* Chat Component */}
        <Chat />
      </div>

      
    </div>
  );
}

export default App;
