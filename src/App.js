
import { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from "pusher-js";
import axios from './axios';

function App() {
    const [messages, setmessages] = useState([]);

    useEffect(()  => {
        axios.get('/messages/sync').then(response => {
            setmessages(response.data);
            console.log(response.data);
        })
    }, [])
    useEffect(() => {
        const pusher = new Pusher('9437e4eacdd7efa52e4e', {
            cluster: 'mt1'
          });
      
          var channel = pusher.subscribe('messages');
          channel.bind('inserted', function(newMessage) {
            alert(JSON.stringify(newMessage));
            setmessages([...messages, newMessage])
          });
        return () => {
              channel.unbind_all();
              channel.unsubscribe()
        }
    }, [messages])

    console.log(messages)
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
