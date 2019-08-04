import React,{ useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import Toolbar from '@material-ui/core/Toolbar'
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

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



function anayticsController(props){
    const classes = useStyles();
    const {onRequestSort } = props;
    const createSortHandler = property => event => {
      onRequestSort(event, property);
    };
    return(
            <div className={classes.root}>

                        <AppBar position="static" color="primary">
              <Toolbar color="primary">
              
                <form className={classes.root} autoComplete="off">
                <span style={{margin:"auto 30px",fontWeight:"800",fontSize:"20px",color:"#f50057",border:"2px solid #f50057",padding:"10px",borderRadius:"10px"}}>ANALYTICS</span>
                <Button  variant="contained" color="secondary" style={{margin:"0 6px",fontWeight:"800",fontSize:"11px"}}>SMS</Button>
                <Button variant="contained" color="secondary" style={{margin:"0 6px",fontWeight:"800",fontSize:"11px"}}>Gmail</Button>
                <Button variant="contained" color="secondary" style={{margin:"0 6px",fontWeight:"800",fontSize:"11px"}}>Download</Button>
                <TextField
                    style={{margin:"auto 10px",width:"80px"}}
                    id="standard-name"
                    label="Skip"
                    margin="skip"
                    name="skip"
                    onChange={props.handleChange}
                />
            <TextField
                style={{margin:"auto 0",width:"80px"}}
                id="standard-name"
                label="Limit"
                margin="normal"
                onChange={props.handleChange}
                name="limit"
            />
                <div style={{marginTop:"40px"}}>
                  <FormControl style={{marginLeft:"30px"}} className={classes.formControl}>
                  <InputLabel style={{color:"white",fontSize:"20px"}}  shrink htmlFor="age-simple">Semester</InputLabel>
                              <Select
                              style={{color:"white"}}
                              value={props.state.semester}
                              inputProps={{
                                name: 'semester',
                                id: 'age-simple',
                              }}
                              onChange={(e)=>{props.handleChange(e);}}>
                              <MenuItem value={1}>1st</MenuItem>
                              <MenuItem value={2}>2nd</MenuItem>
                              <MenuItem value={3}>3rd</MenuItem>
                              <MenuItem value={4}>4th</MenuItem>
                              <MenuItem value={1}>5th</MenuItem>
                              <MenuItem value={2}>6th</MenuItem>
                              <MenuItem value={3}>7th</MenuItem>
                              <MenuItem value={4}>8th</MenuItem>
                            </Select>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                  <InputLabel style={{color:"white",fontSize:"20px"}}  shrink htmlFor="age-simple">Branch</InputLabel>
                              <Select
                              style={{color:"white"}}
                              inputProps={{
                                name: 'branch',
                                id: 'age-simple',
                              }}
                              value={props.state.branch}
                              onChange={props.handleChange}
                            >
                              <MenuItem value={"CSE"}>CSE</MenuItem>
                              <MenuItem value={"IT"}>IT</MenuItem>
                              <MenuItem value={"EEE"}>EEE</MenuItem>
                              <MenuItem value={"ECE"}>ECE</MenuItem>
                              <MenuItem value={"MBA"}>MBA</MenuItem>
                              <MenuItem value={"BBA"}>BBA</MenuItem>
                            </Select>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                  <InputLabel style={{color:"white",fontSize:"20px"}}  shrink htmlFor="age-simple">Section</InputLabel>
                              <Select
                              style={{color:"white"}}
                              value={props.state.section}
                              inputProps={{
                                name: 'section',
                                id: 'age-simple',
                              }}
                              onChange={props.handleChange}
                            >
                              <MenuItem value={"A"}>A</MenuItem>
                              <MenuItem value={"B"}>B</MenuItem>
                              <MenuItem value={null}>No Section</MenuItem>
                            </Select>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                  <InputLabel style={{color:"white",fontSize:"20px"}}  shrink htmlFor="age-simple">Group</InputLabel>
                              <Select
                              style={{color:"white"}}
                              value={props.state.group}
                              inputProps={{
                                name: 'group',
                                id: 'age-simple',
                              }}
                              onChange={props.handleChange}
                            >
                              <MenuItem value={1}>1st</MenuItem>
                              <MenuItem value={2}>2nd</MenuItem>
                            </Select>
                  </FormControl>
                  <Button style={{height:"30px",margin:"auto 30px"}} variant="contained" color="secondary" onClick={props.fetchRecords}>
                        fetch
                  </Button>
                  </div>
                  </form>
                  </Toolbar>
              </AppBar>
              <div style={{margin:"0 auto"}}>
              <Paper className={classes.root} style={{width:"100%"}}>
      <Table className={classes.table } style={{width:"100%",fontSize:"20px"}}>
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
        <TableBody>
          {props.state.data.map(row => (
            <TableRow key={row.enrollment_no}>
              <TableCell component="th" scope="row" style={{fontSize:"10px"}}>
                {row.enrollment_no}
              </TableCell>
              <TableCell  style={{fontSize:"10px"}}align="right">{row.semester}</TableCell>
              <TableCell  style={{fontSize:"10px"}} align="right">{row.section}</TableCell>
              <TableCell  style={{fontSize:"10px"}} align="right">{row.group}</TableCell>
              <TableCell  style={{fontSize:"10px"}} align="right">{row.totalPresent}</TableCell>
              <TableCell  style={{fontSize:"10px"}} align="right">{row.totalAbsent}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </div>
          </div>
  
            )
}
export default anayticsController