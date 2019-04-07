import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchJob } from '../../actions';
import socketIOClient from "socket.io-client";

class Candidate extends React.Component {
    state = {
        response: false
    }
    componentDidMount(){
        this.props.fetchJob();
        const socket = socketIOClient("http://127.0.0.1:4001");
        socket.on("JobFromAPI", data => this.setState({ response: data }));
    }
    componentWillUpdate(){
        const socket = socketIOClient("http://127.0.0.1:4001");
        socket.on("JobFromAPI", data => this.setState({ response: data }));
    }
    renderList() {
        //console.log(this.props.jobs)
        return this.props.jobs.map( job => {
            return(
                <div className="item" key={job.id}>
                    <div className="content">
                        <h4 className="header">{job.compName}</h4>
                        <div className="description">
                            <p><b>Job Title:</b> {job.jTitle}</p>
                            <p><b>Job Description:</b> {job.jDescription}</p>
                        </div>
                    </div>
                </div>
            );
        })
    }
    addition(res) {
        if(res){
           console.log(res);           
                return (
                    <div className="item" key={res.id}>
                    <div className="content">
                        <h4 className="header">{res.compName}</h4>
                        <div className="description">
                            <p><b>Job Title:</b> {res.jTitle}</p>
                            <p><b>Job Description:</b> {res.jDescription}</p>
                        </div>
                    </div>
                </div>
                )
        }
        return false;
    }
    render() {
        //console.log(this.props.user);
        if (this.props.user === null) {
            return <Redirect to='/' />
          }
        return(
            <div>
                <div className="ui secondary pointing menu">
                    <div className="item">
                        <i className="user circle icon"></i>
                        {this.props.user.fullName}
                    </div>
                    <div className="right menu">
                        <Link to="/">
                            <button className="ui red button" >
                                Log Out
                            </button>
                        </Link>
                    </div>
                </div>
                
                <div className="ui relaxed divided list">
                    {this.renderList()}     
                    {this.addition(this.state.response)}               
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        jobs: Object.values(state.jobs),
        user: state.user
    }
}
export default connect(mapStateToProps, { fetchJob })(Candidate);