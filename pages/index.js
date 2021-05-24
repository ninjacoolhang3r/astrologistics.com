import Header from '../components/HeaderSection/Header';
import HeroSection from '../components/HeroSection/HeroTwo';
import FeatureSection from '../components/Features/FeatureTwo';
import ServiceSection from '../components/ServiceSection/ServiceTwo';
import DiscoverSection from '../components/DiscoverSection/DiscoverTwo';
import Work from '../components/WorkSection/Work';
import FaqSection from '../components/FaqSection/FaqTwo';
import Download from '../components/DownloadSection/Download';
import ContactSection from '../components/ContactSection/Contact';
import FooterSection from '../components/FooterSection/Footer';

export default function Home() {
    return (
        <div className="homepage-2">
            {/*====== Scroll To Top Area Start ======*/}
            <div id="scrollUp" title="Scroll To Top">
                <i className="fas fa-arrow-up" />
            </div>
            {/*====== Scroll To Top Area End ======*/}
            <div className="main">
                <Header imageData={"/img/logo.png"} />
                <HeroSection />
                <FeatureSection />
                <DiscoverSection />
                <ServiceSection />
                <Work />
                {/* <ScreenshotSection />
                <ReviewSection /> */}
                {/* <PricingSection /> */}
                <FaqSection />
                <Download />
                {/* <Subscribe /> */}
                <ContactSection />
                <FooterSection />
            </div>
        </div>
    )
}


export async function getServerSideProps(context){
    return {
        props: {}
    } 
}
