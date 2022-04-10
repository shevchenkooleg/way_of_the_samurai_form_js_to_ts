import React from 'react';
import preloader from "../../../assets/preloader.svg";


const Preloader = () => {
    return (
        <div>
            <img style={{position:'absolute', top:'40%', left:'40%' }} src={preloader} alt="preloader"/>
        </div>
    );
};

export default Preloader;