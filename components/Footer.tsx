import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="section-footer">
            {/*<div className="gutters_outter">*/}
                <div className="container-large border-left border-right">
                    <div className="footer-main">
                        <div className="footer_image-wrap">
                            <Image src="/headline.png" width={200} height={100} alt="quantlab logo" className="footer_logo" />
                        </div>
                        <div className="lines-spacer-horiz foot"></div>
                        <div className="footer-columns">
                            <div className="footer-col first">
                                <div className="column-title">Company</div>
                                <div className="footer-link-list">
                                    <Link href="/careers" className="footer-link w-inline-block">
                                        <div className="column-button">Questions</div>
                                    </Link>
                                    <Link href="/droids" className="footer-link w-inline-block">
                                        <div className="column-button">Reviews</div>
                                    </Link>
                                    <Link href="/enterprise" className="footer-link w-inline-block">
                                        <div className="column-button">Pricing</div>
                                    </Link>
                                </div>
                            </div>
                            <div className="footer-col">
                                <div className="column-title">Resources</div>
                                <div className="footer-link-list">
                                    <Link href="/news" className="footer-link w-inline-block">
                                        <div className="column-button">About</div>
                                    </Link>
                                    <Link href="/contact" className="footer-link w-inline-block">
                                        <div className="column-button">Contact Team</div>
                                    </Link>
                                </div>
                            </div>
                            <div className="footer-col">
                                <div className="column-title">Social</div>
                                <div className="footer-link-list">
                                    <a href="https://twitter.com/FactoryAI" className="footer-link w-inline-block">
                                        <div className="column-button">Twitter</div>
                                    </a>
                                    <a href="https://www.linkedin.com/company/factory-hq" className="footer-link w-inline-block">
                                        <div className="column-button">LinkedIn</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="very-bottom">
                        <div className="legal-text">© 2024 The QuantLab</div>
                        <div className="w-layout-hflex flex-block-2">
                            <Link href="/privacy-policy" className="link-block-25 w-inline-block">
                                <div className="legal-text">Privacy Policy</div>
                            </Link>
                        </div>
                    </div>
                </div>
        </footer>
)
}