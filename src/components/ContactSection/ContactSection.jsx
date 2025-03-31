import ContactForm from '../ContactForm/ContactForm.jsx'
import s from './ContactSection.module.css'

const ContactSection = () => {
    return (
        <section className={s.contact} id='contacts'>
            <h2 className={s.contact_title}>Contact us</h2>
            <p className={s.text}>We are always in touch. Email us or leave your contacts and we will respond as soon as possible</p>
            <ContactForm/>
        </section>
    )
 }

export default ContactSection