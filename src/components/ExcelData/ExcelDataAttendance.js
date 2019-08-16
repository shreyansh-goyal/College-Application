import React, { Component } from "react";
import * as XLSX from "xlsx";
import axios from "axios";
export default class ExcelComponent extends Component {
  state = {
    name: "shreyansh",
    attendenceArray: [],
    electiveSubjectsList:[]
  };
  constructor(props)
  {
    super(props);
  }
  uploadData = () => {
    if(this.props.work=="uploadAttendance")
    {
      console.log(this.state);
      this.state.attendenceArray.forEach(e=>{
        e.semester=this.props.data.semester;
        e.courseId=this.props.data.subject;
        e.section=this.props.data.section;
        e.group=this.props.data.group;
      })
      console.log(this.state.attendenceArray);
        axios.post("https://bpitconnect.herokuapp.com/attendance",this.state.attendenceArray).then(data=>{
          console.log(data);
        })
        .catch(err=>{
          console.log(err);
        })
    }
  };
  fetchdata = event => {
    var excelRows;
    console.log(this.state);
    var reader = new FileReader();
    reader.onload = e => {
      console.log(e.target);
      var workbook = XLSX.read(e.target.result, {
        type: "binary"
      });
      var firstSheet = workbook.SheetNames[0];
      excelRows = XLSX.utils.sheet_to_row_object_array(
        workbook.Sheets[firstSheet]
      );
      console.log(excelRows);
      console.log(this.props.work)
      if(this.props.work=="uploadAttendance")
      {
        this.setState({
          attendenceArray:this.props.action(excelRows)
        })
        console.log(this.state);
      }
      if(this.props.work=="uploadElectiveSubjects")
      {
        this.setState({
          electiveSubjectsList:excelRows
        })
        this.props.sendElectiveSubjectList(this.state.electiveSubjectsList);
      }
      if(this.props.work=="gatherStudents")
      {
        console.log(this.props);
        this.props.linkData(this.props.subjectID,excelRows);
      }
      else{
        console.log(excelRows)
      }
    };

    reader.readAsBinaryString(event.target.files[0]);
  };
  render() {
    return (
      <div>
        <div className="BrowseFile">
          <input
            type="file"
            title="Browse the files"
            placeholder="somefile"
            onChange={this.fetchdata}
          />
        </div>
        {this.state.attendenceArray.length > 0 && (
          <div>
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  {console.log(this.state.attendenceArray)}
                  {Object.keys(this.state.attendenceArray[0]).map(e => {
                    return <td scope="col">{e}</td>;
                  })}
                </tr>
                {this.state.attendenceArray.map(element => {
                  return (
                    <tr>
                      {Object.keys(this.state.attendenceArray[0]).map(e => {
                        console.log(element[e]);
                        return <td scope="row">{element[e]}</td>;
                      })}
                    </tr>
                  );
                })}
              </thead>
            </table>
            <button className="btn btn-info" onClick={this.uploadData}>
              Upload The data
            </button>
          </div>
        )}
      </div>
    );
  }
}