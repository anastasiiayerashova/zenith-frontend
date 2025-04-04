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
                <button onClick={toggleMenu}>
                    <RxHamburgerMenu size={32}/>
                </button>
            </div>
            <ul className={s.list}>
                <li><a href="#sale">Sale</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#collection">Collection</a></li>
                <li><a href="#contacts">Contacts</a></li>
            </ul>
        </div>
            <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
    )
 }

export default Header