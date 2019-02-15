import React, { Component } from "react";

import Button from './Button';
import DependantName from './DependantName';


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
                    <label htmlFor={1}>1</label>
                    <input 
                        name="numberOfDependants" 
                        id={1} 
                        type="radio" 
                        value={1} 
                        onChange={(e) => this.props.handleChangeRadio(e)} 
                    />
                    <label htmlFor={2}>2</label>
                    <input 
                        name="numberOfDependants" 
                        id={2} 
                        type="radio" 
                        value={2} 
                        onChange={(e) => this.props.handleChangeRadio(e)} 
                    />
                    <label htmlFor={3}>3</label>
                    <input 
                        name="numberOfDependants" 
                        id={3} 
                        type="radio" 
                        value={3} 
                        onChange={(e) => this.props.handleChangeRadio(e)}
                    />
                    <label htmlFor={4}>4</label>
                    <input 
                        name="numberOfDependants" 
                        id={4} 
                        type="radio" 
                        value={4} 
                        onChange={(e) => this.props.handleChangeRadio(e)} 
                    />
                    <label htmlFor={5}>5</label>
                    <input 
                        name="numberOfDependants" 
                        id={5} type="radio" 
                        value={5} 
                        onChange={(e) => this.props.handleChangeRadio(e)} 
                    />
                </form>
            </div>
        );
    }

    renderDependantNameFeilds = () => {
        for (let i = 1; i <= this.props.numberOfDependants; i++) {
            return (<DependantName key={i} label={`dependant${i}`}/ >)
        }
    }

    renderNameListInput = () => {
        return (
            <div className="WhoIsGettingVaccinated__names">
                <form action="">
                    <div>
                        <label htmlFor="guardianName">Your Name</label>
                        <input type="text" id="guardianName"/>
                    </div>
                    {this.renderDependantNameFeilds}
                </form>
            </div>
        );
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