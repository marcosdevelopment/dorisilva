import {Link} from 'react-router-dom'
import './NavBar.module.css'
import Logo from '../../img/logo.png'

const NavBar = () => {
  return (
		<nav>
			<img src={Logo} alt="Logo" />
				<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/imoveis">Imóveis</Link></li>
						<li><Link to="/sobre">Sobre nós</Link></li>
				</ul>
		</nav>
  )
}

export default NavBar