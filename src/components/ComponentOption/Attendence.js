import React,{Component} from 'react'
import {Link} from "react-router-dom";
import "./Attendance.css";
import Button from '@material-ui/core/Button';

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
                manual:"Update Student Through Forms"
            })
        }
        else if(data=="Delete Students")
        {
            this.setState({
                manual:"Delete Student Through Forms"
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
                manual:"Update Student Through Forms"
            })
        }
        else if(data=="Delete Teachers")
        {
            this.setState({
                manual:"Delete Teacher Through Forms"
            })
        }
        else if(data=="Add Subjects")
        {
            this.setState({
                manual:"Add Subject Through Forms",
                excel:"Add Subjects Through Excel"
            })
        }
        else if(data=="Delete Subject")
        {
            this.setState({
                manual:"Delete Student Through Forms"
            })
        }
        else if(data=="Add Subjects")
        {
            this.setState({manual:"Upload  Subject Through Forms",excel:"Upload  Subjects Through Excel"})
        }
        else if(data="Elective Subjects")
        {
            this.setState({excel:"Upload the Elective Subjects"})
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
                this.hello("Update Student Through Forms")

            }
            else if(data=="Delete Students")
            {
                this.hello("Delete Student Through Forms")
            }
            else if(data=="Add Teachers")
            {
                this.hello("Add Teacher Through Forms","Add Teachers Through Excel")
            }
            else if(data=="Update Teachers")
            {
                this.hello("Update Teacher Through Forms")
            }
            else if(data=="Delete Teachers")
            {
                this.hello("Delete Teacher Through Forms")
            }
            else if(data=="Add Subjects")
            {
                this.hello("Add Subject Through Forms","Add Subjects Through Excel")
            }
            else if(data=="Delete Subject")
            {
                this.hello("Delete Subject Through Forms")
            }
            else if(data=="Elective Subjects")
            {
                this.hello(undefined,"Upload the Elective Subjects")
            }
    
        }
        this.state.flag=1;
    }

    render(){
        var ManualRoute ="/manualEntry/"+this.props.match.url.slice(8);
        var ExcelRoute ="/excelEntry/"+this.props.match.url.slice(8);
                return(
                        <div className="choiceSelection">
                                {this.state.excel?
                                (this.state.manual?
                                <div data-test="excel-section" className="style1 extraStyle">
                                    <i data-test="excel-icon" className="material-icons style3">folder</i>
                                    <Link to={ExcelRoute}><Button data-test="excel-button" className="btn btn-primary">{this.state.excel}</Button></Link>
                                </div>
                                :
                                <div data-test="excel-section" className="style2">
                                <i data-test="excel-icon"  className="material-icons style3">folder</i>
                                    <Link to={ExcelRoute}><Button>{this.state.excel}</Button></Link>
                                </div>
                                ):""
                                }
                                {this.state.manual?(this.state.excel?
                                <div data-test="manual-section" >
                                <i data-test="manual-icon" className="material-icons style3" >school</i>
                                    <Link to={ManualRoute}><Button data-test="manual-button" className="btn btn-primary">{this.state.manual}</Button></Link>
                                </div>:
                                <div data-test="manual-section" className="style2">
                                <i data-test="manual-icon" className="material-icons style3">school</i>
                                    <Link to={ManualRoute}><Button data-test="manual-button" className="btn btn-primary">{this.state.manual}</Button></Link>
                                </div>):""                                
                                }


                        </div>
                        )
    }
}
export default  Attendence; 