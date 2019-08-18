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
import Button from '@material-ui/core/Button';
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
        fetch("https://bpitconnect.herokuapp.com/"+this.props.api,{
            method: this.props.method,
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
                'Content-Type': 'application/json',
                
            },
            redirect: 'follow', 
            referrer: 'no-referrer', 
            body: JSON.stringify(this.state.studentData),
        }).then(data=>{
            data.json().then(data=>{
                alert("Congratulations! data is uploaded");
            })
        })
        .catch(err=>{
            console.log(err);
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
            for(let m of this.props.validation)
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
        this.setState({
            studentData:excelData
        })
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
                        <Button  onClick={this.postData} variant="contained"  style={{width:"95%",fontSize:"15px",fontWeight:"500",fontFamily:"Times New Roman",margin:"10px 0"}}color="primary" >
                                    Upload Data
                        </Button>
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