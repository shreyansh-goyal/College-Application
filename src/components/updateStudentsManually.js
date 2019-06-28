import React,{Component} from 'react'
import axios from "axios"

class AddStudents extends Component{
    state={
        studentDetails:{}
    };
    findStudent=()=>
    {

        axios.get('https://bpitconnect.herokuapp.com/students?enrollmentNo='+parseInt(this.refs.findstudent.value)).then(data=>{
            console.log(data.data);
            this.setState({
                studentDetails:data.data[0]
            }).catch(err=>{
                console.log("this error is occured",err)
            })
        })
        console.log("hello world");
    }
    componentDidMount()
    {
        console.log(this.refs);
    }
    updateStudent=()=>
    {
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
                    <input type="text" ref="findstudent" class="form-control" placeholder="Enter Enrollment no"/>
                </div>
                <div class="form-group input-block">
                    <button style={{margin:"0 auto"}} onClick={this.findStudent}>Find the student</button>
                </div>                
                <hr/>
                <div class="form-group input-block">
                    <label>Name</label>
                    <input type="text" class="form-control" ref="name" onChange={()=>{this.setState(()=>{
                        this.state.studentDetails.studentName=this.refs.name.value;
                        return this.state})}}  placeholder={this.state.studentDetails?this.state.studentDetails.studentName:"studentName"}/>
                </div>
                <div class="form-group input-block">
                    <label>Branch</label>
                    <select ref="branch" class="form-control">
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
                    <select ref="year" onChange={()=>{this.setState(()=>{this.state.studentDetails.year=this.refs.year.value;return this.state})}}class="form-control">
                        <option>{this.state.studentDetails?this.state.studentDetails.year:"year"}</option>
                        <option>1st</option>
                        <option>2nd</option>
                        <option>3rd</option>
                        <option>4th</option>
                    </select>
                </div>
                <div class="form-group input-block">
                    <label>Section</label>
                    <input type="text" ref="section" onChange={()=>{this.setState(()=>{this.state.studentDetails.section=this.refs.section.value;return this.state})}} placeholder={this.state.studentDetails?this.state.studentDetails.section:"section"} class="form-control"/>
                </div>
                <div class="form-group input-block">
                    <label>Roll No</label>
                    <input type="text" ref="rollno" onChange={()=>{this.setState(()=>{this.state.studentDetails.rollNo=this.refs.rollNo.value;return this.state})}} class="form-control" placeholder="Enter Roll no"/>
                </div>
                <div class="form-group input-block">
                    <label>Enrollment No</label>
                    <input type="text" ref="enrollmentNo" onChange={()=>{this.setState(()=>{this.state.studentDetails.enrollmentNo=this.refs.enrollmentNo.value;return this.state})}} class="form-control"  placeholder={this.state.studentDetails?this.state.studentDetails.enrollmentNo:"enrollmentNo"} />
                </div>
                <div class="form-group input-block">
                    <label>Group</label>
                    <select ref="group" onChange={()=>{this.setState(()=>{this.state.studentDetails.group=this.refs.group.value;return this.state})}} class="form-control">
                        <option>G1</option>
                        <option>G2</option>
                    </select>
                </div>
                <div class="form-group input-block">
                    <label>Phone No</label>
                    <input type="text" ref="phoneNo" onChange={()=>{this.setState(()=>{this.state.studentDetails.phoneNo=this.refs.phoneNo.value;return this.state})}} class="form-control" placeholder={this.state.studentDetails?this.state.studentDetails.phoneNo:"phoneNo"}/>
                </div>
                <div class="form-group input-block">
                    <label>Email Id</label>
                    <input type="text" ref="email" onChange={()=>{this.setState(()=>{this.state.studentDetails.emailId=this.refs.email.value;return this.state})}} class="form-control" placeholder={this.state.studentDetails?this.state.studentDetails.emailId:"emailId"}/>
                </div>
                <div class="form-group input-block">
                    <label>Father's Name</label>
                    <input type="text" ref="Fname" class="form-control" onChange={()=>{this.setState(()=>{this.state.studentDetails.fatherName=this.refs.Fname.value;return this.state})}} placeholder={this.state.studentDetails?this.state.studentDetails.fatherName:"father's name"}/>
                </div>
                <div class="form-group input-block">
                    <label>Father's Phone Number</label>
                    <input type="text" ref="fPhoneNo" onChange={()=>{this.setState(()=>{this.state.studentDetails.fatherPhoneNo=this.refs.fPhoneNo.value;return this.state})}} class="form-control" placeholder={this.state.studentDetails?this.state.studentDetails.fatherName:"father's phone number"}/>
                </div>
                <div class="form-group input-block">
                    <label>Father's Email Id</label>
                    <input type="text" ref="fEmail"  onChange={()=>{this.setState(()=>{this.state.studentDetails.fatherPhoneNo=this.refs.fPhoneNo.value;return this.state})}} class="form-control" placeholder={this.state.studentDetails?this.state.studentDetails.emailId:"father's email Id"}/>
                </div>
                <div class="form-group input-block">
                    <label>Mother's Name</label>
                    <input type="text" ref="Mname"  class="form-control" onChange={()=>{this.setState(()=>{this.state.studentDetails.motherName=this.refs.Mname.value;return this.state})}} placeholder={this.state.studentDetails?this.state.studentDetails.motherName:"mother's name"}/>
                </div>
                <div class="form-group input-block">
                    <button className="btn btn-info" onClick={this.updateStudent}>Submit Student</button>
                </div>
            </div>
            
        )
    }
}
export default AddStudents;