import React, { Component } from "react";


const Button = ({description, onClickAction}) => {
    return (
        <div>
            <button onClick={onClickAction}>{description}</button>
        </div>
    );
}

export default Button;