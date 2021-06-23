
import './App.css';
import {Route} from 'react-router-dom';
import Users from './Components/Users'
function App() {
  return (
    <div className="App">
     <Route path="/" component={Users}/>
    </div>
  );
}

export default App;
