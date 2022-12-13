import {useState} from 'react'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {SiHomeassistantcommunitystore} from 'react-icons/si'
import {HiInformationCircle} from 'react-icons/hi'
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
            <li><Link to="/"><icon><AiFillHome/></icon>Home</Link></li>
						<li><Link to="/imoveis"><icon><SiHomeassistantcommunitystore/></icon>Imóveis</Link></li>
						<li><Link to="/sobre"><icon><HiInformationCircle/></icon>Sobre nós</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Menu 