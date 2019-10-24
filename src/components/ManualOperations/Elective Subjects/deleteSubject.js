import React, { Component } from "react";
import axios from "axios";
import {RedditTextField} from "../../FormElements/GeneralInput";
import {GeneralButton} from "../../FormElements/GeneralButton";

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
        "http://18.190.25.34:1337/subjects?subjectId=" +
          this.state.subjectId
      )
      .then(data => {
        console.log(data);
        if(data.data.length)
        {
          axios
          .delete("http://18.190.25.34:1337/subjects/" + data.data[0].id)
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
              <GeneralButton text="Delete&nbsp;&nbsp;Subject" icon="delete" width="10vw"/>
          </div>
      </div>
    );
  }
}
export default deleteSubject;
