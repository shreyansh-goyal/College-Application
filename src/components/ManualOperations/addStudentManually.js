import React, { Component } from "react";
import axios from "axios";
import {RedditTextField} from "../FormElements/GeneralInput";
import {inputArrayFields} from "./ADDSTUDENTMANUALDATA";
import {selectArrayFields} from "./ADDSTUDENTMANUALDATA";
const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTcwNzgxODgyLCJleHAiOjE1NzMzNzM4ODJ9.ptamzLKAqXBT8v-8k-eIZ0j2maGjiIqK--0iW6n5vaw";
var config={
  headers: {'Authorization':"bearer " + token}
}
var bodyParameters={
  key:"value"
}
class AddStudents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enrollmentNo: "",
      year: "",
      section: "",
      group: "",
      studentName: "",
      fatherName: "",
      motherName: "",
      phoneNo: "",
      fatherPhoneNo: "",
      emailId: "",
      fatherEmailId: "",
      branch:'',
      rollNo:'',
      courseId: '',
      semester:'',
      gender: '',
      dob:'',
      aggregate:'' ,
      activeBacklogs:'' ,
      placed:'' ,
      companyName:'',
      tenPercentage:'',
      twelfthPercentage:'',
      diploma: '',
      gap: '',
      enteranceRank:'' ,
      resumeUrl: '',
      blockedFromDrive:'' ,
      libraryId:'' ,
      libraryFine:'' 
    };
  }

  showTheValue=(e)=>
  {
    console.log(e.target.value);
  }
  onChange(e,name) {
    this.setState({ [name]: e.target.value });
  }

  submitDetails = () => {
    axios.post("http://18.190.25.34:1337/students",bodyParameters,config, {
      ...this.state
      })
      .then(data => {
        console.log("data posted successfully");
      })
      .catch(err => {
        console.log(this.state);
        console.log("this is the following error", err);
      });
  };
  render() {
    return (
      <div style={{overflowY:"scroll",height:"650px"}}>
      {
        inputArrayFields.map(textField=>{
        return (
          <RedditTextField
          onChange={(e)=>{this.onChange(e,textField.changeFields)}}
          label={textField.name}
          defaultValue=""
          variant="filled"
          id="reddit-input"
          />
        )
        })
      }
      {
        selectArrayFields.map(selectFields=>{
          return(
            <select style={{width:"95%",margin:"20px auto",height:"4vw"}}  data-test="branch-input" onChange={(e)=>{this.onChange(e,selectFields.changeFields)}} class="form-control">
            <option>{selectFields.name}</option>
            {
            selectFields.options.map(option=>{
              return(
                <option>{option}</option>
              )
            })
            }
            </select>
          )
        })
      }

        <div data-test="submit-section" class="form-group input-block">
          <button data-test="submit-button" className="btn btn-info " onClick={this.submitDetails}>
            Submit Student
          </button>
        </div>
      </div>
    );
  }
}
export default AddStudents;