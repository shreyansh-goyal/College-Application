import React,{Component} from 'react';
import axios from "axios"
import {RedditTextField} from "../../FormElements/GeneralInput";
import {GeneralButton} from "../../FormElements/GeneralButton";
import {inputArrayFields} from "./UPDATESTUDENTMANUALDATA";
import {selectArrayFields} from "./UPDATESTUDENTMANUALDATA";
import {naturalState} from "./UPDATESTUDENTMANUALDATA";
import {dateArrayField} from "./UPDATESTUDENTMANUALDATA"
const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTcwNzgxODgyLCJleHAiOjE1NzMzNzM4ODJ9.ptamzLKAqXBT8v-8k-eIZ0j2maGjiIqK--0iW6n5vaw";
var config={
  headers: {'Authorization':"bearer " + token}
}
class AddStudents extends Component{
    state={
        studentDetails:{
            ...naturalState
        }
    };
    onChange(e,name) {
        this.setState(
            {
                ...this.state,
                studentDetails:{[name]: e.target.value }
        
            })}
    findStudent=()=>
    { 
        axios.get('http://18.190.25.34:1337/students?enrollmentNo='+parseInt(this.state.studentDetails.enrollmentNo),config).then(data=>{
        console.log(data);
        if(data.data[0].enrollmentNo)
        {
            this.setState({
                studentDetails:{
                    ...data.data[0]
                }
            })  
        }
        }).catch(err=>{
            console.log("this error is occured",err)
        })
    }
    updateStudent=()=>
    {console.log(this.state);
        var obj=
        axios.put("https://bpitconnect.herokuapp.com/students/"+this.state.studentDetails.id,this.state.studentDetails).then(data=>{
            console.log("the data is updated successfully");
            this.setState({
                studentDetails:{}
            })
            console.log(this.state);
        }).catch(err=>{
            console.log("some error occured while updating the the student record",err);
        })
    }

    render()
    {
        return(
            <div style={{height:"52vw",overflowY:"scroll"}}>
                <RedditTextField
                onChange={(e)=>{this.onChange(e,"enrollmentNo")}}
                label="Enrollment Number"
                defaultValue=""
                variant="filled"
                id="reddit-input"
                />
                {/* BUTTON IS NOT CLICKABLE I HAD TO USE A DIV TO MAKE THE GENERAL BUTTON CLICKABLE */}
                <div onClick={this.findStudent}>
                <GeneralButton text="Search&nbsp;&nbsp;Student" icon="search" width="10vw"/>
                </div>
                <hr/>
               {/* 
                   PERFORMANCE ISSUES REGARDING THE INPUT ENTRIES OVER HERE
                   INPUT IS CHANGING THE STATE AND CHANGE IN THE STATE CHANGE THE INPUT
                   CAUSE A LOT OF RERENDERING
                */}
                {/*
                    WHEN WE USE THE DATEPICKER THE BUTTON MODULE IN MATERIAL UI IS SHOWING SOME INCONSISTENCY
                */}
                {
                    inputArrayFields.map(textFields=>{
                        return(
                            <RedditTextField
                            onChange={(e)=>{this.onChange(e,textFields.changeFields)}}
                            label={textFields.name}
                            value={this.state.studentDetails[textFields.changeFields]}
                            defaultValue={this.state.studentDetails[textFields.changeFields]}
                            variant="filled"
                            id="reddit-input"
                            />
                        )
                    })
                }
                {
                   dateArrayField.map(dateElement=>{
                       return(
                        <RedditTextField
                        onChange={(e)=>{this.onChange(e,dateElement.changeFields)}}
                        label={dateElement.name}
                        value={this.state.studentDetails[dateElement.changeFields]}
                        defaultValue=""
                        variant="filled"
                        id="reddit-input"
                        type="date"/>
                       )
                   }) 
                }

                {
                        selectArrayFields.map(selectFields=>{
                        return(
                            <select style={{width:"95%",margin:"20px auto",height:"4vw"}}  data-test="branch-input" onChange={(e)=>{this.onChange(e,selectFields.changeFields)}} class="form-control">
                            <option>{selectFields.name}</option>
                            {
                            selectFields.options.map(option=>{
                            return(
                                <option>{option}</option>
                            )
                            })
                            }
                            </select>
                        )
                        })
                }
                <div onClick={this.updateStudent} style={{margin:"10px"}}>
                    <GeneralButton text="Update&nbsp;&nbsp;Student" icon="cloud_upload" width="10vw"/>
                </div>

                </div>
        )
    }
}
export default AddStudents;