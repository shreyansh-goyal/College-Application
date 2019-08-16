import React,{Component} from 'react'
import Xlsx from"../../node_modules/xlsx"
import {Link} from "react-router-dom";
import Icon from '@material-ui/core/Icon';
import clsx from "clsx"
class Attendence extends Component
{
    
    constructor(props)
    {
        super(props);
        console.log(this.props);
        this.state={
            manual:null,
            excel:null,
            flag:1
        }
    }

    componentDidMount()
    {
        var data = this.props.location.pathname.slice(8);
        console.log(data)
        if(data=="Add Students")
        {
            this.setState({
                manual:"Add Students Through Forms",
                excel:"Add Student Through Excel"
            })
        }
        else if(data=="Update Students")
        {
            this.setState({
                manual:"Update Students Through Forms",
                excel:"Update Student Through Excel"
            })
        }
        else if(data=="DeleteStudents")
        {
            this.setState({
                manual:"Delete Students Through Forms",
                excel:"Delete Student Through Excel"
            })
        }
        else if(data=="Add Teachers")
        {
            this.setState({
                manual:"Add Teachers Through Forms",
                excel:"Add Teachers Through Excel"
            })
        }
        else if(data=="Update Teachers")
        {
            this.setState({
                manual:"Update Students Through Forms",
                excel:"Update Student Through Excel"
            })
        }
        else if(data=="Delete teacher")
        {
            this.setState({
                manual:"Delete Teachers Through Forms",
                excel:"Delete Teachers Through Excel"
            })
        }
        else if(data=="Add Subject")
        {
            this.setState({
                manual:"Add Subjects Through Forms",
                excel:"Add Subjects Through Excel"
            })
        }
        else if(data=="Delete Subject")
        {
            this.setState({
                manual:"Delete Students Through Forms",
                excel:"Delete Student Through Excel"
            })
        }
        else if(data=="ElectiveSubjects")
        {
            console.log("hello");
            this.hello("Upload Elective Subjects Through Forms","Upload Elective Subjects Through Excel")
        }
    }
    hello(a,b)
    {
    this.setState({
        flag:0,
        manual:a,
        excel:b
    })        
    }
    componentDidUpdate()
    {
        
        var data = this.props.location.pathname.slice(8);
        console.log(data)
        if(this.state.flag==1)
        {
            if(data=="Add Students")
            {
                this.hello("Add Students Through Forms","Add Student Through Excel")
            }
            else if(data=="Update Students")
            {
                this.hello("Update Students Through Forms","Update Student Through Excel")

            }
            else if(data=="DeleteStudents")
            {
                this.hello("Delete Students Through Forms","Delete Student Through Excel")
            }
            else if(data=="Add Teachers")
            {
                this.hello("Add Teachers Through Forms","Add Teachers Through Excel")
            }
            else if(data=="Update Teachers")
            {
                this.hello("Update Students Through Forms","Update Student Through Excel")
            }
            else if(data=="Delete teacher")
            {
                this.hello("Delete Teachers Through Forms","Delete Teachers Through Excel")
            }
            else if(data=="Add Subject")
            {
                this.hello("Add Subjects Through Forms","Add Subjects Through Excel")
            }
            else if(data=="Delete Subject")
            {
                this.hello("Delete Students Through Forms","Delete Student Through Excel")
            }
            else if(data=="ElectiveSubjects")
            {
                console.log("hello");
                this.hello("Upload Elective Subjects Through Forms","Upload Elective Subjects Through Excel")
            }
    
        }
        this.state.flag=1;
        console.log("Hello this is shreyansh goyal");
    }

    render(){
        console.log(Xlsx);
        var ManualRoute ="/manualEntry/"+this.props.match.url.slice(8);
        var ExcelRoute ="/excelEntry/"+this.props.match.url.slice(8);
        // function callme(){
        //     var input= document.querySelector("input");
        //     var output={};
        //     console.log(input.files);
        //     // reader.readAsArrayBuffer(input.files[0]);
        //     reader.onload= function()
        //     {
        //         console.log("hello");
        //         console.log(reader.result);
        //         // var data = new Int8Array(reader.result);
        //         // output.value = JSON.stringify(data, null, '  ');
        //         // var workbook = Xlsx.read(data,{type:"array"});
        //         //console.log(workbook.SheetNames,"hello");
        //         var jsonobject = "hello"
        //         console.log(jsonobject);
        //     }
        // }


                return(
                        <div className="choiceSelection" >
                                <div style={{marginTop:"100px"}}>
                                <i className="material-icons" style={{display:"block",fontSize:"90px",color:"black"}}>school</i>
                                    <Link to={ManualRoute}><button className="btn btn-primary">{this.state.manual}</button></Link>
                                </div>
                                <div>
                                <i className="material-icons" style={{display:"block",fontSize:"90px",color:"black"}}>folder</i>
                                    <Link to={ExcelRoute}><button className="btn btn-primary">{this.state.excel}</button></Link>
                                </div>
                        </div>
                        )
    }
}
export default  Attendence; 