import React, { Component } from "react";


const DisplayResults = ({ vaccineReceipiantInfo }) => {
    
    const renderPatientData = () => {
        let patients = vaccineReceipiantInfo.map(patient => {
            console.log(patient);
            if (patient.consentGranted) {
                return (
                    <div className="patientInfo">
                        <h3 className="patientInfo__name">{`Patient Name: ${patient.firstName} ${patient.lastName}`}</h3>
                        <ul className="patientInfo__list">
                            <li className="patientInfo__listItem"><p>{`Address: ${patient.address}`}</p></li>
                            <li className="patientInfo__listItem"><p>{`Date of Birth: ${patient.dateOfBirth}`}</p></li>
                            <li className="patientInfo__listItem"><p>{`Phone Number: ${patient.telephoneNumber}`}</p></li>
                            <li className="patientInfo__listItem"><p>{`Address: ${patient.address}`}</p></li>
                            <li className="patientInfo__listItem"><p>{`Consent Granted: ${patient.consentGranted}`}</p></li>
                            <li className="patientInfo__listItem"><p>{`Consent Provided By: ${patient.consentProvidedBy}`}</p></li>
                        </ul>
                    </div>
                )
            }
        });
        return patients
    }
    
    
    
    return(
        <div className="displayResults">
            {renderPatientData()}
        </div>
    )
}


export default DisplayResults;