'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileOrTablet(window.innerWidth < 1024); // Changed from 768px to 1024px
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className="nav_sticky">
            <div className="gutters_outter">
                <div className="container-large">
                    <div className="background-color-balck-80">
                        <div className="nav_wrapper">
                            <div className="nav w-nav">
                                <div className="nav_content">
                                    <Link href="/" className="nav_brand w-inline-block">
                                        <Image src="/logo.png" width={37} height={37} alt="Logo" className="nav_logo" />
                                    </Link>
                                    <div className="nav_spacer"></div>
                                    {isMobileOrTablet ? (
                                        <button className="burger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                            <div className="burger-icon">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </button>
                                    ) : (
                                        <nav className="nav_menu w-nav-menu">
                                            <NavLinks />
                                        </nav>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isMobileOrTablet && isMenuOpen && (
                <div className="mobile-menu">
                    <NavLinks />
                </div>
            )}
        </header>
    )
}

function NavLinks() {
    return (
        <>
            <Link href="/questions" className="nav_link w-inline-block">
                <div>QUESTIONS</div>
                <div className="nav_navigation-tag">Navigation</div>
            </Link>
            <Link href="/reviews" className="nav_link w-inline-block">
                <div className="text-block-23">REVIEWS</div>
                <div className="nav_navigation-tag">Navigation</div>
            </Link>
            <Link href="https://subs-prototype-stripe.vercel.app/" className="nav_link w-inline-block">
                <div className="text-block-23">PRICING</div>
                <div className="nav_navigation-tag">Navigation</div>
            </Link>
            <Link href="/contact" className="nav_link join w-inline-block">
                <div className="text-block-23 join">JOIN&nbsp;US</div>
                <div className="nav_navigation-tag join">Invitation</div>
            </Link>
        </>
    )
}