import React, { PureComponent } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import BackendConfig from "../../config/backendConnectivity";
import {titleCase} from "../../services/Common.service";
const data = [
  { name: 'Group A', value: 400}
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/pb1jwdt1/';

  constructor(props)
  {
    super(props);
    this.state={
        display:false,
        data:[],
        subject:""
    }
    this.fetchAttendance();
  }
  fetchAttendance=()=>{
      let enrollmentNo= localStorage.getItem("id");
      axios.get(BackendConfig.baseUrl+"/attendance?enrollment_no="+enrollmentNo)
      .then(data=>{
              let arr=[];
              let promises=[];
              let subjectData=[];
              for(let i in data.data)
              {
                console.log(data.data[i]);
                let pr=axios.get(BackendConfig.baseUrl+"/subjects?subjectId="+data.data[i].subject_id);
                pr.then(data=>{
                  let subjectId=data.data[0].subjectId;
                  let subjectName=data.data[0].subjectName;
                  var obj={
                    subjectId,
                    subjectName
                  }
                  subjectData.push(obj);
                }).
                catch(err=>{
                  console.log(err);
                })
                promises.push(pr);
              }
              axios.all(promises).then(element=>{
                for(let i in data.data)
                {
                  var obj1={
                      name:"groupA",
                      value:data.data[i].totalPresent,
                      fill:"#3F51B5"
                  }
                  var obj2={
                      name:"groupB",
                      value:data.data[i].totalAbsent,
                      fill:"#CB0032"
                  }
                  let index=subjectData.findIndex(element=>{
                    if(element.subjectId==data.data[i].subject_id)
                    {
                      return true
                    }
                  })
                  arr.push([[obj1,obj2],subjectData[index].subjectName]);
                  }  
                this.setState({
                  data:arr,
                  display:true,
                  subject:data
              })
              })
              .catch(err=>{
                alert("there is some error");
                console.log(err);
              })
            })

      .catch(err=>{
          console.log(err);
      })
  }
  render() {
    return (
    <div style={{height:"89vh",overflowY:"scroll"}}>
        <AppBar position="static" color="primary" style={{marginBottom:"10px"}}>
            <Toolbar color="primary">
                <p style={{fontSize:"30px",width:"100%",fontWeight:"500",display:"block",textAlign:"center"}}> 
                    View Your Attendance
                </p>
            </Toolbar>
        </AppBar>
        <div style={{display:"flex",justifyContent:"center"}}>
      {this.state.data.length?this.state.data.map(e=>{
          return( 
            <Card style={{width:"21vw",margin:"20px",height:"18vw",display:"flex"}}>
            <CardContent>
            <PieChart width={220} height={150}>
                <Pie dataKey="value" startAngle={180} endAngle={0} data={e[0]} cx={120} cy={120} outerRadius={80}  label />
            </PieChart>
            <div>
              <p style={{fontSize:"15px"}}>Subject : {titleCase(e[1])}</p>
              <p style={{fontSize:"15px"}}>Attendance Percentage : {((e[0][0].value/(e[0][0].value+e[0][1].value))*100).toFixed(2)}% </p>
            </div>
            </CardContent>
          </Card>
          )
      }):""
    }  
          </div>
    </div>
    );
  }
}
