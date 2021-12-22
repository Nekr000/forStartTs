import React from 'react';
import mainContentBanner from "./main-content-banner.jpg";
import classes from "./Profile.module.css";
import MyPosts from "./Myposts/MyPosts";

const Profile = () => {
    return (

    <div className= {`${classes.content}`}>

        <div>
            <img className={`${classes.banner}`} src={mainContentBanner}/>
        </div>

        <div>
            ava+description
        </div>
        <MyPosts/>
    </div>

    )
}
export default Profile;