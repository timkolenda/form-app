import React, { Component } from "react";



class InfoCollector extends Component {
    state = {
        consenterfirstName: '',
        consenterlastName: '',
        dateOfBirth: 0,
        address: '',
        healthCardNumber: '',
        telephoneNumber: '',
        relationToDependants: ''
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    
    
    render() {
        return (
            <div className="infoCollector">
                <form className="infoCollector__form">
                    <div className="infoCollector__names">
                        < div className = "screening__name--first" >
                            <label htmlFor="consenterFirstName">First Name</label>
                            <input type="text" id="consenterFirstName" onChange={this.handleChange} value={this.state.consenterfirstName ? this.state.consenterfirstName :  } />
                        </div>
                        < div className = "screening__name--last" >
                            <label htmlFor="consenterastName">Last Name</label>
                            <input type="text" id="lastName" onChange={this.handleChange} value={this.state.lastName}/>
                        </div>
                    </div>
                    
                
                
                </form>
            </div>
        );
    }
    
} 

export default InfoCollector;