import React, { Component } from "react";

import Button from './Button';


class WhoIsGettingVaccinated extends Component {
    state = { responseNumber: 0 }

    
    handleResponse = (responseNumber) => {
        this.setState({
            responseNumber
        }, () => {
            if (responseNumber === 1) {
                this.props.includeConsentProvider();
                this.props.includeDependants();
                this.props.showScreening();
            } else if (responseNumber === 2) {
                this.props.includeDependants();
                this.props.moveToNextQuestion();
            } else {
                this.props.includeConsentProvider();
                this.props.showScreening();
            }
        });
    }

    
    render() {
        return (
            < div className = "whoIsGettingVaccinated" >
                <div className="question">
                    <h2>Who are you providing consent for today?</h2>
                </div>
                <div className="whoIsGettingVaccinated__answerOptions">
                    < Button 
                        description="Both myself, and my dependant(s)"
                        onClickAction={() => this.handleResponse(1)}
                    / >
                    < Button 
                        description="I am consenting on behalf of my dependant(s)" 
                        onClickAction={() => this.handleResponse(2)}
                    / >
                    < Button
                        description="I am consenting on my own behalf" 
                        onClickAction={() => this.handleResponse(3)}
                    / >
                </div>                
            </div>
        );
    }




}


export default WhoIsGettingVaccinated;