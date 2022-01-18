import React from "react";
import style from "./Derscription.module.css";

const Description = () => {
    return (
        <div className={style.description}>
            <div>Oleg Sh.</div>
            <div>Date of Birth: 31 May</div>
            <div>City: Sochi</div>
            <div>Education: SR STU '09</div>
            <div>Web Site: https://somehost.com</div>
        </div>
    )
}

export default Description;