import React, { Component } from "react";


const ScreeningQuestion = ({ handleRadioChange, question, inputName }) => {
    return (
        <div className="screeningQuestion">
            <div className="screeningQuestion__question">
                <p>{question}</p>
            </div>
            <div className="screeningQuestion__answerOptions">
                <input type="radio" name={inputName} value="yes" onChange={handleRadioChange}/>
                <input type="radio" name={inputName} value="no" onChange={handleRadioChange}/>
            </div>
        </div>
    );
}


export default ScreeningQuestion;