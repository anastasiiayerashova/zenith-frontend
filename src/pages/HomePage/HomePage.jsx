import AboutSection from "../../components/AboutSection/AboutSection.jsx"
import CollectionSection from "../../components/CollectionSection/CollectionSection.jsx"
import ContactSection from "../../components/ContactSection/ContactSection.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import HeroSection from "../../components/HeroSection/HeroSection.jsx"
import LineSection from "../../components/LineSection/LineSection.jsx"
import SocialLinks from "../../components/SocialLinks/SocialLinks.jsx"

const HomePage = ({products}) => {
    return (
        <>
            <HeroSection />
            <SocialLinks />
            <LineSection />
            <AboutSection />
            <CollectionSection products={products} />
            <ContactSection />
            <Footer/>
        </>
    )
}

export default HomePage