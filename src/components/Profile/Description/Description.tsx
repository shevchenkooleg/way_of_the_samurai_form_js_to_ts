import React from "react";
import style from "./Derscription.module.css";
import {ProfileType} from "../../../App";

type DescriptionPropsType = {
    profile: ProfileType
}

const Description = (props: DescriptionPropsType) => {
    return (
        <div className={style.description}>
            {/*<div>Oleg Sh.</div>*/}
            {/*<div>Date of Birth: 31 May</div>*/}
            {/*<div>City: Sochi</div>*/}
            {/*<div>Education: SR STU '09</div>*/}
            {/*<div>Web Site: https://somehost.com</div>*/}

            <div>{props.profile.fullName}</div>
            <div>{props.profile.aboutMe}</div>
            <div>{props.profile.lookingForAJob ? "ИЩУ РАБОТУ" : "НЕ ИЩУ РАБОТУ"}</div>
            <div>{props.profile.lookingForAJobDescription}</div>
            <div>{props.profile.contacts.vk}</div>
        </div>
    )
}

export default Description;