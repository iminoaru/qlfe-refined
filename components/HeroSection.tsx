'use client'

import Image from 'next/image'
import {Slide} from "react-awesome-reveal";

export default function HeroSection() {
    return (
        <section className="section-hero">
            <div className="background homepage-hero">
                <Image src="/leobg.png" layout="fill" objectFit="cover" alt="Hero background" className="background_image hero" />
                <div className="hero_radial-overlay"></div>
            </div>
            <div className="gutters_outter">
                <div className="container-large">
                    <div className="gutters_inner border-left border-right border-bottom">
                        <div className="position-relative">
                            <div className="hero_logo-section">
                                <Slide direction='up' triggerOnce>
                                <div id="w-node-_446856f2-6f33-5a76-2a44-bba13d1da1ba-93cc38bc" className="overflow-hidden">
                                    <Image src="/headline.png" width={200} height={100} alt="Factory logo" className="hero_logo" />
                                </div>
                                </Slide>
                            </div>
                            <div id="w-node-df109cb7-96a7-73f0-3583-402e77a4197a-93cc38bc" className="logo-marquee">
                                <div className="hero-marquee-padding"></div>
                            </div>
                        </div>
                    </div>
                    <div className="gutters_inner border-left border-right border-bottom">
                        <div className="padding-section-xs">
                            <div className="position-relative">
                                <div className="grid_stack text-align-center">
                                    <h2 id="w-node-_95dc1954-a220-6acb-ac66-81c9a8ea3ef2-93cc38bc">Increasing your Mental Math</h2>
                                    <div className="spacer-1rem"></div>
                                    <p id="w-node-_483db30a-a966-cf65-ddad-fde0ba97930e-93cc38bc" className="container-small">We help you in increasing your mental math skills and reduce thinking time. THe best questions in the world are on Quantlab!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}