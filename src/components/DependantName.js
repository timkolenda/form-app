import React, { Component } from "react";

const DependantName = ({ label }) => {
    return (
        <div className="dependantName">
            <label htmlFor={`${label}FirstName`}>First Name</label>
            <input type="text" id={`${label}FirstName`}/>
            <label htmlFor={`${label}FirstName`}>First Name</label>
            <input type="text" id={`${label}FirstName`}/>
        </div>
    )



}

export default DependantName;