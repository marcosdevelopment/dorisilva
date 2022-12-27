import "./PropertieInfo.Module.css"
import PropertiesData from "../../data/PropertiesData"
const PropertieInfo = ({id}) => {
  return (
    <div className="container_propertieInfo">
      {PropertiesData.filter(properties => properties.id === id)
        .map(propertieFilter => (
          <div>
            <p><span>Tipo:</span> {propertieFilter.type}</p>
            <hr/>
            <p><span>Bairro:</span> {propertieFilter.district}</p>
            <hr/>
            <p><span>Cidade:</span> {propertieFilter.city}</p>
            <hr/>
            <p><span>Estado:</span> {propertieFilter.state}</p>
            <hr/>
            <p><span>Comôdos:</span> {propertieFilter.rooms}</p>
            <hr/>
            <p><span>Quartos:</span> {propertieFilter.bedrooms}</p>
            <hr/>
            <p><span>Banheiros:</span> {propertieFilter.restrooms}</p>
            <hr/>
            <p><span>Sala:</span> {propertieFilter.livingroom}</p>
            <hr/>
            <p><span>Cozinha:</span> {propertieFilter.kitchen}</p>
            <hr/>
            <p><span>Garagem:</span> {propertieFilter.garage}</p>
            <hr/>
            <p><span>Área externa:</span> {propertieFilter.externalArea}</p>
            <hr/>
            <p><span>Tamanho:</span> {propertieFilter.size}</p>
            <hr/>
            <p className="propertieInfo_obs">{propertieFilter.observation}</p>
            <h2 className="propertieInfo_price">R$ {propertieFilter.price}</h2> 
          </div>
        ))
      }
      {/* <p><span>Tipo:</span> {type}</p>
      <hr/>
      <p><span>Bairro:</span> {district}</p>
      <hr/>
      <p><span>Cidade:</span> {city}</p>
      <hr/>
      <p><span>Estado:</span> {state}</p>
      <hr/>
      <p><span>Comôdos:</span> {rooms}</p>
      <hr/>
      <p><span>Quartos:</span> {bedrooms}</p>
      <hr/>
      <p><span>Banheiros:</span> {restrooms}</p>
      <hr/>
      <p><span>Sala:</span> {livingroom}</p>
      <hr/>
      <p><span>Cozinha:</span> {kitchen}</p>
      <hr/>
      <p><span>Garagem:</span> {garage}</p>
      <hr/>
      <p><span>Área externa:</span> {externalArea}</p>
      <hr/>
      <p><span>Tamanho:</span> {size}</p>
      <hr/>
      <p className="propertieInfo_obs">{observation}</p>
      <h2 className="propertieInfo_price">R$ {price}</h2> */}
    </div>
  )
}

export default PropertieInfo