import React,{Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ExcelComponent from "./ExcelData/ExcelDataAttendance";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import BackendConfig from "../config/backendConnectivity";
import Axios from 'axios';
import backendConnectivity from '../config/backendConnectivity';
import {GeneralButton} from "./FormElements/GeneralButton";
class ElectiveSubjectExcel extends Component{
    constructor(props)
    {   
        super(props);
        this.state={
            subjectInfo:[],
            display:true,
            message:"",
            uploadDisplay:true,
            notElective:true,
            electiveSubject:[],
            electiveData:[]
        }
    }
    updateState=(excelRows)=>{
        for(let i of excelRows)
        {
            if(!parseInt(i.courseId)&&parseInt(i.courseId)!=0)
            {
                console.log(parseInt(i.courseId));
                this.setState({
                    display:false,
                    message:"courseId should be a Integer"
                });
            }
            if(!parseInt(i.semester)&&parseInt(i.semester)!=0)
            {
                this.setState({
                    display:false,
                    message:"semester should be a Integer"
                });
            }
            if(!parseInt(i.lab)&&parseInt(i.lab)!=0)
            {
                this.setState({
                    display:false,
                    message:"lab should be a Integer"
                });
            }
            if(!parseInt(i.credit)&&parseInt(i.credit)!=0)
            {
                this.setState({
                    display:false,
                    message:"credit should be a Integer"
                });
            }
            if(!parseInt(i.isElective)&&parseInt(i.isElective)!=0)
            {
                this.setState({
                    display:false,
                    message:"isElective should be a Integer"
                });
            }
        }
        this.setState({
            subjectInfo:excelRows,
            uploadDisplay:false  
        })
    }
    uploadSubjects=()=>{
            var nonElective=this.state.subjectInfo.filter(e=>{
                return e.isElective==0;
            }) 
            var Elective=this.state.subjectInfo.filter(e=>{
                return e.isElective==1;
            })
            let electivePromises=[];
            let nonElectivePromises=[];
            this.nonElective.map(element=>{
                Axios.post(BackendConfig.baseUrl+"/subjects",)
            })
            fetch(BackendConfig.baseUrl+"/subjects",{
                method: 'POST',
                mode: 'cors', 
                cache: 'no-cache', 
                credentials: 'same-origin', 
                headers: {
                    'Content-Type': 'application/json',
                    
                },
                redirect: 'follow', 
                referrer: 'no-referrer', 
                body: JSON.stringify(this.state.subjectInfo[0]),
            }).then(()=>{
                if(Elective.length>0)
                {
                    this.setState({
                        notElective:false,
                        electiveSubject:Elective
                    })
                }

            })
            .catch(err=>{
                console.log(err);
                        })
            console.log("non elective subjects are",nonElective);
    }
    processElectiveData=(subjectID,excelRows)=>
    {
        var arr=[...this.state.electiveData];

        for(let i of excelRows)
        {
            i.subjectId=subjectID;
            arr.push(i);
        }
        this.setState({
            electiveData:arr
        })
        console.log(arr);
    }
    uploadElectiveData=()=>{
        fetch(BackendConfig.baseUrl+"/electivesubjects",{
          
                method: 'POST',
                mode: 'cors', 
                cache: 'no-cache', 
                credentials: 'same-origin', 
                headers: {
                    'Content-Type': 'application/json',
                    
                },
                redirect: 'follow', 
                referrer: 'no-referrer', 
                body: JSON.stringify(this.state.electiveData[0]),
            }).then(()=>{
                alert("Congratulations Process Completed!")
            })
            .catch(err=>{
                console.log(err);
                        })
    }
    render()
    {
        return(
            
            <div>
            {this.state.notElective?(
                    <div style={{display: 'flex',flexWrap: 'wrap'}}>
                    <AppBar position="static" color="primary">
                        <Toolbar color="primary">
                        <p style={{fontSize:"30px",width:"100%",fontWeight:"500",display:"block",textAlign:"center"}}> 
                            Upload Your Excel File Here
                        </p>
                        </Toolbar>
                    </AppBar>
                    <div style={{width:"100%",margin:"0 auto"}}>
                        <ExcelComponent sendElectiveSubjectList={this.updateState} work="uploadElectiveSubjects" style={{display:"block"}}/>
                        <Paper >
                        <Table>
                            <TableHead>
                            <TableRow style={{margin:"0px"}}>
                                <TableCell style={{padding:"2px",fontSize:"13px"}}>subjectId</TableCell>
                                <TableCell style={{padding:"2px",fontSize:"13px"}} align="center">subjectName</TableCell>
                                <TableCell style={{padding:"2px",fontSize:"13px"}} align="center">subjectCode</TableCell>
                                <TableCell style={{padding:"2px",fontSize:"13px"}} align="center">courseId</TableCell>
                                <TableCell style={{padding:"2px",fontSize:"13px"}} align="center">semester</TableCell>
                                <TableCell style={{padding:"2px",fontSize:"13px"}} align="center">lab</TableCell>
                                <TableCell style={{padding:"2px",fontSize:"13px"}} align="center">credit</TableCell>
                                <TableCell style={{padding:"2px",fontSize:"13px"}} align="center">isElective</TableCell>
                                <TableCell style={{padding:"2px",fontSize:"13px"}} align="center">isTaught</TableCell>
                                <TableCell style={{padding:"2px",fontSize:"13px"}} align="centerr">recommandedBook1</TableCell>
                                <TableCell style={{padding:"2px",fontSize:"13px"}} align="center">recommandedBook2</TableCell>
                                <TableCell style={{padding:"2px",fontSize:"13px"}} align="center">teacherId</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {   this.state.display?(
                                
                                this.state.subjectInfo.map(row => (
                                <TableRow key={row.name}>
                                <TableCell component="th" scope="row" align="center">{row.subjectId}</TableCell>
                                <TableCell style={{padding:"2px",fontSize:"13px"}} align="center">{row.subjectName}</TableCell>
                                <TableCell style={{padding:"2px",fontSize:"13px"}} align="center">{row.subjectCode}</TableCell>
                                <TableCell style={{padding:"2px",fontSize:"13px"}} align="center">{row.courseId}</TableCell>
                                <TableCell style={{padding:"2px",fontSize:"13px"}} align="center">{row.semester}</TableCell>
                                <TableCell style={{padding:"2px",fontSize:"13px"}} align="center">{row.lab}</TableCell>
                                <TableCell style={{padding:"2px",fontSize:"13px"}} align="center">{row.credit}</TableCell>
                                <TableCell style={{padding:"2px",fontSize:"13px"}} align="center">{row.isElective}</TableCell>
                                <TableCell style={{padding:"2px",fontSize:"13px"}} align="center">{row.isTaught}</TableCell>
                                <TableCell style={{padding:"2px",fontSize:"13px"}} align="center">{row.recommandedBook1}</TableCell>
                                <TableCell style={{padding:"2px",fontSize:"13px"}} align="center">{row.recommandedBook1}</TableCell>
                                <TableCell style={{padding:"2px",fontSize:"13px"}} align="center">{row.teacherId}</TableCell>
                                </TableRow>
                            )
                            )
                            ):
                            (
                                <div>
                                </div>
                            )
                        } 
                            </TableBody>
                        </Table>
                        </Paper>
                        {
                        this.state.uploadDisplay?
                        (
                            <div>

                            </div>
                        ):
                        (
                            <Button variant="contained" color="primary" onClick={this.uploadSubjects} style={{fontWeight:"800",marginTop:"10px"}} >
                                Verify and Upload
                            </Button>
                        )
                        }
                        {this.state.display?
                        (
                            <p></p>
                        ):
                        (
                        <AppBar style={{position:"absolute",bottom:"0",width:"71.7%"}} position="static" color="primary">
                            <Toolbar> 
                                <p style={{textAlign:"center",width:"100%"}}>
                                    {this.state.message}
                                </p>
                            </Toolbar>
                        </AppBar>
                        )
                       }
                    </div>
                    </div>
                    ):
                    (
                        <div>
                           <AppBar  position="static" color="primary">
                                <Toolbar> 
                                    <p style={{width:"100%",fontSize:"30px",fontWeight:"500",textAlign:"center"}}>
                                            Link The students to the elective subjectID     
                                    </p>
                                </Toolbar>
                            </AppBar>
                            <Paper style={{margin:"0 10px;",paddingTop:"20px"}}>
                            <Table>
                                <TableHead>
                                <TableRow style={{margin:"0px"}}>
                                    <TableCell style={{padding:"2px",fontSize:"13px"}}>subjectId</TableCell>
                                    <TableCell style={{padding:"2px",fontSize:"13px"}} align="center">subjectName</TableCell>
                                    <TableCell style={{padding:"2px",fontSize:"13px"}} align="center">subjectCode</TableCell>
                                    <TableCell style={{padding:"2px",fontSize:"13px"}} align="center">
                                        Browse Students
                                    </TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {   this.state.display?(
                                    
                                    this.state.electiveSubject.map(row => (
                                    <TableRow key={row.name}>
                                    <TableCell component="th" scope="row" align="center">{row.subjectId}</TableCell>
                                    <TableCell style={{padding:"2px",fontSize:"13px"}} align="center">{row.subjectName}</TableCell>
                                    <TableCell style={{padding:"2px",fontSize:"13px"}} align="center">{row.subjectCode}</TableCell>
                                    <TableCell style={{padding:"2px",fontSize:"13px"}} align="center">
                                        <ExcelComponent work="gatherStudents" subjectID={row.subjectId} linkData={this.processElectiveData}/>
                                    </TableCell>
                                    </TableRow>
                                )
                                )
                                ):
                                (
                                    <div>
                                    </div>
                                )
                            } 
                                </TableBody>
                            </Table>
                            </Paper>
                            <GeneralButton text="Upload Elective Subjects" icon="upload_cloud" onClick={this.uploadElectiveData}  >
                            </GeneralButton>
                        </div>
                        )
                    }
            </div>
        )
    }
}

export default ElectiveSubjectExcel;