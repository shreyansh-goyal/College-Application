import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import ExcelComponent from "../ExcelData";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
var state={
  semester:null,
  branch:null,
  section:null,
  subject:null,
  teacher:null,
  group:null 
}

function handleChange(e)
{
console.log(e.target.name);
switch(e.target.name)
{
  case "semester":{
    state.semester=e.target.value;
    break;
  }
  case "branch":{
    state.branch=e.target.value;
    break;
  }
  case "section":{
    state.section=e.target.value;
    break;
  }
  case "group":{
    console.log(state);
    state.group=e.target.value;
    break;
  }
  case "subject":{
    state.subject=e.target.value;
    break;
  }
}
}
function createData(enrollment_no,totalPresent,totalAbsent) {
  return { enrollment_no,totalAbsent,totalPresent };
}
var rows = [
];
function browseExcel(data)
{
  for(let i of data)
  {
    var {EnrollmentNo,Semester,Section,Group,Present,Absent}=i;
    rows.push(createData(EnrollmentNo,Semester,Section,Group,Present,Absent));
  }
  return rows;
}
export default function UploadAttendanceExcel(){
    const classes = useStyles();
        return(
        <div className={classes.root}>
          <AppBar position="static" color="primary">
            <Toolbar color="primary">
              <form className={classes.root} autoComplete="off">
                <FormControl className={classes.formControl}>
                <InputLabel style={{color:"white",fontSize:"20px"}} shrink htmlFor="age-simple">Semester</InputLabel>
                            <Select
                            onChange={handleChange}
                            style={{color:"white"}}
                            inputProps={{
                              name: 'semester',
                              id: 'age-simple',
                            }}
                          >
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
                <FormControl className={classes.formControl}>
                <InputLabel style={{color:"white",fontSize:"20px"}} shrink htmlFor="age-simple">Branch</InputLabel>
                            <Select
                            style={{color:"white"}}
                            inputProps={{
                              name: 'branch',
                              id: 'age-simple',
                            }}
                            onChange={handleChange}
                          >
                            <MenuItem value={10}>CSE</MenuItem>
                            <MenuItem value={20}>IT</MenuItem>
                            <MenuItem value={30}>EEE</MenuItem>
                            <MenuItem value={30}>ECE</MenuItem>
                            <MenuItem value={30}>MBA</MenuItem>
                            <MenuItem value={30}>BBA</MenuItem>
                          </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                <InputLabel style={{color:"white",fontSize:"20px"}} shrink htmlFor="age-simple">Section</InputLabel>
                            <Select
                            style={{color:"white"}}
                            inputProps={{
                              name: 'section',
                              id: 'age-simple',
                            }}
                            onChange={handleChange}
                          >
                            <MenuItem value={10}>A</MenuItem>
                            <MenuItem value={20}>B</MenuItem>
                            <MenuItem value={30}>No Section</MenuItem>
                          </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                <InputLabel style={{color:"white",fontSize:"20px"}} shrink htmlFor="age-simple">Subject</InputLabel>
                            <Select
                            style={{color:"white"}}
                            inputProps={{
                              name: 'subject',
                              id: 'age-simple',
                            }}
                            onChange={handleChange}
                          >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                <InputLabel style={{color:"white",fontSize:"20px"}} shrink htmlFor="age-simple">Group</InputLabel>
                            <Select
                            style={{color:"white"}}
                            inputProps={{
                              name: 'group',
                              id: 'age-simple',
                            }}
                            onChange={handleChange}
                          >
                            <MenuItem value={10}>1st</MenuItem>
                            <MenuItem value={20}>2nd</MenuItem>
                          </Select>
                </FormControl>
                </form>
                </Toolbar>
            </AppBar>
            <div style={{width:"80%",margin:"0 auto"}}>
                    <ExcelComponent action={browseExcel} data={state} work="uploadAttendance" style={{display:"block"}}/>
              </div>
        </div>
        )
}
