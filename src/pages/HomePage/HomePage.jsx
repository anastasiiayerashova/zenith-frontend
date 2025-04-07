import AboutSection from "../../components/AboutSection/AboutSection.jsx"
import CollectionSection from "../../components/CollectionSection/CollectionSection.jsx"
import ContactSection from "../../components/ContactSection/ContactSection.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import HeroSection from "../../components/HeroSection/HeroSection.jsx"
import LineSection from "../../components/LineSection/LineSection.jsx"
import ReviewsSection from "../../components/ReviewsSection/ReviewsSection.jsx"
import SaleSection from "../../components/SaleSection/SaleSection.jsx"
import SocialLinks from "../../components/SocialLinks/SocialLinks.jsx"
import SplashCursor from "../../blocks/Animations/SplashCursor/SplashCursor.jsx"
import { useState } from "react"

const HomePage = ({ products }) => {
    
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

    return (
        <>
            <SplashCursor/>
            <HeroSection />
            <SocialLinks />
            <LineSection />
            <SaleSection products={products} />
            <AboutSection />
            <CollectionSection products={products} />
            <ReviewsSection/>
            <ContactSection onEmailSent={openModal} isOpen={isModalOpen} onClose={closeModal} />
            <Footer/>
        </>
    )
}

export default HomePage