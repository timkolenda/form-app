import '../styles/style.scss';

import React, { Component } from "react";
import ReactDOM from 'react-dom';

import Button from './Button';
import WhoIsGettingVaccinated from './WhoIsGettingVaccinated';
import Screening from './Screening';
import InfoCollector from './InfoCollector';
import DisplayResults from './DisplayResults';




class App extends Component {
    state = {
        showWhoIsGettingVaccinatedOptions: true,
        showScreeningQuestions: false,
        showInfoCollector: false,
        showDisplayResults: false,
        questionNumber: 0,
        consentProvider: '',
        relationToConsentor: "",
        consenterIsRecievingVaccine: false,
        dependantsExist: false,
        vaccineReceipiantInfo: [],
        consentorDetails: [],
        addressSaved: '',
        telephoneNumberSaved: '',
        autoApproveScreening: false,
        defaultFirstName: '',
        defaultLastName: ''
    }


    includeConsentProvider = () => {
        this.setState({ consenterIsRecievingVaccine: true });
    }

    setAutoApproveScreening = () => {
        this.setState({ autoApproveScreening: true });
    }

    addConsentProvider = (name) => {
        this.setState({ 
            consentProvider: name
        });
    }



    includeDependants = () => {
        this.setState({ dependantsExist: true });
    }

    storeReusableInfo = (save, state, value) => {
        if (save) {
            this.setState({ [`${state}Saved`]: value });
        } else {
            this.setState({ [`${state}Saved`]: '' });
        }
    }


    addNewVaccineRecipiant = (firstName, lastName) => {
        const updateVaccineReceipiantInfo = this.state.vaccineReceipiantInfo;
        updateVaccineReceipiantInfo.push({ firstName, lastName });
        this.setState({ 
            vaccineReceipiantInfo: updateVaccineReceipiantInfo,
            defaultFirstName: firstName,
            defaultLastName: lastName
        });
    }

    removeDefaultNames = () => {
        this.setState({ 
            defaultFirstName: '',
            defaultLastName: ''
        });
    }

    addPatientDetails = ({ firstName, lastName, healthCard, dateOfBirth, address, telephoneNumber, consentProvider, consentGranted, relationToDependants }) => {
        console.log(firstName, lastName);
        if (this.state.consentProvider === '') {
            console.log('run apd');
            this.addConsentProvider(consentProvider);
        }
        if (telephoneNumber === '') {
            telephoneNumber = this.state.telephoneNumberSaved;
        }
        if (address === '') {
            address = this.state.addressSaved;
        }
        
        const updatedVaccineReceipiantInfo = this.state.vaccineReceipiantInfo;
        let patientRecord = updatedVaccineReceipiantInfo.filter(infoItem => {
            return infoItem.firstName === firstName && infoItem.lastName === lastName;
        });
        if (patientRecord[0]) {
            if (this.state.consentProvider) {
                patientRecord[0].consentProvidedBy = this.state.consentProvider;
            } else {
                patientRecord[0].consentProvidedBy = consentProvider; 
            }
            patientRecord[0].consentGranted = consentGranted;
            patientRecord[0].healthCard = healthCard;
            patientRecord[0].dateOfBirth = dateOfBirth;
            patientRecord[0].address = address;
            patientRecord[0].telephoneNumber = telephoneNumber;
            patientRecord[0].relationtoConsentor = relationToDependants;
            this.setState({ vaccineReceipiantInfo: updatedVaccineReceipiantInfo });
            console.table(this.state.vaccineReceipiantInfo);
        } else {
            updatedVaccineReceipiantInfo.push({ firstName, lastName });
            patientRecord = updatedVaccineReceipiantInfo.filter(infoItem => {
                return infoItem.firstName === firstName && infoItem.lastName === lastName;
            });
            if (this.state.consentProvider) {
                patientRecord[0].consentProvidedBy = this.state.consentProvider;
            } else {
                patientRecord[0].consentProvidedBy = consentProvider;
            }
            patientRecord[0].consentGranted = consentGranted;
            patientRecord[0].healthCard = healthCard;
            patientRecord[0].dateOfBirth = dateOfBirth;
            patientRecord[0].address = address;
            patientRecord[0].telephoneNumber = telephoneNumber;
            patientRecord[0].relationtoConsentor = relationToDependants;
            this.setState({ vaccineReceipiantInfo: updatedVaccineReceipiantInfo });
            console.table(this.state.vaccineReceipiantInfo);
        }
    }

