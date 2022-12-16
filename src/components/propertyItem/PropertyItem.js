import "./PropertyItem.Module.css"
import {FaWhatsapp} from "react-icons/fa"
import {FaPlusCircle} from "react-icons/fa"
import {Link} from "react-router-dom"

const PropertyItem = ({id, mainImg ,type, district, city, state, rooms, bedrooms, restroom, price}) => {
 
  return (
    <div className="container_propertieItem">
      <img src={mainImg} alt="imagem"/>
      <h4>{type}</h4>
      <div className="container_propertieItem-village">
        <p>{district} - {city} - {state} </p>
      </div>
      <hr />
      <div className="container_propertieItem-atributes">
        <p>Comodos: {rooms}</p>
        <p>Dormitórios: {bedrooms}</p>
        <p>Banheiros: {restroom}</p>
      </div>
      <hr />
      <div className="container_propertieItem-price">
        <p><strong>R$ {price}</strong></p>
      </div>
      <div className="container_propertieItem-buttons">
        <Link to={`/informacoes/${id}`}><button className="know"><FaPlusCircle/> Informações</button></Link>
        <button className="whats">WhatsAPP <FaWhatsapp/></button>
      </div> 
    </div>
  )
}

export default PropertyItem