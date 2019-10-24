import React, { Component } from "react";
import axios from "axios";
import {inputArrayField} from './DELETETEACHERSMANUALDATA';
import {RedditTextField} from '../../FormElements/GeneralInput';
import {GeneralButton} from "../../FormElements/GeneralButton";
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
        "http://18.190.25.34:1337/teachers?teacherId=" +
          this.state.teacherId
      )
      .then(data => {
        if(data.data.length)
        {
          console.log(data.data[0])
          axios
          .delete(
            "http://18.190.25.34:1337/teachers/"+data.data[0].id
          )
          .then(data => {
            console.log("The teacher is deleted");
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
          <GeneralButton text="Delete&nbsp;Teacher"  icon="delete" width="10vw"/>
          </div>
        </div>
    );
  }
}

export default DeleteTeachers;
