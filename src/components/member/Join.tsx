import React, {Component} from 'react';
import userActions from "../../actions/user.actions";
import {connect} from "react-redux";
class Join extends Component<any,any>{

    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pass: '',
            uname: '',
            submitted: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        const {name, value} = e.target
        this.setState({[name]: value})

    }
    handleSubmit(e){
        e.preventDefault()
        this.setState({ submitted: true})
        const {userid, password, name} = this.state
            this.props.join(userid, password, name)
    }
    render() {
        return (
            <div>
            <form action="/action_page.php" onSubmit={this.handleSubmit}>
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr/>

                    <label htmlFor="userid"><b>UserID</b></label>
                    <input type="text" placeholder="Enter Userid" name="userid" onChange={this.handleChange}/>

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" onChange={this.handleChange} />

                    <label htmlFor="psw-repeat"><b>Name</b></label>
                    <input type="text" placeholder="Enter Name" name="name" onChange={this.handleChange}/>


                                <div className="clearfix">
                                    <button type="button" className="cancelbtn">Cancel</button>
                                    <button type="submit" className="signupbtn">Sign Up</button>
                                </div>
                  </div>
               </form>
            </div>
        );
    }
}
function mapStateToProps(state) {
    const { loggingIn } = state.userReducers
    return { loggingIn}
}
const actionCreators = {
    join: userActions.join
}
const connectedJoinPage = connect(mapStateToProps, actionCreators)(Join)
export { connectedJoinPage as Join }