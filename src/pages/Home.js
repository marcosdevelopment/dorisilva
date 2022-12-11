import About from '../components/About/About'
import Creci from '../components/Creci/Creci'

const Home = (props) => {
  return (
    <div>
      <h1>Home {props.numero}</h1>
      <About/>
      <Creci/>
    </div>
    
    
  )
}

export default Home