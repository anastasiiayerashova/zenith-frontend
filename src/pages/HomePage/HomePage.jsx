import AboutSection from "../../components/AboutSection/AboutSection.jsx"
import HeroSection from "../../components/HeroSection/HeroSection.jsx"
import LineSection from "../../components/LineSection/LineSection.jsx"
import SocialLinks from "../../components/SocialLinks/SocialLinks.jsx"

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <SocialLinks />
            <LineSection />
            <AboutSection/>
        </>
    )
}

export default HomePage