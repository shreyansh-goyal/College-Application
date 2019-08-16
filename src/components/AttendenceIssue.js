import React,{Component} from "react"
import UploadAttendanceExcel from "./Attendance/uploadAttendance"
export default class attendanceConf extends Component{
    render()
    {
        return(
            <div style={{margin:0,padding:0}}>
            <UploadAttendanceExcel/>
            </div>
        )
    }
}