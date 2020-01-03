import React,{Component} from 'react';
import axios from "axios"
import {RedditTextField} from "../../FormElements/GeneralInput";
import {GeneralButton} from "../../FormElements/GeneralButton";
import {inputArrayFields} from "./UPDATESTUDENTMANUALDATA";
import {selectArrayFields} from "./UPDATESTUDENTMANUALDATA";
import {naturalState} from "./UPDATESTUDENTMANUALDATA";
import {dateArrayField} from "./UPDATESTUDENTMANUALDATA";
import backendField from "../../../config/backendConnectivity";
class AddStudents extends Component{
    state={
        studentDetails:{
            ...naturalState
        }
    };
    onChange(e,name) {
        if(name=="dob")
        {
            this.setState({
                studentDetails:{...this.state.studentDetails,[name]:e.target.value.slice(0,10)}
            })
        }
        else
        this.setState(
            {
                studentDetails:{...this.state.studentDetails,[name]: e.target.value }
        
            })}
    findStudent=()=>
    { 
        axios.get(backendField.baseUrl+'/students?enrollmentNo='+parseInt(this.state.studentDetails.enrollmentNo)).then(data=>{
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
        var obj={
            ...this.state.studentDetails.enrollmentNo,
            ...this.state.studentDetails.section,
            ...this.state.studentDetails.rollNo,
            ...this.state.studentDetails.enrollmentNo,
            ...this.state.studentDetails.phoneNo,
            ...this.state.studentDetails.emailId,
            ...this.state.studentDetails.fatherName,
            ...this.state.studentDetails.fatherPhoneNo,
            ...this.state.studentDetails.fatherEmailId,
            ...this.state.studentDetails.motherName,
            ...this.state.studentDetails.gender,
            ...this.state.studentDetails.dob,
            ...this.state.studentDetails.aggregate,
            ...this.state.studentDetails.activeBacklogs,
            ...this.state.studentDetails.placed,
            ...this.state.studentDetails.companyName,
            ...this.state.studentDetails.tenPercentage,
            ...this.state.studentDetails.twelfthPercentage,
            ...this.state.studentDetails.diploma,
            ...this.state.studentDetails.gap,
            ...this.state.studentDetails.enteranceRank,
            ...this.state.studentDetails.resumeUrl,
            ...this.state.studentDetails.blockedFromDrive,
            ...this.state.studentDetails.libraryId,
            ...this.state.studentDetails.libraryFine,
            ...this.state.studentDetails.branch,
            ...this.state.studentDetails.year,
            ...this.state.studentDetails.group,
            ...this.state.studentDetails.semester
        }
        axios.put(backendField.baseUrl+"/students/"+this.state.studentDetails.id,obj).then(data=>{
            console.log("the data is updated successfully");
            console.log(data);
            this.setState({
                studentDetails:{
                    ...naturalState
                }
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
                value={this.state.studentDetails.enrollmentNo}
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