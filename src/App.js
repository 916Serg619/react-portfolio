

import './App.css';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/index';
import Home from './components/Header/Header';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  return (
    <>
    
    <Router baseName="/">
     
      <Navbar />
      <Switch>
          
          <Route path='/' exact component={Home} />
          <Route path='/Projects' exact component={Projects}/>
          <Route path='/Contact' exact component={Contact}/>
          
      </Switch> 
      
    
    </Router>
    

      
    
    </>
  );
}

export default App;
