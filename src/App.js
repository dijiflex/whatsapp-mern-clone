
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <h1>Lets build Whatsapp Clone</h1>

      {/* Sidebar Component */}
        <Sidebar />
        <Chat />
      {/* Chat Component */}
    </div>
  );
}

export default App;
