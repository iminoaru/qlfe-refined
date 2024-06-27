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
                            <div id="w-node-c85ee8de-d6cd-cd2c-72c3-3c570fbf2c50-93cc38bc" className="position-relative">
                                <h1 id="w-node-c85ee8de-d6cd-cd2c-72c3-3c570fbf2c51-93cc38bc" className="heading_subpage-hero">Start your Journey of Mental Maths</h1>
                            </div>
                            <div id="w-node-c85ee8de-d6cd-cd2c-72c3-3c570fbf2c53-93cc38bc" className="spacer-1rem"></div>
                            <div id="w-node-c85ee8de-d6cd-cd2c-72c3-3c570fbf2c54-93cc38bc" className="text_supage-hero">Take the first step in transforming your brain to a Mental Math Gym. You wont believe how affordable we are!!</div>
                            <div id="w-node-c85ee8de-d6cd-cd2c-72c3-3c570fbf2c56-93cc38bc" className="spacer-medium"></div>
                            <Link href="https://subs-prototype-stripe.vercel.app/" id="w-node-c85ee8de-d6cd-cd2c-72c3-3c570fbf2c57-93cc38bc" className="button-black wide w-inline-block">
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
