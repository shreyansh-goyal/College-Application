import React, { Component } from "react";
import axios from "axios";
class AddTeachers extends Component {
  state = {};
  componentWillMount() {
    console.log("hello function will be wrking in this sceneario");
    axios
      .get("https://bpitconnect.herokuapp.com/teachers")
      .then(data => {
        console.log("this is the data I want", data.data);
        this.setState({
          teachersdetails: data.data
        });
      })
      .catch("I forgot how to get the data");
  }
  componentDidUpdate() {
    console.log("recieve the props", this.state);
  }
  findTeacher = () => {
    console.log(this.refs.findTeacher.value);
    var arr = this.state.teachersdetails.filter(e => {
      return e.teacherId == this.refs.findTeacher.value;
    });
    if (arr.length > 0) {
      console.log("I am happy");
      console.log("this is the array", arr);
      console.log(this.state);
      this.setState({ updateDetails: arr[0] });
    }
  };
  updateTeacherDetails = () => {
    console.log(
      `https://bpitconnect.herokuapp.com/${this.state.updateDetails.id}`
    );
    console.log(this.state.updateDetails);
    axios
      .put(
        `https://bpitconnect.herokuapp.com/teachers/${
          this.state.updateDetails.id
        }`,
        this.state.updateDetails
      )
      .then(data => {
        console.log(data.data);
        this.setState({ teachersdetails: [], updateDetails: {} });
        axios
          .get("https://bpitconnect.herokuapp.com/teachers")
          .then(data => {
            console.log("this is the data I want", data.data);
            this.setState({
              teachersdetails: data.data
            });
          })
          .catch("I forgot how to get the data");
      })
      .catch(err => {
        console.log("this have following error", err);
      });
  };
  render() {
    return (
      <div>
        <div class="form-group input-block">
          <label>Enter Teacher Id</label>
          <input ref="findTeacher" type="text" list="teachers" />
          <datalist id="teachers">
            <option>hello</option>
            {this.state.teachersdetails &&
              this.state.teachersdetails.map(e => {
                return (
                  <option value={e.teacherId} key={e.id}>
                    Teacher's Name : {e.teacherName}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Teachers
                    Id : {e.teacherId}
                  </option>
                );
              })}
          </datalist>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center" }}
          class="form-group input-block"
        >
          <button onClick={this.findTeacher}>Find Teacher</button>
        </div>
        <hr />
        <div class="form-group input-block">
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
        </div>
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
