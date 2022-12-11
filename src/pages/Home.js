import About from '../components/About/About'
import Creci from '../components/Creci/Creci'
import PropertyItem from '../components/propertyItem/PropertyItem'

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