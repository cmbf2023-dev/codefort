import { SessionTitle } from "./service_page/sessionTitle";
import { SessionVideo } from "./service_page/sessionVideo";

export function Session({page}:{page?: string }){
    let title = "We leverage the latest advancements in AI and Machine Learning to drive efficiency in your business"

    switch(page){
        case "maintenance":
            title = "We provide the support you need to ensure an elevated software experience for your users"
            break;
        case "ai-and-ml":
            title = "We leverage the latest advancements in AI and Machine Learning to drive efficiency in your business"
            break;
        case "startup":
            title = "We empower you with solutions that facilitate your business’ growth and accelerate progress"
            break;
        case "software-development":
            title = "We deliver long-term digital value to business owners and startups"
            break;
        case "product-design":
            title = "We design solutions that elevate the way users experience your product and meet your business needs"
            break;

        case "blockchain":
            title = "We provide innovative and scalable blockchain solutions tailored to meet your unique requirements"
            break;
        case "outsourcing":
            title = "We are that trusted partner that helps you streamline your operations"
            break;
        
    }
    return (
        <>
        <SessionTitle title={title}/>

        <SessionVideo />
        </>
    );
}