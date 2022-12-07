import {Link} from 'react-router-dom'
import Styles from './Header.module.css'
import Logo from '../../img/logo.png'

const Header = () => {
  return (
		<nav>
			<img src={Logo} alt="Logo" />
				<ul className={Styles.menuItem}>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/imoveis">Imóveis</Link></li>
						<li><Link to="/sobre">Sobre nós</Link></li>
				</ul>
		</nav>
  )
}

export default Header