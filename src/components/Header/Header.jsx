import { useState } from 'react'
import './Header.css'

const data = [
    'Quem somos', 'Como Funciona', 'Redirecionamento', 'Personal Shopper',
    'Compra Assistida', 'Simuladores', 'Loja', 'FAQ'
]



function Header (){

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return(
        <>
            <div className='Container-Header'>
                <div className='Header-Mobile'>
                    <div>
                        <img className='logo-header' src="/logo.png" style={{ display: isMenuOpen ? 'none' : 'block' }} alt="" />
                    </div>
                    <div onClick={toggleMenu} className="toggle-button" style={{ display: isMenuOpen ? 'none' : '' }} >≡</div>
                </div>
                <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
                    <div onClick={toggleMenu} className="close-button">X</div>
                    {['Quem somos', 'Como Funciona', 'Redirecionamento', 'Personal Shopper', 'Compra Assistida', 'Simuladores', 'Loja', 'FAQ'].map(menuItem => (
                        <li key={menuItem} className="menu-item">
                            <a href={`#${menuItem}`}>{menuItem}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Header
