import Hero from "./components/Hero";
import KaligrafiSection from "./components/KaligrafiSection";
import LogoDecoration from "./components/LogoDecoration";
import SaveTheDate from "./components/SaveTheDate";
import MapsSection from "./components/MapsSection";
import ConfirmForm from "./components/ConfirmForm";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="bg-black text-white font-sans">
            <Hero />
            <KaligrafiSection />
            <LogoDecoration />
            <SaveTheDate />
            <MapsSection />
            <ConfirmForm />
            <Footer />
        </div>
    );
}
