import React from 'react';
import classes from "./Profile.module.css";
import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props:any) => {

    return (

    <div className= {`${classes.content}`}>
        <ProfileInfo/>
        <MyPosts posts={props.posts}/>
    </div>
    )
}
export default Profile;