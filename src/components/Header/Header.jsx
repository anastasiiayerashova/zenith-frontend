import Logo from '../Logo/Logo.jsx'
import s from './Header.module.css'
import { RxHamburgerMenu } from 'react-icons/rx'

const Header = () => {
    return (
        <div className={s.container}>
            <Logo />
            <div className={s.visible}>
                <input type="checkbox" className={s.theme_checkbox} id="change-theme"/>
                <label htmlFor="change-theme" className={s.visually_hidden}>Change theme</label>
                <button>
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
    )
 }

export default Header