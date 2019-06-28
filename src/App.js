import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Attendence from "./components/Attendence";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import headerComponent from "./components/Header";
import ManualData from "./components/ManualData";
import ExcelData from "./components/ExcelData";
import AddStudent from "./components/addStudentManually";
import AddTeacher from "./components/addTeachersManually";
import UpdateStudents from "./components/updateStudentsManually";
import UpdateTeachers from "./components/updateTeachersManually";
import DeleteTeacher from "./components/deleteteachers";
import DeleteStudents from "./components/deletestudents";
import AddSubject from "./components/AddSubject";
import deleteSubject from "./components/deleteSubject";

import { connect } from "react-redux";
import Login from "./components/Login";
import Signup from "./components/Signup";
class App extends Component {
  render() {
    return (
      <div className="App main-area">
        <div className="sidenav">
          <NavLink to="/upload/Add Students">Add Students</NavLink>
          <NavLink to="/upload/Update Students">Update Students</NavLink>
          <NavLink to="/upload/DeleteStudents">Delete Student</NavLink>
          <NavLink to="/upload/Add Teachers">Add Teachers</NavLink>
          <NavLink to="/upload/Update Teachers">Update Teachers</NavLink>
          <NavLink to="/upload/Delete teacher"> Delete Teachers</NavLink>
          <NavLink to="/upload/Add Subject">Add Subject</NavLink>
          <NavLink to="/upload/Delete Subject">Delete Subject</NavLink>
          <NavLink to="/upload/Upload Attendence">Upload Attendence</NavLink>
          <NavLink to="/signup">SignUp</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>

        <div className="main ml-3 mr-3">
          <Route path="/*/:header" component={headerComponent} />
          <div className="main2">
            <Route exact path="/upload/:header" component={Attendence} />
            <Route
              exact
              path="/manualEntry/Upload Attendence"
              component={ManualData}
            />
            <Route path="/excelEntry/:parameters" component={ExcelData} />
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
            {/* <Route path="/courses" component={Courses}/>
        <Route path="/teachers" component={Teachers}/>
        <Route path="/students" component={Students}/> */}
          </div>
        </div>
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
