import s from './AboutSection.module.css'

const AboutSection = () => {
    return (
        <section className={s.about}>
            <h2>About Zenith</h2>
            <div className={s.first_wrap}>
                <div className={s.image}></div>
                <p>Zenith is a premium audio brand, dedicated to creating high-quality Bluetooth headphones that combine advanced technology, sophisticated design, and everyday comfort. Founded by a team of audio enthusiasts, we aim to redefine how people experience sound.</p>
            </div>
            <div className={s.second_wrap}>
                <ul className={s.about_list}>
                    <li className={s.first_li}>
                        <h4>Why Choose Us</h4>
                        <ul>
                            <li>seamless sound</li>
                            <li>modern design</li>
                            <li>intuitive touch controls</li>
                            {/* <li>a 2-year warranty</li> */}
                        </ul>
                    </li>
                    <li className={s.second_li}>
                        <h4>Our Mission</h4>
                        <p>craft superior audio experiences with cutting-edge technology and minimalist aesthetics.</p>
                    </li>
                    <li className={s.second_li}>
                        <h4>Our Legacy</h4>
                        <p>Over 5 years of redefining audio, trusted by music lovers worldwide for innovation and quality.</p>
                    </li>
                </ul>
            </div>
        </section>
    )
 }

export default AboutSection