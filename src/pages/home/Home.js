import About from '../../components/about/About'
import Creci from '../../components/creci/Creci'
import Annunciment from '../../components/annunciment/Annunciment'
import {MdExpandMore} from 'react-icons/md'
import PropertyItem from '../../components/propertyItem/PropertyItem'
import PropertiesData from '../../data/PropertiesData'
import {useState} from 'react'
import './Home.Module.css'

const Home = () => {
  const [contador, setContador] = useState(-6)

  const indexReverse = () => {
    let propertiesFilter = PropertiesData.filter(Properties => Properties.status === true )
    return propertiesFilter.slice(contador).reverse()
  }
  
  return (
    <div>
      <Annunciment/>
      <div className="container_home">
        <h2 className='title'>Escolha seu imóvel!</h2>
        <p className='subtitle'>Escolha um imóvel de sua prefêrencia e que caiba no seu bolso!</p>
        <div className="home-properties">
        {indexReverse().length > 0 ?
          (indexReverse().map( (propertie, id) =>
            (
              ( 
                propertie.status === true &&
                <PropertyItem
                  key = {id}
                  id = {propertie.id}
                  mainImg = {propertie.mainImg.img}
                  type = {propertie.type}
                  district = {propertie.district}
                  city = {propertie.city}
                  state = {propertie.state}
                  rooms = {propertie.rooms}
                  bedrooms = {propertie.bedrooms}
                  restroom = {propertie.restroom}
                  price = {propertie.price}
                />
              )
            )
          )):
          <h3 className='home_warning'>Nenhum imóvel para ser exibido</h3>
        }
        </div>
        <button className="home_seeMore" onClick={()=> setContador(contador - 3)}><MdExpandMore/></button>
        <p className="home_small">Aperte para ver mais imóveis</p>
        <h2 className='title'>Quem somos?</h2>
        <p className='subtitle'>Conheça-nos, e negocie com a gente!</p>
        <About/>
        <Creci/>
      </div> 
    </div>
  )
}

export default Home