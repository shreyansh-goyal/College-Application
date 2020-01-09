import React,{Component} from "react";
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import BackendConfig from "../../config/backendConnectivity";
import axios from "axios";
//subject post was not working
class uploadAttendanceByTeachers extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            subjectData:[],
            subjectMetadata:[],
            displayAttendance:false,
            studentsAttendance:[]
        }
        this.fetchData();
    }

    fetchData=()=>
    {
        let teacherId=localStorage.getItem("id");
        axios.get(`${BackendConfig.baseUrl}/teachers?id=${teacherId}`).then(data=>{
            console.log(data);
            axios.get(BackendConfig.baseUrl+"/teacherbatches?teacherId="+data.data[0].teacherId).then(data=>{
                    this.setState({
                        subjectMetadata:[
                            ...data.data
                        ]
    
                    })
                    this.anotherFetch();
            })    
        })
    }
    getDate=()=>{
        let d=new Date();
        let year=d.getFullYear();;
        let month=''+d.getMonth();
        let date=''+d.getDate();
        if(date.length==1)
        date="0"+date;
        if(month.length==1)
        month="0"+month;
        var str= year+"-"+month+"-"+date;
        return str;
    }
    convertToAttendanceObject=(newEntries,teacherBatchData)=>{
        var date=this.getDate();
        let class_id=teacherBatchData.branch+"-"+teacherBatchData.section+"-"+teacherBatchData.year;
        console.log(class_id);
        console.log(date)
        var attendanceArray=newEntries.map(element=>{
            //we have introduce here group this can be inconsistent but sufficient to compute all the necessary details in the future
            var obj={
                courseId:teacherBatchData.courseId,
                enrollment_no:element.enrollmentNo,
                group:teacherBatchData["_group"],
                section:teacherBatchData.section,
                semester:teacherBatchData.semester,
                totalAbsent:0,
                totalPresent:0,
                subject_id:teacherBatchData.subjectId,
                date,
                class_id,
            }
            return obj
        })
        console.log(attendanceArray);
        return attendanceArray;
    }
    anotherFetch=()=>{
        this.state.subjectMetadata.forEach(e=>{
            axios.get(BackendConfig.baseUrl+"/subjects?subjectId="+e.subjectId).then(data=>{
                    var arr=[];
                    arr.push({name:data.data[0].subjectName,courseId:e.courseId,elective:data.data[0].isElective,subjectId:data.data[0].subjectId})
                    this.setState((state,props)=>({
                        subjectData:[...state.subjectData,...arr]
                    }))
            })
        })
    }
    takeAttendance=(data)=>
    {
        var subjectArr=[...this.state.subjectMetadata];
        //arr:ARRAY THAT WILL STORE THE SUBJECT AND ITS CREDENTIALS
        var arr=subjectArr.filter(element=>{
            if(element.subjectId==data.subjectId)
                return true;
        })
        if(!data.elective)
        {
            axios.get(BackendConfig.baseUrl+"/students?year="+arr[0].year+"&branch="+arr[0].branch+"&section="+arr[0].section+"&semester="+arr[0].semester)
            .then(data=>{
                 let classId=arr[0].branch+"-"+arr[0].section+"-"+arr[0].year;
                 let group=arr[0]["_group"];
                 let uri;
                 group?
                 (uri=BackendConfig.baseUrl+"/attendance?"+"section="+arr[0].section+"&subject_id="+arr[0].subjectId+"&semester="+arr[0].semester+"&group="+group+"&class_id="+classId):
                 (uri=BackendConfig.baseUrl+"/attendance?"+"section="+arr[0].section+"&subject_id="+arr[0].subjectId+"&semester="+arr[0].semester+"&class_id="+classId);
                 console.log("this is the uri");
                 console.log(uri);
                 axios.get(uri)
                 .then(attendance=>{
                     console.log(attendance);   
                     let attendanceArr=[];
                     if(attendance.data.length)
                     attendanceArr =[...attendance.data];
                     console.log("this is the attendance array",attendanceArr);
                     var studentArray=data.data.filter(element=>{
                        let array=attendanceArr.filter(e=>{
                            if(e.enrollment_no==element.enrollmentNo)
                            {
                                return true;
                            }
                        })
                        if(array.length>0)
                        return false;
                        else 
                        return true;
                     })
                     let attendanceArray=studentArray.map(element=>{
                         let obj={
                             enrollment_no:element.enrollmentNo,
                             courseId:element.courseId,
                             semester:element.semester,
                             totalPresent:0,
                             totalAbsent:0,
                             class_id:classId,
                             subject_id:arr[0].subjectId,
                             section:element.section,
                             group:element.group,
                             present:false
                         }
                         return obj;
                     })
                     attendanceArray=[...attendanceArray,...attendanceArr];
                     this.setState({
                         studentsAttendance:[...attendanceArray],
                         displayAttendance:true
                     })
                 })
            })    
        }
        else
        {
            axios.get(BackendConfig.baseUrl+"/electivesubjects?subjectId="+arr[0].subjectId)
            .then(electiveSubjectStudent=>{
                console.log(data);
                let classId=arr[0].branch+"-"+arr[0].section+"-"+arr[0].year;
                let group=arr[0]["_group"];
                let uri;
                group?
                (uri=BackendConfig.baseUrl+"/attendance?"+"section="+arr[0].section+"&subject_id="+arr[0].subjectId+"&semester="+arr[0].semester+"&group="+group+"&class_id="+classId):
                (uri=BackendConfig.baseUrl+"/attendance?"+"subject_id="+arr[0].subjectId+"&semester="+arr[0].semester+"&class_id="+classId);
                axios.get(uri)
                .then(attendanceArray=>{
                    var newEntries=electiveSubjectStudent.data.filter((eStudent)=>{
                        var newArray=attendanceArray.data.filter(attendance=>{
                            if(attendance.enrollment_no==eStudent.enrollmentNo)
                            {
                                return true;
                            }
                            else
                            {
                                return false
                            }
                        })
                        if(newArray.length>0)
                        return false;
                        
                        return true;
                    })
                    newEntries=this.convertToAttendanceObject(newEntries,arr[0]);
                    newEntries=[...newEntries,...attendanceArray.data];
                    this.setState({
                        studentsAttendance:[...newEntries],
                        displayAttendance:true
                    })
                })

            })
        }
    }

    uploadAttendance=()=>
    {
        var arr=this.state.studentsAttendance;
        for(let i in arr)
        {   var d= new Date()
            arr[i].date=d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
            console.log(arr[i].present);
            if(arr[i].present==false||!arr[i].present)
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
        console.log("this is the student attendance");
        console.log(this.state.studentsAttendance);
        let promises=[];
        this.state.studentsAttendance.map(element=>{
            if(element.id)
            {
                var obj={
                    class_id:element.class_id,
                    courseId:element.courseId,
                    date:element.date,
                    enrollment_no:element.enrollment_no,
                    group:element.group,
                    section:element.section,
                    semester:element.semester,
                    subject_id:element.subject_id,
                    totalAbsent:element.totalAbsent,
                    totalPresent:element.totalPresent
                }
                console.log("this is the element");
                console.log(element);
                console.log("I am in the put function")
                promises.push(axios.put(BackendConfig.baseUrl+"/attendance/"+element.id,obj));
                console.log("the uri i hitted",BackendConfig.baseUrl+"/attendance/"+element.id);
                console.log("the element I send to the elelemt",obj);
            }
            else
            {
                console.log("this is the element");
                console.log(element);
                promises.push(axios.post(BackendConfig.baseUrl+"/attendance",element));
            }
        })
        axios.all(promises)
        .then(data=>{
            console.log(data);
            alert("the data is uploaded");
            window.location.reload();
        })
        .catch(err=>{
            console.log(err)
        })
    }
    updateAttendance=(data)=>{
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
        this.setState({
            studentsAttendance:arr
        })
    }
    render()
    {
        return(
        <div style={{height:"99vh",overflowY:"scroll"}}>
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
                <div style={{overflowY:"scroll",height:"70vh"}}>
                <Paper >
                <Table >
                  <TableHead>
                    <TableRow>
                      <TableCell style={{fontSize:"15px"}}>Enrollment Number</TableCell>
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