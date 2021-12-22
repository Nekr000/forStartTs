import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

let postsData = [
    {id: "1", message: "Hello world", likesCount: 12},
    {id: "2", message: "1000-7", likesCount: 23},
    {id: "3", message: "I Love World", likesCount: 0},
    {id: "4", message: "Hi", likesCount: 123},
    {id: "5", message: "Hi", likesCount: 32},
    {id: "6", message: "Hi", likesCount: 97}
]
let likesElements = postsData.map(p => <Post message={p.message} value={p.likesCount}/> )

const MyPosts = () => {
    return (
        <div className={`${classes.myPost}`}>
            <h3> My posts</h3>
            <div className={`${classes.newPost}`}>
                <div>
                    <textarea> New post</textarea>
                </div>
                <button>Add Post</button>
            </div>
            {likesElements}
        </div>

    )
}
export default MyPosts;


