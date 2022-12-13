import {BrowserRouter as Router} from 'react-router-dom'
import Menu from './components/menu/Menu'
import RouteSite from './routes/RouteSite'
import Footer from './components/footer/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>  
          <Menu/>
          <RouteSite/>
        </Router> 
      </div>
      <div className="footer">
        <Footer/>    
      </div>
    </div>
  );
}

export default App;
