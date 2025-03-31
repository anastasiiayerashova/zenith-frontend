import Logo from '../Logo/Logo.jsx'
import s from './Header.module.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useState } from 'react'
import Menu from '../Menu/Menu.jsx'

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    }

    return (
    <>
        <div className={s.container}>
            <Logo />
            <div className={s.visible}>
                <input type="checkbox" className={s.theme_checkbox} id="change-theme"/>
                <label htmlFor="change-theme" className={s.visually_hidden}>Change theme</label>
                <button onClick={toggleMenu}>
                    <RxHamburgerMenu size={32}/>
                </button>
            </div>
            <ul className={s.list}>
                <li>Sale</li>
                <li>About us</li>
                <li>Collection</li>
                <li>Contacts</li>
            </ul>
        </div>
            <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
    )
 }

export default Header