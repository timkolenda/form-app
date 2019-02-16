import './styles/App.css';
import React, { Component } from "react";
import ReactDOM from 'react-dom';

import Button from './Button';
import WhoIsGettingVaccinated from './WhoIsGettingVaccinated';
import Screening from './Screening';
import InfoCollector from './InfoCollector';




class App extends Component {
    state = {
        showWhoIsGettingVaccinatedOptions: true,
        showScreeningQuestions: false,
        showInfoCollector: false,
        questionNumber: 0,
        consentProvider: null,
        consenterIsRecievingVaccine: false,
        dependantsExist: false,
        vaccineReceipiantInfo: [],
        addressSaved: '',
        telephoneNumberSaved: ''
    }

    questionList = ['Who are you providing consent for today?', 'Question2'];

    includeConsentProvider = () => {
        this.setState({
            consenterIsRecievingVaccine: true
        });
    }

    includeDependants = () => {
        this.setState({
            dependantsExist: true
        });
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
        this.setState({ vaccineReceipiantInfo: updateVaccineReceipiantInfo });
    }

    addPatientDetails = ({ firstName, lastName, healthCard, dateOfBirth, address, telephoneNumber }) => {
        if (telephoneNumber === '') {
            telephoneNumber = this.state.telephoneNumberSaved;
        }
        if (address === '') {
            address = this.state.telephoneNumberSaved;
        }
        const updatedVaccineReceipiantInfo = this.state.vaccineReceipiantInfo;
        // console.log(firstName, lastName, healthCard, dateOfBirth, address, telephoneNumber);
        const patientRecord = updatedVaccineReceipiantInfo.filter(infoItem => {
            return infoItem.firstName === firstName && infoItem.lastName === lastName;
        });
        patientRecord[0].healthCard = healthCard;
        patientRecord[0].dateOfBirth = dateOfBirth;
        patientRecord[0].address = address;
        patientRecord[0].telephoneNumber = telephoneNumber;
        console.log(this.state.vaccineReceipiantInfo);
    }


    showScreening = () => {
        this.setState({
            showWhoIsGettingVaccinatedOptions: false,
            showInfoCollector: false,
            showScreeningQuestions: true
        });
    } 

    showInfoCollector = () => {
        this.setState({
            showWhoIsGettingVaccinatedOptions: false,
            showInfoCollector: true,
            showScreeningQuestions: false
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
                <div className="AnswerContainer">
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
                    / > : null}
                    {this.state.showInfoCollector ? 
                    <InfoCollector
                        consenterIsRecievingVaccine={this.state.consenterIsRecievingVaccine}
                        defaultFirstName={this.state.vaccineReceipiantInfo[0] ? this.state.vaccineReceipiantInfo[(this.state.vaccineReceipiantInfo.length - 1)].firstName : null}
                        defaultLastName={this.state.vaccineReceipiantInfo[0] ? this.state.vaccineReceipiantInfo[(this.state.vaccineReceipiantInfo.length - 1)].lastName : null}
                        storeReusableInfo={this.storeReusableInfo}
                        telephoneNumberSaved={this.state.telephoneNumberSaved}
                        addressSaved={this.state.addressSaved}
                        dependantsExist={this.state.dependantsExist}
                        aVaccineRecipiantHasBeenCreated={this.state.vaccineReceipiantInfo[0]}
                        addPatientDetails={this.addPatientDetails}
                        showScreening={this.showScreening}
                    / > : null}
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