import React from "react";

export const Creator = (props) => {

    const {name} = props;
    return (
        <div className="creator-container">
            <img src="./src/assets/images/image-avatar.png" alt={name} />
            <p> <span>Creation of</span> {name}</p>
        </div>
    );
}