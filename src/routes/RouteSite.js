import {Routes, Route} from 'react-router-dom'
import Home from '../pages/home/Home'
import Properties from '../pages/properties/Properties'
import AboutUs from '../pages/aboutUS/AboutUs'
import Information from '../pages/information/Information'

const RouteSite = () => {
  return (
    <Routes>
      <Route exact path='*' element={<Home/>}/>
      <Route path='/imoveis' element={<Properties/>}/>
      <Route path='/sobre' element={<AboutUs/>}/>
      <Route path='/informaçoes' element={<Information/>}/>
    </Routes> 

  )
}

export default RouteSite