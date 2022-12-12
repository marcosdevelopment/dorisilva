import About from '../../components/about/About'
import Creci from '../../components/creci/Creci'
import PropertyItem from '../../components/propertyItem/PropertyItem'

const Home = (props) => {
  return (
    <div>
      <PropertyItem/>
      <About/>
      <Creci/>
    </div> 
  )
}

export default Home