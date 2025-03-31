import Logo from '../Logo/Logo.jsx'
import s from './Footer.module.css'
import { RiPhoneLine } from "react-icons/ri";
import { LuMail } from "react-icons/lu";

const Footer = () => {
    return (
        <section className={s.footer}>
            <Logo />
            <div className={s.wrapper}>
                <p>Instagram</p>
                <p>Facebook</p>
                <div className={s.links_wrapper}>
                    <RiPhoneLine className={s.icon} size={24} fill='#A88C76'/>
                    <p>+38 090 456 78 90</p>
                </div>
                <div className={s.links_wrapper}>
                    <LuMail className={s.icon} size={24} stroke='#A88C76'/>
                    <p>zenith@gmail.com</p>
                </div>
            </div>
        </section>
    )
 }

export default Footer