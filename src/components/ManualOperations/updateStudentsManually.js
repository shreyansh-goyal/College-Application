import React,{Component} from 'react'
import axios from "axios"

class AddStudents extends Component{
    state={
        studentDetails:{}
    };
    findStudent=()=>
    {
        axios.get('https://bpitconnect.herokuapp.com/students?enrollmentNo='+parseInt(this.refs.findstudent.value)).then(data=>{
        console.log(data);        
        this.setState({
            studentDetails:data.data[0]
        })
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
            <div>
                <div class="form-group input-block">
                    <label>Enrollment number</label>
                    <input data-test="enrollment-no" type="text" ref="findstudent" class="form-control" placeholder="Enter Enrollment no"/>
                </div>
                <div class="form-group input-block">
                    <button data-test="find-student" className="btn btn-info" style={{margin:"0 auto"}} onClick={this.findStudent}>Find the student</button>
                </div>                
                <hr/>
                <div class="form-group input-block">
                    <label>Name</label>
                    <input  data-test="name" type="text" class="form-control" ref="name" onChange={(e)=>{this.setState({studentDetails:{...this.state.studentDetails,studentName:e.target.value}})}}  placeholder={this.state.studentDetails?this.state.studentDetails.studentName:"studentName"}/>
                </div>
                <div class="form-group input-block">
                    <label>Branch</label>
                    <select data-test="branch" onChange={(e)=>{this.setState({studentDetails:{...this.state.studentDetails,branch:e.target.value}})}} class="form-control">
                        <option>CSE</option>
                        <option>IT</option>
                        <option>ECE</option>
                        <option>EEE</option>
                        <option>MBA</option>
                        <option>BBA</option>
                    </select>
                </div>
                <div class="form-group input-block">
                    <label>Year</label>
                    <select data-test="year" ref="year" onChange={(e)=>{this.setState({...this.state.studentDetails,studentDetails:{year:e.target.value}})}} class="form-control">
                        <option>{this.state.studentDetails?this.state.studentDetails.year:"year"}</option>
                        <option>1st</option>
                        <option>2nd</option>
                        <option>3rd</option>
                        <option>4th</option>
                    </select>
                </div>
                <div class="form-group input-block">
                    <label>Section</label>
                    <input data-test="section" type="text" ref="section" onChange={(e)=>{this.setState({studentDetails:{...this.state.studentDetails,section:e.target.value}})}} placeholder={this.state.studentDetails?this.state.studentDetails.section:"section"} class="form-control"/>
                </div>
                <div class="form-group input-block">
                    <label>Roll No</label>
                    <input data-test="roll-no" type="text" ref="rollno" onChange={(e)=>{this.setState({studentDetails:{...this.state.studentDetails,rollNo:e.target.value}})}} class="form-control" placeholder="Enter Roll no"/>
                </div>
                <div class="form-group input-block">
                    <label>Enrollment No</label>
                    <input data-test="Enrollment-no"type="text" ref="enrollmentNo" onChange={(e)=>{this.setState({studentDetails:{...this.state.studentDetails,enrollmentNo:e.target.value}})}} class="form-control"  placeholder={this.state.studentDetails?this.state.studentDetails.enrollmentNo:"enrollmentNo"} />
                </div>
                <div class="form-group input-block">
                    <label>Group</label>
                    <select data-test="group" ref="group" onChange={(e)=>{this.setState({studentDetails:{...this.state.studentDetails,group:e.target.value}})}} class="form-control">
                        <option>G1</option>
                        <option>G2</option>
                    </select>
                </div>
                <div data-test="pno" class="form-group input-block">
                    <label>Phone No</label>
                    <input data-test="phone-no" type="text" ref="phoneNo" onChange={(e)=>{this.setState({studentDetails:{...this.state.studentDetails,phoneNo:e.target.value}})}} class="form-control" placeholder={this.state.studentDetails?this.state.studentDetails.phoneNo:"phoneNo"}/>
                </div>
                <div data-test="email" class="form-group input-block">
                    <label>Email Id</label>
                    <input data-test="emaidId" type="text" ref="email" onChange={(e)=>{this.setState({studentDetails:{...this.state.studentDetails,emailId:e.target.value}})}} class="form-control" placeholder={this.state.studentDetails?this.state.studentDetails.emailId:"emailId"}/>
                </div>
                <div class="form-group input-block">
                    <label>Father's Name</label>
                    <input data-test="father-name" type="text" ref="Fname" class="form-control" onChange={(e)=>{this.setState({studentDetails:{...this.state.studentDetails,fatherName:e.target.value}})}} placeholder={this.state.studentDetails?this.state.studentDetails.fatherName:"father's name"}/>
                </div>
                <div class="form-group input-block">
                    <label>Father's Phone Number</label>
                    <input data-test="father-phone" type="text" ref="fPhoneNo" onChange={(e)=>{this.setState({studentDetails:{...this.state.studentDetails,fatherPhoneNo:e.target.value}})}} class="form-control" placeholder={this.state.studentDetails?this.state.studentDetails.fatherName:"father's phone number"}/>
                </div>
                <div class="form-group input-block">
                    <label>Father's Email Id</label>
                    <input type="text" data-test="fEmail" ref="fEmail"  onChange={(e)=>{this.setState({studentDetails:{...this.state.studentDetails,fatherEmailId:e.target.value}})}} class="form-control" placeholder={this.state.studentDetails?this.state.studentDetails.emailId:"father's email Id"}/>
                </div>
                <div class="form-group input-block">
                    <label>Mother's Name</label>
                    <input data-test="Mname" type="text" ref="Mname"  class="form-control" onChange={(e)=>{this.setState({studentDetails:{motherName:e.target.value}})}} placeholder={this.state.studentDetails?this.state.studentDetails.motherName:"mother's name"}/>
                </div>
                <div class="form-group input-block">
                    <button data-test="update-student" className="btn btn-info" onClick={this.updateStudent}>Submit Student</button>
                </div>
            </div>
        )
    }
}
export default AddStudents;