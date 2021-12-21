import React from 'react';
import mainContentBanner from "../main-content-banner.jpg";
import classes from "./Profile.module.css";

const Profile = () => {
    return (
        <div className= {`${classes.content}`}>

            <div>
                <img src={mainContentBanner}/>
            </div>

            <div>
                ava+description
            </div>

            <div className={`${classes.post}`}>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div className={`${classes.item}`}>
                        post 1
                    </div>
                    <div className={`${classes.item}`}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;