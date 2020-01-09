import React, { Component } from "react";
import axios from "axios";
import {inputArrayField} from './DELETETEACHERSMANUALDATA';
import {RedditTextField} from '../../FormElements/GeneralInput';
import {GeneralButton} from "../../FormElements/GeneralButton";
import backendConfig from "../../../config/backendConnectivity";
class DeleteTeachers extends Component {
  constructor(props)
  {
    super(props);
    this.state={}
  }
  onChange(e,name) {
    this.setState({ [name]: e.target.value });
  }
  deleteTeacher = () => {
    axios
      .get(
        backendConfig.baseUrl+"/teachers?teacherId=" +
          this.state.teacherId
      )
      .then(data => {
        if(data.data.length)
        {
          console.log(data.data[0])
          axios
          .delete(
            backendConfig.baseUrl+"/teachers/"+data.data[0].id
          )
          .then(data => {
            alert("the given entry is deleted");
          })
          .catch(err => {
            alert("error");
            console.log("some error is occured", err);
          });
        }
        else
        {
          alert("Not Found");
        }
      })
      .catch(err => {
        alert("Error")
        console.log("some error is occured", err);
      });
  };
  render() {
    return (
      <div>
        {
          inputArrayField.map(deleteField=>{
            return (
              <RedditTextField
              onChange={(e)=>{this.onChange(e,deleteField.changeField)}}
              label={deleteField.name}
              defaultValue=""
              variant="filled"
              id="reddit-input"
              />
            )
          })
        }

          <div onClick={this.deleteTeacher} style={{margin:'10px auto'}}>
          <GeneralButton text="Delete&nbsp;Teacher"  icon="delete" />
          </div>
        </div>
    );
  }
}

export default DeleteTeachers;
