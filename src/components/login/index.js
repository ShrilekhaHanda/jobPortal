import React from 'react';
import './index.css';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchStreams, activeUser } from '../../actions';


class Login extends React.Component {
  state = { 
    isSignedIn: false,
    userSelect: null
  }
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderInput({ input, label }){
    return(
      <div className="field">
        <label>{label}</label>
        <input {...input} required/>
      </div>
    )
  }
  onSubmit = ({ mailId, password }) =>{
    const streamArray = this.props.streams;
    const result = streamArray.find( stream => ((stream.emailId === mailId) && (stream.password === password)) );//stream => stream.emailId === {mailId}
    this.props.activeUser(result);
    if(result !== undefined){
      this.setState({ isSignedIn: !(this.state.isSignedIn), userSelect: result.select })
    } 
  }
  render(){
    if (this.state.isSignedIn === true) {
      const url = `/${this.state.userSelect}`;
      return <Redirect to={url} />
    }
    return(
      <div className="loginForm">
        <h2>Login</h2>
          <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)} >
            <Field name="mailId" component={this.renderInput} label="Email Id"/>
            <Field name="password" component={this.renderInput} label="Password"/>
            <button className="ui primary button">Login</button>
          </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.register)
  }
}
const formWrap = reduxForm({ form: 'loginForm' })(Login);

export default connect(mapStateToProps, { fetchStreams, activeUser })(formWrap);


