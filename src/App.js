import {HashRouter as Router} from 'react-router-dom'
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
        <Router basename='/'>  
          <Menu/>
          <Routes>
            <Route exact path='*' element={<Home/>}/>
            <Route exact path='/imoveis' element={<Properties/>}/>
            <Route exact path='/sobre' element={<AboutUs/>}/>
            <Route exact path='/informacoes/:id' element={<Information/>}/>
          </Routes> 
        </Router> 
        <Footer/> 
      </div>   
    </div>
  );
}

export default App;
