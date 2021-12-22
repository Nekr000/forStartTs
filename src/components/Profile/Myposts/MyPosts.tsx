import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={`${classes.post}`}>
            My posts
            <div>
                New post
            </div>
            <Post message={"Hello world"} value = "5"/>
            <Post message={"1000-7"} value = "15"/>
            <Post message={"I Love World"} value = "3"/>


        </div>

    )
}
export default MyPosts;
