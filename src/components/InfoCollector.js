import React, { Component } from "react";

import Button from './Button';

class InfoCollector extends Component {
    state = {
        infoFirstName: '',
        infoLastName: '',
        dateOfBirth: '',
        address: '',
        healthCard: '',
        telephoneNumber: '',
        relationToDependants: '',
        saveAddress: false,
        saveNumber: false,
        consentGranted: false,
        displayOtherRelationshipField: false
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleCheckBoxChange = (e) => {
        // let save = this.state[e.target.id];
        // let state = e.target.name;
        // let value = this.state[e.target.name];
        this.setState({
            [e.target.id]: !this.state[e.target.id]
        }
        // , () => this.props.storeReusableInfo(save, state, value) //cool idea - needs work.
        );
    }
    //think about a way to update saved value when its changed after the checkbox is clicked

    handleRadioChange = (e) => {
        const id = e.target.id
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            if (id === "otherRadio") {
                this.setState({ displayOtherRelationshipField: true });
            } else {
                this.setState({ displayOtherRelationshipField: false });
            }
        });
    }

    selectNameValueSource = (name) => {
        if (!this.props.autoApproveScreening) {
            return this.props[`default${name}`];
        } else {
            return this.state[`info${name}`];
        }
    }

    setConsentProvider = () => {
        console.log('run cdm');
        if (this.props.consentProvider === "") {
            this.setState({
                infoFirstName: this.props.defaultFirstName,
                infoLastName: this.props.defaultLastName
            }, this.props.addConsentProvider(this.state.infoFirstName, this.state.infoLastName));
        }
    }

    renderInstructions = () => {
        if (!this.props.consenterIsRecievingVaccine && !this.props.consentProvider) {
            return (<h2>Please provide the following details to provide Consent.</h2>);
        } else if (this.props.consenterIsRecievingVaccine && !this.props.dependantsExist) {
            return (<h2>Please provide your details below.</h2>)
        } else if (this.props.consenterIsRecievingVaccine && this.props.dependantsExist && this.props.numberOfPatients === 1) {
            return (<h2>Please enter your patient and consent details.</h2>);
        } else if (this.props.dependantsExist && ((this.props.consenterIsRecievingVaccine && this.props.numberOfPatients > 1) || (!this.props.consenterIsRecievingVaccine && this.props.numberOfPatients >= 1))) {
            return (<h2>Please enter the following details for your dependant.</h2>)
        }
    } 

    renderConsentCheckbox = () => {
        if (this.props.consenterIsRecievingVaccine || this.props.consentProvider) {
            return (
                <div className="infoCollector__section infoCollector__section--column">
                    <p>{`I ${this.props.consentProvider} give consent for the above patient to receive their vaccination.`}</p>
                    <div className="input__checkBox input__checkBox--addSpaceBelow">
                        <label htmlFor="consentGranted">Check for yes</label>
                        <input type="checkbox" id="consentGranted"  onClick={this.handleCheckBoxChange}/>
                    </div>
                </div>
            );
        }
    }


    handleAddDependant = () => {
        if (this.props.autoApproveScreening) {
            this.props.removeDefaultNames();
        }
        if (this.state.saveAddress && !this.props.addressSaved) {
            this.props.storeReusableInfo(this.state.saveAddress, 'address', this.state.address);
        }
        if (this.state.saveNumber && !this.props.telephoneNumberSaved) {
            this.props.storeReusableInfo(this.state.saveNumber, 'telephoneNumber', this.state.telephoneNumber);
        }
        if (!this.props.consentProvider) {
            console.log('run hd');
            this.props.addConsentProvider(`${this.state.infoFirstName} ${this.state.infoLastName}`);
        }
        if (!this.props.autoApproveScreening) {
            this.props.addPatientDetails({
                firstName: this.props.defaultFirstName,
                lastName: this.props.defaultLastName,
                healthCard: this.state.healthCard,
                dateOfBirth: this.state.dateOfBirth,
                address: this.state.address,
                telephoneNumber: this.state.telephoneNumber,
                consentProvider: `${this.state.infoFirstName} ${this.state.infoLastName}`,
                consentGranted: this.state.consentGranted,
                relationToDependants: this.state.relationToDependants
            });
        } else if (this.props.aVaccineRecipiantHasBeenCreated || this.props.autoApproveScreening) {
            this.props.addPatientDetails({
                firstName: this.state.infoFirstName,
                lastName: this.state.infoLastName,
                healthCard: this.state.healthCard,
                dateOfBirth: this.state.dateOfBirth,
                address: this.state.address,
                telephoneNumber: this.state.telephoneNumber,
                consentProvider: `${this.state.infoFirstName} ${this.state.infoLastName}`,
                consentGranted: this.state.consentGranted,
                relationToDependants: this.state.relationToDependants
            });
        } 
        if (!this.props.autoApproveScreening) {
            this.props.showScreening();
        } else {
            this.resetForNewPatient();
        }
    }

    resetForNewPatient = () => {
        this.setState({
            infoFirstName: '',
            infoLastName: '',
            dateOfBirth: '',
            address: '',
            healthCard: '',
            telephoneNumber: '',
            consentGranted: false
        });
        const consentCheckBox = document.querySelector("#consentGranted");
        consentCheckBox.checked = false;
    }

    handleComplete = () => {
        if (!this.props.autoApproveScreening) {
            this.props.addPatientDetails({
                firstName: this.props.defaultFirstName,
                lastName: this.props.defaultLastName,
                healthCard: this.state.healthCard,
                dateOfBirth: this.state.dateOfBirth,
                address: this.state.address,
                telephoneNumber: this.state.telephoneNumber,
                consentProvider: `${this.state.infoFirstName} ${this.state.infoLastName}`,
                consentGranted: this.state.consentGranted,
                relationToDependants: this.state.relationToDependants
            });
        } else {
            this.props.addPatientDetails({
                firstName: this.state.infoFirstName,
                lastName: this.state.infoLastName,
                healthCard: this.state.healthCard,
                dateOfBirth: this.state.dateOfBirth,
                address: this.state.address,
                telephoneNumber: this.state.telephoneNumber,
                consentProvider: `${this.state.infoFirstName} ${this.state.infoLastName}`,
                consentGranted: this.state.consentGranted,
                relationToDependants: this.state.relationToDependants
            });
        }
        this.props.showDisplayResults();
    }
    
    componentDidMount() {
        this.setConsentProvider();
    }
    
    render() {
        return (
            <div className="infoCollector">
                <div className="question">
                    {this.renderInstructions()}
                </div>
                <form className="infoCollector__form">
                    <div className="infoCollector__section">
                        <div className="infoCollector__infoItem">
                            <div className="input input__text">
                                <label htmlFor="infoFirstName">First Name</label>
                                <input type="text" id="infoFirstName" onChange={this.handleChange} value={this.state.infoFirstName} placeholder={this.props.defaultFirstName}/>
                            </div>
                        </div>
                        <div className="infoCollector__infoItem">
                            <div className="input input__text input__text--toEnd">
                                <label htmlFor="infoLastName">Last Name</label>
                                <input type="text" id="infoLastName" onChange={this.handleChange} value={this.state.infoLastName} placeholder={this.props.defaultLastName}/>
                            </div>
                        </div>
                    </div>
                    <div className="infoCollector__section">
                        {!this.props.addressSaved ? 
                            <div className="infoCollector__infoItem">
                                <div className="input input__text">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" id="address" onChange={this.handleChange} value={this.state.address}/>
                                    {this.props.dependantsExist ? 
                                    <div className="input__checkBox">
                                        <label htmlFor="saveAddress">Use this address for dependant(s)?</label>
                                        <input type="checkbox" id="saveAddress" name="address" onClick={this.handleCheckBoxChange} value={this.state.consentGranted}/>
                                    </div>
                                    : null}
                                </div>
                            </div>
                        : null}
                        {!this.props.telephoneNumberSaved ?
                            <div className="infoCollector__infoItem">
                                <div className="input input__text input__text--toEnd">
                                    <label htmlFor="telephoneNumber">Phone Number</label>
                                    <input type="text" id="telephoneNumber" onChange={this.handleChange} value={this.state.phoneNumber}/>
                                    {this.props.dependantsExist ? 
                                    <div className="input__checkBox">
                                        <label htmlFor="saveNumber">Use this number for dependant(s)?</label>
                                        <input type="checkbox" id="saveNumber" name="telephoneNumber" onClick={this.handleCheckBoxChange}/>
                                    </div>
                                    : null}
                                </div>
                            </div>
                        : null}
                    </div>
                    {(!this.props.consenterIsRecievingVaccine && !this.props.aVaccineRecipiantHasBeenCreated) ? null :
                    <div className="infoCollector__section">
                        <div className="infoCollector__infoItem">
                            <div className="input input__text">
                                <label htmlFor="dateOfBirth">Date Of Birth</label>
                                <input type="text" id="dateOfBirth" onChange={this.handleChange} value={this.state.dateOfBirth}/>
                            </div>
                        </div>                   
                        <div className="infoCollector__infoItem">
                            <div className="input input__text input__text--toEnd">
                                <label htmlFor="healthCard">Health Card</label>
                                <input type="text" id="healthCard" onChange={this.handleChange} value={this.state.healthCard}/>
                            </div>
                        </div>                    
                    </div>
                    }
                    {!this.props.consentProvider && this.props.dependantsExist ?
                    <div>
                        <div className="infoCollector__sectionHeading">
                            <p>Relationship to Dependant(s)</p>
                        </div>
                        <div className="infoCollector__section">
                            <div className="infoCollector__infoItem infoCollector__infoItem--radioContainer">
                                <div className="input input__radio">
                                    <label htmlFor="parent">Parent</label>
                                    <input type="radio" name="relationToDependants" id="parent" onChange={this.handleRadioChange} value="parent"/>
                                </div>
                                <div className="input input__radio">
                                    <label htmlFor="guardian">Guardian</label>
                                    <input type="radio" name="relationToDependants" id="guardian" onChange={this.handleRadioChange} value="guardian"/>
                                </div>
                                <div className="input input__radio">
                                    <label htmlFor="otherRadio">Other</label>
                                    <input type="radio" name="relationToDependants" id="otherRadio" onChange={this.handleRadioChange} value=""/>
                                </div>
                            </div>
                            {this.state.displayOtherRelationshipField ? 
                            <div className="infoCollector__infoItem">
                                <div className="input input__text input__text--toEnd"> 
                                    <label htmlFor="otherRelationship">Please Specify</label>
                                    <input type="text" id="relationToDependants" value={this.state.otherRelationship} onChange={this.handleChange}/>
                                </div>
                            </div>
                            : null}
                        </div>
                    </div>
                    : null }
                    {this.renderConsentCheckbox()}
                </form>
                {this.props.dependantsExist ? 
                <Button 
                    description="Add a dependant"
                    onClickAction={this.handleAddDependant}
                /> : null}
                {(this.props.dependantsExist && this.props.consentProvider) || !this.props.dependantsExist || (!this.props.consenterIsRecievingVaccine && this.props.numberOfPatients > 0) ?
                <Button 
                    description="Complete" 
                    onClickAction={this.handleComplete}
                /> : null}
            </div>
        );
    }
    
} 

export default InfoCollector;