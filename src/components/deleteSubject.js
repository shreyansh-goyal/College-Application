import React,{Component} from "react"
import axios from "axios";

class deleteSubject extends Component{
deleteSubject=()=>{
    axios.get("https://bpitconnect.herokuapp.com/subjects?subjectId="+this.refs.subjectId).then(data=>{
        axios.delete("https://bpitconnect.herokuapp.com/subjects/"+data.data.id).then(data=>{
            alert("success");
        });
    })
}
    render()
 {
     return(
         <div>
    <div class="form-group input-block">
        <label>Subject Id</label>
        <input type="text" ref="subjectId"  class="form-control" placeholder="Enter Names"/>
    </div>
    <button onClick={this.deleteSubject}>delete Subject</button>
    </div>
)
 }   
}
export default deleteSubject