import React from 'react';
import mainContentBanner from "../main-content-banner.jpg";

const Profile = () => {
    return (
        <div className='content'>

            <div>
                <img src={mainContentBanner}/>
            </div>

            <div>
                ava+description
            </div>

            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;