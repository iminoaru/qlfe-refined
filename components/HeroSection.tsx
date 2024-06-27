'use client'

import Image from 'next/image'
import {Slide} from "react-awesome-reveal";

export default function HeroSection() {
    return (
        <section className="section-hero">
            <div className="background homepage-hero">
                <Image src="/leobg.png" layout="fill" objectFit="cover" alt="Hero background"
                       className="background_image hero"/>
                <div className="hero_radial-overlay"></div>
            </div>
            <div className="gutters_outter">
                <div className="container-large">
                    <div className="gutters_inner border-left border-right border-bottom">
                        <div className="position-relative">
                            <div className="hero_logo-section">
                                <Slide direction='up' triggerOnce>
                                <div id="hero-s1" className="overflow-hidden">
                                    <Image src="/headline.png" width={200} height={100} alt="Factory logo" className="hero_logo" />
                                </div>
                                </Slide>
                            </div>
                            <div id="hero-s1" className="logo-marquee">
                                <div className="hero-marquee-padding"></div>
                            </div>
                        </div>
                    </div>
                    <div className="gutters_inner border-left border-right border-bottom">
                        <div className="padding-section-xs">
                            <div className="position-relative">
                                <div className="grid_stack text-align-center">
                                    <h2>Increasing your Mental Math</h2>
                                    <div className="spacer-1rem"></div>
                                    <p  className="container-small">We help you in increasing your mental math skills and reduce thinking time. THe best questions in the world are on Quantlab!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}