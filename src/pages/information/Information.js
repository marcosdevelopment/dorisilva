import PropertieInfo from "../../components/propertieinfo/PropertieInfo"
import Carousel from "../../components/carousel/Carousel"
import Creci from "../../components/creci/Creci"


const Information = () => {
  
  const idGet = (id) => {
    id = window.location.href.length - window.location.href.lastIndexOf('/') - 1
    id = window.location.href.slice(-(id))
    return id
  }
  const id = Number(idGet())

  return (
    <div>
      <h2 className='title'>Imóvel</h2>
      <p className='subtitle'>Veja as informações disponivéis do imóvel escolhido</p>
      <Carousel id={id}/>
      <PropertieInfo id={id}/>
      <Creci/>
    </div>
  )
}

export default Information