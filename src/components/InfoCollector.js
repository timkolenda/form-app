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
        saveAddress: false,
        saveNumber: false
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
                telephoneNumber: this.state.telephoneNumber
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
            telephoneNumber: this.state.telephoneNumber
        });
    }
    
    
    
    render() {
        return (
            <div className="infoCollector">
                <form className="infoCollector__form">
                    <div className="infoCollector__names">
                        < div className = "screening__name--first" >
                            <label htmlFor="consenterFirstName">First Name</label>
                            <input type="text" id="consenterFirstName" onChange={this.handleChange} value={this.state.consenterFirstName ? this.state.consenterFirstName :  this.props.defaultFirstName} />
                        </div>
                        < div className = "screening__name--last" >
                            <label htmlFor="consenterastName">Last Name</label>
                            <input type="text" id="lastName" onChange={this.handleChange} value={this.state.consenterLastName ? this.state.consenterLastName :  this.props.defaultLastName}/>
                        </div>
                    </div>
                    <div className="infoCollector__reusableInfo">
                        {!this.props.addressSaved ? 
                            <div className="infoCollector__infoItem">
                                <label htmlFor="address">Address</label>
                                <input type="text" id="address" onChange={this.handleChange} value={this.state.address}/>
                                {this.props.dependantsExist ? 
                                <label htmlFor="saveAddress">Use this address for dependant(s)?</label>
                                : null}
                                {this.props.dependantsExist ? 
                                <input type="checkbox" id="saveAddress" name="address" onClick={this.handleCheckBoxChange}/>
                                : null}
                            </div>
                        : null}
                        {!this.props.telephoneNumberSaved ?
                            <div className="infoCollector__infoItem">
                                <label htmlFor="telephoneNumber">Phone Number</label>
                                <input type="text" id="telephoneNumber" onChange={this.handleChange} value={this.state.phoneNuber}/>
                                {this.props.dependantsExist ? 
                                <label htmlFor="saveNumber">Use this number for dependant(s)?</label>
                                : null}
                                {this.props.dependantsExist ? 
                                <input type="checkbox" id="saveNumber" name="telephoneNumber" onClick={this.handleCheckBoxChange}/>
                                : null}
                            </div>
                        : null}
                    </div>
                    {(!this.props.consenterIsRecievingVaccine && !this.props.aVaccineRecipiantHasBeenCreated) ? null :
                    <div className="infoCollector__patientInfo">
                        <div className="infoItem">
                            <label htmlFor="dateOfBirth">Date Of Birth</label>
                            <input type="text" id="dateOfBirth" onChange={this.handleChange} value={this.state.dateOfBirth}/>
                        </div>
                        <div className="infoItem">
                            <label htmlFor="healthCard">Health Card</label>
                            <input type="text" id="healthCard" onChange={this.handleChange} value={this.state.healthCard}/>
                        </div>
                    </div>
                    }
                </form>
                {this.props.dependantsExist ? 
                <Button 
                    description="Add a dependant"
                    onClickAction={this.handleAddDependant}
                /> : null}
                <Button description="Complete" onClickAction={this.handleComplete}/>
            </div>
        );
    }
    
} 

export default InfoCollector;