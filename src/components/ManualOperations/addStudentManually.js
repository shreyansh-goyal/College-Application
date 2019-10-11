import React, { Component } from "react";
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { fade, withStyles, makeStyles, createMuiTheme } from '@material-ui/core/styles';
const useStylesReddit = makeStyles(theme => ({
  inputRoot: {
    fontSize:"17px", 
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#fcfcfb',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:hover': {
      backgroundColor: '#fcfcfb',
    },
    '&$focused': {
      backgroundColor: '#fcfcfb',
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    }
  },
  labelRoot: {
    fontSize: "13px",
    "&$labelFocused": {
      color: "purple"
    }},
  focused: {},
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}));

function RedditTextField(props) {
  const classes = useStylesReddit();
  return <TextField 
  style={{width:"95%",margin:"10px auto"}}
  InputProps={{classes: { root: classes.inputRoot } , disableUnderline: true }}
  InputLabelProps={{classes: {root: classes.labelRoot,focused: classes.labelFocused}
  }}
  {...props}
   />;
}

// var config={
//   headers: {'Authorization': "bearer " + token}
// }
// var bodyParameters={
//   key:"value"
// }
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
      name:'',
      branch:'',
      rollNo:''
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
    axios.post("http://18.190.25.34:1337/students", {
        studentName:this.state.studentName,
        rollNo: this.state.rollNo,
        enrollmentNo: this.state.enrollmentNo,
        year: this.state.year,
        section: this.state.section,
        group: this.state.group,
        studentName: this.state.studentName,
        fatherName: this.state.fatherName,
        motherName: this.state.motherName,
        phoneNo: this.state.phoneNo,
        fatherPhoneNo: this.state.fatherPhoneNo,
        emailId: this.state.emailId,
        fatherEmailId: this.state.fatherEmailId
      })
      .then(data => {
        console.log("data posted successfully");
      })
      .catch(err => {
        console.log(this.state);
        console.log("this is the following error", err);
      });
  };
  render() {
    return (
      <div style={{overflowY:"scroll",height:"650px"}}>
        <div data-test="name"  class="form-group input-block">
        <RedditTextField
        onChange={(e)=>{this.onChange(e,"studentName")}}
        label="Student Name"
        defaultValue=""
        variant="filled"
        id="reddit-input"
        />
        </div>
        <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-simple">Age</InputLabel>
        <Select
          value={values.age}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'filled-age-simple',
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
        <div data-test="branch" class="form-group input-block">
          <label>Branch</label>
          <select data-test="branch-input" onChange={(e)=>{this.onChange(e,"branch")}} class="form-control">
            <option>choose one of the following value</option>
            <option>CSE</option>
            <option>IT</option>
            <option>ECE</option>
            <option>EEE</option>
            <option>MBA</option>
            <option>BBA</option>
          </select>
        </div>
        <div data-test="year" class="form-group input-block">
          <label>Year</label>
          <select data-test="year-input" ref="year" onChange={(e)=>{this.onChange(e,"year")}} class="form-control">
            <option>choose one of the following value</option>
            <option value={1}>1st</option>
            <option value={2}>2nd</option>
            <option value={3}>3rd</option>
            <option value={4}>4th</option>
          </select>
        </div>
        <div data-test="section" class="form-group input-block">
          <RedditTextField
          onChange={(e)=>{this.onChange(e,"section")}}
          label="Section"
          defaultValue=""
          variant="filled"
          id="reddit-input"
          />
        </div>
        <div data-test="roll-no" class="form-group input-block">
          <RedditTextField
          onChange={(e)=>{this.onChange(e,"rollNo")}}
          label="Roll Number"
          defaultValue=""
          variant="filled"
          id="reddit-input"
          />
        </div>
        <div data-test="enrollment-no" class="form-group input-block">
          <RedditTextField
          onChange={(e)=>{this.onChange(e,"enrollmentNo")}}
          label="Enrollment Number"
          defaultValue=""
          variant="filled"
          id="reddit-input"
          />
        </div>
        <div data-test="group" class="form-group input-block">
          <label>Group</label>
          <select data-test="group-input" ref="group" onChange={(e)=>{this.onChange(e,"group")}} class="form-control">
            <option>choose one of the following value</option>
            <option>G1</option>
            <option>G2</option>
          </select>
        </div>
        <div data-test="phone-no" class="form-group input-block">
          <RedditTextField
          onChange={(e)=>{this.onChange(e,"phoneNo")}}
          label="Phone Number"
          defaultValue=""
          variant="filled"
          id="reddit-input"
          />
        </div>
        <div data-test="email-id" class="form-group input-block">
          <RedditTextField
          onChange={(e)=>{this.onChange(e,"emailId")}}
          label="Email ID"
          defaultValue=""
          variant="filled"
          id="reddit-input"
          />
        </div>
        <div data-test="father-name" class="form-group input-block">
          <RedditTextField
          onChange={(e)=>{this.onChange(e,"fatherName")}}
          label="Father Name"
          defaultValue=""
          variant="filled"
          id="reddit-input"
          />
        </div>
        <div data-test="father-phone-no" class="form-group input-block">
          <RedditTextField
          onChange={(e)=>{this.onChange(e,"fatherPhoneNo")}}
          label="Father's Phone Number"
          defaultValue=""
          variant="filled"
          id="reddit-input"
          />
        </div>
        <div data-test="father-email" class="form-group input-block">
         <RedditTextField
          onChange={(e)=>{this.onChange(e,"fatherEmailId")}}
          label="Father's Email Id"
          defaultValue=""
          variant="filled"
          id="reddit-input"
          />
        </div>
        <div data-test="mother-name" class="form-group input-block">
          <RedditTextField
          onChange={(e)=>{this.onChange(e,"motherName")}}
          label="Mother's Name"
          defaultValue=""
          variant="filled"
          id="reddit-input"
          />
        </div>
        <div data-test="submit-section" class="form-group input-block">
          <button data-test="submit-button" className="btn btn-info " onClick={this.submitDetails}>
            Submit Student
          </button>
        </div>
      </div>
    );
  }
}
export default AddStudents;
