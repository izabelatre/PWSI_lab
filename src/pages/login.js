import React, { Component } from "react";
import Navbar from '../components/Navbar.js'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";



const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };


class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    
        this.state = {
          username: "",
          password: "",
          loading: false,
          message: ""
        };
      }


      onChangeUsername(e) {
        this.setState({
          username: e.target.value
        });

      }
    
      onChangePassword(e) {
        this.setState({
          password: e.target.value
        });
      }
    
      handleLogin(e) {
        e.preventDefault();
    
        this.setState({
          message: "",
          loading: true
        });
    
        this.form.validateAll();
    
        if (this.checkBtn.context._errors.length === 0) {
          AuthService.login(this.state.username, this.state.password).then(
            () => {
                this.props.history.push("/welcome");
                window.location.reload();
            },
            error => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
    
              this.setState({
                loading: false,
                message: resMessage
              });
            }
          );
        } else {
          this.setState({
            loading: false
          });
        }
      }   


    render() {
      if(localStorage.getItem("color")=== "yes"){
        return (
            <div>
                <Navbar text1="Zarejestruj si??" text2="Zaloguj si??" />
            <body class="login_color">
              <fieldset class="login_color">
                <Form
                  onSubmit={this.handleLogin}
                  ref={c => {
                    this.form = c;
                  }}
                >
                    <h3>Logowanie</h3>
                    <br></br>
                  <div className="form-group">
                    <label htmlFor="username" >Email</label>
                    <Input
                      type="text"
                      className="form-control"
                      name="username"
                      value={this.state.username}
                      onChange={this.onChangeUsername}
                      validations={[required]}
                      placeholder="Email"
                    />
                  </div>
      
                  <div className="form-group">
                    <label htmlFor="password">Has??o</label>
                    <Input
                      type="password"
                      className="form-control"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChangePassword}
                      validations={[required]}
                      placeholder="Has??o"
                    />
                  </div>
      
      <br></br><br></br>
                  <div className="form-group">
                    <button
                      className="btn btn-secondary btn-block"
                      disabled={this.state.loading}
                    >
                      {this.state.loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                      )}
                      <span>Zaloguj si??</span>
                    </button>
                  </div>
      
                  {this.state.message && (
                    <div className="form-group">
                      <div className="alert alert-danger" role="alert">
                        {this.state.message}
                      </div>
                    </div>
                  )}
                  <CheckButton
                    style={{ display: "none" }}
                    ref={c => {
                      this.checkBtn = c;
                    }}
                  />
                </Form>
                </fieldset>
            </body>
            </div>
        );}
        else{
          return (
            <div>
                <Navbar text1="Zarejestruj si??" text2="Zaloguj si??" />
            <body class="login">
              <fieldset class="login">
                <Form
                  onSubmit={this.handleLogin}
                  ref={c => {
                    this.form = c;
                  }}
                >
                    <h3>Logowanie</h3>
                    <br></br>
                  <div className="form-group">
                    <label htmlFor="username" >Email</label>
                    <Input
                      type="text"
                      className="form-control"
                      name="username"
                      value={this.state.username}
                      onChange={this.onChangeUsername}
                      validations={[required]}
                      placeholder="Email"
                    />
                  </div>
      
                  <div className="form-group">
                    <label htmlFor="password">Has??o</label>
                    <Input
                      type="password"
                      className="form-control"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChangePassword}
                      validations={[required]}
                      placeholder="Has??o"
                    />
                  </div>
      
      <br></br><br></br>
                  <div className="form-group">
                    <button
                      className="btn btn-secondary btn-block"
                      disabled={this.state.loading}
                    >
                      {this.state.loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                      )}
                      <span>Zaloguj si??</span>
                    </button>
                  </div>
      
                  {this.state.message && (
                    <div className="form-group">
                      <div className="alert alert-danger" role="alert">
                        {this.state.message}
                      </div>
                    </div>
                  )}
                  <CheckButton
                    style={{ display: "none" }}
                    ref={c => {
                      this.checkBtn = c;
                    }}
                  />
                </Form>
                </fieldset>
            </body>
            </div>
        );

        }
    }
}

export default LoginPage;