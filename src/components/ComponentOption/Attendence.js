import React,{Component} from 'react'
import {Link} from "react-router-dom";
class Attendence extends Component
{
    
    constructor(props)
    {
        super(props);
        this.state={
            manual:null,
            excel:null,
            flag:1
        }
    }

    componentDidMount()
    {
        var data = this.props.location.pathname.slice(8);
        if(data=="Add Students")
        {
            this.setState({
                manual:"Add Student Through Forms",
                excel:"Add Students Through Excel"
            })
        }
        else if(data=="Update Students")
        {
            this.setState({
                manual:"Update Student Through Forms",
                excel:"Update Students Through Excel"
            })
        }
        else if(data=="Delete Students")
        {
            this.setState({
                manual:"Delete Student Through Forms",
                excel:"Delete Students Through Excel"
            })
        }
        else if(data=="Add Teachers")
        {
            this.setState({
                manual:"Add Teacher Through Forms",
                excel:"Add Teachers Through Excel"
            })
        }
        else if(data=="Update Teachers")
        {
            this.setState({
                manual:"Update Student Through Forms",
                excel:"Update Students Through Excel"
            })
        }
        else if(data=="Delete Teachers")
        {
            this.setState({
                manual:"Delete Teacher Through Forms",
                excel:"Delete Teachers Through Excel"
            })
        }
        else if(data=="Add Subject")
        {
            this.setState({
                manual:"Add Subject Through Forms",
                excel:"Add Subjects Through Excel"
            })
        }
        else if(data=="Delete Subject")
        {
            this.setState({
                manual:"Delete Student Through Forms",
                excel:"Delete Students Through Excel"
            })
        }
        else if(data=="Elective Subjects")
        {
            this.hello("Upload Elective Subject Through Forms","Upload Elective Subjects Through Excel")
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
        if(this.state.flag==1)
        {
            if(data=="Add Students")
            {
                this.hello("Add Student Through Forms","Add Students Through Excel")
            }
            else if(data=="Update Students")
            {
                this.hello("Update Student Through Forms","Update Students Through Excel")

            }
            else if(data=="Delete Students")
            {
                this.hello("Delete Student Through Forms","Delete Students Through Excel")
            }
            else if(data=="Add Teachers")
            {
                this.hello("Add Teacher Through Forms","Add Teachers Through Excel")
            }
            else if(data=="Update Teachers")
            {
                this.hello("Update Teacher Through Forms","Update Teachers Through Excel")
            }
            else if(data=="Delete Teacher")
            {
                this.hello("Delete Teacher Through Forms","Delete Teachers Through Excel")
            }
            else if(data=="Add Subject")
            {
                this.hello("Add Subject Through Forms","Add Subjects Through Excel")
            }
            else if(data=="Delete Subject")
            {
                this.hello("Delete Subject Through Forms","Delete Subjects Through Excel")
            }
            else if(data=="Elective Subjects")
            {
                this.hello("Upload Elective Subjects Through Forms","Upload Elective Subjects Through Excel")
            }
    
        }
        this.state.flag=1;
    }

    render(){
        var ManualRoute ="/manualEntry/"+this.props.match.url.slice(8);
        var ExcelRoute ="/excelEntry/"+this.props.match.url.slice(8);
                return(
                        <div className="choiceSelection" >
                                <div data-test="manual-section" style={{marginTop:"100px"}}>
                                <i data-test="manual-icon" className="material-icons" style={{display:"block",fontSize:"90px",color:"black"}}>school</i>
                                    <Link to={ManualRoute}><button data-test="manual-button" className="btn btn-primary">{this.state.manual}</button></Link>
                                </div>
                                <div data-test="excel-section">
                                <i data-test="excel-icon" className="material-icons" style={{display:"block",fontSize:"90px",color:"black"}}>folder</i>
                                    <Link to={ExcelRoute}><button data-test="excel-button" className="btn btn-primary">{this.state.excel}</button></Link>
                                </div>
                        </div>
                        )
    }
}
export default  Attendence; 