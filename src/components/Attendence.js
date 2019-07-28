import React,{Component} from 'react'
import Xlsx from"../../node_modules/xlsx"
import {Link} from "react-router-dom"
class Attendence extends Component
{

    render(){
        console.log(Xlsx);
        var ManualRoute ="/manualEntry/"+this.props.match.url.slice(8);
        var ExcelRoute ="/excelEntry/"+this.props.match.url.slice(8);
        // function callme(){
        //     var input= document.querySelector("input");
        //     var output={};
        //     console.log(input.files);
        //     // reader.readAsArrayBuffer(input.files[0]);
        //     reader.onload= function()
        //     {
        //         console.log("hello");
        //         console.log(reader.result);
        //         // var data = new Int8Array(reader.result);
        //         // output.value = JSON.stringify(data, null, '  ');
        //         // var workbook = Xlsx.read(data,{type:"array"});
        //         //console.log(workbook.SheetNames,"hello");
        //         var jsonobject = "hello"
        //         console.log(jsonobject);
        //     }
        // }


                return(
                        <div className="choiceSelection">
                                <div>
                                    <Link to={ManualRoute}><button >Get Attendance</button></Link>
                                </div>
                                <div>
                                    <Link to={ExcelRoute}><button>Add Through Excel</button></Link>
                                </div>
                        </div>
                        )
    }
}
export default Attendence; 