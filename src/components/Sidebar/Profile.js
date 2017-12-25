import React from 'react'

const profile = (props) => {
    let {tagLine,name,imageUrl} =props.data;
    return (
        <div className="profile-container">
                <img className="profile" src={imageUrl} alt="" />
                <h1 className="name">{name}</h1>
                <h3 className="tagline">{tagLine}</h3>
            </div>
    );
}

export default profile;