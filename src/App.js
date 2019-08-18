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
import MainTable from "./components/FrontendTableHandling/Table";
import LoginPage from "./components/login/LoginPage"
class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      navlinkData:{
        admin:[
          {label:"Add Students",to:"/upload/Add Students"},
          {label:"Update Students",to:"/upload/Update Students"},
          {label:"Delete Student",to:"/upload/DeleteStudents"},
          {label:"Add Teachers",to:"/upload/Add Teachers"},
          {label:"Update Teachers",to:"/upload/Update Teachers"},
          {label:"Delete Teachers",to:"/upload/Delete teacher"},
          {label:"Elective Subjects",to:"/upload/ElectiveSubjects"},
          {label:"Delete Subject",to:"/upload/Delete Subject"},
          {label:"Analytics",to:"/analytics/upload/Analytics"}],
      teacher:[
        {label:"Upload Attendance",to:"/attendance/upload/Upload Attendence/teachers"},
        {label:"Elective Subjects",to:"/upload/ElectiveSubjects"}
      ],
      student:[
        {label:"Anaylze Attendance",to:"/attendance/upload/Analyse Attendance"}
      ]},
      role:"admin",
      loggedIn:false,
      signup:true,
      validationAddStudent:["libraryFine",	"rollNo","enrollmentNo","courseId",	"year","isDropped","aggregate","activeBacklogs","placed","tenPercentage",  "twelfthPercentage"],
      fieldAddStudent:["libraryFine",	"rollNo","enrollmentNo",	"courseId",	"year","section","group","studentName","fatherName","motherName","gender","dob","phoneNo","fatherPhoneNo","emailId","fatherEmailId","isDropped","dropReason","aggregate",	"activeBacklogs",	"placed"	,"companyName"	,"tenPercentage"	,"twelfthPercentage"		,"diploma",	"gap",	"enteranceRank"	,"resumeUrl"	,"blockedFromDrive","libraryId","semester"],
      validationUpdateStudent:["libraryFine",	"rollNo","enrollmentNo","courseId",	"year","isDropped","aggregate","activeBacklogs","placed","tenPercentage",  "twelfthPercentage"],
      fieldUpdateStudent:["libraryFine",	"rollNo","enrollmentNo",	"courseId",	"year","section","group","studentName","fatherName","motherName","gender","dob","phoneNo","fatherPhoneNo","emailId","fatherEmailId","isDropped","dropReason","aggregate",	"activeBacklogs",	"placed"	,"companyName"	,"tenPercentage"	,"twelfthPercentage"		,"diploma",	"gap",	"enteranceRank"	,"resumeUrl"	,"blockedFromDrive","libraryId","semester"],
      validationDeleteStudent:["id"],
      fieldDeleteStudent:["id"],
      fieldAddTeacher:["  teacherId","teacherName","teacherPhone","teacherEmail","officialEmailId","joiningDate"],
      validationAddTeacher:["teacherId"],
      routeData:[{path:"/upload/:header",component:Attendence},{path:"/attendance/upload/Analyse Attendance",component:Example},
      {path:"/manualEntry/Upload Attendence",component:ManualData},{path:"/analytics/upload/Analytics",component:analyticsWrapper},
      {path:"/attendance/upload/Upload Attendence/teachers",component:uploadAttendanceByTeachers},{path:"/excelEntry/ElectiveSubjects",component:ElectiveSubjectExcel},
      {path:"/manualEntry/ElectiveSubjects",component:electiveManual},{path:"/manualEntry/Add Students",component:AddStudent},
      {path:"/manualEntry/Update Students",component:UpdateStudents},{path:"/attendance/upload/Upload Attendence",component:attendanceConf},
      {path:"/manualEntry/DeleteStudents",component:DeleteStudents},{path:"/manualEntry/Add Teachers",component:AddTeacher}
      ,{path:"/manualEntry/Update Teachers",component:UpdateTeachers},{path:"/manualEntry/Delete Teacher",component:DeleteTeacher},
      {path:"/manualEntry/Add Subject",component:AddSubject},{path:"/manualEntry/Delete Subject",component:deleteSubject}    ]  
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
              {
                this.state.navlinkData.admin.map(link=>{
                   {/* <NavLink to="/attendance/upload/Upload Attendence">Upload Attendence</NavLink> */}
                  return(
                    <NavLink to={link.to}>{link.label}</NavLink>    
                  )
                })
              }
            </div>  
              ):("")
            }
            {
              this.state.role=="student"?(
                this.state.navlinkData.student.map(link=>{
                {
                 return(
                   <NavLink to={link.to}>{link.label}</NavLink>    
                 )
                }})
              ):("")
            }
            {
              this.state.role=="teacher"?
              (
                <div>
                  {
                    this.state.navlinkData.teacher.map(link=>{
                    {
                    return(
                      <NavLink to={link.to}>{link.label}</NavLink>    
                    )
                    }})       
                  }
                </div>
              ):
              ("")
            }
          </div>
  
          <div >
            <attendanceConf />
  
            <div className="main2" style={{ margin: 0, style: 0,backgroundColor:"#9b9898",height:"100%" }}>
              {
              this.state.routeData.map(route=>{
                return(
                  <Route 
                  exact
                  path={route.path}
                  component={route.component}
                  />
                )
              })
            }
              <Route 
              exact
              path="/excelEntry/Add Students"
              component={() => <MainTable api="/students" method="POST" message="Add Students" validation={this.state.validationAddStudent} fields={this.state.fieldAddStudent } />}
              />
              <Route 
              exact
              path="/excelEntry/Update Students"
              component={() => <MainTable api="/students" method="PUT" message="Update Students" validation={this.state.validationAddStudent} fields={this.state.fieldAddStudent } />}
              />
              <Route 
              exact
              path="/excelEntry/DeleteStudents"
              component={() => <MainTable api="/students" method="DELETE" message="Delete Students" validation={this.state.validationDeleteStudent} fields={this.state.fieldDeleteStudent } />}
              />
              <Route 
              exact
              path="/excelEntry/Add Teachers"
              component={() => <MainTable api="​/teachers" method="POST"  message="Add Teachers" validation={this.state.validationAddTeacher} fields={this.state.fieldAddTeacher } />}
              />
              <Route 
              exact
              path="/excelEntry/Update Teachers"
              component={() => <MainTable api="​/teachers" method="PUT" message="Update Teachers" validation={this.state.validationAddTeacher} fields={this.state.fieldAddTeacher } />}
              />
              <Route 
              exact
              path="/excelEntry/Delete teacher"
              component={() => <MainTable api="​/teachers" method="DELETE" message="Delete Teachers" validation={this.state.validationAddTeacher} fields={this.state.fieldAddTeacher } />}
              />
              <Route 
              exact
              path="/excelEntry/Add Subject"
              component={() => <MainTable api="/subjects" method="POST" message="Add Subjects" validation={this.state.validationAddTeacher} fields={this.state.fieldAddTeacher } />}
              />
              <Route 
              exact
              path="/excelEntry/Delete Subject"
              component={() => <MainTable api="/subjects" method="DELETE" validation={this.state.validationAddTeacher} fields={this.state.fieldAddTeacher } />}
              />
            </div>
          </div>
        </div>  
        ):(
          <LoginPage signup={this.signup}/>
          )
      }
      </div>
    );
  }
}
export default App;
