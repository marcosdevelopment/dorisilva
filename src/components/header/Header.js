import Styles from './Header.module.css'
import Logo from '../../img/logo.png'

const Header = () => {
  return (
		<nav>
			<img src={Logo} alt="Logo" />
			<ul className={Styles.menuItem}>
				<li>Home</li>
				<li>Imóveis</li>
				<li>Sobre nós</li>
	  	</ul>
		</nav>
  )
}

export default Header