    showScreening = () => {
        this.setState({
            showWhoIsGettingVaccinatedOptions: false,
            showInfoCollector: false,
            showScreeningQuestions: true,
            showDisplayResults: false
        });
    } 

    showInfoCollector = () => {
        this.setState({
            showWhoIsGettingVaccinatedOptions: false,
            showInfoCollector: true,
            showScreeningQuestions: false,
            showDisplayResults: false
        });
    } 

    showDisplayResults = () => {
        this.setState({
            showWhoIsGettingVaccinatedOptions: false,
            showInfoCollector: false,
            showScreeningQuestions: false,
            showDisplayResults: true
        });
    }

    resetForm = () => {
        this.setState({
            showWhoIsGettingVaccinatedOptions: true,
            showScreeningQuestions: false,
            questionNumber: 0,
            consentProvider: null,
            consenterIsRecievingVaccine: false,
            dependantsExist: false,
            vaccineReceipiantInfo: []
        });
    }

    render() {
        return (
            <div className="app">
                <div className="answerContainer">
                    {this.state.showWhoIsGettingVaccinatedOptions ? 
                    < WhoIsGettingVaccinated 
                        includeConsentProvider={this.includeConsentProvider}
                        includeDependants={this.includeDependants}
                        consenterIsRecievingVaccine={this.state.consenterIsRecievingVaccine}
                        moveToNextQuestion={this.moveToNextQuestion}
                        showScreening={this.showScreening}
                        showInfoCollector={this.showInfoCollector}
                    / > : null}
                    {this.state.showScreeningQuestions ? 
                    <Screening
                        moveToNextQuestion={this.moveToNextQuestion}
                        consentProvider={this.state.consentProvider}
                        consenterIsRecievingVaccine={this.state.consenterIsRecievingVaccine}
                        dependantsExist={this.state.dependantsExist}
                        addNewVaccineRecipiant={this.addNewVaccineRecipiant}
                        resetForm={this.resetForm}
                        showInfoCollector={this.showInfoCollector}
                        setAutoApproveScreening={this.setAutoApproveScreening} 
                    / > : null}
                    {this.state.showInfoCollector ? 
                    <InfoCollector
                        consenterIsRecievingVaccine={this.state.consenterIsRecievingVaccine}
                        consentProvider={this.state.consentProvider}
                        defaultFirstName={this.state.defaultFirstName}
                        defaultLastName={this.state.defaultLastName}
                        storeReusableInfo={this.storeReusableInfo}
                        telephoneNumberSaved={this.state.telephoneNumberSaved}
                        addressSaved={this.state.addressSaved}
                        dependantsExist={this.state.dependantsExist}
                        aVaccineRecipiantHasBeenCreated={this.state.vaccineReceipiantInfo[0]}
                        addPatientDetails={this.addPatientDetails}
                        showScreening={this.showScreening}
                        addConsentProvider={this.addConsentProvider}
                        numberOfPatients={this.state.vaccineReceipiantInfo.length}
                        autoApproveScreening={this.state.autoApproveScreening}
                        removeDefaultNames={this.removeDefaultNames}
                        showDisplayResults={this.showDisplayResults}
                        // addConsentorDetails={this.addConsentorDetails}
                    / > : null}
                    {this.state.showDisplayResults ? 
                    <DisplayResults 
                        vaccineReceipiantInfo={this.state.vaccineReceipiantInfo}
                    /> : null}
                </div>
            </div>
        );
    } 
}

//display the first question asking if the person filling out the form is getting the flu shot or if they are filling out the form for a dependant

//if they are filling it out for a dependant ask if for the total number of dependants
//if the number of dependants is greater than 1 ask for a list of first/last names

//provide list of screening questions

//if only 1 dependant or just recipiant list questions with checkboxes
//if recipiant answers 'no' to any alert 'I am sorry but you do not qualify to recieve a flu shot at this time. Please consult your physition for more information'

//if multiple dependants provide scenarios with dependant names listed below and ask to select any that the statements apply to.
// if recipeian selects any dependant for any statement alert '____ dependant can not proceed ... 
//if there are dependants who can continue, give the option to do so.

//if they are filling it out for themselves provide:
    //first name, last name, address, dob (calculate age based on dob), healthcard #, tel #


//if they are filling it out for multiples provide a list of forms with the names pre populated at the top provide a checkbox for all address' are the same
//if yes - first question should be for address
//if no - each form will contain an address field


export default App;