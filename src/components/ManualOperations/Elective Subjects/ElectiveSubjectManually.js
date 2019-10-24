import React,{Component} from "react";
import {inputArrayField} from "./ELECTIVESUBJECTSMANUALDATA";
import {RedditTextField} from '../../FormElements/GeneralInput';
import {multiOptionsField} from "./ELECTIVESUBJECTSMANUALDATA";
import {GeneralButton} from "../../FormElements/GeneralButton";
class electiveManual extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            subjectId:null,
            subjectName:null,
            courseId:null,
            subjectCode:null,
            semester:null,
            lab:null,
            credit:null,
            isElective:null,
            isTaught:null,
            recommandedBook1:null,
            recommandedBook2:null,
            teacherId:null
        }
    }
    onChange(e,name) {
        console.log(e);
        this.setState({ [name]: e.target.value });
    }
    uploadData=()=>{
        console.log(this.state);
        fetch("http://18.190.25.34:1337/subjects",{
                method: 'POST',
                mode: 'cors', 
                cache: 'no-cache', 
                credentials: 'same-origin', 
                headers: {
                    'Content-Type': 'application/json',
                    
                },
                redirect: 'follow', 
                referrer: 'no-referrer', 
                body: JSON.stringify(this.state),
            }).then(()=>{
                alert("Congratulation The Data is Uploaded!")
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    // updateState(e,updateArgument)
    // {
    //     console.log(e,updateArgument);
    //     if(updateArgument=="semester")
    //     {
    //         console.log("In the semester");
    //         switch(e)
    //         {
    //             case 1:{
    //                 this.setState({
    //                     semester:1
    //                 })
    //                 break;
    //             }
    //             case 2:{
    //                 this.setState({
    //                     semester:2
    //                 })
    //                 break;
    //             }
    //             case 3:{
    //                 this.setState({
    //                     semester:3
    //                 })
    //                 break;
    //             }
    //             case 4:{
    //                 this.setState({
    //                     semester:4
    //                 })
    //                 break;
    //             }
    //             case 5:{
    //                 this.setState({
    //                     semester:5
    //                 })
    //                 break;
    //             }
    //             case 6:{
    //                 this.setState({
    //                     semester:6
    //                 })
    //                 break;
    //             }
    //             case 7:{
    //                 this.setState({
    //                     semester:7
    //                 })
    //                 break;
    //             }
    //             case 8:{
    //                 this.setState({
    //                     semester:8
    //                 })
    //                 break;
    //             }
    //         }

    //     }
    //     else
    //     {
    //         this.setState({
    //             [updateArgument]:e.target.value
    //         })
    //     }
    //     console.log(this.state);
    // }

    render()
    {
        return(
            <div style={{height:"50.4vw",overflowY:"scroll"}}>
                {
                    inputArrayField.map(textField=>{
                        return(
                            <RedditTextField
                            onChange={(e)=>{this.onChange(e,textField.changeField)}}
                            label={textField.name}
                            defaultValue=""
                            variant="filled"
                            id="reddit-input"
                            />
                        )
                    })
                }
                {
                    multiOptionsField.map(selectFields=>{
                        return(
                          <select style={{width:"95%",margin:"20px auto",height:"4vw"}}  data-test="branch-input" onChange={(e)=>{this.onChange(e,selectFields.changeField)}} class="form-control">
                          <option>{selectFields.name}</option>
                          {
                          selectFields.options.map(option=>{
                            return(
                              <option>{option}</option>
                            )
                          })
                          }
                          </select>
                        )
                      })
                }
                <div onClick={this.uploadData} style={{margin:"10px"}}>
                    <GeneralButton text="Upload&nbsp;&nbsp;Elective&nbsp;&nbsp;Subjects" icon="cloud_upload" width="15vw"/>
                </div>

                {/* <AppBar  position="static" color="primary">
                    <Toolbar> 
                        <p style={{width:"100%",fontSize:"30px",fontWeight:"500",textAlign:"center"}}>
                            Upload The Subjects for the teachers    
                        </p>
                    </Toolbar>
                </AppBar> */}
                {/* <div style={{overflowY:"scroll",height:"570px"}}>
                <FormControl style={{width:"70%"}}> 
                    <TextField
                        required
                        label="Subject Id"
                        id="standard-required"
                        margin="normal"
                        style={{width:"70%"}}
                        onChange={(e)=>{this.updateState(e,"subjectId")}}
                    />
                    </FormControl>
                    <FormControl style={{width:"70%"}}> 
                    <TextField
                        required
                        label="Subject Code"
                        id="standard-required"
                        margin="normal"
                        style={{width:"70%"}}
                        onChange={(e)=>{this.updateState(e,"subjectCode")}}
                    />
                    </FormControl>
                    <FormControl style={{width:"70%"}}> 
                    <TextField
                        required
                        label="Course Id"
                        id="standard-required"
                        margin="normal"
                        style={{width:"70%"}}
                        onChange={(e)=>{this.updateState(e,"courseId")}}
                    />
                    </FormControl>
                    <FormControl style={{width:"50%",marginRight:"20%"}}> 
                        <InputLabel htmlFor="age-simple">Semester</InputLabel>
                        <Select
                            inputProps={{
                                name: 'age',
                                id: 'age-simple',
                            }}
                            value={this.state.semester}
                            onClick={(e)=>{this.updateState(e.target.value,"semester")}}
                            >
                            <MenuItem value={1}>1st</MenuItem>
                            <MenuItem value={2}>2nd</MenuItem>
                            <MenuItem value={3}>3rd</MenuItem>
                            <MenuItem value={4}>4th</MenuItem>
                            <MenuItem value={5}>5th</MenuItem>
                            <MenuItem value={6}>6th</MenuItem>
                            <MenuItem value={7}>7th</MenuItem>
                            <MenuItem value={8}>8th</MenuItem>
                        </Select>
                        </FormControl>
                        <FormControl style={{width:"70%"}}> 
                        <TextField
                            required
                            label="Subject Name"
                            id="standard-required"
                            margin="normal"
                            style={{width:"70%"}}
                            onChange={(e)=>{this.updateState(e,"subjectName")}}
                        />
                        </FormControl>
                        <FormControl style={{width:"70%"}}> 
                        <TextField
                        required
                        label="lab"
                        id="standard-required"
                        margin="normal"
                        style={{width:"70%"}}
                        onChange={(e)=>{this.updateState(e,"lab")}}
                    />
                    </FormControl>
                    <FormControl style={{width:"70%"}}> 
                    <TextField
                        required
                        label="Credit"
                        id="standard-required"
                        margin="normal"
                        style={{width:"70%"}}
                        onChange={(e)=>{this.updateState(e,"credit")}}
                    />
                    </FormControl>
                    <FormControl style={{width:"70%"}}> 
                    <TextField
                        required
                        label="Is Elective"
                        id="standard-required"
                        margin="normal"
                        style={{width:"70%"}}
                        onChange={(e)=>{this.updateState(e,"isElective")}}
                    />
                    </FormControl>
                    <FormControl style={{width:"70%"}}> 
                    <TextField
                        required
                        label="is Taught"
                        id="standard-required"
                        margin="normal"
                        style={{width:"70%"}}
                        onChange={(e)=>{this.updateState(e,"isTaught")}}
                    />
                    </FormControl>
                    <FormControl style={{width:"70%"}}> 
                    <TextField
                        required
                        label="Recommanded Book 1"
                        id="standard-required"
                        margin="normal"
                        style={{width:"70%"}}
                        onChange={(e)=>{this.updateState(e,"recommandedBook1")}}
                    />
                    </FormControl>
                    <FormControl style={{width:"70%"}}> 
                    <TextField
                        required
                        label="Recommended Book 2"
                        id="standard-required"
                        margin="normal"
                        style={{width:"70%"}}
                        onChange={(e)=>{this.updateState(e,"recommandedBook2")}}
                    />
                    </FormControl>
                    <FormControl style={{width:"70%"}}> 
                    <TextField
                        required
                        label="Teacher Id"
                        id="standard-required"
                        margin="normal"
                        style={{width:"70%"}}
                        onChange={(e)=>{this.updateState(e,"teacherId")}}
                    />
                    </FormControl>
                    <div>
                    <Button variant="contained" onClick={this.uploadData} color="primary" style={{fontWeight:"800",marginTop:"10px"}} >
                            Upload To The DataBase
                    </Button>
                    </div>
                </div> */}
                </div>
        )
    }
} 
export default electiveManual;