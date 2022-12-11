import "./PropertyItem.Module.css"

const PropertyItem = () => {
  return (
    <div className="container_propertieItem">
      <img src="https://i.ibb.co/S6cn8Mc/Jardim-Paulista-1.jpg" alt="imagem"/>
      <div className="container_propertieItem-atributes">
        <p>Comodos: 04</p>
        <p>Dormitórios: 02</p>
        <p>Banheiros: 01</p>
        <p>A. Aberta: Sim</p>
      </div>
      <hr />
      <div className="container_propertieItem-village">
        <p>Jardim Paulista - Casa Branca - São Paulo</p>
      </div>
    </div>
  )
}

export default PropertyItem