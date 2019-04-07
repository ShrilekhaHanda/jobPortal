import React from 'react';
import './index.css';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createJob } from '../../actions';
import socketIOClient from "socket.io-client";

class CreateJob extends React.Component {
    renderInput({ input, label }) {
        return(
            <div className="field">
                <label>{label}</label>
                <input {...input} required/>
            </div>
        );
    }
    onSubmit = (formValues) => {
        this.props.createJob(formValues);
        const socket = socketIOClient("http://127.0.0.1:4001");
        setTimeout(function(){
            socket.emit('jobFormData', {data: formValues});
        }, 3000);
    }
    render(){
        return(
            <div className="createJob">
                <h2>Job Details</h2>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                    <Field name="compName" component={this.renderInput} label="Company Name" />
                    <Field name="jTitle" component={this.renderInput} label="Job title" />
                    <Field name="jDescription" component={this.renderInput} label="Job Description" />
                    <button className="ui button primary">Create Job</button>
                </form>
            </div>
        );
    }
}

const formWrapped = reduxForm({ form: 'createJob'})(CreateJob)
export default connect(null, { createJob })(formWrapped);