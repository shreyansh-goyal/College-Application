import React, { Component } from "react";
import "./App.css";
import Attendence from "./components/ComponentOption/Attendence";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import ManualData from "./components/ManualData";
import AddStudent from "./components/ManualOperations/Students/addStudentManually";
import AddTeacher from "./components/ManualOperations/Teachers/addTeachersManually";
import UpdateStudents from "./components/ManualOperations/Students/updateStudentsManually";
import UpdateTeachers from "./components/ManualOperations/Teachers/updateTeachersManually";
import DeleteTeacher from "./components/ManualOperations/Teachers/deleteteachers";
import DeleteStudents from "./components/ManualOperations/Students/deletestudents";
import AddSubject from "./components/AddSubject";
import deleteSubject from "./components/ManualOperations/Elective Subjects/deleteSubject";
import attendanceConf from "./components/AttendenceIssue";
import Login from "./components/Login";
import Signup from "./components/Signup";
import analyticsWrapper from "./components/Analytics/AnalyticsWrapper";
import ElectiveSubjectExcel from "./components/ElectiveSubjects";
import electiveManual from "./components/ManualOperations/Elective Subjects/ElectiveSubjectManually";
import uploadAttendanceByTeachers from "./components/Attendance/uploadAttendanceTeachers";
import AnalyseAttendance from "./components/Attendance/AnalyseAttendance"
import MainTable from "./components/FrontendTableHandling/Table";
import LoginPage from "./components/login/LoginPage";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navlinkData: {
        admin: [
          { label: "Add Students", to: "/upload/Add Students" },
          { label: "Update Students", to: "/upload/Update Students" },
          { label: "Delete Student", to: "/upload/Delete Students" },
          { label: "Add Teachers", to: "/upload/Add Teachers" },
          { label: "Update Teachers", to: "/upload/Update Teachers" },
          { label: "Delete Teachers", to: "/upload/Delete Teachers" },
          { label: "Add Subjects", to: "/upload/Add Subjects" },
          { label: "Delete Subject", to: "/upload/Delete Subject" },
          { label: "Elective Subjects", to: "/upload/Elective Subjects" },
          { label: "Analytics", to: "/analytics/upload/Analytics" }],
        teacher: [
          { label: "Upload Attendance", to: "/attendance/upload/Upload Attendence/teachers" },
          { label: "Elective Subjects", to: "/upload/Elective Subjects" }
        ],
        student: [
          { label: "Anaylze Attendance", to: "/attendance/upload/Analyse Attendance" }
        ]
      },
      role: "",
      loggedIn: false,
      signup: false,
      validationAddStudent: ["libraryFine", "rollNo", "enrollmentNo", "courseId", "year", "isDropped", "aggregate", "activeBacklogs", "placed", "tenPercentage", "twelfthPercentage"],
      fieldAddStudent: ["libraryFine", "rollNo", "enrollmentNo", "courseId", "year", "section", "group", "studentName", "fatherName", "motherName", "gender", "dob", "phoneNo", "fatherPhoneNo", "emailId", "fatherEmailId", "isDropped", "dropReason", "aggregate", "activeBacklogs", "placed", "companyName", "tenPercentage", "twelfthPercentage", "diploma", "gap", "enteranceRank", "resumeUrl", "blockedFromDrive", "libraryId", "semester", "branch"],
      validationUpdateStudent: ["libraryFine", "rollNo", "enrollmentNo", "courseId", "year", "isDropped", "aggregate", "activeBacklogs", "placed", "tenPercentage", "twelfthPercentage"],
      fieldUpdateStudent: ["libraryFine", "rollNo", "enrollmentNo", "courseId", "year", "section", "group", "studentName", "fatherName", "motherName", "gender", "dob", "phoneNo", "fatherPhoneNo", "emailId", "fatherEmailId", "isDropped", "dropReason", "aggregate", "activeBacklogs", "placed", "companyName", "tenPercentage", "twelfthPercentage", "diploma", "gap", "enteranceRank", "resumeUrl", "blockedFromDrive", "libraryId", "semester"],
      validationDeleteStudent: ["id"],
      fieldDeleteStudent: ["id"],
      fieldAddTeacher: ["teacherId", "teacherName", "teacherPhone", "teacherEmail", "officialEmailId", "joiningDate"],
      validationAddTeacher: ["teacherId"],
      fieldElectiveSubject: ["subjectId", "enrollmentNo"],
      validationElectiveSubject: [],
      validationAddSubject: ["courseId", "semester", "lab", "credit", "isElective", "isTaught", "isMandatory"],
      fieldAddSubject: ["subjectId", "subjectCode", "courseId", "semester", "subjectName", "lab", "credit", "isElective", "isTaught", "isMandatory", "recommandedBook1", "recommandedBook2", "teacherId"],
      routeData: [{ path: "/upload/:header", component: Attendence }, { path: "/attendance/upload/Analyse Attendance", component: AnalyseAttendance },
      { path: "/manualEntry/Upload Attendence", component: ManualData }, { path: "/analytics/upload/Analytics", component: analyticsWrapper },
      { path: "/attendance/upload/Upload Attendence/teachers", component: uploadAttendanceByTeachers },
      { path: "/manualEntry/Add Subjects", component: electiveManual }, { path: "/manualEntry/Add Students", component: AddStudent },
      { path: "/manualEntry/Update Students", component: UpdateStudents }, { path: "/attendance/upload/Upload Attendence", component: attendanceConf },
      { path: "/manualEntry/Delete Students", component: DeleteStudents }, { path: "/manualEntry/Add Teachers", component: AddTeacher },
      { path: "/manualEntry/Update Teachers", component: UpdateTeachers }, { path: "/manualEntry/Delete Teachers", component: DeleteTeacher },
      { path: "/manualEntry/Add Subject", component: AddSubject }, { path: "/manualEntry/Delete Subject", component: deleteSubject }]
    }
  }
  // componentDidMount()
  // {
  //   if(localStorage.getItem("role")=="teacher")
  //   {

  //   }
  //   else if(localStorage.getItem("role")=="adm")
  //   {

  //   }
  //   else if(localStorage.getItem("role")=="teacher")
  //   {

  //   }
  // }
  render() {
    return (
      <MyProvider>
        <div>
          {
            this.state.loggedIn ? (
              <div data-test="main-app-page" className="App main-area">
                <div className="sidenav">
                  {
                    this.state.role == "admin" ? (
                      <div data-test="admin">
                        {
                          this.state.navlinkData.admin.map(link => {
                            return (
                              <NavLink data-test="admin-link" to={link.to}>{link.label}</NavLink>
                            )
                          })
                        }
                      </div>
                    ) : ("")
                  }
                  {
                    this.state.role == "student" ? (
                      <div data-test="student">
                        {
                          this.state.navlinkData.student.map(link => {
                            {
                              return (
                                <NavLink data-test="student-link" to={link.to}>{link.label}</NavLink>
                              )
                            }
                          })
                        }
                      </div>
                    ) : ("")
                  }
                  {
                    this.state.role == "teacher" ?
                      (
                        <div data-test="teacher">
                          {
                            this.state.navlinkData.teacher.map(link => {
                              {
                                return (
                                  <NavLink data-test="teacher-link" to={link.to}>{link.label}</NavLink>
                                )
                              }
                            })
                          }
                        </div>
                      ) :
                      ("")
                  }
                </div>

                <div >
                  <attendanceConf />

                  <div className="main2" style={{ margin: 0, style: 0, backgroundColor: "#9b9898", height: "100%" }}>
                    {
                      this.state.routeData.map(route => {
                        return (
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
                      component={() => <MainTable  api="/students" method="POST" message="Add Students" validation={this.state.validationAddStudent} fields={this.state.fieldAddStudent} />}
                    />
                    <Route
                      exact
                      path="/excelEntry/Update Students"
                      component={() => <MainTable api="/students" method="PUT" message="Update Students" validation={this.state.validationAddStudent} fields={this.state.fieldAddStudent} />}
                    />
                    <Route
                      path="/excelEntry/Delete Students"
                      exact
                      component={() => <MainTable api="/students" method="DELETE" message="Delete Students" validation={this.state.validationDeleteStudent} fields={this.state.fieldDeleteStudent} />}
                    />
                    <Route
                      exact
                      path="/excelEntry/Add Teachers"
                      component={() => <MainTable api="/teachers" method="POST" message="Add Teachers" validation={this.state.validationAddTeacher} fields={this.state.fieldAddTeacher} />}
                    />
                    <Route
                      exact
                      path="/excelEntry/Update Teachers"
                      component={() => <MainTable api="​/teachers" method="PUT" message="Update Teachers" validation={this.state.validationAddTeacher} fields={this.state.fieldAddTeacher} />}
                    />
                    <Route
                      exact
                      path="/excelEntry/Delete Teachers"
                      component={() => <MainTable api="​/teachers" method="DELETE" message="Delete Teachers" validation={this.state.validationAddTeacher} fields={this.state.fieldAddTeacher} />}
                    />
                    <Route
                      exact
                      path="/excelEntry/Add Subjects"
                      component={() => <MainTable api="/subjects" method="POST" message="Add Subjects" validation={this.state.validationAddSubject} fields={this.state.fieldAddSubject} />}
                    />
                    <Route
                      exact
                      path="/excelEntry/Delete Subject"
                      component={() => <MainTable api="/subjects" method="DELETE" validation={this.state.validationAddTeacher} fields={this.state.fieldAddTeacher} />}
                    />
                    <Route
                      exact
                      path="/excelEntry/Elective Subjects"
                      component={() => <MainTable api="/electivesubjects" message="Elective Subjects" method="POST" validation={this.state.validationElectiveSubject} fields={this.state.fieldElectiveSubject} />}
                    />
                  </div>
                </div>
              </div>
            ) : (
                <LoginPage data-test="login-page"  changeView={(role,url) => { this.setState({ loggedIn: true,role })}} signup={this.signup} />
              )
          }
        </div>
      </MyProvider>
    );
  }
}
export default App;
export const LoginContext = React.createContext();
export class MyProvider extends React.Component {
  state = {
    id: undefined,
    role: undefined
  }
  changeState = (role, id) => {
    this.setState({
      id,
      role
    })
  }
  render() {
    return (
      <LoginContext.Provider value={{ state: this.state, changeState: this.changeState }}>
        {this.props.children}
      </LoginContext.Provider>
    )
  }
}