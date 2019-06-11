import React,{Component} from "react"
import axios from "axios";
class DeleteTeachers extends Component{
    deleteTeacher=()=>
    {
        axios.get("https://bpitconnect.herokuapp.com/teachers?teacherId="+this.refs.teacherId.value).then(data=>{
            console.log(data.data);
            axios.delete("https://bpitconnect.herokuapp.com/teachers/"+data.data[0].id).then(data=>{
                console.log("The teacher is deleted");
                alert("the given entry is deleted")
            }).catch(err=>{
                console.log("some error is occured",err);
            })
        }).catch(err=>{
            console.log("some error is occured",err)
        })

    }
    render()
    {
        return(
            <div>
                <div class="form-group input-block">
                    <label>Enter Teacher Id</label>
                    <input type="text" ref="teacherId" class="form-control" placeholder="Enter Names"/>
                </div>
                <div style={{display:'flex',justifyContent:"center"}} class="form-group input-block">
                    <button onClick={this.deleteTeacher}>Delete Teacher</button>
                </div>
            </div>
        )
    }
}


export default DeleteTeachers