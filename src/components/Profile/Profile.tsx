import React from "react";
import style from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={style.content}>
            <div className={style.content_img}>
                <img
                    src='https://photos.smugmug.com/Wallpapers/i-VmWHj9D/0/939c9040/O/HDRshooter-super-ultra-wide-wallpaper-050.jpg'
                    alt="img"/>
            </div>
            <div>
                ava + descr
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={style.posts}>
                    <div className={style.item}>
                        post 1
                    </div>
                    <div className={style.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;