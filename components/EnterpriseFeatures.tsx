// import Image from 'next/image'
//
// export default function EnterpriseFeatures() {
//     return (
//         <section className="section-enterprise-features">
//             <div className="enterprise-features_grid">
//                 <div   
//                      className="enterprise-features_item-wrapper">
//                     <div    
//                          className="enterprise-features_item">
//                         <div     
//                              className="enterprise-features_top">
//                             <div className="subtitle">New Questions added everyday</div>
//                             <Image
//                                 src="https://cdn.prod.website-files.com/663fa3b3696c8bf893cc38b7/66719ad7a034bf9a0b522c0a_ezgif.com-optimize%20(2).gif"
//                                 width={300} height={200} alt="New questions" className="enterprise-gif"/>
//                         </div>
//                         <div id="    grid-s1" className="grid_stack">
//                             <div id="    grid-s2"
//                                  className="enterprise-features_number">
//                                 <div  
//                                      className="enterprise-features_title">100+<span
//                                     className="text-unit">Questions</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div id="hero-s1"
//                      className="background-color-border"></div>
//                 <div  
//                      className="enterprise-features_item-wrapper">
//                     <div   
//                          className="enterprise-features_item">
//                         <div    
//                              className="enterprise-features_top">
//                             <div className="subtitle">These questions will reduce your calculation timing and improve
//                                 your logical thinking.
//                             </div>
//
//                         </div>
//                         <div id="   grid-s3" className="grid_stack">
//                             <div id="   grid-s4"
//                                  className="enterprise-features_number">
//                                 <div  
//                                      className="enterprise-features_title">2.54<span
//                                     className="text-unit">x Faster</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//
//                 <div  
//                      className="enterprise-features_item-wrapper">
//                     <div   
//                          className="enterprise-features_item">
//                         <div    
//                              className="enterprise-features_top">
//                             <div className="subtitle">Your new box content goes here.</div>
//                         </div>
//                         <div id="   grid-s3" className="grid_stack">
//                             <div id="   grid-s4"
//                                  className="enterprise-features_number">
//                                 <div  
//                                      className="enterprise-features_title">Your new box title<span
//                                     className="text-unit">Your new box unit</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//
//
//             </div>
//         </section>
//     )
// }

import Image from 'next/image'

export default function EnterpriseFeatures() {
    return (
        <section className="section-enterprise-features">
            <div className="enterprise-features_grid">
                <div   
                     className="enterprise-features_item-wrapper">
                    <div    
                         className="enterprise-features_item">
                        <div     
                             className="enterprise-features_top">
                            <div className="subtitle">New Questions added everyday</div>
                            <Image
                                src="https://cdn.prod.website-files.com/663fa3b3696c8bf893cc38b7/66719ad7a034bf9a0b522c0a_ezgif.com-optimize%20(2).gif"
                                width={300} height={200} alt="New questions" className="enterprise-gif"/>
                        </div>
                        <div id="grid-s1" className="grid_stack">
                            <div id="grid-s2"
                                 className="enterprise-features_number">
                                <div  
                                     className="enterprise-features_title">100+<span className="text-unit">Questions</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="hero-s1"
                     className="background-color-border"></div>
                <div className="enterprise-features_item-wrapper">
                    <div   
                         className="enterprise-features_item">
                        <div    
                             className="enterprise-features_top">
                            <div className="subtitle">Start for free by solving our starter questions
                            </div>
                        </div>
                        <div id="grid-s1" className="grid_stack">
                            <div id="grid-s2"
                                 className="enterprise-features_number">
                                <div  
                                     className="enterprise-features_title">Improvement <span className="text-unit">starts now</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div  
                     className="background-color-border"></div>

                <div  
                     className="enterprise-features_item-wrapper">
                    <div   
                         className="enterprise-features_item">
                        <div    
                             className="enterprise-features_top">
                            <div className="subtitle">These questions will reduce your calculation timing and improve
                                your logical thinking
                            </div>
                        </div>
                        <div id="grid-s1" className="grid_stack">
                            <div id="grid-s2"
                                 className="enterprise-features_number">
                                <div  
                                     className="enterprise-features_title">1.56<span className="text-unit">x Faster</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}