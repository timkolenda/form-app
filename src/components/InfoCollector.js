import React, { Component } from "react";

import Button from './Button';

class InfoCollector extends Component {
    state = {
        consenterFirstName: '',
        consenterLastName: '',
        dateOfBirth: '',
        address: '',
        healthCard: '',
        telephoneNumber: '',
        relationToDependants: '',
        otherRelationship: '',
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

    setConsentProvider = () => {
        if (this.props.consentProvider === "") {
            this.setState({
                consenterFirstName: this.props.defaultFirstName,
                consenterLastName: this.props.defaultLastName
            }, this.props.addConsentProvider(this.state.consenterFirstName, this.state.consenterLastName));
        }
    }

    renderInstructions = () => {
        if (!this.props.consenterIsRecievingVaccine && !this.props.consentProvider) {
            return (<h2>Please provide the following details to provide Consent.</h2>);
        } else if (this.props.consenterIsRecievingVaccine && !this.props.dependantsExist) {
            return (<h2>Please provide your details below.</h2>)
        } else if (this.props.consenterIsRecievingVaccine && !this.props.dependantsExist && this.props.numberOfPatients === 1) {
            return (<h2>Please enter your patient and constor details.</h2>);
        } else if (this.props.dependantsExist && ((this.props.consenterIsRecievingVaccine && this.props.numberOfPatients > 1) || (!this.props.consenterIsRecievingVaccine && this.props.numberOfPatients >= 1))) {
            return (<h2>Please enter the following details for your dependant.</h2>)
        }
    } 


    handleAddDependant = () => {
        if (this.state.saveAddress) {
            this.props.storeReusableInfo(this.state.saveAddress, 'address', this.state.address);
        }
        if (this.state.saveNumber) {
            this.props.storeReusableInfo(this.state.saveNumber, 'telephoneNumber', this.state.telephoneNumber);
        }
        if(this.props.aVaccineRecipiantHasBeenCreated){
            this.props.addPatientDetails({
                firstName: this.props.defaultFirstName,
                lastName: this.props.defaultLastName,
                healthCard: this.state.healthCard,
                dateOfBirth: this.state.dateOfBirth,
                address: this.state.address,
                telephoneNumber: this.state.telephoneNumber,
                consentProvider: `${this.state.consenterFirstName} ${this.state.consenterLastName}`,
                consentGranted: this.state.consentGranted
            });   
        }
        this.props.showScreening();
    }

    handleComplete = () => {
        this.props.addPatientDetails({
            firstName: this.props.defaultFirstName,
            lastName: this.props.defaultLastName,
            healthCard: this.state.healthCard,
            dateOfBirth: this.state.dateOfBirth,
            address: this.state.address,
            telephoneNumber: this.state.telephoneNumber,
            consentProvider: `${this.state.consenterFirstName} ${this.state.consenterLastName}`,
            consentGranted: this.state.consentGranted
        });
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
                            < div className = "input input--withLabel" >
                                <label htmlFor="consenterFirstName">First Name</label>
                                <input type="text" id="consenterFirstName" onChange={this.handleChange} value={this.state.consenterFirstName ? this.state.consenterFirstName :  this.props.defaultFirstName} />
                            </div>
                        </div>
                        <div className="infoCollector__infoItem">
                            < div className = "input input--withLabel" >
                                <label htmlFor="consenterastName">Last Name</label>
                                <input type="text" id="lastName" onChange={this.handleChange} value={this.state.consenterLastName ? this.state.consenterLastName :  this.props.defaultLastName}/>
                            </div>
                        </div>
                    </div>
                    <div className="infoCollector__section">
                        {!this.props.addressSaved ? 
                            <div className="infoCollector__infoItem">
                                <div className="input input--withLabel">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" id="address" onChange={this.handleChange} value={this.state.address}/>
                                    {this.props.dependantsExist ? 
                                    <div className="input__checkBox">
                                        <label htmlFor="saveAddress">Use this address for dependant(s)?</label>
                                        <input type="checkbox" id="saveAddress" name="address" onClick={this.handleCheckBoxChange}/>
                                    </div>
                                    : null}
                                </div>
                            </div>
                        : null}
                        {!this.props.telephoneNumberSaved ?
                            <div className="infoCollector__infoItem">
                                <div className="input input--withLabel">
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
                            <div className="input input--withLabel">
                                <label htmlFor="dateOfBirth">Date Of Birth</label>
                                <input type="text" id="dateOfBirth" onChange={this.handleChange} value={this.state.dateOfBirth}/>
                            </div>
                        </div>                   
                        <div className="infoCollector__infoItem">
                            <div className="input input--withLabel">
                                <label htmlFor="healthCard">Health Card</label>
                                <input type="text" id="healthCard" onChange={this.handleChange} value={this.state.healthCard}/>
                            </div>
                        </div>                    
                    </div>
                    }
                    {!this.props.consentProvider ?
                    <div className="infoCollector__section">
                        <div className="infoItem">
                            <p>Relationship to Dependant(s)</p>
                            <div className="infoCollector__relationshipOptions">
                                <label htmlFor="parent">Parent</label>
                                <input type="radio" name="relationToDependants" id="parent" onChange={this.handleRadioChange} value="parent"/>
                                <label htmlFor="guardian">Guardian</label>
                                <input type="radio" name="relationToDependants" id="guardian" onChange={this.handleRadioChange} value="guardian"/>
                                <label htmlFor="otherRadio">Other</label>
                                <input type="radio" name="relationToDependants" id="otherRadio" onChange={this.handleRadioChange} value={this.state.otherRelationship}/>
                                {this.state.displayOtherRelationshipField ? 
                                    <div className="input input--withLabel"> 
                                        <label htmlFor="otherRelationship">Please Specify</label>
                                        <input type="text" id="otherRelationship" value={this.state.otherRelationship} onChange={this.handleChange}/>
                                    </div>
                                : null}
                            </div>
                        </div>
                    </div>
                    :
                    <div className="infoCollector__section">
                        <p>{`I, ${this.props.consentProvider} give consent for the above patient to receive their vaccination.`}</p>
                        <label htmlFor="consentGranted">Check for yes</label>
                        <input type="checkbox" id="consentGranted"  onClick={this.handleCheckBoxChange}/>
                    </div>
                    
                    }
                </form>
                {this.props.dependantsExist ? 
                <Button 
                    description="Add a dependant"
                    onClickAction={this.handleAddDependant}
                /> : null}
                {(this.props.dependantsExist && this.props.numberOfPatients > 1) || !this.props.dependantsExist ?
                <Button 
                    description="Complete" 
                    onClickAction={this.handleComplete}
                /> : null}
            </div>
        );
    }
    
} 

export default InfoCollector;