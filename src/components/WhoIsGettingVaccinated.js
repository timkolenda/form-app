import React, { Component } from "react";

import Button from './Button';


class WhoIsGettingVaccinated extends Component {
    state = { responseNumber: 1 }


    renderAnswerOptions() {
            return (
                <div className="whoIsGettingVaccinated__answerOptions">
                    < Button 
                        description="Both myself, and my dependant(s)"
                        onClickAction={() => this.handleResponse(1)}
                        //Collect First and last names
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
            );
        } 


    handleResponse = (responseNumber) => {
        this.setState({
            responseNumber
        }, () => {
            if (responseNumber === 2) {
                this.props.includeConsentProvider();
            } else if (responseNumber === 3) {
                this.props.handleQuestionSubmit()
            }
        });
    }


    renderNumberOfDependantsFeild() {
        return (
            <div className="WhoIsGettingVaccinated__numberOfDependants">
                <h3>How many dependants are getting vaccinated today?</h3>
                <form action="#">
                    <label htmlFor=""></label>
                    <input type="radio" value={2} onChange={(event) => console.log(event)} />
                    <label htmlFor=""></label>
                    <input type="radio" value={2} onChange={(event) => console.log(event)} />
                </form>
            </div>
        )
    }

    
    
    
    render() {
        return (
            < div className = "whoIsGettingVaccinated" >
                {this.state.responseNumber === 0 ? this.renderAnswerOptions() : ''}
                {(this.state.responseNumber === 1 || this.state.responseNumber === this.state.responseNumber === 2)? this.renderNumberOfDependantsFeild() : ''}
            </div>
        );
    }




}


export default WhoIsGettingVaccinated;