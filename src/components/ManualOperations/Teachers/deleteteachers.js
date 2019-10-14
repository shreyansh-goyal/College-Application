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
    console.log('hello')
    axios
      .get(
        "http://18.190.25.34:1337/teachers?teacherId=" +
          this.state.teacherId
      )
      .then(data => {
        console.log("hello this is the data",data);
        console.log(data.data);
        axios
          .delete(
            "http://18.190.25.34:1337/teachers/" + data.data[0].id
          )
          .then(data => {
            console.log("The teacher is deleted");
            alert("the given entry is deleted");
          })
          .catch(err => {
            console.log("some error is occured", err);
          });
      })
      .catch(err => {
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
