import s from './SocialLinks.module.css'

const SocialLinks = () => {
    return (
        <section className={s.section}>
            <ul className={s.links_list}>
               <li>Instagram</li>
               <li>Facebook</li>
               <li>Twitter</li>
            </ul>
        </section>
        
    )
}

export default SocialLinks