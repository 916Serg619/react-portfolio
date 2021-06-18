

import './App.css';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/index';
import Home from './components/Header/Header';
import WebDev from './components/WebDev/WebDev';
import AudioVisual from './components/AudioVisual/AudioVisual';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  return (
    <>
    
    <Router baseName="/">
     
      <Navbar />
      <Switch>
          
          <Route path='/' exact component={Home} />
          <Route path='./components/AudioVisual' exact component={AudioVisual}/>
          <Route path='./components/WebDev' exact component={WebDev}/>
          
      </Switch> 
      
    
    </Router>
    

      
    
    </>
  );
}

export default App;
