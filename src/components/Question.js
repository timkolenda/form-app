import React, { Component } from "react";

const Question = ({question}) => {
    return (
        <div className="question">
            <h2>{question}</h2>
        </div>
    )
}

export default Question;