import React, { Component } from "react";
import axios from "axios";
import {RedditTextField} from "../../FormElements/GeneralInput";
import {inputArrayFields} from "./ADDSTUDENTMANUALDATA";
import {selectArrayFields} from "./ADDSTUDENTMANUALDATA";
import {dateArrayField} from "./ADDSTUDENTMANUALDATA";
import backendDetails from "../../../config/backendConnectivity";
import "../Manual.css"
import {GeneralButton} from "../../FormElements/GeneralButton";
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
    console.log(backendDetails.baseUrl+"/students");
    axios.post(backendDetails.baseUrl+"/students", {
      ...this.state
      })
      .then(data => {
            alert("data uploaded successfully");
      })
      .catch(err => {
        console.log(this.state);
        alert("error");
        console.log("this is the following error", err);
      });
  };
  render() {
    return (
      <div className="pageDimensions">
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
      dateArrayField.map(dateElement=>{
        return(
          <RedditTextField
              onChange={(e)=>{this.onChange(e,dateElement.changeFields)}}
              label={dateElement.name}
              value={this.state[dateElement.changeFields]}
              defaultValue=""
              variant="filled"
              id="reddit-input"
              type="date"/>
            )
        }) 
      }
      {
        selectArrayFields.map(selectFields=>{
          return(
            <div className="form-group">
            <select className="form-control"   data-test="branch-input" onChange={(e)=>{this.onChange(e,selectFields.changeFields)}} >
            <option>{selectFields.name}</option>
            {
            selectFields.options.map(option=>{
              return(
                <option>{option}</option>
              )
            })
            }
            </select>
            </div>
          )
        })
      }

        <div data-test="submit-section" class="form-group input-block">
          <div style={{margin:"10px auto"}}>
          <GeneralButton text="Add Student" icon="cloud_upload" onClick={this.submitDetails}></GeneralButton>
          </div>
        </div>
      </div>
    )
  }
}
export default AddStudents;