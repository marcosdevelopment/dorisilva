import {BrowserRouter as Router} from 'react-router-dom'
import Menu from './components/menu/Menu'
import {Routes, Route} from 'react-router-dom'
import Home from '../src/pages/home/Home'
import Properties from '../src/pages/properties/Properties'
import AboutUs from '../src/pages/aboutUS/AboutUs'
import Information from '../src/pages/information/Information'
import Footer from './components/footer/Footer'
import './App.css'

function App() {

  return (
    <div className="App">
      <div className="container">
        <Router>  
          <Menu/>
          <Routes>
            <Route exact path='*' element={<Home/>}/>
            <Route path='/imoveis' element={<Properties/>}/>
            <Route path='/sobre' element={<AboutUs/>}/>
            <Route path='/informaçoes' element={<Information/>}/>
          </Routes> 
        </Router> 
      </div>
      <div className="footer">
        <Footer/>    
      </div>
    </div>
  );
}

export default App;
