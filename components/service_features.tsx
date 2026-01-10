"use client";

import { useEffect, useState, CSSProperties  } from 'react';
import { ScrollIndicator } from './scroll-indicator';

export function ServiceFeatures({page}:{page?:string}) {
    const [header1, setHeader1]    = useState("Predictive analysis")
    const [text1, setText1] = useState(`Maximize accuracy, streamline operations, and drive growth
                                            with our predictive analytics solutions. Our software is
                                            designed to optimize your workflows, from data preparation and
                                            model training to performance evaluation and deployment. With
                                            Codefort, you can extract valuable insights from your data
                                            without altering complex technicalities.`)
    const [text11, setText11] = useState(`With us, you can extract valuable insights from your data
                                            without altering complex technicalities.`)
    const [tools1, setTools1] = useState<string[]>(["Tableau", "PowerBI", "KNIME", "RapidMiner", "SAS", "Alteryx"])
     const [header2, setHeader2]    = useState("Natural language processing")
    const [text2, setText2] = useState(` Deliver exceptional customer interactions with AI-powered
                                            chatbots that provide personalized responses. Our expertise in
                                            sentiment analysis, text classification, entity recognition,
                                            language translation, and text summarization helps us analyze
                                            large volumes of text and drive informed decision-making.`)
    const [text22, setText22] = useState(``)
    const [tools2, setTools2] = useState<string[]>(["GenSim", "SpaCy", "MonkeyLearn", "Aylien", "IBM Watson", "Stanford Core NLP", "TextBlob"])
         const [header3, setHeader3]    = useState("Computer vision")
    const [text3, setText3] = useState(`Transform your business with powerful computer vision
                                            capabilities. Our integrated solutions revolutionize
                                            communication channels and automate processes. By leveraging
                                            deep learning and image processing techniques, we unlock
                                            valuable information from visual content.`)
    const [text33, setText33] = useState(`From chatbots and voice assistants to visual recognition
                                            systems, we build seamless interactions and streamline
                                            image-based tasks.`)
    const [tools3, setTools3] = useState<string[]>(["OpenCV","TensorFlow", "Keras", "MATLAB", "CUDA", "Caffe", "DeepFace"])
    const [tool_color, setToolColor] = useState("rgb(246, 247, 249)")
    const [tool_icon, setToolIcon] = useState("/coded/service-4-icon.webp")
    const [icon1, setIcon1] = useState("/coded/microscope.webp")
    const [icon2, setIcon2] = useState("/coded/circle.webp")
    const [icon3, setIcon3] = useState("/coded/scan.webp")
    const [image1, setImage1] = useState("/coded/service-4-1.webp")
    const [image2, setImage2] = useState("/coded/service-4-2.webp")
    const [image3, setImage3] = useState("/coded/service-4-3.webp")

    useEffect(()=>{
        switch(page){
            case "blockchain":
                setHeader1("Custom blockchain solutions")
                setText1(`We understand that every organization has unique needs when it comes to blockchain technology, which is why our experienced engineers develop custom solutions tailored to meet your needs.`)
                setText11(`As a full-custom blockchain developer, we leverage blockchain architecture to enhance work efficiency and productivity.`)
                setTools1(["Solidity", "Remix", "Solc", "Metamask", "Geth", "Web3.js", "Embark", "Truffle"])
                setHeader2("Smart contracts")
                setText2(`Our engineers have hands-on experience in creating smart contracts using leading blockchain platforms such as Ethereum, Hyperledger, and EOS. Whether it's a simple contract or a complex multi-party agreement, our professionals will deliver results that exceed your expectations.`)
                setTools2(["Solidity", "Vyper", "PolkadotM", "Hedera", "Chainlink", "Smart Chain", "Brownie"])
                setHeader3("Cryptocurrency integration")
                setText3(`We incorporate cryptocurrency integration services to help you unlock new revenue streams and enhance customer engagement.`)
                setText33(`Whether you want to develop your own digital currencies or leverage existing ones, we have the expertise to guide you through the process`)
                setTools3(["CryptoCompare", "Coinmarketcap", "Chainalysis", "Coinbase", "Coinify", "Circle", "CoinGate"])
                setToolColor("rgb(255, 250, 240)")
                setToolIcon("/coded/service-3-icon.webp")
                setImage1("/coded/service-3-1.webp")
                setImage2("/coded/service-3-2.webp")
                setImage3("/coded/service-3-3.webp")
                setIcon3("/coded/trade.webp")
                setIcon2("/coded/shield.png")
                setIcon1("/coded/bitcoin.png")
            break;
            case "maintenance":
                setHeader1("Bug fixes and updates")
                setText1(`Ensure uninterrupted functionality and a seamless user experience with our dedicated team of experts.`)
                setText11(`Through meticulous bug fixes and updates, we keep your software up-to-date and responsive, providing uninterrupted functionality to your users.`)
                setTools1(["Backlog", "JIRA", "Mantis", "Lighthouse", "Trac", "RedMine", "Zoho Projects"])
                setHeader2("Performance optimization")
                setText2(`Maximize efficiency and the overall user experience with our comprehensive software maintenance services. Our proactive approach includes analyzing performance, identifying bugs, and optimizing databases. With regular software updates and bug fixes, we ensure your software runs smoothly, empowering your business to operate seamlessly.`)
                setText22("With regular software updates and bug fixes, we ensure your software runs smoothly, empowering your business to operate seamlessly.")
                setTools2(["Load Testing", "Endurance Testing", "Stress Testing", "Spike Testing", "Volume Testing", "Scalability Testing"])
                setHeader3("Security enhancements")
                setText3(`Safeguard your software from vulnerabilities and cyber threats with our comprehensive security enhancement services. Our team conducts thorough security audits and implement robust authentication.`)
                setText33(`With our stringent security measures in place, you can be assured that your sensitive information is secure from potential risks.`)
                setTools3(["Endpoint security", "Multi-Factor Authentication", "Recaptcha"])
                setToolColor("rgb(240, 255, 245)")
                setToolIcon("/coded/service-6-icon.webp")
                setImage1("/coded/service-6-1.webp")
                setImage2("/coded/service-6-2.webp")
                setImage3("/coded/service-6-3.webp")
                setIcon3("/coded/lock.webp")
                setIcon2("/coded/cpu.webp")
                setIcon1("/coded/code.webp")
            break;
            case "outsourcing":
                setHeader1("Dedicated engineering teams")
                setText1(`We leverage a pool of top-tier engineers who seamlessly integrate with your team, accelerating development cycles and propelling innovation.`)
                setText11(`Our outsourcing services help you scale your capabilities and achieve your business objectives.`)
                setTools1(["Product Designers", "Frontend Developers", "Backend Developers", "Devops Engineers", "Cloud Engineers", "QA Engineers", "Blockchain Engineers", "Web3 Engineers", "Product Manager", "Project Managers"])
                setHeader2("Short-term project support")
                setText2(`Meet deadlines and deliver exceptional results with our flexible and agile solutions. Our engineers provide the expertise and manpower needed for time-sensitive projects, ensuring successful execution and maintaining the highest quality standards.`)
                setText22("")
                setTools2(["LiveChat", "Zendesk", "Jira", "TeamViewer", "HelpScout"])
                setHeader3("Managed recruitment services")
                setText3(`Streamline your hiring journey and find the best professionals for your team with our experienced recruiters. Benefit from their industry knowledge and extensive network as they identify, evaluate, and recruit talent aligned with your requirements. Leave the hassle of recruitment behind with our managed recruitment services.`)
                setText33(``)
                setTools3(["ProofHub", "BambooHR", "Yello", "iCIMS", "HireVue", "Recruitee", "JazzHR", "SmartRecruiters"])
                setToolColor("rgb(241, 245, 255)")
                setToolIcon("/coded/service-5-icon.webp")
                setImage1("/coded/service-5-1.webp")
                setImage2("/coded/service-5-2.webp")
                setImage3("/coded/service-5-3.webp")
                setIcon3("/coded/add-user.webp")
                setIcon2("/coded/timer.webp")
                setIcon1("/coded/team.webp")
            break;
            case "product-design":
                setHeader1("User-centered design")
                setText1(`At Codefort, we are passionate about putting your target audience first. Our user-centered approach puts your unique requirements at the heart of every creative decision. With our expertise, we craft visually appealing interfaces that resonate with your users.`)
                setText11("")
                setTools1(["Figma", "Adobe XD", "Invision", "Sketch", "Usability Testing"])
                setHeader2("Prototyping and wireframing")
                setText2(`We transform your concepts into tangible and interactive designs, wireframes and clickable prototypes. Our iterative process allows for rapid refinement, ensuring that your ideas are transformed into a seamless, user-friendly journey that exceeds expectations.`)
                setText22("")
                setTools2(["Miro", "Figma", "Mockflow", "Balsamiq", "Cacoo", "Mockplus", "Marvel"])
                setHeader3("Usability testing")
                setText3(`Our rigorous usability testing process empowers us to optimize your interface with precision. By gathering valuable user feedback, we optimize design that maximizes engagement and drives your business's success.`)
                setText33(``)
                setTools3(["Maze", "Lookback", "UsabilityHub", "Userlytics", "Trymata", "Hotjar", "UserTesting"])
                setToolColor("rgb(255, 242, 241)")
                setToolIcon("/coded/service-2-icon.webp")
                setImage1("/coded/service-2-1.webp")
                setImage2("/coded/service-2-2.webp")
                setImage3("/coded/service-2-3.webp")
                setIcon3("/coded/copy-success.webp")
                setIcon2("/coded/prototype.webp")
                setIcon1("/coded/user.webp")
            break;
            case "software-development":
                setHeader1("Website development")
                setText1(`We empower customers to develop scalable web solutions from scratch or transform legacy systems into cutting-edge solutions that work seamlessly across all devices. Our clients benefit from complete transparency and the flexibility of dedicated teams that prioritize the highest levels of web solution security.`)
                setText11("From rapid MVPs to large-scale platforms, we deliver excellence in software development.")
                setTools1(["HTML", "CSS", "JavaScript", "React", "Vue","Angular","Express", "Springboot"])
                setHeader2("Web app development")
                setText2(`Boost your productivity and streamline your operations by seamlessly integrating custom applications into your workflow. Our expertise in software development empowers us to enhance work performance, automate processes, and facilitate seamless team collaboration.`)
                setText22("With our robust framework, your web application will operate at peak performance even under heavy workloads, ensuring a flawless user experience that drives customer satisfaction and builds trust.")
                setTools2(["React", "Angular", "Springboot", "MySQL", "PostgreSQL", "MongoDB", "AWS", "GCP", "Docker", "Kubernetes"])
                setHeader3("Mobile app development")
                setText3(`Experience accelerated development timelines and cost-effectiveness with our highly customized mobile app solutions. Whether you need an iOS app, an Android app, or a hybrid application, our skilled developers will create a visually appealing interface that prioritizes user experience and accessibility.`)
                setText33(``)
                setTools3(["React Native", "Flutter", "MAUI", "Kotlin", "Java", "Swift", "Ionic"])
                setToolColor("rgb(249, 241, 255)")
                setToolIcon("/coded/service-1-icon.webp")
                setImage1("/coded/service-1-1.webp")
                setImage2("/coded/service-1-2.webp")
                setImage3("/coded/service-1-3.webp")
                setIcon3("/coded/mobile.webp")
                setIcon2("/coded/monitor.webp")
                setIcon1("/coded/global.webp")
            break;
            case "startup-solutions":
                setHeader1("High-Quality development")
                setText1(`Experience high-quality software solutions that elevate your brand and set you apart from your competitors. Our team of engineers follows industry best practices to build robust and scalable applications, ensuring a seamless user experience and long-term success.`)
                setText11("At Codefort Software Development Agency, we prioritize quality, regardless of your business size.")
                setTools1(["Hubspot", "Clickup", "LivePlan", "Leanstack", "Asana"])
                setHeader2("Quick MVP Creation")
                setText2(`Codefort specializes in rapid MVP (Minimum Viable Product) creation. We help you validate your ideas, gather valuable user feedback, and secure early market traction.`)
                setText22("Our agile project management approach ensures a swift turnaround time by collaborating closely with you from concept to prototype.")
                setTools2(["Flutterflow", "Bubble", "Webflow", "Wordpress", "Framer", "Airtable", "Canva"])
                setHeader3("Insurance")
                setText3(`Our innovative solutions help our clients embrace digital transformation, navigate regulatory challenges, and gain a competitive edge in the industry. With Codefort, you can build and secure a prosperous future for your business.`)
                setText33(``)
                setTools3(["Vouch", "Veoci", "BarnOwl", "Resolver", "Integrum"])
                setToolColor("#F0F9FF")
                setToolIcon("/coded/service-7-icon.webp")
                setImage1("/coded/service-7-1.webp")
                setImage2("/coded/service-7-2.webp")
                setImage3("/coded/service-7-3.webp")
                setIcon3("/coded/chart.webp")
                setIcon2("/coded/rise.webp")
                setIcon1("/coded/graph.webp")
            break;
        }
    }, [])

    const toolStyle: CSSProperties = {
        backgroundColor: tool_color
    };
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Add the 'revealed' class to trigger the animation
                        entry.target.classList.add('revealed');
                        
                        // Also add to the inner content and cover
                        const content = entry.target.querySelector('.animated-content');
                        const cover = entry.target.querySelector('.service-cover');
                        
                        if (content) content.classList.add('revealed');
                        if (cover) cover.classList.add('revealed');
                    }
                });
            },
            {
                threshold: 0.2,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        // Observe each animated container
        const containers = document.querySelectorAll('.animate-container');
        containers.forEach(container => {
            observer.observe(container);
        });

        return () => {
            containers.forEach(container => {
                observer.unobserve(container);
            });
        };
    }, []);

    return (
        <div>
            <ScrollIndicator sections={["section-1", "section-2", "section-3"]} />
            <section className="ServiceFeatures_container__EEVn8">
                <div className="ServiceFeatures_steps__jQJLp">
                    <div className="ServiceFeatures_stepsInner__SAC_k">
                        <div className="ServiceFeatures_line__0hARg">
                            <div className="ServiceFeatures_lineInner__SWYyr false false false"></div>
                        </div>
                        <div className="ServiceFeatures_stepWrapper__YtNjT">
                            <img
                                alt="selected"
                                loading="lazy"
                                width="16"
                                height="16"
                                decoding="async"
                                data-nimg="1"
                                src="/images/selected.svg"
                                style={{ color: "transparent" }}
                            />
                        </div>
                        <div className="ServiceFeatures_stepWrapper__YtNjT">
                            <img
                                alt="selected"
                                loading="lazy"
                                width="16"
                                height="16"
                                decoding="async"
                                data-nimg="1"
                                src="/images/unselected.svg"
                                style={{ color: "transparent" }}
                            />
                        </div>
                        <div className="ServiceFeatures_stepWrapper__YtNjT">
                            <img
                                alt="selected"
                                loading="lazy"
                                width="16"
                                height="16"
                                decoding="async"
                                data-nimg="1"
                                src="/images/unselected.svg"
                                style={{ color: "transparent" }}
                            />
                        </div>
                        <div className="ServiceFeatures_stepWrapper__YtNjT">
                            <img
                                alt="selected"
                                loading="lazy"
                                width="16"
                                height="16"
                                decoding="async"
                                data-nimg="1"
                                src="/images/unselected.svg"
                                style={{ color: "transparent" }}
                            />
                        </div>
                    </div>
                </div>
                <div className="ServiceFeatures_wrapper__ISeO_" >
                    {/* Feature 1: Predictive analysis */}
                    <div className="ServiceFeatures_feature__7vlr_" id="section-1">
                        <div className="ServiceFeatures_featureMain___wpBe">
                            <div className="animate-container">
                                <div className="animated-content">
                                    <img
                                        alt="icon"
                                        loading="lazy"
                                        width="56"
                                        height="56"
                                        decoding="async"
                                        data-nimg="1"
                                        src={icon1}
                                        style={{ color: "transparent" }}
                                    />
                                </div>
                                <div className="service-cover"></div>
                            </div>
                            <div className="ServiceFeatures_featureTextsWrapper__muCdF">
                                <div className="animate-container">
                                    <div className="animated-content">
                                        <h3 className="ServiceFeatures_featureHeader__Nf3Mx">
                                            {header1}
                                        </h3>
                                    </div>
                                    <div className="service-cover"></div>
                                </div>
                                <div className="animate-container">
                                    <div className="animated-content">
                                        <p className="ServiceFeatures_featureBody__eBA9l">
                                            {text1}
                                        </p>
                                    </div>
                                    <div className="service-cover"></div>
                                </div>
                                <div className="animate-container">
                                    <div className="animated-content">
                                        <p className="ServiceFeatures_featureBody__eBA9l">
                                            {text11}
                                        </p>
                                    </div>
                                    <div className="service-cover"></div>
                                </div>
                            </div>
                            <div
                                className="ServiceFeatures_toolsWrapper___j6f3"
                                style={toolStyle}
                            >
                                <img
                                    alt="tool icon"
                                    loading="lazy"
                                    width="32"
                                    height="32"
                                    decoding="async"
                                    data-nimg="1"
                                    src={tool_icon}
                                    style={{ color: "transparent" }}
                                />
                                <div className="ServiceFeatures_tools__49zi7">
                                    {tools1.map((tool)=> <p className="ServiceFeatures_tool__ii2yP">{tool},</p>)}
                                    
                                </div>
                            </div>
                        </div>
                        <div className="ServiceFeatures_imageWrapper__SYWu_">
                            <img
                                alt="image"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                className="ServiceFeatures_image__LmP_x"
                                sizes="100vw"
                                src={image1}
                                style={{
                                    position: "absolute",
                                    height: "100%",
                                    width: "100%",
                                    inset: "0px",
                                    color: "transparent"
                                }}
                            />
                        </div>
                    </div>

                    {/* Feature 2: Natural language processing */}
                    <div className="ServiceFeatures_feature__7vlr_" id="section-2">
                        <div className="ServiceFeatures_featureMain___wpBe">
                            <div className="animate-container">
                                <div className="animated-content">
                                    <img
                                        alt="icon"
                                        loading="lazy"
                                        width="56"
                                        height="56"
                                        decoding="async"
                                        data-nimg="1"
                                        src={icon2}
                                        style={{ color: "transparent" }}
                                    />
                                </div>
                                <div className="service-cover"></div>
                            </div>
                            <div className="ServiceFeatures_featureTextsWrapper__muCdF">
                                <div className="animate-container">
                                    <div className="animated-content">
                                        <h3 className="ServiceFeatures_featureHeader__Nf3Mx">
                                            {header2}
                                        </h3>
                                    </div>
                                    <div className="service-cover"></div>
                                </div>
                                <div className="animate-container">
                                    <div className="animated-content">
                                        <p className="ServiceFeatures_featureBody__eBA9l">
                                           {text2}
                                        </p>
                                    </div>
                                    <div className="service-cover"></div>
                                </div>
                                <div className="animate-container">
                                    <div className="animated-content">
                                        <p className="ServiceFeatures_featureBody__eBA9l">{text22}</p>
                                    </div>
                                    <div className="service-cover"></div>
                                </div>
                            </div>
                            <div
                                className="ServiceFeatures_toolsWrapper___j6f3"
                                style={toolStyle}
                            >
                                <img
                                    alt="tool icon"
                                    loading="lazy"
                                    width="32"
                                    height="32"
                                    decoding="async"
                                    data-nimg="1"
                                    src={tool_icon}
                                    style={{ color: "transparent" }}
                                />
                                <div className="ServiceFeatures_tools__49zi7">
                                    {tools2.map((tool, index)=><p className="ServiceFeatures_tool__ii2yP">{tool}{index == tools2.length - 1 ? "":","}</p>)}                                    
                                </div>
                            </div>
                        </div>
                        <div className="ServiceFeatures_imageWrapper__SYWu_">
                            <img
                                alt="image"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                className="ServiceFeatures_image__LmP_x"
                                sizes="100vw"                              
                                src={image2}
                                style={{
                                    position: "absolute",
                                    height: "100%",
                                    width: "100%",
                                    inset: "0px",
                                    color: "transparent"
                                }}
                            />
                        </div>
                    </div>

                    {/* Feature 3: Computer vision */}
                    <div className="ServiceFeatures_feature__7vlr_" id="section-3">
                        <div className="ServiceFeatures_featureMain___wpBe">
                            <div className="animate-container">
                                <div className="animated-content">
                                    <img
                                        alt="icon"
                                        loading="lazy"
                                        width="56"
                                        height="56"
                                        decoding="async"
                                        data-nimg="1"
                                        src={icon3}
                                        style={{ color: "transparent" }}
                                    />
                                </div>
                                <div className="service-cover"></div>
                            </div>
                            <div className="ServiceFeatures_featureTextsWrapper__muCdF">
                                <div className="animate-container">
                                    <div className="animated-content">
                                        <h3 className="ServiceFeatures_featureHeader__Nf3Mx">
                                            {header3}
                                        </h3>
                                    </div>
                                    <div className="service-cover"></div>
                                </div>
                                <div className="animate-container">
                                    <div className="animated-content">
                                        <p className="ServiceFeatures_featureBody__eBA9l">
                                            {text3}
                                        </p>
                                    </div>
                                    <div className="service-cover"></div>
                                </div>
                                <div className="animate-container">
                                    <div className="animated-content">
                                        <p className="ServiceFeatures_featureBody__eBA9l">
                                            {text33}
                                        </p>
                                    </div>
                                    <div className="service-cover"></div>
                                </div>
                            </div>
                            <div
                                className="ServiceFeatures_toolsWrapper___j6f3"
                                style={toolStyle}
                            >
                                <img
                                    alt="tool icon"
                                    loading="lazy"
                                    width="32"
                                    height="32"
                                    decoding="async"
                                    data-nimg="1"
                                    src={tool_icon}
                                    style={{ color: "transparent" }}
                                />
                                <div className="ServiceFeatures_tools__49zi7">
                                    {tools3.map((tool, index)=><p className="ServiceFeatures_tool__ii2yP">{tool}{index == tools3.length - 1 ? "":","}</p>)} 
                                    
                                </div>
                            </div>
                        </div>
                        <div className="ServiceFeatures_imageWrapper__SYWu_">
                            <img
                                alt="image"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                className="ServiceFeatures_image__LmP_x"
                                sizes="100vw"                                
                                src={image3}
                                style={{
                                    position: "absolute",
                                    height: "100%",
                                    width: "100%",
                                    inset: "0px",
                                    color: "transparent"
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <style jsx global>{`
                /* IMPORTANT: Global styles to override inline styles */
                .animate-container {
                    position: relative !important;
                    width: fit-content !important;
                    overflow: hidden !important;
                }
                
                .animated-content {
                    opacity: 0 !important;
                    transform: translateY(75px) translateZ(0px) !important;
                    transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                                transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) !important;
                    height: 100% !important;
                }
                
                /* Service-specific cover styles */
                .service-cover {
                    position: absolute !important;
                    top: 0 !important;
                    left: 0 !important;
                    right: 0 !important;
                    bottom: 0 !important;
                    background-color: rgb(59, 133, 183) !important;
                    transform: translateY(0) !important;
                    opacity: 1 !important;
                    transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), 
                                opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) !important;
                    z-index: 20 !important;
                    pointer-events: none !important;
                }
                
                /* Revealed states */
                .animate-container.revealed .animated-content {
                    opacity: 1 !important;
                    transform: translateY(0) translateZ(0px) !important;
                }
                
                .animate-container.revealed .service-cover,
                .service-cover.revealed {
                    transform: translateY(100%) !important;
                    opacity: 0 !important;
                }
                
                /* Ensure content stays above cover */
                .ServiceFeatures_featureHeader__Nf3Mx,
                .ServiceFeatures_featureBody__eBA9l {
                    position: relative;
                    z-index: 10;
                }
                
                /* Mobile responsive */
                @media (max-width: 768px) {
                    .animate-container {
                        width: 100% !important;
                    }
                    
                    .animated-content,
                    .service-cover {
                        transition-duration: 0.6s !important;
                    }
                }
                
                /* Stagger animation for children */
                .ServiceFeatures_featureTextsWrapper__muCdF .animate-container:nth-child(2) .animated-content,
                .ServiceFeatures_featureTextsWrapper__muCdF .animate-container:nth-child(2) .service-cover {
                    transition-delay: 0.1s;
                }
                
                .ServiceFeatures_featureTextsWrapper__muCdF .animate-container:nth-child(3) .animated-content,
                .ServiceFeatures_featureTextsWrapper__muCdF .animate-container:nth-child(3) .service-cover {
                    transition-delay: 0.2s;
                }
            `}</style>

            {/* Fallback JavaScript for browsers without IntersectionObserver */}
            <script dangerouslySetInnerHTML={{
                __html: `
                (function() {
                    // Function to reveal elements
                    function revealElements() {
                        document.querySelectorAll('.animate-container').forEach((container, index) => {
                            setTimeout(() => {
                                container.classList.add('revealed');
                                const content = container.querySelector('.animated-content');
                                const cover = container.querySelector('.service-cover');
                                if (content) content.classList.add('revealed');
                                if (cover) cover.classList.add('revealed');
                            }, index * 150);
                        });
                    }
                    
                    if (!('IntersectionObserver' in window)) {
                        // Fallback for older browsers - reveal all immediately
                        setTimeout(revealElements, 500);
                        return;
                    }
                    
                    // Use IntersectionObserver for modern browsers
                    const observer = new IntersectionObserver((entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                entry.target.classList.add('revealed');
                                const content = entry.target.querySelector('.animated-content');
                                const cover = entry.target.querySelector('.service-cover');
                                if (content) content.classList.add('revealed');
                                if (cover) cover.classList.add('revealed');
                            }
                        });
                    }, { threshold: 0.2, rootMargin: '0px 0px -100px 0px' });
                    
                    document.querySelectorAll('.animate-container').forEach(container => {
                        observer.observe(container);
                    });
                })();
                `
            }} />
        </div>
    );
}