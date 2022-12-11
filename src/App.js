import {BrowserRouter as Router} from 'react-router-dom'
import RouteSite from './routes/RouteSite'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>  
          <NavBar/>
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
