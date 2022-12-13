import About from '../../components/about/About'
import Creci from '../../components/creci/Creci'
import PropertyItem from '../../components/propertyItem/PropertyItem'
import './Home.Module.css'

const Home = (props) => {
  return (
    <div>
      <h2 className='title'>Escolha seu imovel!</h2>
      <p className='subtitle'>Escolha um imóvel de sua prefêrencia e que caiba no seu bolso!</p>
      <div className="container_home">
        <PropertyItem/>
        <PropertyItem/>
        <PropertyItem/>
      </div>
      <h2 className='title'>Quem somos?</h2>
      <p className='subtitle'>Conheça-nos mais, e negocie com a gente!</p>
      <About/>
      <Creci/>
    </div> 
  )
}

export default Home