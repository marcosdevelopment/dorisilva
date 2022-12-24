import "./PropertieInfo.Module.css"

const PropertieInfo = ({type, 
  district, 
  city, 
  state, 
  rooms, 
  bedrooms, 
  restrooms, 
  livingroom, 
  kitchen, 
  garage, 
  externalArea, 
  size, 
  observation,
  price
}) => {
  return (
    <div className="container_propertieInfo">
      <p><span>Tipo:</span> {type}</p>
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
      <h2 className="propertieInfo_price">R$ {price}</h2>
    </div>
  )
}

export default PropertieInfo