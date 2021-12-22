import React from "react";
import classes from "./ProfileInfo.module.css"
import mainContentBanner from "../main-content-banner.jpg";

const ProfileInfo = (props: any) => {
    return (
        <div >
            <div>
                <img className={`${classes.banner}`} src={mainContentBanner}/>
            </div>
            <div className={`${classes.descriptionBlock}`}>
                ava+description
            </div>
        </div>
    )
}
export default ProfileInfo;