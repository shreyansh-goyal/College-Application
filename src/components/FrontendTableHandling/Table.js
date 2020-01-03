import React,{Component} from 'react';
import Header from"../Header/header"
import ExcelComponent from "../ExcelData/ExcelDataAttendance";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';    
import Footer from "../Footer/footer"
import {GeneralButton} from "../FormElements/GeneralButton";
import axios from "axios";
import backendConfig from "../../config/backendConnectivity";
class MainTable extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            message:"",
            validated:true,
            studentData:[]
        };
    }
    postData=()=>
    {
        let promises=[];
        alert("Wait for the procedure it may take some seconds");
        for(let i=0;i<this.state.studentData.length;i++)
        {
            promises.push(axios.post('http://localhost:1337/'+this.props.api.slice(1),this.state.studentData[i]));
        }
        axios.all(promises)
        .then(responseArray=>{
            alert("Uploaded the data successfully");
        })
        .catch(err=>{
            console.log("there is some error",err);
            alert("Failed to upload the data");
        })
    }
    readExcelRows=(excelData)=>
    {
        if(this.state.validated==false)
        {
            this.setState({
                validated:true
            })
        }
        for(let i of  excelData)
        {
            if(i.dob!=undefined)
            {
                
                i.dob=i.dob.slice(1,i.dob.length-1);
            }
            if(i.joiningDate!=undefined)
            {
                i.joiningDate=i.joiningDate.slice(1,i.joiningDate.length-1);
            }

            for(let m of this.props.validation)
            {
                if(i[m]!=0)
                {
                    if(!parseInt(i[m]))
                    {
                        var a=m+" should be a Integer";
                        this.setState({
                            message:a,
                            validated:false
                        })
    
                    }
                }
            }
        }
        this.setState({
            studentData:excelData
        })
        console.log(this.state);
    }
    render()
    {
        return(
            <div>
                    <Header heading={this.props.message}></Header>
                    <ExcelComponent work="StudentData" sendData={this.readExcelRows}/>
                    {this.state.validated?(
                        <div>
                            <Paper style={{overflowY:"scroll",overflowX:"scroll",maxHeight:"540px"}}>
                            <Table >
                                <TableHead>
                                <TableRow >
                                    {this.props.fields.map(e=>{
                                        return(
                                            <TableCell style={{fontSize:"15px"}} align="right">{e}</TableCell>
                                        )
                                    })}
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        this.state.validated?(
                                        this.state.studentData.map(e=>{
                                            return(
                                                <TableRow key={e.enrollmentNo}>    
                                                {
                                                    this.props.fields.map(i=>{
                                                        return(
                                                            <TableCell style={{fontSize:"15px"}} align="right">{e[i]}</TableCell>
                                                        )
                                                    })
                                                }
                                    </TableRow>
                                                )
                                                })
                                        ):(
                                            <div></div>
                                        )
                                    }

                            </TableBody>
                            </Table>
                        </Paper>
                        <div  onClick={this.postData} style={{margin:"20px auto"}}>
                            <GeneralButton text="Upload&nbsp;&nbsp;Data" icon="cloud_upload" width="10vw"/>
                        </div>
                    </div>
                    ):(
                        <div onClick={this.postData} style={{margin:0,overflow:"hidden"}}>
                        <div style={{height:"38.85vw"}}>
                        </div>
                        <Footer onClick={this.postData} footer={this.state.message}></Footer>
                        </div>
                    )}

            </div>
            )
    }
}
export default MainTable;