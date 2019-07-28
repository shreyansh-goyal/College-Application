import React,{Component} from "react";
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

const rows = [
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Donut', 452, 25.0, 51, 4.9),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Honeycomb', 408, 3.2, 87, 6.5),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Jelly Bean', 375, 0.0, 94, 0.0),
  createData('KitKat', 518, 26.0, 65, 7.0),
  createData('Lollipop', 392, 0.2, 98, 0.0),
  createData('Marshmallow', 318, 0, 81, 2.0),
  createData('Nougat', 360, 19.0, 9, 37.0),
  createData('Oreo', 437, 18.0, 63, 4.0),
];

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const headRows = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
  { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
  { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
  { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
  { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
];

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
    group:null,
    teacher:null,
    skip:null,
    limit:null
  }
  
function handleChange(e)
{
  switch(e.target.name)
  {
    case "semester":{
      console.log(state)
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
      state.group=e.target.value;
      console.log(state)
      break;
    }
    case "teacher":{
      state.teacher=e.target.value;
      console.log(state);
      break;
    }
    case "limit":{
      state.limit=e.target.value;
      console.log(state.limit);
      break;
    }
    case "skip":{
      state.skip=e.target.value
      console.log(state.skip);
      break;
    }
  }
}
function fetchRecords()
{
  fetch("https://bpitconnect.herokuapp.com/attendance").then((response)=>{
    console.log(response.body);
    response.json().then(data=>{
      console.log(data)
    })
  })
}
function anayticsController(props){
    const classes = useStyles();
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
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
                <Button variant="contained" color="secondary" style={{margin:"0 6px",fontWeight:"800",fontSize:"11px"}}>Chart</Button>
                <TextField
                    style={{margin:"auto 10px",width:"80px"}}
                    id="standard-name"
                    label="Skip"
                    margin="skip"
                    name="skip"
                    onChange={handleChange}
                />
            <TextField
                style={{margin:"auto 0",width:"80px"}}
                id="standard-name"
                label="Limit"
                margin="normal"
                onChange={handleChange}
                name="limit"
            />
                <div style={{marginTop:"40px"}}>
                  <FormControl style={{marginLeft:"30px"}} className={classes.formControl}>
                  <InputLabel style={{color:"white",fontSize:"20px"}} shrink htmlFor="age-simple">Semester</InputLabel>
                              <Select
                              style={{color:"white"}}
                              inputProps={{
                                name: 'semester',
                                id: 'age-simple',
                              }}
                              onChange={handleChange}
                            >
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
                  <InputLabel style={{color:"white",fontSize:"20px"}} shrink htmlFor="age-simple">Branch</InputLabel>
                              <Select
                              style={{color:"white"}}
                              inputProps={{
                                name: 'branch',
                                id: 'age-simple',
                              }}
                              onChange={handleChange}
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
                  <InputLabel style={{color:"white",fontSize:"20px"}} shrink htmlFor="age-simple">Section</InputLabel>
                              <Select
                              style={{color:"white"}}
                              inputProps={{
                                name: 'section',
                                id: 'age-simple',
                              }}
                              onChange={handleChange}
                            >
                              <MenuItem value={"A"}>A</MenuItem>
                              <MenuItem value={"B"}>B</MenuItem>
                              <MenuItem value={null}>No Section</MenuItem>
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
                              <MenuItem value={1}>1st</MenuItem>
                              <MenuItem value={2}>2nd</MenuItem>
                            </Select>
                  </FormControl>
                  <Button style={{height:"30px",margin:"auto 30px"}} variant="contained" color="secondary" onClick={fetchRecords}>
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
            <TableCell style={{width:"100%",fontSize:"20px"}}>Dessert (100g serving)</TableCell>
            <TableCell style={{width:"100%",fontSize:"20px"}} align="right">Calories</TableCell>
            <TableCell style={{width:"100%",fontSize:"20px"}} align="right">Fat&nbsp;(g)</TableCell>
            <TableCell style={{width:"100%",fontSize:"20px"}} align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell style={{width:"100%",fontSize:"20px"}} align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" style={{fontSize:"10px"}}>
                {row.name}
              </TableCell>
              <TableCell  style={{fontSize:"10px"}}align="right">{row.calories}</TableCell>
              <TableCell  style={{fontSize:"10px"}} align="right">{row.fat}</TableCell>
              <TableCell  style={{fontSize:"10px"}} align="right">{row.carbs}</TableCell>
              <TableCell  style={{fontSize:"10px"}} align="right">{row.protein}</TableCell>
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