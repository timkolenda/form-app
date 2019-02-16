import React, { Component } from "react";

import Button from './Button';


const DoesNotQualify = ({ consentProvider, dependantsExist, consenterIsRecievingVaccine, resetForm }) => {
    if (!consentProvider && dependantsExist) {
        return (
            <div className="doesNotQualify">
                <div className="message">
                    <p>I'm sorry, you are not eligible to receive a flu shot at this time. Would you like to continue to provide concent for your dependants?</p>
                </div>
                < div className="doesNotQualify__options" >
                    <Button description="Yes"/>
                    <Button description="No" onClickAction={resetForm}/>
                </div>
            </div>
        )
    }
    if (consentProvider && dependantsExist) {
        return (
            <div className="doesNotQualify">
                <div className="message">
                    <p>I'm sorry, this individual is not eligible to receive a flu shot at this time. Would you like to continue to provide concent for another dependant?</p>
                </div>
                < div className="doesNotQualify__options" >
                    <Button description="Yes"/>
                    <Button description="No" onClickAction={resetForm}/>
                </div>
            </div>
        )
    }
    if (consenterIsRecievingVaccine && !dependantsExist) {
        return (
            <div className="doesNotQualify">
                <div className="message">
                    <p>I'm sorry, you are not eligible to receive a flu shot at this time.</p>
                </div>
                < div className="doesNotQualify__options" >
                    <Button description="OK" onClickAction={resetForm}/>
                </div>
            </div>
        )
    }
    
    
    
}

export default DoesNotQualify;