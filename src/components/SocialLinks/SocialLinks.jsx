import s from './SocialLinks.module.css'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const SocialLinks = () => {

      const [ref, inView] = useInView({
        triggerOnce: false, 
        threshold: 0.2, 
    });

    const listItemVariants = (direction) => ({
        hidden: { x: direction === 'left' ? -100 : 100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    });

    return (
        <section className={s.section}>
            <motion.ul ref={ref} className={s.links_list}>
               <motion.li  variants={listItemVariants('left')}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}>Instagram</motion.li>
               <motion.li  variants={listItemVariants('right')}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}>Facebook</motion.li>
               <motion.li   variants={listItemVariants('left')}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}>Twitter</motion.li>
            </motion.ul>
        </section>
        
    )
}

export default SocialLinks