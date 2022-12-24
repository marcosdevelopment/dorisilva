import PropertieInfo from "../../components/propertieinfo/PropertieInfo"
import PropertiesData from "../../data/PropertiesData"

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
      {PropertiesData.filter(properties => properties.id === id)
        .map((propertieFilter, index) => (
          <PropertieInfo
            key={index}
            type={propertieFilter.type}
            district={propertieFilter.district}
            city={propertieFilter.city}
            state={propertieFilter.state}
            rooms={propertieFilter.rooms}
            bedrooms={propertieFilter.bedrooms}
            restrooms={propertieFilter.restroom}
            livingroom={propertieFilter.livingRoom} 
            kitchen={propertieFilter.kitchen}
            garage={propertieFilter.garage}
            externalArea={propertieFilter.ExternArea}
            size={propertieFilter.size}
            observation={propertieFilter.observation}
            price={propertieFilter.price}
          />
        ))
      }
    </div>
  )
}

export default Information