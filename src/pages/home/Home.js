import About from '../../components/about/About'
import Creci from '../../components/creci/Creci'
import PropertyItem from '../../components/propertyItem/PropertyItem'
import PropertiesData from '../../data/PropertiesData'
import './Home.Module.css'

const Home = () => {
  return (
    <div>
      <h2 className='title'>Escolha seu imovel!</h2>
      <p className='subtitle'>Escolha um imóvel de sua prefêrencia e que caiba no seu bolso!</p>
      <div className="container_home">
      {PropertiesData.map( (propertie, id) => 
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
            />
          )
        )
      )}
      </div>
      <h2 className='title'>Quem somos?</h2>
      <p className='subtitle'>Conheça-nos mais, e negocie com a gente!</p>
      <About/>
      <Creci/>
    </div> 
  )
}

export default Home