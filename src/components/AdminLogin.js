import React, { Component } from "react";
import {Form,Button} from 'react-bootstrap';
import axios from "axios";
import {withRouter,Link} from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: String, password: String };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  verifyAdmin(username,password){
      if(username=="aayushadhikari11@gmail.com"&&password=="nI78EA22")
        return true;
    return false;
  }

  handleSubmit(event) {
    //alert("A name was submitted: " + this.state.firstName);
    event.preventDefault();


    if(this.verifyAdmin(this.state.email,this.state.password)){
        this.setState({email:"",password:""});
        this.props.history.push('/adminpage');
    }
    return;
    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    axios.post(`http://localhost:3005/login`,user).then((res) => {
      console.log(res);
      console.log(res.data);
    }).catch((err) => {
      console.log (err)
  });

  this.setState({email:"",password:""});
  }

  render() {
    return (
      <div className="loginform">

      <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" value={this.state.email} onChange={this.handleEmailChange} />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput2">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" value={this.state.password} onChange={this.handlePasswordChange} />
  </Form.Group>
  
  
</Form>

<div className="mb-2">
    <Button onClick= {this.handleSubmit} variant="primary" size="lg" >
      Login
    </Button>

    <Link to="/">
     <Button variant="primary" size="lg">
          Click Me!
     </Button>
 </Link>

  </div>
      </div>
    );
  }
}

export default Login;