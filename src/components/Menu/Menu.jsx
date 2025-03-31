import Logo from '../Logo/Logo.jsx';
import s from './Menu.module.css'
import { IoCloseOutline } from "react-icons/io5";

const Menu = ({isOpen, toggleMenu}) => {
    return (
        <div className={`${s.mob_menu} ${isOpen ? s.is_open : ''}`}>
    <nav className={s.mob_menu_nav}>
      <Logo/>
      <button className={s.mob_menu_close_btn} onClick={toggleMenu}>
                    <IoCloseOutline className={s.mob_menu_close_btn_icon} size={32}/>
      </button>
    </nav>

    <ul className={s.mob_nav_list}>
      <li className={s.mob_nav_item}>
        <a className={s.mob_nav_link} href="#sale" onClick={toggleMenu}>Sale</a>
      </li>
      <li className={s.mob_nav_item}>
        <a className={s.mob_nav_link} href="#about" onClick={toggleMenu}>About us</a>
      </li>
      <li className={s.mob_nav_item}>
        <a className={s.mob_nav_link} href="#collection" onClick={toggleMenu}>Collection</a>
      </li>
       <li className={s.mob_nav_item}>
        <a className={s.mob_nav_link} href="#contacts" onClick={toggleMenu}>Contacts</a>
      </li>      
    </ul>
            <div className={s.link_wrapper}>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Twitter</p>
            </div>
  </div>
)
}

export default Menu