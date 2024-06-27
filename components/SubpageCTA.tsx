import Link from 'next/link'

export default function SubpageCTA() {
    return (
        <section className="section-subpage-cta">
            <div className="container-large position-relative">
                <div className="background-color-off-white behind-grid"></div>
                <div className="gutters_inner border-left border-right border-top">
                    <div className="padding-section-small">
                        <div className="grid_stack text-align-center text-color-black">
                            <div className="spacer-medium"></div>
                            <div id=" cta-s1" className="position-relative">
                                <h1 className="heading_subpage-hero">Start your Journey of Mental Maths</h1>
                            </div>
                            <div  className="spacer-1rem"></div>
                            <div  className="text_supage-hero">Take the first step in transforming your brain to a Mental Math Gym. You wont believe how affordable we are!!</div>
                            <div  className="spacer-medium"></div>
                            <Link href="https://subs-prototype-stripe.vercel.app/" id="cta-s2" className="button-black wide w-inline-block">
                                <div>View Pricing</div>
                            </Link>
                        </div>
                        <div className="spacer-4rem"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
