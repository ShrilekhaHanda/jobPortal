import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import socketIOClient from "socket.io-client";

class Recruiter extends React.Component {
    state = {
        response: false,
        endpoint: "http://127.0.0.1:4001"
    }
    componentDidMount() {
        this.props.fetchStreams();
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.on("RegFromAPI", data => this.setState({ response: data }));
    }
    componentWillUpdate(){
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.on("RegFromAPI", data => this.setState({ response: data }));
    }
    renderList() {
        //console.log(this.props.streams);
        return this.props.streams.map( stream => {
            return (
                <div className="item" key={stream.id}>
                    <div className="content">
                        <h4 className="header">{stream.fullName}</h4>
                        <div className="description">
                            <p>Education: {stream.education}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }
    addition(res) {
        if(res){
           //console.log(res);           
                return (
                    <div className="item" key={res.id}>
                        <div className="content">
                            <h4 className="header">{res.fullName}</h4>
                            <div className="description">
                                <p>Education: {res.education}</p>
                            </div>
                        </div>
                    </div>
                )
        }
        return false;
    }
    render() {    
        //console.log(this.state.response);
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
                        <Link to="/createJob">
                            <button className="ui red button" >
                                Add Job
                            </button>
                        </Link>
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
        streams: Object.values(state.register),
        user: state.user
    }
}

export default connect(mapStateToProps, { fetchStreams })(Recruiter);