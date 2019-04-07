import React from 'react';
import './form.css';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createRegister, activeUser } from '../../actions';
import { Redirect } from 'react-router-dom';
import socketIOClient from "socket.io-client";

class RegisterForm extends React.Component {
    state = {
        validated: false,
        select: 'candidate'
    }
    renderInput({input, label, type}) {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} required type={type} />
            </div>
        );
    }
    renderSelect({input, label}){
        return (
            <div className="field">
                <label>{label}</label>
                <select {...input} >
                    <option value="candidate">Candidate</option>
                    <option value="recruiter">Recuiter</option>
                </select>
            </div>
        )
    }
    onSubmit = (formValues) =>{
        this.props.createRegister(formValues);
        this.props.activeUser(formValues);
        this.setState({ validated: !(this.state.validated)})
      // console.log(formValues);
      const socket = socketIOClient("http://127.0.0.1:4001");
      setTimeout(function(){
        socket.emit('formData', {data: formValues});
      }, 3000)
      
    }
    render() {
        if (this.state.validated === true) {
            const url = `/${this.state.select}`;
            return <Redirect to={url} />
          }
        return(
            <div className="regForm">
                <h2>Register</h2>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                    <Field name="fullName" component={this.renderInput} label="Full Name" type="text" />
                    <Field name="emailId" component={this.renderInput} label="Email Id" type="email" />
                    <Field name="password" component={this.renderInput} label="Password" type="password" />
                    <Field name="education" component={this.renderInput} label="Education" type="text"/>
                    {/* <Field name="select" component={this.renderSelect} label="Register As"/> */}
                    <div>
                        <label>Register As</label>
                        <div>
                        <Field name="select" component="select" value={this.state.select} onChange={(e) => {this.setState({ select: e.target.value})}} required>
                            <option></option>
                            <option value="candidate">Candidate</option>
                            <option value="recruiter">Recuiter</option>
                        </Field>
                        </div>
                    </div>
                    <button className="ui button primary">Submit</button>
                </form>
            </div>
        )
    }
}

// const validate = (formValues) => {
//     if(!formValues){
//         return
//     }
// }
const formWraped = reduxForm({ form: 'registerForm' })(RegisterForm);
export default connect(null, { createRegister, activeUser })(formWraped);

