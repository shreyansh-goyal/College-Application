import React,{Component} from "react";
import {anayticsController} from "./Analytics"


class analyticsWrapper extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            semester:null,
            branch:null,
            section:null,
            group:null,
            teacher:null,
            skip:null,
            limit:null,
            data:[]
        };

    }

    fetchRecords=()=>
    {
    console.log(this.state);
    if(this.state.semester&&this.state.courseId&&this.state.group&&this.state.section)
    {
        if(this.state.limit)
        {
        fetch("https://bpitconnect.herokuapp.com/attendance?semester="+this.state.semester+"&courseId="+this.state.courseId+"&group="+this.state.group+"&section="+this.state.section+"&_limit="+this.state.limit+"&_start="+this.state.skip).then((response)=>{
            response.json().then(data=>{
            this.setState({
                data
            })

            })
        })
        }
        else
        {
        fetch("https://bpitconnect.herokuapp.com/attendance?semester="+this.state.semester+"&courseId="+this.state.courseId+"&group="+this.state.group+"&section="+this.state.section).then((response)=>{
            response.json().then(data=>{
                this.setState({
                    data
                })
            })
        })
        }
    
    }
    else if(this.state.semester&&this.state.courseId&&this.state.section)
    {
        if(this.state.limit)
        {
        fetch("https://bpitconnect.herokuapp.com/attendance?semester="+this.state.semester+"&courseId="+this.state.courseId+"&section="+this.state.section+"&_limit="+this.state.limit+"&_start="+this.state.skip).then((response)=>{
            response.json().then(data=>{
                this.setState({
                    data
                })
            })
        })
        }
        else
        {
        fetch("https://bpitconnect.herokuapp.com/attendance?semester="+this.state.semester+"&courseId="+this.state.courseId+"&section="+this.state.section+"&_limit="+this.state.limit).then((response)=>{
            response.json().then(data=>{
                this.setState({
                    data
                })
            })
        })
        }
    
    }
    else if(this.state.semester&&this.state.courseId)
    {
        if(this.state.limit)
        {
        fetch("https://bpitconnect.herokuapp.com/attendance?semester="+this.state.semester+"&courseId="+this.state.courseId+"&limit="+this.state.limit+"&_start="+this.state.skip).then((response)=>{
        
            response.json().then(data=>{
                this.setState({
                    data
                })
            })
        })      
        }
        else
        {
        fetch("https://bpitconnect.herokuapp.com/attendance?semester="+this.state.semester+"&courseId="+this.state.courseId).then((response)=>{
        
            response.json().then(data=>{
                this.setState({
                    data
                })
            })
        })
        }
    
    }
    else if(this.state.semester)
    {
        if(this.state.limit)
        {
        fetch("https://bpitconnect.herokuapp.com/attendance?semester="+this.state.semester+"?_limit="+this.state.limit+"&_start="+this.state.skip).then((response)=>{
            response.json().then(data=>{
                this.setState({
                    data
                })
            })
        })
        }
        else
        {
        fetch("https://bpitconnect.herokuapp.com/attendance?semester="+this.state.semester).then((response)=>{
            response.json().then(data=>{
                this.setState({
                    data
                })
            })
        })
        }
    }
    else if(this.state.courseId)
    {
        if(this.state.limit)
        {
        fetch("https://bpitconnect.herokuapp.com/attendance?courseId="+this.state.courseId+"&_limit="+this.state.limit+"&_start="+this.state.skip).then((response)=>{
            
            response.json().then(data=>{
                this.setState({
                    data
                })
            })
        })
        }
        else
        {
        fetch("https://bpitconnect.herokuapp.com/attendance?courseId="+this.state.courseId).then((response)=>{
            
            response.json().then(data=>{
                this.setState({
                    data
                })
            })
        })
        }
    }
    else if(this.state.section)
    {
        if(this.state.limit)
        {
        fetch("https://bpitconnect.herokuapp.com/attendance?group="+this.state.group+"&_limit="+this.state.limit+"&_start="+this.state.skip).then((response)=>{
            
            response.json().then(data=>{
                this.setState({
                    data
                })
            })
        })
        }
        else
        {
        fetch("https://bpitconnect.herokuapp.com/attendance?group="+this.state.group).then((response)=>{
            
            response.json().then(data=>{
                this.setState({
                    data
                })
            })
        })
        }
    }
    else if(this.state.group)
    {
        if(this.state.limit)
        {
        fetch("https://bpitconnect.herokuapp.com/attendance?section="+this.state.section+"&_limit="+this.state.limit+"&_start="+this.state.skip).then((response)=>{
            
            response.json().then(data=>{
                this.setState({
                    data
                })
            })
        })
        }
        else
        {
        fetch("https://bpitconnect.herokuapp.com/attendance?section="+this.state.section).then((response)=>{
            
            response.json().then(data=>{
                this.setState({
                    data
                })
            })
        })
        }
    }

    }

    handleChange=(e)=>
    {
    
      switch(e.target.name)
      {
        case "semester":{
          console.log(this.state)
          this.setState({
            semester:e.target.value
        })
          break;
        }
        case "branch":{
            this.setState({
                courseId:e.target.value
            })
          break;
        }
        case "section":{
        this.setState({
            section:e.target.value
        })
          break;
        }
        case "group":{
            this.setState({
                group:e.target.value
            })
          break;
        }
        case "teacher":{
            this.setState({
                teacher:e.target.value
            })
          break;
        }
        case "limit":{
            this.setState({
                limit:e.target.value
            })
          break;
        }
        case "skip":{
            this.setState({
                skip:e.target.value
            })
          break;
        }
      }
    }    
    render()
    {
        return (
            <div>
                hello
                <anayticsController/>
            </div>
        )
    }
}


export default analyticsWrapper;