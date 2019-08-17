import React, { PureComponent } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const data = [
  { name: 'Group A', value: 400}
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/pb1jwdt1/';

  constructor(props)
  {
    super(props);
    this.state={
        mainData:[],
        data:[]
    }
    this.fetchAttendance()
  }
  fetchAttendance=()=>{
      console.log("hello");
      fetch("https://bpitconnect.herokuapp.com/attendance?enrollment_no=1")
      .then(data=>{
          data.json().then(data=>{
              console.log(data,"hello this is the main data")
              var arr=[]
              for(let i in data)
              {
                var obj1={
                    name:"groupA",
                    value:data[i].totalPresent,
                    fill:"#3F51B5"
                }
                var obj2={
                    name:"groupB",
                    value:data[i].totalAbsent,
                    fill:"#CB0032"
                }
                arr.push([obj1,obj2])
              }
            this.setState({
                mainData:data,
                data:arr
            })
            console.log(this.state.data);
            })
      })
      .catch(err=>{
          console.log(err);
      })
  }
  render() {
    return (
    <div>
        <AppBar position="static" color="primary" style={{marginBottom:"10px"}}>
            <Toolbar color="primary">
                <p style={{fontSize:"30px",width:"100%",fontWeight:"500",display:"block",textAlign:"center"}}> 
                    View Your Attendance
                </p>
            </Toolbar>
        </AppBar>
      {this.state.data.map(e=>{
          return(
            <Card style={{width:"20vw",margin:"20px",height:"20vw"}}>
            <CardContent>
            <PieChart width={400} height={150}>
                                <Pie dataKey="value" startAngle={180} endAngle={0} data={e} cx={100} cy={100} outerRadius={80}  label />
            </PieChart>
            <Typography color="textSecondary" gutterBottom>
            Subject : Mathematics
            Attendance Percentage : {((e[0].value/(e[0].value+e[1].value))*100).toFixed(2)}%
            </Typography>
            </CardContent>
          </Card>      
          )
      })}  

    </div>
    );
  }
}
