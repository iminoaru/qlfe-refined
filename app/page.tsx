import Image from 'next/image'
import Link from 'next/link'
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EnterpriseFeatures from "@/components/EnterpriseFeatures";
import SubpageCTA from "@/components/SubpageCTA";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="page-wrapper">
            <Header />
            <main className="main-wrapper">
                <HeroSection />
                <EnterpriseFeatures />
                <SubpageCTA />
            </main>
            <Footer />
        </div>
    )
}
