import React from 'react';
import mainContentBanner from "./main-content-banner.jpg";
import classes from "./Profile.module.css";
import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return (

    <div className= {`${classes.content}`}>
        <ProfileInfo/>
        <MyPosts/>
    </div>
    )
}
export default Profile;