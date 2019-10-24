import React,{Component} from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';

//subject post was not working
class uploadAttendanceByTeachers extends Component{
    constructor(props)
    {
        console.log("hello I am in the component")
        super(props);
        this.state={
            subjectData:[],
            subjectMetadata:[],
            displayAttendance:false,
            studentsAttendance:[]
        }
        this.fetchData();
    }

    fetchData()
    {
        console.log("hello shreyansh in the function");
        fetch("http://18.190.25.34:1337/teacherbatches?teacherId=123").then(data=>{
            data.json().then((data=>{
                console.log("first fetch data",data);
                this.setState({
                    subjectMetadata:[
                        ...this.state.subjectMetadata,
                        {data}
                    ]

                })
                this.anotherFetch()
            }))
        })
    }
    anotherFetch(){
        this.state.subjectMetadata.forEach(e=>{
            fetch("http://18.190.25.34:1337/subjects?subjectId="+e.subjectId).then(data=>{
                data.json().then(data=>{
                    console.log("second fetch",data)

                    var arr=[...this.state.subjectData];
                    arr.push({name:data[0].subjectName,courseId:e.courseId,elective:data[0].isElective})
                    this.setState({
                        subjectData:arr
                    })
                })
            })
        })
    }
    takeAttendance(data)
    {
        fetch("http://18.190.25.34:1337/attendance?courseId="+data.courseId)
        .then(data=>{
            data.json().then(data=>{
                console.log(data);
                data.forEach(e=>{
                    e.present=false;
                })
                console.log("ise kehte hai hip hop",data);
                this.setState({
                    studentsAttendance:data,
                    displayAttendance:true
                })
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }
    uploadAttendance=()=>
    {
        var arr=this.state.studentsAttendance;
        for(let i in arr)
        {
            arr[i].date=new Date()
            if(arr[i].present==false)
            {
            arr[i].totalAbsent++;
            }            
        }
        for(let i in arr)
        {
            delete arr[i]["present"];
        }
        this.setState({
            studentsAttendance:arr
        })

        fetch("http://18.190.25.34:1337/attendance/"+this.state.studentsAttendance[0].id,{
            method: 'PUT',
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
                'Content-Type': 'application/json',
                
            },
            redirect: 'follow', 
            referrer: 'no-referrer', 
            body: JSON.stringify(this.state.studentsAttendance[0]),
        }).then(data=>{
            data.json().then(data=>{

            })
            alert("Congratulation The Data is Uploaded")
            window.location.reload();
            console.log(data);
        }).catch(err=>{
            console.log(err);
        });
    }
    updateAttendance(data){
        var arr=this.state.studentsAttendance;
        console.log(data);
        for(let i in arr)
        {
            if(arr[i].enrollment_no==data.enrollment_no)
            {
                arr[i].present=!arr[i].present;
                if(arr[i].present==true)
                {
                    arr[i].totalPresent+=1;
                }
                else
                {
                    arr[i].totalPresent-=1;
                }
            }

        }
        console.log(arr);
        this.setState({
            studentsAttendance:arr
        })
    }
    render()
    {
        return(
        <div>
        <AppBar position="static" color="primary" style={{marginBottom:"10px"}}>
            <Toolbar color="primary">
                <p style={{fontSize:"30px",width:"100%",fontWeight:"500",display:"block",textAlign:"center"}}> 
                    Upload Attendance
                </p>
            </Toolbar>
        </AppBar>
        {
            this.state.displayAttendance?(
                <div>
                <div style={{overflowY:"scroll",height:"40vw"}}>
                <Paper >
                <Table >
                  <TableHead>
                    <TableRow>
                      <TableCell style={{fontSize:"15px"}}>Enrollment Number</TableCell>
                      <TableCell style={{fontSize:"15px"}} align="right">Group</TableCell>
                      <TableCell style={{fontSize:"15px"}} align="right">Total Present</TableCell>
                      <TableCell style={{fontSize:"15px"}} align="right">Total Absent</TableCell>
                      <TableCell style={{fontSize:"15px"}} align="right">Total Classes</TableCell>
                      <TableCell style={{fontSize:"15px"}} align="right">Mark Attendance</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.studentsAttendance.map(row => (
                      <TableRow key={row.id}>
                        <TableCell style={{fontSize:"15px"}} component="th" scope="row">
                          {row.enrollment_no}
                        </TableCell>
                        <TableCell style={{fontSize:"15px"}} align="right">{row.group}</TableCell>
                        <TableCell style={{fontSize:"15px"}} align="right">{row.totalPresent}</TableCell>
                        <TableCell style={{fontSize:"15px"}} align="right">{row.totalAbsent}</TableCell>
                        <TableCell style={{fontSize:"15px"}} align="right">{row.totalAbsent+row.totalPresent}</TableCell>
                        <TableCell align="right">
                        <Switch
                            value="checkedB"
                            color="primary"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                            onClick={()=>{this.updateAttendance(row)}}
                        />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
              </div>
              <Button  onClick={this.uploadAttendance} variant="contained"  style={{width:"95%",fontSize:"15px",fontWeight:"500",fontFamily:"Times New Roman",margin:"10px 0"}}color="primary" >
                    Upload Attendance
                </Button>
              </div>
                ):
            (
                this.state.subjectData.map(e=>{
                    return(
                    <Button onClick={()=>{this.takeAttendance(e)}} variant="contained"  style={{width:"95%",fontSize:"30px",fontFamily:"Times New Roman",margin:"10px 0"}}color="secondary" >
                        {e.name}
                    </Button>
                    )
                })
            )
        }
      </div>   
        )
    }
}
export default uploadAttendanceByTeachers