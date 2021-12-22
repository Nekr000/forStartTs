import React from 'react';
import mainContentBanner from "./main-content-banner.jpg";
import classes from "./Profile.module.css";

const Profile = () => {
    return (

    <div className= {`${classes.content}`}>

        <div>
            <img className={`${classes.banner}`} src={mainContentBanner}/>
        </div>

        <div>
            ava+description
        </div>

    </div>

    )
}
export default Profile;