import About from '../../components/about/About'
import Creci from '../../components/creci/Creci'
import {MdExpandMore} from 'react-icons/md'
import PropertyItem from '../../components/propertyItem/PropertyItem'
import PropertiesData from '../../data/PropertiesData'
import {useState} from 'react'
import './Home.Module.css'

const Home = ({idQuery}) => {
  const [contador, setContador] = useState(-3)

  const lastIndex = () => {
    let propertiesFilter = PropertiesData.filter(Properties => Properties.status === true )
    return propertiesFilter.slice(contador).reverse()
  }

  const [catchId, setCatchId] = useState()

  const catchedId = (id) => {
    setCatchId(id)
  }

  return (
    <div className="container_home">
      <h2 className='title'>Escolha seu imóvel!</h2>
      <p className='subtitle'>Escolha um imóvel de sua prefêrencia e que caiba no seu bolso!</p>
      <div className="home-properties">
      {lastIndex().length > 0 ?
        (lastIndex().map( (propertie, id) =>
          (
            ( 
              propertie.status === true &&
              <PropertyItem
                key = {propertie.id}
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
                idPropertie = {catchedId}
              />
            )
          )
        )):
        <h3 className='home_warning'>Nenhum imóvel para ser exibido</h3>
      }
      </div>
      <button className="home_seeMore" onClick={()=> setContador(contador - 3)}><MdExpandMore/></button>
      <p>{catchId}</p>
      <h2 className='title'>Quem somos?</h2>
      <p className='subtitle'>Conheça-nos mais, e negocie com a gente!</p>
      <About/>
      <Creci/>
    </div> 
  )
}

export default Home