import React, { Component } from "react";
import {RedditTextField} from "../../FormElements/GeneralInput";
import {inputArrayField} from "./ADDTEACHERMANUALDATA";
import {stateData} from './ADDTEACHERMANUALDATA';
import {dateData} from "./ADDTEACHERMANUALDATA";
import {GeneralButton} from "../../FormElements/GeneralButton";
import axios from "axios";

class AddTeachers extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    ...stateData
  };
  onChange(e,name) {
    this.setState({ [name]: e.target.value });
  }
  submitDetails = () => {
    console.log("hello I am shreyansh goyal");
    axios
      .post(`http://18.190.25.34:1337/teachers`, this.state)
      .then(data => {
        console.log("post request is successful");
        alert("Teacher is added successfully");
      })
      .catch(err => {
        console.log("this error is occured", err);
      });
  };
  render() {
    return(
      <div>
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
        {
          dateData.map(textField=>{
            return(
              <RedditTextField
              onChange={(e)=>{this.onChange(e,textField.changeFields)}}
              label={textField.name}
              defaultValue=""
              variant="filled"
              id="reddit-input"
              type="date"
              />
            )
          })
        }
        <div style={{margin:"10px auto"}} onClick={this.submitDetails}>
        <GeneralButton text="Add&nbsp;Teacher"  icon="cloud_upload" width="10vw"/>
        </div>
      </div>
    )
      // {
      //   inputArrayField.map()
      // }
      // <div>
      //   <div class="form-group input-block">
      //     <label>Teacher Id</label>
      //     <input
      //       type="text"
      //       ref="teacherId"
      //       onChange={this.setState(() => {
      //         this.state.teacher.teacherId = this.refs.teacherId.value;
      //       })}
      //       class="form-control"
      //       placeholder="Enter Teacher Id"
      //     />
      //   </div>
      //   <div class="form-group input-block">
      //     <label>Name</label>
      //     <input
      //       type="text"
      //       ref="teacherName"
      //       onChange={this.setState(() => {
      //         this.state.teacher.teacherName = this.refs.teacherName.value;
      //       })}
      //       class="form-control"
      //       placeholder="Enter Name"
      //     />
      //   </div>
      //   <div class="form-group input-block">
      //     <label>Phone No</label>
      //     <input
      //       type="text"
      //       ref="teacherPhone"
      //       onChange={this.setState(() => {
      //         this.state.teacher.teacherPhone = this.refs.teacherPhone.value;
      //       })}
      //       class="form-control"
      //       placeholder="Enter Phone no"
      //     />
      //   </div>
      //   <div class="form-group input-block">
      //     <label>Email Id</label>
      //     <input
      //       type="text"
      //       ref="teacherEmail"
      //       onChange={this.setState(() => {
      //         this.state.teacher.teacherEmail = this.refs.teacherEmail.value;
      //       })}
      //       class="form-control"
      //       placeholder="Enter Email Id"
      //     />
      //   </div>
      //   <div class="form-group input-block">
      //     <label>Official Email Id</label>
      //     <input
      //       type="text"
      //       ref="officialEmailId"
      //       onChange={this.setState(() => {
      //         this.state.teacher.officialEmailId = this.refs.officialEmailId.value;
      //       })}
      //       placeholder="Official email id"
      //       class="form-control"
      //     />
      //   </div>
      //   <div class="form-group input-block">
      //     <label>Joining Date</label>
      //     <input
      //       type="date"
      //       ref="joiningDate"
      //       onChange={this.setState(() => {
      //         this.state.teacher.joiningDate = this.refs.joiningDate.value;
      //       })}
      //       placeholder="Joning date"
      //       class="form-control"
      //     />
      //   </div>

    
  }
}
export default AddTeachers;