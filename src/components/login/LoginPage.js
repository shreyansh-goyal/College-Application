import React,{Component,useState} from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from "axios";
import {LoginContext} from "../../App"
import "./LoginPage.css";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
export default class LoginPage extends Component{
    constructor(props)
    {
      super(props);
      this.state={
        loginId:"",
        password:"",
        email:"",
        blocked:false,
        role:null
      }
      
    }
    updateRole=(e)=>{
      this.setState(
        {
          role:e.target.value
        }
      )
    }
    login=(context)=>{
      if(this.state.role)
      {
          switch(this.state.role)
          {
              case "admin":{
                axios.post("http://localhost:1337/auth/local/admin",{
                  identifier:this.state.email,
                  password:this.state.password,
                }).then(data=>{
                  localStorage.setItem('token',data.data.jwt);
                  localStorage.setItem('id',data.data.username);
                  context.changeState("admin",data.data.username)
                  this.props.changeView("admin","/Add Students");
                })
                .catch(err=>{
                  console.log(this.state);
                  console.log(err);
                  alert("Wrong Credentials");
                })  
                break;
              }
     
            case "teacher":{
              axios.post("http://localhost:1337/auth/local/teacher",{
                identifier:this.state.email,
                password:this.state.password,
              }).then(data=>{
                localStorage.setItem('token',data.data.jwt);
                localStorage.setItem('id',data.data.user.teacher);
                context.changeState("teacher",data.data.user.teacher);
                console.log("teacher id",data);
                this.props.changeView("teacher","/attendance/upload/Upload Attendence/teachers");
              })
              .catch(err=>{
                console.log(this.state);
                console.log(err);
                alert("Wrong Credentials");
              })  
              break;
            } 
            case "student":{
              axios.post("http://localhost:1337/auth/local",{
                identifier:this.state.email,
                password:this.state.password,
              }).then(data=>{
                localStorage.setItem('token',data.data.jwt);
                localStorage.setItem('id',data.data.user.username);
                context.changeState("student",data.data.username);
                this.props.changeView("student","/attendance/upload/Analyse Attendance");
              })
              .catch(err=>{
                console.log(this.state);
                console.log(err);
                alert("Wrong Credentials");
              })  
              break;
            } 
          }
    }
  }
    render()
    {
        return(
            <div >
            <div data-test="header" className="loginHeader">
              <div style={{display:"flex"}}>
              <img data-test="logo" className="logoSize" src="http://www.bpitindia.com/images/logo.png"></img>
              <h3  data-test="heading" className="heading">BHAGWAN PARSHURAM INSTITUTE OF TECHNOLOGY</h3>
              </div>
              <div data-test="side-logo" className="sideLogo">
              <img style={{height:"100px"}} src="http://www.bpitindia.com/images/brahim-smaaj.png"></img>
              <p style={{fontSize:"20px",color:"#ee1c26"}} >BHARTIYA BRAHMIN CHARITABLE TRUST</p>  
              </div>
            </div>
            <div className="loginBackground" data-test="login-background">
            {
              this.props.signup?(
                <Card data-test="signup-card" className="cardSize">
                <CardContent>
                  <p data-test="signup-heading" style={{textAlign:"center",fontWeight:"500",fontSize:"20px"}}>Signup Page</p>
                  <TextField
                    data-test="signup-username"
                    style={{width:"100%"}}
                    id="filled-name"
                    label="Enrollment Number"
                    margin="normal"
                    variant="filled"
                    value={this.state.loginId}
                    onChange={(e)=>{this.setState({loginId:e.target.value})}}

                  />
                  <TextField
                    data-test="signup-password"
                    style={{width:"100%"}}
                    id="filled-name"
                    label="Login Password"
                    margin="normal"
                    variant="filled"
                    value={this.state.password}
                    onChange={(e)=>{this.setState({password:e.target.value})}}
                  />
                </CardContent>
                <CardActions>
                <Button data-test="signup-button" onClick={console.log(this.state)} variant="contained" style={{display:"block",margin:"0 auto"}} color="primary" >Sign In</Button>
                </CardActions>
              </Card>
                ):(
                <Card className="cardSize" data-test="login-card">
                <CardContent>
                  <p data-test="login-heading" style={{textAlign:"center",fontWeight:"500",fontSize:"20px"}}>Login Here</p>
                  <div  data-test="login-loginId">
                  <TextField
                    style={{width:"100%"}}
                    id="filled-name"
                    label="Email Id"
                    margin="normal"
                    variant="filled"
                    value={this.state.email}
                    onChange={(event)=>{this.setState({email:event.target.value})}}
                  />     
                  </div>
                  <TextField
                    data-test="login-password"
                    style={{width:"100%"}}
                    id="filled-name"
                    label="Login Password"
                    margin="normal"
                    variant="filled"
                    value={this.state.password}
                    onChange={(event)=>{this.setState({password:event.target.value})}}
                    type="password"
                  />
                  <FormControl variant="filled" style={{marginTop:"10px",width:"100%"}} >
                  <InputLabel  id="demo-simple-select-filled-label"  style={{color:"#3f51ab",fontSize:"20px",width:"100%"}}  shrink htmlFor="age-simple">User Role</InputLabel>
                        <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        style={{width:"100%"}}
                        value={this.state.role}
                        inputProps={{
                          name: 'semester',
                          id: 'age-simple',
                          style:{
                            color:"3f51ab",
                            width:"100%"
                          }
                        }}
                        onChange={this.updateRole}>
                        <MenuItem value="admin">Admin</MenuItem>
                        <MenuItem value="teacher">Teacher</MenuItem>
                        <MenuItem value="student">Student</MenuItem>
                      </Select>
                  </FormControl>
                </CardContent>
                <CardActions>
                <LoginContext.Consumer>
                  {(context)=>(
                <Button variant="contained" data-test="login-button"  onClick={()=>{this.login(context)}} style={{display:"block",margin:"0 auto"}} color="primary" >Login</Button>
                )}
                </LoginContext.Consumer>
  
                </CardActions>
              </Card>  
              )
            }
            </div>
          </div>
        )
        
    }
}
