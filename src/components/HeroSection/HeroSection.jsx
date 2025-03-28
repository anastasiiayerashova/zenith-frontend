import Header from '../Header/Header.jsx'
import s from './HeroSection.module.css'
import { FaArrowRightLong } from 'react-icons/fa6'

const HeroSection = () => {
    return (
        <div className={s.hero}>
            <Header />
            <div className={s.container}>
                <p className={s.title}>Sound at the peak of perfection</p>
                <div className={s.bg}></div>
                <div className={s.button_wrap}>
                    <p className={s.text}>Open the world of premium sound with Zenith</p>
                    <a href="#work" className={s.hero_button_link}>
                        <FaArrowRightLong className={s.arrow} />
          <p className={s.hero_button}>Collection</p>
        </a>
                </div> 
            </div>
        </div>
    )
}

export default HeroSection