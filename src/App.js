import React, { Component } from "react";
import "./App.css";
import Attendence from "./components/Attendence";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import ManualData from "./components/ManualData";
import AddStudent from "./components/addStudentManually";
import AddTeacher from "./components/addTeachersManually";
import UpdateStudents from "./components/updateStudentsManually";
import UpdateTeachers from "./components/updateTeachersManually";
import DeleteTeacher from "./components/deleteteachers";
import DeleteStudents from "./components/deletestudents";
import AddSubject from "./components/AddSubject";
import deleteSubject from "./components/deleteSubject";
import attendanceConf from "./components/AttendenceIssue";
import Login from "./components/Login";
import Signup from "./components/Signup";
import analyticsWrapper from "./components/Analytics/AnalyticsWrapper";
import ElectiveSubjectExcel from "./components/Elective Subjects/ElectiveSubjects"; 
import electiveManual from "./components/Elective Subjects/ElectiveSubjectManually";
import uploadAttendanceByTeachers from "./components/Attendance/uploadAttendanceTeachers";
import Example from "./components/Attendance/AnalyseAttendance"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      role:"admin",
      loggedIn:true,
      signup:true
    }
  }
  render() {
    return (
    <div>
      {
        this.state.loggedIn?(
          <div className="App main-area">
          {/* <analyticsController /> */}
          <div className="sidenav">
            {
              this.state.role=="admin"?(
            <div>
                <NavLink to="/upload/Add Students">Add Students</NavLink>
                <NavLink to="/upload/Update Students">Update Students</NavLink>
                <NavLink to="/upload/DeleteStudents">Delete Student</NavLink>
                <NavLink to="/upload/Add Teachers">Add Teachers</NavLink>
                <NavLink to="/upload/Update Teachers">Update Teachers</NavLink>
                <NavLink to="/upload/Delete teacher"> Delete Teachers</NavLink>
                <NavLink to="/upload/Add Subject">Add Subject</NavLink>
                <NavLink to="/upload/Delete Subject">Delete Subject</NavLink>
                <NavLink to="/attendance/upload/Upload Attendence">Upload Attendence</NavLink>
                <NavLink to="/analytics/upload/Analytics">Analytics</NavLink>
            </div>  
              ):(
            <div>
            </div>
              )
            }
            {
              this.state.role=="student"?(
                <NavLink to="/attendance/upload/Analyse Attendance">Analyse Attendance</NavLink>
    
              ):(
              <div>
  
              </div>
              )
            }
            {
              this.state.role=="teacher"?
              (
                <div>
                    <NavLink style={{margin:"10px 0px 20px 0px"}} to="/attendance/upload/Upload Attendence/teachers">Upload Attendence for Teachers</NavLink>
                    <NavLink to="/upload/ElectiveSubjects">Elective Subjects</NavLink>          
                </div>
              ):
              (
                <div>
                </div>
              )
            }
          </div>
  
          <div >
            <attendanceConf />
  
            <div className="main2" style={{ margin: 0, style: 0,backgroundColor:"#9b9898",height:"100%" }}>
              <Route 
              exact
              path="/upload/:header"
              component={Attendence}
              />
              <Route 
              exact
              path="/excelEntry/Add Students"
              component={Attendence}
              />
              <Route 
              exact
              path="/attendance/upload/Analyse Attendance"
              component={Example}
              />
              <Route
                exact
                path="/manualEntry/Upload Attendence"
                component={ManualData}
              />
              <Route
                exact
                path="/analytics/upload/Analytics"
                component={analyticsWrapper}
              />
              <Route
                exact
                path="/attendance/upload/Upload Attendence"
                component={attendanceConf}
              />
              <Route
                exact
                path="/attendance/upload/Upload Attendence/teachers"
                component={uploadAttendanceByTeachers}
              />
              <Route
              exact
              path="/excelEntry/ElectiveSubjects"
              component={ElectiveSubjectExcel}
              />
              <Route
              exact
              path="/manualEntry/ElectiveSubjects"
              component={electiveManual}
              />         
              <Route
                exact
                path="/manualEntry/Add Students"
                component={AddStudent}
              />
              <Route
                exact
                path="/manualEntry/Update Students"
                component={UpdateStudents}
              />
              <Route
                exact
                path="/manualEntry/DeleteStudents"
                component={DeleteStudents}
              />
              <Route
                exact
                path="/manualEntry/Add Teachers"
                component={AddTeacher}
              />
              <Route
                exact
                path="/manualEntry/Update Teachers"
                component={UpdateTeachers}
              />
              <Route
                exact
                path="/manualEntry/Delete Teacher"
                component={DeleteTeacher}
              />
              <Route
                exact
                path="/manualEntry/Add Subject"
                component={AddSubject}
              />
              <Route
                exact
                path="/manualEntry/Delete Subject"
                component={deleteSubject}
              />
  
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
            </div>
          </div>
        </div>  
        ):(
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
              this.state.signup?(
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
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return {};
}
function dispatchStateToProps(dispatch) {
  return {
    selectRecipe: "dispatch this data",
    selectShreyansh: "dispatch shreyansh"
  };
}
export default App;
