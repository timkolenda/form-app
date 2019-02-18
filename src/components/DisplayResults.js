import React, { Component } from "react";


const DisplayResults = ({ vaccineReceipiantInfo }) => {
    
    const renderPatientData = () => {
        let patients = vaccineReceipiantInfo.map(patient => {
            console.log(patient);
            // if ()
            return (
                <ul className="patientInfo">
                    <li><h3>{`Patient Name: ${patient.firstName} ${patient.lastName}`}</h3></li>
                    <li><p>{`Date of Birth: ${patient.dateOfBirth}`}</p></li>
                    <li><p>{`Address: ${patient.address}`}</p></li>
                    <li><p>{`Phone Number: ${patient.telephoneNumber}`}</p></li>
                    <li><p>{`Address: ${patient.address}`}</p></li>
                    <li><p>{`Consent Granted: ${patient.consentGranted}`}</p></li>
                    <li><p>{`Consent Provided By: ${patient.consentProvidedBy}`}</p></li>
                </ul>
            )
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