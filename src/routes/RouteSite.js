import {Routes, Route} from 'react-router-dom'
import Home from '../pages/home/Home'
import Properties from '../pages/properties/Properties'
import AboutUs from '../pages/aboutUS/AboutUs'

const RouteSite = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home numero={1}/>}/>
      <Route path='/imoveis' element={<Properties/>}/>
      <Route path='/sobre' element={<AboutUs/>}/>
    </Routes> 
  )
}

export default RouteSite