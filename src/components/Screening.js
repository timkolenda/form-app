import React, { Component } from "react";

import Button from './Button';
import ScreeningQuestion from './ScreeningQuestion';
import DoesNotQualify from './DoesNotQualify';


class Screening extends Component {
    state = {
        firstName: '',
        lastName: '',
        qualifies: true,
        screeningQuestion1: '',
        screeningQuestion2: '',
        screeningQuestion3: '',
        screeningQuestion4: '',
        screeningQuestion5: '',
        screeningQuestion6: '',
        screeningQuestion7: ''
    } 

    screeningQuestions = [
        `Are ${this.props.consentProvider ? 'they' : 'you'} sick today (i.e., fever greater than 39.5°C, breathing problems, active infection)?`,
        `Do ${this.props.consentProvider ? 'they' : 'you'} have an allergy to eggs or egg products?`,
        `Do ${this.props.consentProvider ? 'they' : 'you'} have an allergy to any of the components of the flu vaccine (e.g., gentamicin, neomycin, kanamycin, thimerosal, formaldehyde)?`,
        `Do ${this.props.consentProvider ? 'they' : 'you'} take a blood thinner or have a bleeding disorder?`,
        `Have ${this.props.consentProvider ? 'they' : 'you'} had a serious reaction to influenza vaccine in the past?`,
        `Do ${this.props.consentProvider ? 'they' : 'you'} have a new or changing condition affecting the brain or nervous system?`,
        `Have ${this.props.consentProvider ? 'they' : 'you'} ever had Guillain-Barré syndrome?`
    ]

    handleByPass = () => {
        if(this.state.firstName && this.state.lastName) {
            this.props.addNewVaccineRecipiant(this.state.firstName, this.state.lastName);
            this.props.showInfoCollector();
        }    
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    handleRadioChange = (e) => {
        let stateName = e.target.name;
        let stateValue = e.target.value;
        this.setState({ [stateName]: stateValue }, () => {
            if (stateValue === 'no') {
                this.setState({ qualifies: false });
            }
            if (this.state.screeningQuestion1 === 'yes' && this.state.screeningQuestion2 === 'yes' && this.state.screeningQuestion3 === 'yes' && this.state.screeningQuestion4 === 'yes' && this.state.screeningQuestion5 === 'yes' && this.state.screeningQuestion6 === 'yes' && this.state.screeningQuestion7 === 'yes' && this.state.firstName && this.state.lastName) {
                this.props.addNewVaccineRecipiant(this.state.firstName, this.state.lastName);
                this.props.showInfoCollector();
            }
        });
    }

    renderInstructions = () => {
        if (this.props.consenterIsRecievingVaccine && this.props.dependantsExist) {
            return (
                <h2>Starting with yourself, please provide the following information</h2>
            );
        } else if (this.props.consenterIsRecievingVaccine) {
            return (
                <h2>Please provide the following information</h2>
            );
        } else {
            return (
                <h2>Please provide the following information for the first person to be vaccinated.</h2>
            );
        }
    }

    renderScreeningQuestions = () => {
        const renderedQuestions = this.screeningQuestions.map((question) => {
            return (
                <ScreeningQuestion
                    question={question}
                    inputName={`screeningQuestion${(this.screeningQuestions.indexOf(question)) + 1}`}
                    handleRadioChange={this.handleRadioChange}
                    key={this.screeningQuestions.indexOf(question)}
                />
            );
        });
        return renderedQuestions;
    }


    render() {
        return(
            <div className="screening">
                {this.state.qualifies ? (
                <div className="screening__questionnaire">
                    <div className="screening__instructions">
                        {this.renderInstructions()}
                    </div>
                    <form action="" className="screening__name">
                        < div className = "screening__name--first" >
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" onChange={this.handleChange} value={this.state.firstName} />
                        </div>
                        < div className = "screening__name--last" >
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" onChange={this.handleChange} value={this.state.lastName}/>
                        </div>
                    </form>
                    <form className="screening__questions">
                        <div className="screening__columnHeadings">
                            <h3>Questions</h3>
                            <div className="screening__inputTitles">
                                <h3>Yes</h3>
                                <h3>No</h3>
                            </div>
                        </div>
                        {this.renderScreeningQuestions()}
                    </form>
                    <div className="screening__byPass">
                        <Button description={'No to all'} onClickAction={this.handleByPass} />
                    </div>
                </div>
                ) : null}
                {!this.state.qualifies ? (
                    <DoesNotQualify 
                        consenterIsRecievingVaccine={this.props.consenterIsRecievingVaccine}
                        dependantsExist={this.props.dependantsExist}
                        consentProvider={this.props.consentProvider}
                        resetForm={this.props.resetForm}
                    />
                ) : null}
            </div>
        )
    }


}

export default Screening;