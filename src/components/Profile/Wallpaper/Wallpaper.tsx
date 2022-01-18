import React from "react";
import style from "./Wallpaper.module.css";

const Wallpaper = () => {
    return (
        <div className={style.wallpaper_img}>
            <img
                src='https://photos.smugmug.com/Wallpapers/i-VmWHj9D/0/939c9040/O/HDRshooter-super-ultra-wide-wallpaper-050.jpg'
                alt="img"/>
        </div>
    )
}

export default Wallpaper;