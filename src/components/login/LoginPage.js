import React,{Component} from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
export default class LoginPage extends Component{
    render()
    {
        return(
            <div className="loginPage">
            <div style={{height:"100px",display:"flex",justifyContent:"space-between",alignItems:"flex-end"}}>
              <div style={{display:"flex"}}>
              <img style={{height:"35px",margin:"20px"}} src="http://www.bpitindia.com/images/logo.png"></img>
              <h3 style={{color:"#44469e",fontWeight:400,fontSize:"30px"}}>BHAGWAN PARSHURAM INSTITUTE OF TECHNOLOGY</h3>
              </div>
              <div style={{display:"flex",width:"25vw",alignItems:"flex-end"}}>
              <img style={{height:"100px"}} src="http://www.bpitindia.com/images/brahim-smaaj.png"></img>
              <p style={{fontSize:"20px",color:"#ee1c26"}} >BHARTIYA BRAHMIN CHARITABLE TRUST</p>  
              </div>
            </div>
            <div className="loginBackground">
            {
              this.props.signup?(
                <Card style={{width:"40%",margin:"0 auto"}}>
                <CardContent>
                  <p style={{textAlign:"center",fontWeight:"500",fontSize:"20px"}}>Signup Page</p>
                  <TextField
                    style={{width:"100%"}}
                    id="filled-name"
                    label="Enrollment Number"
                    margin="normal"
                    variant="filled"
                  />
                  <TextField
                    style={{width:"100%"}}
                    id="filled-name"
                    label="Login Password"
                    margin="normal"
                    variant="filled"
                  />
                </CardContent>
                <CardActions>
                <Button variant="contained" style={{display:"block",margin:"0 auto"}} color="primary" >Sign In</Button>
                </CardActions>
              </Card>
                ):(
                <Card style={{width:"40%",margin:"0 auto"}}>
                <CardContent>
                  <p style={{textAlign:"center",fontWeight:"500",fontSize:"20px"}}>Login Page</p>
                  <TextField
                    style={{width:"100%"}}
                    id="filled-name"
                    label="Login Id"
                    margin="normal"
                    variant="filled"
                  />
                  <TextField
                    style={{width:"100%"}}
                    id="filled-name"
                    label="Login Password"
                    margin="normal"
                    variant="filled"
                  />
                </CardContent>
                <CardActions>
                <Button variant="contained" style={{display:"block",margin:"0 auto"}} color="primary" >Login</Button>
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
