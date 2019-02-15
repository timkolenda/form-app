import './styles/App.css';
import React, { Component } from "react";
import ReactDOM from 'react-dom';

import Input from './Input';
import Button from './Button';
import Question from './Question';
import WhoIsGettingVaccinated from './WhoIsGettingVaccinated';




class App extends Component {
    state = {
        questionNumber: 0,
        consentProvider: '',
        numberOfDependants: 0,
        consentorIsRecievingVaccine: false,
        vaccineRecipiantInfo: {}
    }

    questionList = ['Who are you providing consent for today?', 'Question2'];

    includeConsentProvider = () => {
        this.setState({
            consentorIsRecievingVaccine: true
        });
    }


    handleQuestionSubmit = () => {
        const nextQuestionNumber = this.state.questionNumber + 1;
        this.setState({
            questionNumber: nextQuestionNumber
        }, () => console.log(this.state.questionNumber));
    }

    handleChange = (e, testValue) => {
        this.setState({
            [e.target.id]: e.target.value
        }, () => testValue());
    }


    render() {
        return(
            <div className="app">
                <div className="questionContainer">
                    <Question question={this.questionList[this.state.questionNumber]} />
                </div>
                <div className="AnswerContainer">
                    {this.state.questionNumber === 0 ? 
                    < WhoIsGettingVaccinated 
                        handleChange={this.handleChange}
                        includeConsentProvider={this.includeConsentProvider}
                        consentorIsRecievingVaccine={this.state.consentorIsRecievingVaccine}
                        handleQuestionSubmit={this.handleQuestionSubmit}
                    / > : ''}
                </div>
                {/* <div className="submitButton">
                    <Button 
                        description="Next Question"
                        onClickAction={this.handleQuestionSubmit}
                    />
                </div> */}
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