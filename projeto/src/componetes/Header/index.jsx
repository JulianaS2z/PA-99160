import { Link, NavLink } from 'react-router-dom';
import './style.css';
import logo from '../../assets/logo.png';

export default function Header() {
    return (
        <header className="header-container">
            {/* Área da Logo */}
            <div className="header-logo">
                <Link to="/" className="logo-link">
                    <img src={logo} alt="Logo da Contabilidade Simples" />
                    <span className="logo-text">Contabilidade Simples</span>
                </Link>
            </div>

            {/* Menu de Navegação */}
            <nav className="header-nav">
                <ul>
                    <li>
                        <NavLink to="/">Início</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sobre-nos">Sobre nós</NavLink>
                    </li>
                    <li>
                        <NavLink to="/produto">Produtos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/fale-conosco">Fale conosco</NavLink>
                    </li>
                </ul>
            </nav>
        </header>  
    )
}