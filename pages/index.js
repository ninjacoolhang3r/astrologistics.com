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
import Head from 'next/head'

export default function Home() {
    return (
        <div className="homepage-2">
            {/*====== Scroll To Top Area Start ======*/}
            <div id="scrollUp" title="Scroll To Top">
                <i className="fas fa-arrow-up" />
            </div>
            {/*====== Scroll To Top Area End ======*/}
            <div className="main">
                <Head>
                    <>
                        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
                        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
                        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
                        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
                        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
                        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
                        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
                        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
                        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
                        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
                        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
                        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                        <link rel="manifest" href="/manifest.json"/>
                        <meta name="msapplication-TileColor" content="#ffffff"/>
                        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
                        <meta name="theme-color" content="#ffffff"/>
                        <meta name="description" content="Premium services ranging from Truckload, Intermodal, Air, Ocean, LTL, Customs Brokerage, and more." />
                        {/* <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" /> */}
                        <meta name="twitter:image:src" content="/img/logo-big.png"/>
                        <meta name="twitter:site" content="@astrologistics"/>
                        <meta name="twitter:card" content="summary_large_image"/>
                        <meta name="twitter:title" content="Astro Logistics Inc."/>
                        <meta name="twitter:description" content="Premium services ranging from Truckload, Intermodal, Air, Ocean, LTL, Customs Brokerage, and more."/>

                        <meta property="og:image" content="/img/logo-big.png"/> 
                        <meta property="og:image:alt" content="Premium services ranging from Truckload, Intermodal, Air, Ocean, LTL, Customs Brokerage, and more."/>
                        <meta property="og:site_name" content="Astro Logistics"/>
                        <meta property="og:type" content="object"/>
                        <meta property="og:title" content="Astro Logistics Inc."/>
                        <meta property="og:url" content="https://www.astrologistics.org"/>
                        <meta property="og:description" content="Premium services ranging from Truckload, Intermodal, Air, Ocean, LTL, Customs Brokerage, and more."/>
                    </>
                </Head>
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
