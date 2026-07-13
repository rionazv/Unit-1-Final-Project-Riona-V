import { useState } from "react";

export default function IndividualValkIcon (props) {

    const [isActive, setIsActive] = useState(false);

    return (

        <img 
        className={`chibi-icon ${isActive ? "is-active" : "is-not-active"} `}
        onClick= { () => setIsActive(!isActive) }
        src={props.src} 
        alt={props.alt}
        title={props.title}
        />

    );

}