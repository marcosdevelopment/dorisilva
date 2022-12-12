import {useState} from 'react'
import {Link} from 'react-router-dom'
import './Menu.Module.css'

const Menu = () => {
  const [active, setMode] = useState(false)
  const ToggleMode = () => {
    setMode(!active)
  }

  return (
    <div className="container_menu">
      <div className={active ? "icon iconActive" : "icon"} onClick={ToggleMode}>
        <div className="hamburguer hamburguerIcon"></div>
      </div>
      <div className={active ? "menu menuOpen" : "menu menuClose"}>
        <div className="list">
          <ul className="listItems">
            <li><Link to="/">Home</Link></li>
						<li><Link to="/imoveis">Imóveis</Link></li>
						<li><Link to="/sobre">Sobre nós</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Menu 