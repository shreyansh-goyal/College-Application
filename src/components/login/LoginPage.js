import React,{Component} from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from "axios";
export default class LoginPage extends Component{
    constructor(props)
    {
      super(props);
      this.state={
        loginId:"",
        password:"",
        email:"",
        blocked:false
      }
    }
    login= function(){
      console.log("called");
       axios.post("http://18.190.25.34:1337/auth/local/register",{
        username:this.state.loginId,
        password:this.state.password,
        email:this.state.email,
        blocked:this.state.blocked

      }).then(data=>{
        console.log(data);
        localStorage.setItem('token',data.data.jwt);
        this.props.changeView();
      })
      .catch(err=>{
        console.log(this.state);
        console.log(err);
      })

    }
    render()
    {
        return(
            <div className="loginPage">
            <div data-test="header" style={{height:"100px",display:"flex",justifyContent:"space-between",alignItems:"flex-end"}}>
              <div style={{display:"flex"}}>
              <img data-test="logo" style={{height:"35px",margin:"20px"}} src="http://www.bpitindia.com/images/logo.png"></img>
              <h3  data-test="heading" style={{color:"#44469e",fontWeight:400,fontSize:"30px"}}>BHAGWAN PARSHURAM INSTITUTE OF TECHNOLOGY</h3>
              </div>
              <div data-test="side-logo" style={{display:"flex",width:"25vw",alignItems:"flex-end"}}>
              <img style={{height:"100px"}} src="http://www.bpitindia.com/images/brahim-smaaj.png"></img>
              <p style={{fontSize:"20px",color:"#ee1c26"}} >BHARTIYA BRAHMIN CHARITABLE TRUST</p>  
              </div>
            </div>
            <div className="loginBackground" data-test="login-background">
            {
              this.props.signup?(
                <Card data-test="signup-card" style={{width:"40%",margin:"0 auto"}}>
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
                <Card style={{width:"40%",margin:"0 auto"}} data-test="login-card">
                <CardContent>
                  <p data-test="login-heading" style={{textAlign:"center",fontWeight:"500",fontSize:"20px"}}>Login Here</p>
                  <div  data-test="login-loginId">
                  <TextField
                    data-test="login-username"
                    style={{width:"100%"}}
                    id="filled-name"
                    label="Login Id"
                    margin="normal"
                    variant="filled"
                    value={this.state.loginId}
                    onChange={(event)=>{this.setState({loginId:event.target.value})}}
                  />
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
                </CardContent>
                <CardActions>
                <Button variant="contained" data-test="login-button"  onClick={this.login.bind(this)} style={{display:"block",margin:"0 auto"}} color="primary" >Login</Button>
                </CardActions>
              </Card>  
              )
            }
            </div>
            {/* <img src="http://www.bpitindia.com/images/slide-2.jpg" style={{width:"100%",height:"550px"}}></img> */}
          </div>
        )
        
    }
}
