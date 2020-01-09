import React, { Component } from "react";
import axios from "axios";
import {RedditTextField} from "../../FormElements/GeneralInput";
import {GeneralButton} from "../../FormElements/GeneralButton";
import {inputArrayField} from  "./UPDATETEACHERMANUALDATA";
import {stateData} from "./UPDATETEACHERMANUALDATA";
import backField from "../../../config/backendConnectivity";
import "../Manual.css";
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
   
    axios.get(backField.baseUrl+'/teachers?teacherId='+this.state.teacherId)
    .then(data=>{
      console.log(data);
      if(data.data.length>0)
      {
        console.log("I am in the data.length>1");
        this.setState(
          {
            ...data.data[0],
          }
        )
      }
      console.log(this.state);
    })
  };
  updateTeacherDetails = () => {
    let obj={
      teacherId:this.state.teacherId,
      teacherName:this.state.teacherName,
      teacherPhone:this.state.teacherPhone,
      teacherEmail:this.state.teacherEmail,
      officialEmailId:this.state.officialEmailId,
      joiningDate:this.state.joiningDate
    }

    axios
      .put(
        `${backField.baseUrl}/teachers/${
          this.state.id
        }`,
        obj
      )
      .then(data => {
          alert("done with the update");
          this.setState({
            ...stateData
          })
      })
      .catch(err => {
        console.log("this have following error", err);
      });
  };
  render() {
    return (
      <div className="pageDimensions">
        <RedditTextField
        onChange={(e)=>{this.onChange(e,'teacherId')}}
        label='Teacher Id'
        value={this.state.teacherId}
        defaultValue={this.state.teacherId}
        variant="filled"
        id="reddit-input"
        />        
        <div onClick={this.findTeacher} style={{margin:'10px auto'}} >
        <GeneralButton text="Find&nbsp;Teacher"  icon="cloud_upload" />
        </div>
        <hr />
        {
          inputArrayField.map(textField=>{
            return(
              <RedditTextField
              onChange={(e)=>{this.onChange(e,textField.changeField)}}
              label={textField.name}
              defaultValue={this.state.teacherId}
              value={this.state[textField.changeField]}
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
        <div class="form-group input-block" >
          <div style={{margin:"10px auto"}}>
          <GeneralButton  text="Upload&nbsp;Teacher"  icon="cloud_upload" onClick={this.updateTeacherDetails}>
          </GeneralButton>
          </div>
        </div>
      </div>
    );
  }
}
export default AddTeachers;
