import React, { Component } from "react";
import { anayticsController } from "./Analytics";
import AppBar from '@material-ui/core/AppBar';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import XLSX from 'xlsx';

class analyticsWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      semester: null,
      branch: null,
      section: null,
      group: null,
      teacher: null,
      skip: null,
      limit: null,
      data: [],
      message:[],
    
    };
  }

  fetchRecords = () => {
    console.log(this.state);
    if (
      this.state.semester &&
      this.state.courseId &&
      this.state.group &&
      this.state.section
    ) {
      if (this.state.limit) {
        fetch(
          "https://bpitconnect.herokuapp.com/attendance?semester=" +
            this.state.semester +
            "&courseId=" +
            this.state.courseId +
            "&group=" +
            this.state.group +
            "&section=" +
            this.state.section +
            "&_limit=" +
            this.state.limit +
            "&_start=" +
            this.state.skip
        ).then(response => {
          response.json().then(data => {
            this.setState({
              data
            });
          });
        });
      } else {
        fetch(
          "https://bpitconnect.herokuapp.com/attendance?semester=" +
            this.state.semester +
            "&courseId=" +
            this.state.courseId +
            "&group=" +
            this.state.group +
            "&section=" +
            this.state.section
        ).then(response => {
          response.json().then(data => {
            this.setState({
              data
            });
          });
        });
      }
    } else if (
      this.state.semester &&
      this.state.courseId &&
      this.state.section
    ) {
      if (this.state.limit) {
        fetch(
          "https://bpitconnect.herokuapp.com/attendance?semester=" +
            this.state.semester +
            "&courseId=" +
            this.state.courseId +
            "&section=" +
            this.state.section +
            "&_limit=" +
            this.state.limit +
            "&_start=" +
            this.state.skip
        ).then(response => {
          response.json().then(data => {
            this.setState({
              data
            });
          });
        });
      } else {
        fetch(
          "https://bpitconnect.herokuapp.com/attendance?semester=" +
            this.state.semester +
            "&courseId=" +
            this.state.courseId +
            "&section=" +
            this.state.section +
            "&_limit=" +
            this.state.limit
        ).then(response => {
          response.json().then(data => {
            this.setState({
              data
            });
          });
        });
      }
    } else if (this.state.semester && this.state.courseId) {
      if (this.state.limit) {
        fetch(
          "https://bpitconnect.herokuapp.com/attendance?semester=" +
            this.state.semester +
            "&courseId=" +
            this.state.courseId +
            "&limit=" +
            this.state.limit +
            "&_start=" +
            this.state.skip
        ).then(response => {
          response.json().then(data => {
            this.setState({
              data
            });
          });
        });
      } else {
        fetch(
          "https://bpitconnect.herokuapp.com/attendance?semester=" +
            this.state.semester +
            "&courseId=" +
            this.state.courseId
        ).then(response => {
          response.json().then(data => {
            this.setState({
              data
            });
          });
        });
      }
    } else if (this.state.semester) {
      if (this.state.limit) {
        fetch(
          "https://bpitconnect.herokuapp.com/attendance?semester=" +
            this.state.semester +
            "?_limit=" +
            this.state.limit +
            "&_start=" +
            this.state.skip
        ).then(response => {
          response.json().then(data => {
            this.setState({
              data
            });
          });
        });
      } else {
        fetch(
          "https://bpitconnect.herokuapp.com/attendance?semester=" +
            this.state.semester
        ).then(response => {
          response.json().then(data => {
            this.setState({
              data
            });
            console.log(data);
          });
        });
      }
    } else if (this.state.courseId) {
      if (this.state.limit) {
        fetch(
          "https://bpitconnect.herokuapp.com/attendance?courseId=" +
            this.state.courseId +
            "&_limit=" +
            this.state.limit +
            "&_start=" +
            this.state.skip
        ).then(response => {
          response.json().then(data => {
            this.setState({
              data
            });
          });
        });
      } else {
        fetch(
          "https://bpitconnect.herokuapp.com/attendance?courseId=" +
            this.state.courseId
        ).then(response => {
          response.json().then(data => {
            this.setState({
              data
            });
          });
        });
      }
    } else if (this.state.section) {
      if (this.state.limit) {
        fetch(
          "https://bpitconnect.herokuapp.com/attendance?group=" +
            this.state.group +
            "&_limit=" +
            this.state.limit +
            "&_start=" +
            this.state.skip
        ).then(response => {
          response.json().then(data => {
            this.setState({
              data
            });
          });
        });
      } else {
        fetch(
          "https://bpitconnect.herokuapp.com/attendance?group=" +
            this.state.group
        ).then(response => {
          response.json().then(data => {
            this.setState({
              data
            });
          });
        });
      }
    } else if (this.state.group) {
      if (this.state.limit) {
        fetch(
          "https://bpitconnect.herokuapp.com/attendance?section=" +
            this.state.section +
            "&_limit=" +
            this.state.limit +
            "&_start=" +
            this.state.skip
        ).then(response => {
          response.json().then(data => {
            this.setState({
              data
            });
          });
        });
      } else {
        fetch(
          "https://bpitconnect.herokuapp.com/attendance?section=" +
            this.state.section
        ).then(response => {
          response.json().then(data => {
            this.setState({
              data
            });
          });
        });
      }
    }
  };

  handleChange = e => {
    switch (e.target.name) {
      case "semester": {
        console.log(this.state);
        this.setState({
          semester: e.target.value
        });
        break;
      }
      case "branch": {
        this.setState({
          branch: e.target.value
        });
        break;
      }
      case "section": {
        this.setState({
          section: e.target.value
        });
        break;
      }
      case "group": {
        this.setState({
          group: e.target.value
        });
        break;
      }
      case "teacher": {
        this.setState({
          teacher: e.target.value
        });
        break;
      }
      case "limit": {
        this.setState({
          limit: e.target.value
        });
        break;
      }
      case "skip": {
        this.setState({
          skip: e.target.value
        });
        break;
      }
    }
  };
  addToSendMessageArray=(e)=>{
    var flag=0;
    for(let i in this.state.message)
    {
      if(this.state.message[i]==e)
      {
        flag=1;
      }
    }
    if(flag==0)
    {
      this.setState({
        message:[...this.state.message,e]
      })
    }
    else{
      var a = this.state.message.filter(element=>{
        if(e==element)
        {
          return false;
        }
        else
        {
          return true;
        }
      })
      console.log(a);
      this.setState({
        message:[...a]
      })
    }
    console.log(this.state.message);
  }
  Download=()=>{

  }
  render() {
    return (
      <div>
        <div style={{     display: 'flex',
      flexWrap: 'wrap',}}>

<AppBar position="static" color="primary">
<Toolbar color="primary">

<form style={{     display: 'flex',
      flexWrap: 'wrap',}} autoComplete="off">
<span style={{margin:"auto 30px",fontWeight:"800",fontSize:"20px",color:"#f50057",border:"2px solid #f50057",padding:"10px",borderRadius:"10px"}}>ANALYTICS</span>
<Button  variant="contained" color="secondary" style={{margin:"0 6px",fontWeight:"800",fontSize:"11px"}}>SMS</Button>
<Button variant="contained" color="secondary" style={{margin:"0 6px",fontWeight:"800",fontSize:"11px"}}>Gmail</Button>
<Button variant="contained" color="secondary" onClick={this.Download} style={{margin:"0 6px",fontWeight:"800",fontSize:"11px"}}>Download</Button>
<TextField
style={{margin:"auto 10px",width:"80px"}}
id="standard-name"
label="Skip"
margin="skip"
name="skip"
onChange={this.handleChange}
/>
<TextField
style={{margin:"auto 0",width:"80px"}}
id="standard-name"
label="Limit"
margin="normal"
onChange={this.handleChange}
name="limit"
/>
<div style={{marginTop:"40px"}}>
<FormControl style={{margin:"10px",width:"100px"}} >
<InputLabel style={{color:"white",fontSize:"20px"}}  shrink htmlFor="age-simple">Semester</InputLabel>
      <Select
      style={{color:"white"}}
      value={this.state.semester}
      inputProps={{
        name: 'semester',
        id: 'age-simple',
      }}
      onChange={(e)=>{this.handleChange(e);}}>
      <MenuItem value={1}>1st</MenuItem>
      <MenuItem value={2}>2nd</MenuItem>
      <MenuItem value={3}>3rd</MenuItem>
      <MenuItem value={4}>4th</MenuItem>
      <MenuItem value={5}>5th</MenuItem>
      <MenuItem value={6}>6th</MenuItem>
      <MenuItem value={7}>7th</MenuItem>
      <MenuItem value={8}>8th</MenuItem>
    </Select>
</FormControl>
<FormControl style={{width:"100px",margin:"10px"}}>
<InputLabel style={{color:"white",fontSize:"20px"}}  shrink htmlFor="age-simple">Branch</InputLabel>
      <Select
      style={{color:"white"}}
      inputProps={{
        name: 'branch',
        id: 'age-simple',
      }}
      value={this.state.branch}
      onChange={this.handleChange}
    >
      <MenuItem value={"CSE"}>CSE</MenuItem>
      <MenuItem value={"IT"}>IT</MenuItem>
      <MenuItem value={"EEE"}>EEE</MenuItem>
      <MenuItem value={"ECE"}>ECE</MenuItem>
      <MenuItem value={"MBA"}>MBA</MenuItem>
      <MenuItem value={"BBA"}>BBA</MenuItem>
    </Select>
</FormControl>
<FormControl style={{width:"100px",margin:"10px"}}>
<InputLabel style={{color:"white",fontSize:"20px"}}  shrink htmlFor="age-simple">Section</InputLabel>
      <Select
      style={{color:"white"}}
      value={this.state.section}
      inputProps={{
        name: 'section',
        id: 'age-simple',
      }}
      onChange={this.handleChange}
    >
      <MenuItem value={"A"}>A</MenuItem>
      <MenuItem value={"B"}>B</MenuItem>
      <MenuItem value={null}>No Section</MenuItem>
    </Select>
</FormControl>
<FormControl style={{width:"100px",margin:"10px"}}>
<InputLabel style={{color:"white",fontSize:"20px"}}  shrink htmlFor="age-simple">Group</InputLabel>
      <Select
      style={{color:"white"}}
      value={this.state.group}
      inputProps={{
        name: 'group',
        id: 'age-simple',
      }}
      onChange={this.handleChange}
    >
      <MenuItem value={1}>1st</MenuItem>
      <MenuItem value={2}>2nd</MenuItem>
    </Select>
</FormControl>
<Button style={{height:"30px",margin:"auto 30px"}} variant="contained" color="secondary" onClick={this.fetchRecords}>
fetch
</Button>
</div>
</form>
</Toolbar>
</AppBar>
<div style={{margin:"0 auto"}}>
<Paper  style={{width:"100%",      display: 'flex',
      flexWrap: 'wrap',}}>
<Table  style={{width:"100%",fontSize:"20px"}}>
<TableHead>
<TableRow>
<TableCell style={{width:"100%",fontSize:"20px"}}>Enrollment No</TableCell>
<TableCell style={{width:"100%",fontSize:"20px"}} align="right">Semester</TableCell>
<TableCell style={{width:"100%",fontSize:"20px"}} align="right">Section</TableCell>
<TableCell style={{width:"100%",fontSize:"20px"}} align="right">Group</TableCell>
<TableCell style={{width:"100%",fontSize:"20px"}} align="right">Presen</TableCell>
<TableCell style={{width:"100%",fontSize:"20px"}} align="right">Absent</TableCell>
<TableCell style={{width:"100%",fontSize:"20px"}} align="right">Select</TableCell>
</TableRow>
</TableHead>
{ <TableBody>
{
    this.state.data.map(row => (
<TableRow key={row.enrollment_no}>
<TableCell component="th" scope="row" style={{fontSize:"10px"}}>
{row.enrollment_no}
</TableCell>
<TableCell  style={{fontSize:"10px"}}align="right">{row.semester}</TableCell>
<TableCell  style={{fontSize:"10px"}} align="right">{row.section}</TableCell>
<TableCell  style={{fontSize:"10px"}} align="right">{row.group}</TableCell>
<TableCell  style={{fontSize:"10px"}} align="right">{row.totalPresent}</TableCell>
<TableCell  style={{fontSize:"10px"}} align="right">{row.totalAbsent}</TableCell>
<TableCell  style={{fontSize:"10px"}} align="right"><input type="checkbox" onClick={()=>{this.addToSendMessageArray(row.enrollment_no)}}></input></TableCell>
</TableRow>
))
}
</TableBody> }
</Table>
</Paper>
</div>
</div>
      </div>
    );
  }
}

export default analyticsWrapper;
