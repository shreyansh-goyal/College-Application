import React, { Component } from "react";
import {RedditTextField} from "../../FormElements/GeneralInput.js";
import axios from "axios";
import {inputArrayField} from "./DELETESTUDENTMANUALDATA.js";
import backField from "../../../config/backendConnectivity";
class DeleteStudents extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      studentId:'',
      sId:''
    }
  }
  onChange(e,name) {
    this.setState({ [name]: e.target.value });
  }

  deleteStudent = () => {
    axios.get(backField.baseUrl+"/students?enrollmentNo="+this.state.studentId)
    .then(data=>{
      if(data.data.length>0)
      {
        console.log(data.data);
          this.setState({sid:data.data[0].id})
          axios.delete(
            backField.baseUrl+"/students/" +this.state.sid
          )
          .then(data => {
            console.log("data after fetching the enrollment number",data)
            alert("the given entry is deleted");
          })
          .catch(err => {
            alert("Some error occured",err);
            console.log("some error is occured", err);
          });
      }
      else 
      {
        alert("No such entry is present");
      }
    });
  }

  render() {
    return (
      <div>
        {
          inputArrayField.map(deleteField=>{
            return (
              <RedditTextField
              onChange={(e)=>{this.onChange(e,deleteField.changeField)}}
              label="Enrollment Number"
              defaultValue=""
              value={this.state.studentId}
              variant="filled"
              id="reddit-input"
              />
            )
          })
        }
        <div
          style={{ display: "flex", justifyContent: "center" }}
          class="form-group input-block"
        >
          <button data-test="delete student" className="btn btn-info" onClick={this.deleteStudent}>
            Delete Student
          </button>
        </div>
      </div>
    );
  }
}

export default DeleteStudents;
