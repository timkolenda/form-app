(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(7),o=n.n(i),r=n(1),c=n(2),l=n(3),d=n(5),p=n(4),h=n(6),m=(n(15),function(e){var t=e.description,n=e.onClickAction;return s.a.createElement("div",{className:"button"},s.a.createElement("button",{onClick:n},t))}),u=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).state={responseNumber:0},n.handleResponse=function(e){n.setState({responseNumber:e},function(){1===e?(n.props.includeConsentProvider(),n.props.includeDependants(),n.props.showScreening()):2===e?(n.props.includeDependants(),n.props.showInfoCollector()):(n.props.includeConsentProvider(),n.props.showScreening())})},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"whoIsGettingVaccinated"},s.a.createElement("div",{className:"question"},s.a.createElement("h2",null,"Who are you providing consent for today?")),s.a.createElement("div",{className:"whoIsGettingVaccinated__answerOptions"},s.a.createElement(m,{description:"Both myself, and my dependant(s)",onClickAction:function(){return e.handleResponse(1)}}),s.a.createElement(m,{description:"I am consenting on behalf of my dependant(s)",onClickAction:function(){return e.handleResponse(2)}}),s.a.createElement(m,{description:"I am consenting on my own behalf",onClickAction:function(){return e.handleResponse(3)}})))}}]),t}(a.Component),v=function(e){var t=e.handleRadioChange,n=e.question,a=e.inputName;return s.a.createElement("div",{className:"screeningQuestion"},s.a.createElement("div",{className:"screeningQuestion__question"},s.a.createElement("p",null,n)),s.a.createElement("div",{className:"screeningQuestion__answerOptions"},s.a.createElement("input",{type:"radio",name:a,value:"yes",onChange:function(e){return t(e)}}),s.a.createElement("input",{type:"radio",name:a,value:"no",onChange:function(e){return t(e)}})))},f=function(e){var t=e.consentProvider,n=e.dependantsExist,a=e.consenterIsRecievingVaccine,i=e.resetForm;return!t&&n?s.a.createElement("div",{className:"doesNotQualify"},s.a.createElement("div",{className:"message"},s.a.createElement("p",null,"I'm sorry, you are not eligible to receive a flu shot at this time. Would you like to continue to provide concent for your dependants?")),s.a.createElement("div",{className:"doesNotQualify__options"},s.a.createElement(m,{description:"Yes"}),s.a.createElement(m,{description:"No",onClickAction:i}))):t&&n?s.a.createElement("div",{className:"doesNotQualify"},s.a.createElement("div",{className:"message"},s.a.createElement("p",null,"I'm sorry, this individual is not eligible to receive a flu shot at this time. Would you like to continue to provide concent for another dependant?")),s.a.createElement("div",{className:"doesNotQualify__options"},s.a.createElement(m,{description:"Yes"}),s.a.createElement(m,{description:"No",onClickAction:i}))):a&&!n?s.a.createElement("div",{className:"doesNotQualify"},s.a.createElement("div",{className:"message"},s.a.createElement("p",null,"I'm sorry, you are not eligible to receive a flu shot at this time.")),s.a.createElement("div",{className:"doesNotQualify__options"},s.a.createElement(m,{description:"OK",onClickAction:i}))):void 0},N=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={firstName:"",lastName:"",qualifies:!0,screeningQuestion1:"",screeningQuestion2:"",screeningQuestion3:"",screeningQuestion4:"",screeningQuestion5:"",screeningQuestion6:"",screeningQuestion7:""},n.screeningQuestions=["Are ".concat(n.props.consentProvider?"they":"you"," sick today (i.e., fever greater than 39.5\xb0C, breathing problems, active infection)?"),"Do ".concat(n.props.consentProvider?"they":"you"," have an allergy to eggs or egg products?"),"Do ".concat(n.props.consentProvider?"they":"you"," have an allergy to any of the components of the flu vaccine (e.g., gentamicin, neomycin, kanamycin, thimerosal, formaldehyde)?"),"Do ".concat(n.props.consentProvider?"they":"you"," take a blood thinner or have a bleeding disorder?"),"Have ".concat(n.props.consentProvider?"they":"you"," had a serious reaction to influenza vaccine in the past?"),"Do ".concat(n.props.consentProvider?"they":"you"," have a new or changing condition affecting the brain or nervous system?"),"Have ".concat(n.props.consentProvider?"they":"you"," ever had Guillain-Barr\xe9 syndrome?")],n.handleByPass=function(e){n.state.firstName&&n.state.lastName&&(n.props.addNewVaccineRecipiant(n.state.firstName,n.state.lastName),n.props.showInfoCollector()),"None of these apply to anyone I am providing consent for"===e.target.innerHTML&&n.props.setAutoApproveScreening()},n.handleChange=function(e){n.setState(Object(r.a)({},e.target.id,e.target.value))},n.handleRadioChange=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(r.a)({},t,a),function(){"no"===a&&n.setState({qualifies:!1}),"yes"===n.state.screeningQuestion1&&"yes"===n.state.screeningQuestion2&&"yes"===n.state.screeningQuestion3&&"yes"===n.state.screeningQuestion4&&"yes"===n.state.screeningQuestion5&&"yes"===n.state.screeningQuestion6&&"yes"===n.state.screeningQuestion7&&n.state.firstName&&n.state.lastName&&(n.props.addNewVaccineRecipiant(n.state.firstName,n.state.lastName),n.props.showInfoCollector())})},n.renderInstructions=function(){return n.props.consenterIsRecievingVaccine&&n.props.dependantsExist?s.a.createElement("h2",null,"Starting with yourself, please provide the following information"):n.props.consenterIsRecievingVaccine?s.a.createElement("h2",null,"Please provide the following information"):s.a.createElement("h2",null,"Please provide the following information for the first person to be vaccinated.")},n.renderScreeningQuestions=function(){return n.screeningQuestions.map(function(e){return s.a.createElement(v,{question:e,inputName:"screeningQuestion".concat(n.screeningQuestions.indexOf(e)+1),handleRadioChange:n.handleRadioChange,key:n.screeningQuestions.indexOf(e)})})},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"screening"},this.state.qualifies?s.a.createElement("div",{className:"screening__questionnaire"},s.a.createElement("div",{className:"question"},this.renderInstructions()),s.a.createElement("form",{action:"",className:"screening__name"},s.a.createElement("div",{className:"input input__text"},s.a.createElement("label",{htmlFor:"firstName"},"First Name"),s.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange,value:this.state.firstName})),s.a.createElement("div",{className:"input input__text"},s.a.createElement("label",{htmlFor:"lastName"},"Last Name"),s.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange,value:this.state.lastName}))),s.a.createElement("form",{className:"screening__questions"},s.a.createElement("div",{className:"screening__columnHeadings"},s.a.createElement("div",{className:"screening__title"},s.a.createElement("h3",null,"Screening Questions")),s.a.createElement("div",{className:"screening__inputTitles"},s.a.createElement("h3",null,"Yes"),s.a.createElement("h3",null,"No"))),this.renderScreeningQuestions()),s.a.createElement("div",{className:"screening__byPass"},this.props.dependantsExist?s.a.createElement("div",{className:"screening__byPassOption"},s.a.createElement(m,{description:"None of these apply to anyone I am providing consent for",onClickAction:this.handleByPass})):null,s.a.createElement("div",{className:"screening__byPassOption"},s.a.createElement(m,{description:"No to all",onClickAction:this.handleByPass})))):null,this.state.qualifies?null:s.a.createElement(f,{consenterIsRecievingVaccine:this.props.consenterIsRecievingVaccine,dependantsExist:this.props.dependantsExist,consentProvider:this.props.consentProvider,resetForm:this.props.resetForm}))}}]),t}(a.Component),g=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={infoFirstName:"",infoLastName:"",dateOfBirth:"",address:"",healthCard:"",telephoneNumber:"",relationToDependants:"",saveAddress:!1,saveNumber:!1,consentGranted:!1,displayOtherRelationshipField:!1},n.handleChange=function(e){n.setState(Object(r.a)({},e.target.id,e.target.value))},n.handleCheckBoxChange=function(e){n.setState(Object(r.a)({},e.target.id,!n.state[e.target.id]))},n.handleRadioChange=function(e){var t=e.target.id;n.setState(Object(r.a)({},e.target.name,e.target.value),function(){"otherRadio"===t?n.setState({displayOtherRelationshipField:!0}):n.setState({displayOtherRelationshipField:!1})})},n.setConsentProvider=function(){console.log("run cdm"),""===n.props.consentProvider&&n.setState({infoFirstName:n.props.defaultFirstName,infoLastName:n.props.defaultLastName},n.props.addConsentProvider(n.state.infoFirstName,n.state.infoLastName))},n.renderInstructions=function(){return n.props.consenterIsRecievingVaccine||n.props.consentProvider?n.props.consenterIsRecievingVaccine&&!n.props.dependantsExist?s.a.createElement("h2",null,"Please provide your details below."):n.props.consenterIsRecievingVaccine&&n.props.dependantsExist&&1===n.props.numberOfPatients?s.a.createElement("h2",null,"Please enter your patient and consent details."):n.props.dependantsExist&&(n.props.consenterIsRecievingVaccine&&n.props.numberOfPatients>1||!n.props.consenterIsRecievingVaccine&&n.props.numberOfPatients>=1)?s.a.createElement("h2",null,"Please enter the following details for your dependant."):void 0:s.a.createElement("h2",null,"Please provide the following details to provide Consent.")},n.handleAddDependant=function(){n.state.saveAddress&&n.props.storeReusableInfo(n.state.saveAddress,"address",n.state.address),n.state.saveNumber&&n.props.storeReusableInfo(n.state.saveNumber,"telephoneNumber",n.state.telephoneNumber),n.props.consentProvider||(console.log("run hd"),n.props.addConsentProvider("".concat(n.state.infoFirstName," ").concat(n.state.infoLastName))),(n.props.aVaccineRecipiantHasBeenCreated||n.props.autoApproveScreening)&&n.props.addPatientDetails({firstName:n.state.infoFirstName,lastName:n.state.infoLastName,healthCard:n.state.healthCard,dateOfBirth:n.state.dateOfBirth,address:n.state.address,telephoneNumber:n.state.telephoneNumber,consentProvider:"".concat(n.state.infoFirstName," ").concat(n.state.infoLastName),consentGranted:n.state.consentGranted}),n.props.autoApproveScreening?n.resetForNewPatient():n.props.showScreening()},n.resetForNewPatient=function(){n.setState({infoFirstName:"",infoLastName:"",dateOfBirth:"",address:"",healthCard:"",telephoneNumber:""})},n.handleComplete=function(){n.props.addPatientDetails({firstName:n.state.infoFirstName,lastName:n.state.infoLastName,healthCard:n.state.healthCard,dateOfBirth:n.state.dateOfBirth,address:n.state.address,telephoneNumber:n.state.telephoneNumber,consentProvider:"".concat(n.state.infoFirstName," ").concat(n.state.infoLastName),consentGranted:n.state.consentGranted})},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setConsentProvider()}},{key:"render",value:function(){return s.a.createElement("div",{className:"infoCollector"},s.a.createElement("div",{className:"question"},this.renderInstructions()),s.a.createElement("form",{className:"infoCollector__form"},s.a.createElement("div",{className:"infoCollector__section"},s.a.createElement("div",{className:"infoCollector__infoItem"},s.a.createElement("div",{className:"input input__text"},s.a.createElement("label",{htmlFor:"infoFirstName"},"First Name"),s.a.createElement("input",{type:"text",id:"infoFirstName",onChange:this.handleChange,value:this.state.infoFirstName?this.state.infoFirstName:this.props.autoApproveScreening&&this.props.numberOfPatients>1?this.state.infoFirstName:this.props.defaultFirstName}))),s.a.createElement("div",{className:"infoCollector__infoItem"},s.a.createElement("div",{className:"input input__text input__text--toEnd"},s.a.createElement("label",{htmlFor:"infoLastName"},"Last Name"),s.a.createElement("input",{type:"text",id:"infoLastName",onChange:this.handleChange,value:this.state.infoLastName?this.state.infoLastName:this.props.autoApproveScreening&&this.props.numberOfPatients>1?this.state.infoLastName:this.props.defaultLastName})))),s.a.createElement("div",{className:"infoCollector__section"},this.props.addressSaved?null:s.a.createElement("div",{className:"infoCollector__infoItem"},s.a.createElement("div",{className:"input input__text"},s.a.createElement("label",{htmlFor:"address"},"Address"),s.a.createElement("input",{type:"text",id:"address",onChange:this.handleChange,value:this.state.address}),this.props.dependantsExist?s.a.createElement("div",{className:"input__checkBox"},s.a.createElement("label",{htmlFor:"saveAddress"},"Use this address for dependant(s)?"),s.a.createElement("input",{type:"checkbox",id:"saveAddress",name:"address",onClick:this.handleCheckBoxChange})):null)),this.props.telephoneNumberSaved?null:s.a.createElement("div",{className:"infoCollector__infoItem"},s.a.createElement("div",{className:"input input__text input__text--toEnd"},s.a.createElement("label",{htmlFor:"telephoneNumber"},"Phone Number"),s.a.createElement("input",{type:"text",id:"telephoneNumber",onChange:this.handleChange,value:this.state.phoneNumber}),this.props.dependantsExist?s.a.createElement("div",{className:"input__checkBox"},s.a.createElement("label",{htmlFor:"saveNumber"},"Use this number for dependant(s)?"),s.a.createElement("input",{type:"checkbox",id:"saveNumber",name:"telephoneNumber",onClick:this.handleCheckBoxChange})):null))),this.props.consenterIsRecievingVaccine||this.props.aVaccineRecipiantHasBeenCreated?s.a.createElement("div",{className:"infoCollector__section"},s.a.createElement("div",{className:"infoCollector__infoItem"},s.a.createElement("div",{className:"input input__text"},s.a.createElement("label",{htmlFor:"dateOfBirth"},"Date Of Birth"),s.a.createElement("input",{type:"text",id:"dateOfBirth",onChange:this.handleChange,value:this.state.dateOfBirth}))),s.a.createElement("div",{className:"infoCollector__infoItem"},s.a.createElement("div",{className:"input input__text input__text--toEnd"},s.a.createElement("label",{htmlFor:"healthCard"},"Health Card"),s.a.createElement("input",{type:"text",id:"healthCard",onChange:this.handleChange,value:this.state.healthCard})))):null,this.props.consentProvider?s.a.createElement("div",{className:"infoCollector__section infoCollector__section--column"},s.a.createElement("p",null,"I, ".concat(this.props.consentProvider," give consent for the above patient to receive their vaccination.")),s.a.createElement("div",{className:"input__checkBox input__checkBox--addSpaceBelow"},s.a.createElement("label",{htmlFor:"consentGranted"},"Check for yes"),s.a.createElement("input",{type:"checkbox",id:"consentGranted",onClick:this.handleCheckBoxChange}))):s.a.createElement("div",null,s.a.createElement("div",{className:"infoCollector__sectionHeading"},s.a.createElement("p",null,"Relationship to Dependant(s)")),s.a.createElement("div",{className:"infoCollector__section"},s.a.createElement("div",{className:"infoCollector__infoItem infoCollector__infoItem--radioContainer"},s.a.createElement("div",{className:"input input__radio"},s.a.createElement("label",{htmlFor:"parent"},"Parent"),s.a.createElement("input",{type:"radio",name:"relationToDependants",id:"parent",onChange:this.handleRadioChange,value:"parent"})),s.a.createElement("div",{className:"input input__radio"},s.a.createElement("label",{htmlFor:"guardian"},"Guardian"),s.a.createElement("input",{type:"radio",name:"relationToDependants",id:"guardian",onChange:this.handleRadioChange,value:"guardian"})),s.a.createElement("div",{className:"input input__radio"},s.a.createElement("label",{htmlFor:"otherRadio"},"Other"),s.a.createElement("input",{type:"radio",name:"relationToDependants",id:"otherRadio",onChange:this.handleRadioChange,value:""}))),this.state.displayOtherRelationshipField?s.a.createElement("div",{className:"infoCollector__infoItem"},s.a.createElement("div",{className:"input input__text input__text--toEnd"},s.a.createElement("label",{htmlFor:"otherRelationship"},"Please Specify"),s.a.createElement("input",{type:"text",id:"relationToDependants",value:this.state.otherRelationship,onChange:this.handleChange}))):null))),this.props.dependantsExist?s.a.createElement(m,{description:"Add a dependant",onClickAction:this.handleAddDependant}):null,this.props.dependantsExist&&this.props.numberOfPatients>1||!this.props.dependantsExist||!this.props.consenterIsRecievingVaccine&&this.props.numberOfPatients>0?s.a.createElement(m,{description:"Complete",onClickAction:this.handleComplete}):null)}}]),t}(a.Component),E=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).state={showWhoIsGettingVaccinatedOptions:!0,showScreeningQuestions:!1,showInfoCollector:!1,questionNumber:0,consentProvider:"",consenterIsRecievingVaccine:!1,dependantsExist:!1,vaccineReceipiantInfo:[],addressSaved:"",telephoneNumberSaved:"",autoApproveScreening:!1},n.includeConsentProvider=function(){n.setState({consenterIsRecievingVaccine:!0})},n.setAutoApproveScreening=function(){n.setState({autoApproveScreening:!0})},n.addConsentProvider=function(e){n.setState({consentProvider:e})},n.includeDependants=function(){n.setState({dependantsExist:!0})},n.storeReusableInfo=function(e,t,a){e?n.setState(Object(r.a)({},"".concat(t,"Saved"),a)):n.setState(Object(r.a)({},"".concat(t,"Saved"),""))},n.addNewVaccineRecipiant=function(e,t){var a=n.state.vaccineReceipiantInfo;a.push({firstName:e,lastName:t}),n.setState({vaccineReceipiantInfo:a})},n.addPatientDetails=function(e){var t=e.firstName,a=e.lastName,s=e.healthCard,i=e.dateOfBirth,o=e.address,r=e.telephoneNumber,c=e.consentProvider,l=e.consentGranted;""===n.state.consentProvider&&(console.log("run apd"),n.addConsentProvider(c)),""===r&&(r=n.state.telephoneNumberSaved),""===o&&(o=n.state.telephoneNumberSaved);var d=n.state.vaccineReceipiantInfo,p=d.filter(function(e){return e.firstName===t&&e.lastName===a});p[0]?(console.log(p[0]),n.state.consentProvider?p[0].consentProvidedBy=n.state.consentProvider:p[0].consentProvidedBy=c,p[0].consentGranted=l,p[0].healthCard=s,p[0].dateOfBirth=i,p[0].address=o,p[0].telephoneNumber=r,n.setState({vaccineReceipiantInfo:d}),console.table(n.state.vaccineReceipiantInfo)):(d.push({firstName:t,lastName:a}),p=d.filter(function(e){return e.firstName===t&&e.lastName===a}),n.state.consentProvider?p[0].consentProvidedBy=n.state.consentProvider:p[0].consentProvidedBy=c,p[0].consentGranted=l,p[0].healthCard=s,p[0].dateOfBirth=i,p[0].address=o,p[0].telephoneNumber=r,n.setState({vaccineReceipiantInfo:d}),console.table(n.state.vaccineReceipiantInfo))},n.showScreening=function(){n.setState({showWhoIsGettingVaccinatedOptions:!1,showInfoCollector:!1,showScreeningQuestions:!0})},n.showInfoCollector=function(){n.setState({showWhoIsGettingVaccinatedOptions:!1,showInfoCollector:!0,showScreeningQuestions:!1})},n.resetForm=function(){n.setState({showWhoIsGettingVaccinatedOptions:!0,showScreeningQuestions:!1,questionNumber:0,consentProvider:null,consenterIsRecievingVaccine:!1,dependantsExist:!1,vaccineReceipiantInfo:[]})},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"app"},s.a.createElement("div",{className:"AnswerContainer"},this.state.showWhoIsGettingVaccinatedOptions?s.a.createElement(u,{includeConsentProvider:this.includeConsentProvider,includeDependants:this.includeDependants,consenterIsRecievingVaccine:this.state.consenterIsRecievingVaccine,moveToNextQuestion:this.moveToNextQuestion,showScreening:this.showScreening,showInfoCollector:this.showInfoCollector}):null,this.state.showScreeningQuestions?s.a.createElement(N,{moveToNextQuestion:this.moveToNextQuestion,consentProvider:this.state.consentProvider,consenterIsRecievingVaccine:this.state.consenterIsRecievingVaccine,dependantsExist:this.state.dependantsExist,addNewVaccineRecipiant:this.addNewVaccineRecipiant,resetForm:this.resetForm,showInfoCollector:this.showInfoCollector,setAutoApproveScreening:this.setAutoApproveScreening}):null,this.state.showInfoCollector?s.a.createElement(g,{consenterIsRecievingVaccine:this.state.consenterIsRecievingVaccine,consentProvider:this.state.consentProvider,defaultFirstName:this.state.vaccineReceipiantInfo[0]?this.state.vaccineReceipiantInfo[this.state.vaccineReceipiantInfo.length-1].firstName:null,defaultLastName:this.state.vaccineReceipiantInfo[0]?this.state.vaccineReceipiantInfo[this.state.vaccineReceipiantInfo.length-1].lastName:null,storeReusableInfo:this.storeReusableInfo,telephoneNumberSaved:this.state.telephoneNumberSaved,addressSaved:this.state.addressSaved,dependantsExist:this.state.dependantsExist,aVaccineRecipiantHasBeenCreated:this.state.vaccineReceipiantInfo[0],addPatientDetails:this.addPatientDetails,showScreening:this.showScreening,addConsentProvider:this.addConsentProvider,numberOfPatients:this.state.vaccineReceipiantInfo.length,autoApproveScreening:this.state.autoApproveScreening}):null))}}]),t}(a.Component);o.a.render(s.a.createElement(E,null),document.querySelector("#root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.aee1097c.chunk.js.map