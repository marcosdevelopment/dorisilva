import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../src/pages/Home'
import Properties from '../src/pages/Properties'
import AboutUs from '../src/pages/AboutUs'
import Header from './components/header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>  
        <Header/> 
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/imoveis' element={<Properties/>}/>
          <Route path='/sobre' element={<AboutUs/>}/>
        </Routes> 
      </Router>
    </div>
  );
}

export default App;
