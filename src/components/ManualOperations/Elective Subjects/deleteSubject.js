import React, { Component } from "react";
import axios from "axios";
import {RedditTextField} from "../../FormElements/GeneralInput";
import {GeneralButton} from "../../FormElements/GeneralButton";
import backendConfig from "../../../config/backendConnectivity";
class deleteSubject extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      subjectId:null
    }
  }
  onChange(e,name) {
    this.setState({ [name]: e.target.value });
  }
  deleteSubject = () => {
    axios
      .get(
        backendConfig.baseUrl+"/subjects?subjectId="+
          this.state.subjectId
      )
      .then(data => {
        console.log(data);
        if(data.data.length)
        {
          axios
          .delete(backendConfig.baseUrl+"/subjects/" + data.data[0].id)
          .then(data => {
            alert("success");
          });
        }
        else
        {
          alert("Not Found");
        }
      });
  };
  render() {
    return (
      <div>
          <RedditTextField
          onChange={(e)=>{this.onChange(e,'subjectId')}}
          label='Subject Id'
          defaultValue=""
          variant="filled"
          id="reddit-input"
          />
          <div style={{margin:"10px auto"}} onClick={this.deleteSubject}>
              <GeneralButton text="Delete&nbsp;&nbsp;Subject" icon="delete"/>
          </div>
      </div>
    );
  }
}
export default deleteSubject;
