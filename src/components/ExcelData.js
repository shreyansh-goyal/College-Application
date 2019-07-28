import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as XLSX from "xlsx";
import excel from "convert-excel-to-json";
class ExcelComponent extends React.Component {
  state = {
    name: "shreyansh",
    attendenceArray: []
  };
  constructor(props)
  {
    super(props);
  }
  uploadData = () => {
    console.log(this.state.attendenceArray);
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

      //Fetch the name of First Sheet.
      var firstSheet = workbook.SheetNames[0];

      //Read all rows from First Sheet into an JSON array.
      excelRows = XLSX.utils.sheet_to_row_object_array(
        workbook.Sheets[firstSheet]
      );
      console.log(excelRows);
      this.setState({
        attendenceArray: excelRows
      });
      console.log(this.props.work)
      if(this.props.work=="uploadAttendance")
      {
        this.props.action(this.state.attendenceArray);
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
export default ExcelComponent;
