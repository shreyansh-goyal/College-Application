import React, { Component } from "react";
import axios from "axios";
import {RedditTextField} from "../../FormElements/GeneralInput";
import {GeneralButton} from "../../FormElements/GeneralButton";
import {inputArrayField} from  "./UPDATETEACHERMANUALDATA";
import {stateData} from "./UPDATETEACHERMANUALDATA";
const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNTcxMDM4MTUyLCJleHAiOjE1NzM2MzAxNTJ9.seaqiuz0b4teCNbP9ZA1kOb50hugbYCBul26Zy1xjv4";
var config={
  headers: {'Authorization':"bearer " + token}
}
var bodyParameters={
  key:"value"
}
class AddTeachers extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      ...stateData
    }
  }
  onChange(e,name) {
    this.setState({ [name]: e.target.value });
  }
  findTeacher = () => {
    axios.get('http://18.190.25.34:1337/teachers/'+this.state.teacherId,config)
    .then(data=>{
      this.setState(
       ...data.data[0] 
      )
    })
  };
  updateTeacherDetails = () => {
    axios
      .put(
        `https://bpitconnect.herokuapp.com/teachers/${
          this.state.teacherId
        }`,
        this.state
      )
      .then(data => {
        console.log("I have updated the data",data);
        alert("Changes are updated");
      })
      .catch(err => {
        console.log("this have following error", err);
      });
  };
  render() {
    return (
      <div>
        <RedditTextField
        onChange={(e)=>{this.onChange(e,'teacherId')}}
        label='Teacher Id'
        defaultValue=""
        variant="filled"
        id="reddit-input"
        />        
        <div onClick={this.findTeacher} style={{margin:'10px auto'}} >
        <GeneralButton text="Find&nbsp;Teacher"  icon="cloud_upload" width="10vw"/>
        </div>
        <hr />
        {
          inputArrayField.map(textField=>{
            return(
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
        
        {/* <div class="form-group input-block">
          <label>Teacher Id</label>
          <input
            type="text"
            ref="teacherId"
            onChange={() => {
              this.setState(prevstate => {
                this.state.updateDetails.teacherId = this.refs.teacherId.value;
                return this.state;
              });
            }}
            placeholder={
              this.state.updateDetails
                ? this.state.updateDetails.teacherId
                : "TeacherId"
            }
            class="form-control"
          />
        </div>
        <div class="form-group input-block">
          <label>Name</label>
          <input
            type="text"
            ref="teacherName"
            onChange={() => {
              this.setState(prevstate => {
                this.state.updateDetails.teacherName = this.refs.teacherName.value;
                return this.state;
              });
            }}
            class="form-control"
            placeholder={
              this.state.updateDetails
                ? this.state.updateDetails.teacherName
                : "Enter Names"
            }
          />
        </div>
        <div class="form-group input-block">
          <label>Phone No</label>
          <input
            type="text"
            class="form-control"
            ref="teacherPhone"
            onChange={() => {
              this.setState(prevstate => {
                this.state.updateDetails.teacherPhone = this.refs.teacherPhone.value;
                return this.state;
              });
            }}
            placeholder={
              this.state.updateDetails
                ? this.state.updateDetails.teacherPhone
                : "Phone No"
            }
          />
        </div>
        <div class="form-group input-block">
          <label>Email Id</label>
          <input
            type="text"
            ref="teacherEmail"
            onChange={() => {
              this.setState(prevstate => {
                this.state.updateDetails.teacherEmail = this.refs.teacherEmail.value;
                return this.state;
              });
            }}
            placeholder={
              this.state.updateDetails
                ? this.state.updateDetails.teacherEmail
                : "EmailAddress"
            }
            class="form-control"
          />
        </div>
        <div class="form-group input-block">
          <label>Official Email Id</label>
          <input
            type="text"
            ref="officialEmailId"
            onChange={() => {
              this.setState(prevstate => {
                this.state.updateDetails.officialEmailId = this.refs.officialEmailId.value;
                return this.state;
              });
            }}
            placeholder={
              this.state.updateDetails
                ? this.state.updateDetails.officialEmailId
                : "Official EmailAddress"
            }
            class="form-control"
          />
        </div>
        <div class="form-group input-block">
          <label>Joining Date</label>
          <input
            type="text"
            ref="joiningDate"
            onChange={() => {
              this.setState(prevstate => {
                this.state.updateDetails.joiningDate = this.refs.joiningDate.value;
                return this.state;
              });
            }}
            placeholder={
              this.state.updateDetails
                ? this.state.updateDetails.teacherEmail
                : "Joining Date"
            }
            class="form-control"
          />
        </div> */}
        <div class="form-group input-block">
          <button className="btn btn-info" onClick={this.updateTeacherDetails}>
            Submit Teacher Details
          </button>
        </div>
      </div>
    );
  }
}
export default AddTeachers;
