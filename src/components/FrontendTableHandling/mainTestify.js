import React,{Component} from "react";
import AddStudentsExcel from "./addStudentExcel"
class mainTestify extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            arr:["libraryFine",	"rollNo","enrollmentNo",	"courseId",	"year","section","group","studentName","fatherName","motherName","gender","dob","phoneNo","fatherPhoneNo","emailId","fatherEmailId","isDropped","dropReason","aggregate",	"activeBacklogs",	"placed"	,"companyName"	,"tenPercentage"	,"twelfthPercentage"		,"diploma",	"gap",	"enteranceRank"	,"resumeUrl"	,"blockedFromDrive","libraryId","semester"],
            validation:["libraryFine",	"rollNo","enrollmentNo","courseId",	"year"]
        }
    }
    render()
    {
        return(
            <div>
                <AddStudentsExcel validation={this.state.validation} fields={this.state.arr}/>
            </div>
        )
    }
}
export default mainTestify;