import {BrowserRouter as Router} from 'react-router-dom'
import RouteSite from './routes/RouteSite'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>  
        <NavBar/>
        <RouteSite/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
