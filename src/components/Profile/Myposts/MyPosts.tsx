import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";




const MyPosts = (props:any) => {

    let posts = props.posts.map( (p: any) => <Post message={p.message} value={p.likesCount}/> )

    return (
        <div className={`${classes.myPost}`}>
            <h3> My posts</h3>
            <div className={`${classes.newPost}`}>
                <div>
                    <textarea> New post</textarea>
                </div>
                <button>Add Post</button>
            </div>
            {posts}
        </div>

    )

}
export default MyPosts;


