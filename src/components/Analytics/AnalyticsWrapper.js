import React, { Component } from "react";
import axios from "axios";
import { anayticsController } from "./Analytics";
import AppBar from '@material-ui/core/AppBar';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import backendConfig from "../../config/backendConnectivity";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import { white } from "material-ui/styles/colors";
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export function SpringModal(props) {



  return (
    <div>

    </div>
  );
}


class analyticsWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      semester: null,
      branch: null,
      section: null,
      group: null,
      teacher: null,
      skip: null,
      limit: null,
      data: [],
      message:[],
      open:false
    
    };
  }
  sendMail=()=>{
    let enrollmentArray=this.state.message.map(element=>{
      return element.enrollment_no
    })
    let promiseArr=[];
    let mailArr=[]
    for(let i of enrollmentArray)
    {
        var prms= axios.get(backendConfig.baseUrl+'/students?enrollmentNo='+i);
        prms.then(data=>{
          mailArr.push(data.data[0].emailId)
        })
        promiseArr.push(prms);
    }
    let mailPromiseArray=[];
    axios.all(promiseArr).then(()=>{
      console.log(mailArr); 
      for(let i of mailArr)
      {
        var prms=axios.post(backendConfig.baseUrl+'/email',{
          from:"shreyanshgoyal90@gmail.com",
          to:i,
          subject:this.state.mailSubject,
          html:("<h1>"+this.state.mailMessage+"</h1>")
        })
        mailPromiseArray.push(prms);
      }
      axios.all(mailPromiseArray).then(()=>{
        alert("All the data is uploaded successfully")
      })
      .catch(err=>{
        console.log(err);
        alert("The Mails are not sended successfully");
      })
    })
  }
  handleOpen=()=>
  {
    this.setState({
      open:true
    })
  }
  handleClose=()=>{
    this.setState({
      open:false
    })
  }
  fetchRecords = () => {
    if (
      this.state.semester &&
      this.state.courseId &&
      this.state.group &&
      this.state.section
    ) {
      if (this.state.limit) {
        fetch(
          backendConfig.baseUrl+"/attendance?semester=" +
            this.state.semester +
            "&courseId=" +
            this.state.courseId +
            "&group=" +
            this.state.group +
            "&section=" +
            this.state.section +
            "&_limit=" +
            this.state.limit +
            "&_start=" +
            this.state.skip
        ).then(response => {
          response.json().then(data => {
            this.setState({
              data
            });
          });
        });
      } else {
        fetch(
          backendConfig.baseUrl+"/attendance?semester=" +
            this.state.semester +
            "&courseId=" +
            this.state.courseId +
            "&group=" +
            this.state.group +
            "&section=" +
            this.state.section
        ).then(response => {
          response.json().then(data => {
            this.setState({
              data
            });
          });
        });
      }
    } else if (
      this.state.semester &&
      this.state.courseId &&
      this.state.section
    ) {
      if (this.state.limit) {
        fetch(
          backendConfig.baseUrl+"/attendance?semester=" +
            this.state.semester +
            "&courseId=" +
            this.state.courseId +
            "&section=" +
            this.state.section +
            "&_limit=" +
            this.state.limit +
            "&_start=" +
            this.state.skip
        ).then(response => {
          response.json().then(data => {
            this.setState({
              data
            });
          });
        });
      } else {
        fetch(
          backendConfig.baseUrl+"/attendance?semester=" +
            this.state.semester +
            "&courseId=" +
            this.state.courseId +
            "&section=" +
            this.state.section +
            "&_limit=" +
            this.state.limit
        ).then(response => {
          response.json().then(data => {
            this.setState({
              data
            });
          });
        });
      }
    } else if (this.state.semester && this.state.courseId) {
      if (this.state.limit) {
        fetch(
          backendConfig.baseUrl+"/attendance?semester=" +
            this.state.semester +
            "&courseId=" +
            this.state.courseId +
            "&limit=" +
            this.state.limit +
            "&_start=" +
            this.state.skip
        ).then(response => {
          response.json().then(data => {
            this.setState({
              data
            });
          });
        });
      } else {
        fetch(
          backendConfig.baseUrl+"/attendance?semester=" +
            this.state.semester +
            "&courseId=" +
            this.state.courseId
        ).then(response => {
          response.json().then(data => {
            this.setState({
              data
            });
          });
        });
      }
    } else if (this.state.semester) {
      if (this.state.limit) {
        fetch(
          backendConfig.baseUrl+"/attendance?semester=" +
            this.state.semester +
            "?_limit=" +
            this.state.limit +
            "&_start=" +
            this.state.skip
        ).then(response => {
          response.json().then(data => {
            this.setState({
              data
            });
          });
        });
      } else {
        fetch(
          backendConfig.baseUrl+"/attendance?semester=" +
            this.state.semester
        ).then(response => {
          response.json().then(data => {
            console.log(data);
            this.setState({
              data
            });
            console.log(data);
          });
        });
      }
    } else if (this.state.courseId) {
      if (this.state.limit) {
        fetch(
          backendConfig.baseUrl+"/attendance?courseId=" +
            this.state.courseId +
            "&_limit=" +
            this.state.limit +
            "&_start=" +
            this.state.skip
        ).then(response => {
          response.json().then(data => {
            this.setState({
              data
            });
          });
        });
      } else {
        fetch(
          backendConfig.baseUrl+"/attendance?courseId=" +
            this.state.courseId
        ).then(response => {
          response.json().then(data => {
            this.setState({
              data
            });
          });
        });
      }
    } else if (this.state.section) {
      if (this.state.limit) {
        fetch(
          backendConfig.baseUrl+"/attendance?group=" +
            this.state.group +
            "&_limit=" +
            this.state.limit +
            "&_start=" +
            this.state.skip
        ).then(response => {
          response.json().then(data => {
            this.setState({
              data
            });
          });
        });
      } else {
        fetch(
          backendConfig.baseUrl+"/attendance?group=" +
            this.state.group
        ).then(response => {
          response.json().then(data => {
            this.setState({
              data
            });
          });
        });
      }
    } else if (this.state.group) {
      if (this.state.limit) {
        fetch(
          backendConfig.baseUrl+"/attendance?section=" +
            this.state.section +
            "&_limit=" +
            this.state.limit +
            "&_start=" +
            this.state.skip
        ).then(response => {
          response.json().then(data => {
            this.setState({
              data
            });
          });
        });
      } else {
        fetch(
          backendConfig.baseUrl+"/attendance?section=" +
            this.state.section
        ).then(response => {
          response.json().then(data => {
            this.setState({
              data
            });
          });
        });
      }
    }
  };

  handleChange = e => {
    switch (e.target.name) {
      case "semester": {
        console.log(this.state);
        this.setState({
          semester: e.target.value
        });
        break;
      }
      case "branch": {
        this.setState({
          branch: e.target.value
        });
        break;
      }
      case "section": {
        this.setState({
          section: e.target.value
        });
        break;
      }
      case "group": {
        this.setState({
          group: e.target.value
        });
        break;
      }
      case "teacher": {
        this.setState({
          teacher: e.target.value
        });
        break;
      }
      case "limit": {
        this.setState({
          limit: e.target.value
        });
        break;
      }
      case "skip": {
        this.setState({
          skip: e.target.value
        });
        break;
      }
      case "MailSubject":{
        this.setState({
          mailSubject:e.target.value      
        })
      }
      case "MailMessage":{
        this.setState({
          mailMessage:e.target.value
        })
      }
    }
  };
  addToSendMessageArray=(e)=>{
    var flag=0;
    for(let i in this.state.message)
    {
      if(this.state.message[i].enrollment_no==e)
      {
        flag=1;
      }
    }
    if(flag==0)
    {
      var a=this.state.data.filter(element=>{
        return element.enrollment_no==e;
      })
      this.setState({
        message:[...this.state.message,...a]
      })
      console.log(this.state.message);
    }
    else{
      var a = this.state.message.filter(element=>{
        if(e==element)
        {
          return false;
        }
        else
        {
          return true;
        }
      })
      console.log(a);
      this.setState({
        message:[...a]
      })
    }
  }
  Download=()=>{

  }
  render() {
    return (
      <div style={{height:"50.4vw",overflowY:"scroll"}}>
 
        <div style={{     display: 'flex',
      flexWrap: 'wrap',}}>

<AppBar position="static" color="primary">
<Toolbar color="primary">

<form style={{     display: 'flex',
      flexWrap: 'wrap',}} autoComplete="off">
<span style={{margin:"auto 30px",fontWeight:"800",fontSize:"20px",color:"#f50057",border:"2px solid #f50057",padding:"10px",borderRadius:"10px"}}>ANALYTICS</span>
<Button  variant="contained" color="secondary" style={{margin:"0 6px",fontWeight:"800",fontSize:"11px"}}>SMS</Button>
<Button  variant="contained" color="secondary" onClick={this.handleOpen} style={{margin:"0 6px",fontWeight:"800",fontSize:"11px"}}>Gmail</Button>
<Button variant="contained" color="secondary" onClick={this.Download} style={{margin:"0 6px",fontWeight:"800",fontSize:"11px"}}>Download</Button>
<TextField
style={{margin:"auto 10px",width:"80px"}}
id="standard-name"
label="Skip"
margin="skip"
name="skip"
onChange={this.handleChange}
/>
<TextField
style={{margin:"auto 0",width:"80px"}}
id="standard-name"
label="Limit"
margin="normal"
onChange={this.handleChange}
name="limit"
/>
<div style={{marginTop:"40px"}}>
<FormControl style={{margin:"10px",width:"100px"}} >
<InputLabel style={{color:"white",fontSize:"20px"}}  shrink htmlFor="age-simple">Semester</InputLabel>
      <Select
      style={{color:"white"}}
      value={this.state.semester}
      inputProps={{
        name: 'semester',
        id: 'age-simple',
      }}
      onChange={(e)=>{this.handleChange(e);}}>
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
<FormControl style={{width:"100px",margin:"10px"}}>
<InputLabel style={{color:"white",fontSize:"20px"}}  shrink htmlFor="age-simple">Branch</InputLabel>
      <Select
      style={{color:"white"}}
      inputProps={{
        name: 'branch',
        id: 'age-simple',
      }}
      value={this.state.branch}
      onChange={this.handleChange}
    >
      <MenuItem value={901}>CSE</MenuItem>
      <MenuItem value={902}>IT</MenuItem>
      <MenuItem value={911}>EEE</MenuItem>
      <MenuItem value={912}>ECE</MenuItem>
      <MenuItem value={922}>MBA</MenuItem>
      <MenuItem value={921}>BBA</MenuItem>
    </Select>
</FormControl>
<FormControl style={{width:"100px",margin:"10px"}}>
<InputLabel style={{color:"white",fontSize:"20px"}}  shrink htmlFor="age-simple">Section</InputLabel>
      <Select
      style={{color:"white"}}
      value={this.state.section}
      inputProps={{
        name: 'section',
        id: 'age-simple',
      }}
      onChange={this.handleChange}
    >
      <MenuItem value={1}>A</MenuItem>
      <MenuItem value={2}>B</MenuItem>
      <MenuItem value={null}>No Section</MenuItem>
    </Select>
</FormControl>
<FormControl style={{width:"100px",margin:"10px"}}>
<InputLabel style={{color:"white",fontSize:"20px"}}  shrink htmlFor="age-simple">Group</InputLabel>
      <Select
      style={{color:"white"}}
      value={this.state.group}
      inputProps={{
        name: 'group',
        id: 'age-simple',
      }}
      onChange={this.handleChange}
    >
      <MenuItem value={1}>1st</MenuItem>
      <MenuItem value={2}>2nd</MenuItem>
    </Select>
</FormControl>
<Button style={{height:"30px",margin:"auto 30px"}} variant="contained" color="secondary" onClick={this.fetchRecords}>
fetch
</Button>
</div>
</form>
</Toolbar>
</AppBar>
<div style={{margin:"0 auto"}}>

  <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}
        open={this.state.open}
        onClose={this.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >

        <Fade style={{width:"60%"}} in={this.state.open}>
        <Card style={{width:"100%"}}>
        <CardMedia
          image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFRUXGBoaGRgYFxgaHRcaIBoaGBgfGBgYHSggGR0lIBgXITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGzUmICUtLTUtLTUtLzctLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAgMEBQcAAQj/xABDEAACAQIEAwUFBgQFAgYDAAABAhEAAwQSITEFBkETIlFhcTKBkaGxFCNCUsHwB2Jy0RYzkuHxgsIkQ1OisuI0Y9L/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEAAX/xAAwEQABAwMCBAQGAgMBAAAAAAABAAIRAyExElEEQWHwE3GBkSKhscHR4VLxIzJCFP/aAAwDAQACEQMRAD8Az/hTZUxVoaFSxHpVbwLGG4ewuGZnITuD4T4GkcI4oe1zNuZnzHWk4jBm1iEdAShYFSPXUV63iy1jm4BII6ErzPDhz2uyQCD1ATdvCZLja7SCKTaxJQZk3RpqdzE3ZYrPlDBlBIOx6GneK3LbWLV1ECgkqRSGmGl4Bgtn+0wqag0kSHR/Sb4XiM15L0R39fQ71rnJHLQ7YtuDJ9x1rNOWeH5x3ASJ8Nq+guUMF2dhZ3j5UNZDJPn6qVUCYHl6K8VQBA0Ar2urqyLl1eMoO+tc0wY36VTYHmWw5ysTafYq+mvXvbfGKIBOEEviPL1m6PZAPlQfxPkwqykDMqnSOlaMDXtUZVc0oFsrAuJcrFAqMmbNcJInoTA1FDHEOAuWuNbXKltu6RuI8PGvpXF8JtXNSonxoX4pyhtlAIGYnzJEVcOpvsUA97L998l87sxS26LmLXGUz/KJ399XOIRLjZbhY5SlpSDu0SSfIUWcX5LIyi2DmKtMmBpt6daHrWE7KUdDmRpDTsSIYnx0oNaW2OPl3dXLw8S3Pz7sqexcuWJYpo8kFh4eyRUu4qO4hs4eHfUjKijQeszU7GYOARcBfNc0UHQBoVNRsAqkx6UP3FNrUmFecsGcygxrG1c4lljjv6oth9xnv6Jm5ZZArfhfMcqzIE9an4XGqyyCM0gBOpgQvu3NPW7+bNG7ZbarOy9Saj4jhMkvZMGZVR+XaZPjBNKAW3Zfvu3VOXB1n2TeN4cDLJ3So0AnvHYmemtM2sQwKqwjLAB8TsC3pS7GPZSqOuUr16sRoJ8AJmrG7hlYQfa1iI+LH970WgOuyxXFxbZ+FEv2lK66NrEfDvHzNRWusohxImJ8I8K9uBlIB1UbEba06wDSBqBMDw84+XvokzixXARnC42wVkmdB7v7VDIdCSNQdPT/AHpy5ZYextvE+H1rrGMA0aQfP9aVxBN7HdOAQLXS8PiFaAN/A/vWprcAYjMoI/e1S+W+FDEXFMddxWs2MMqIEAGUCIrTSo62/H6LDxHFeE6G5WGXbT2ycwJPjXqspEkgnz3rWOMcsW7oJTunw6Gs/wCMcvPbYyv6Ur6DmYuFSlxTKvQqm7E7rppXC5ckSJjwpVywV6kUlWceBqURuFpyufE9Ch+E7021y14fIine2f8AKPHf3UgXG6rQcevyRA7lefdgHvfA0tCv59INNF/FPlSi3/69Z8BQB7uiR3ZOmJ9vaB0pJuqCe8d/Kki5pon0rpJ2t/SjO33QjuyjXEyXAek6VYDidyw8qZU65Tt/tTvEgtnEFLi5rZ1EbgHwqXxTD2buGNyzqU38Y6zRbSc3XodBHLnbKk6q12jW2QefK+FW8cxpvhbhAHSKsOD4btcI9v8AK2YVTYNS6Mg1O4FWfKy3Euxqs6EEb+6psqTU1uvqEFO+nFPQ22kyFpv8MOHnsoG+fWtitJAAHShD+H3C+zQtRlXVnGA3ZYwPiLt03fuhFLMYCgknyGpoa5Y42bl64jn2znTy6FR7gPgad5xx0Ktgbvq39I2+J/8AiaDsGWRhcUjMhke79KNOlLPNK58FarQFzfw/LfzDZ9ff+L56++jbBYpbttbi7MJ9PEeo291VfN+C7TDlhvb73u/F8tfdSUnaXXTPEhBeE4jesGEcgfl3X4HSiTh3OSmBeTKfzLqPeDqPnQydJPXKKQ2HB12mPia1OpAqTakLTcLjLdwSjhh5Hb1G4p+sptX3Ug5iI0kGCPQir3Ac13VnOBcURvo3huP7VB1A8lQP3RdjOH27gIYbiKGeO8npcVgFGvWNf3FXmC4/YuaZshmIfTXyOxq0pQ9zLFdpBuFhXFuXbuH7QIJDRBI20gEeB1ih67w/Vwoy9xbKyBux7xA/1Gvo7FYNLghlBoS41yUrHPbgEGQPOna8FMHkZ91g3EODlO/Y7oCiRJLNLFVjzO9N2uKFAbd5ChVQNBqxHQztpWi8R4Dctue0BEsWLRsQpVdB0E1QYrhSOO8gYSCPzQIQSenU+6m0GZYYVRVBEPv1VBcVLiksAdIkad7cknrqQKii29uR7SSRA2OmvnpT+I4Syf5TSs54nTrGh3MCaYwt1lOVu6Ygz0k5mLeulKSZuIO6qIixkbJzCNOmbWdj1J3j5Co93DSZXu9P76/KpLhX1I96+A0mOnU+gphM6bQw006+g+NMcAFAZkJhrzLow08fLb9KdtMl05dD66a11vFrPeEa6Ve8u8IS9dEAHzHrRY0usDK6o8MEkQjHkjg62recCJ2/WpfFuLG3eRR7K+35z/Ya+pq2vuti0T0QaDxPT4mgW47MSx1JMn1Nb7NEBeM2ary9yJ+O3Ht5b1ttDow3B6qSPlPpTNni1m+Ml4BT57e49PfS+DXResNZbdRHu/CfcR8hQxdUqSpGoJB9RXE81zGA/CchP8d5NUy1uY8BQXi+H3Ebcj1o1wXFblrQGV/Kdvd4VOvHD4oQwyOeh/Q9frU3UmOxYrSziKlOzrhZm6vHteE6UgXGHUfCrvmLg3YHWYOxnpVAMu0++ayPBaY+69Km5r2yMJYZuhHwpTBt538utNhl/c16GBnTz60k9fmnjokyZ9r99aXt+L514v8AT517ceD7IFAWE/ld0UzmrG271xTbOaBBMU9yyCGey+11THrVGwa2xEEHzFT7WKbKt0e0hmuZWmsajs8x05/JI+jFEU245Hry+ad5aXs8Yqt4lffWhcu2TexLW7iiA3dMar4a9aCMDfF52vBAGkEjz8RW1cjcPW6VvxBgZh5iq03BtMtBtM+YWWvJfqIvEeRRzw3DdnbVfKpDuACSYAEk+A60qhznXiGS0LQOtzf+gb/HQfGsol7kMBC3EOIC7dN1p308hsAfd+tR7R73rNIuKAAV9DNeZGAzRoddK3i1lmN0W8k4yA1knrmX/uH6/GiplBBB1B0PpWXYHGm3cVx0IP7+Y99abhb63EV12YAislZsGQr0ycFZlj7Bs3ntnXKSNeqnUfIivFuhtNtonyop5zwe10AaqVb1Gq/93wFChsggAb5QfXWtFNxLZUnASlswIbaJ395pNy1vGoAn5A0i5ZK6dD+ld2upn8sfT+1PO6EbJzP0bbfQelTMBxa9a9hzHeOU6jyEHb3RUZzoSRP5fSFH602tvvQp1kge6gROVwKMMHzUhhbqlT4rqPhuPnV3h8SlwSjKw8jMevhQTg+AYi5EoEWQZfQn3b1f8M5aS0QzOzMJ1BKjX0M/Os1RtMYKoC7mrTF4RLgh1BrOuc+UCiNctNAIiAYJkxHpWlsaz/n7i1wjLbXMi97TxHU+G4rqcnyQaSHWWTX79y0YuLtIDDoIC91esQNZ6mouJxSXCFgGQNOoaAok9TJ+C0/ieMwQrqR7KnMPwhiz/OPjXlvD2rgBgAkzKn2cyyCY2gyoFMCTYFayIuQod/BAeyxWY0b1O/wmPKo7PcESAfMb+GvnrtUvF2CIy3JESFboCpJnz0OlNKXnvIDIHsnY66eszXRfZMDbdMdsrNGXrsfp8fpWn8i8IW3b7SNSIH61nODxCBhnBB8x8fnWo8D4/hzaRcwUgRBrRw8TJKycaXadLQn+OYK7eKosKg1JJ3PTQa6D61GHCMPZE3nzHwOgPoo1NWt51urCXsvmhWfmJ+EVRYrlq5MrdDf1SD8dZrURzhecx1oJhONzBbUhbduEnU6DTrCimOO8Nd7ga2ubMNdRAI6yfER8Kr8Rwm+m6Ejy7301pDcTvKot5ojTaDHhNCd1UMAMsKlDggRS154A3CifnH6V5hMUmcJZtAeLtuB18/nSOCuXF20xnOJ18dj+nwpvCjsbLXG0ZtB5D9/pTDogZuCZKpedsdmbKBIGlCecxouu9SuIO7sTmHjtUGCNc/y8Nq8+s8l0/hezw9MMYG/lOw8bD971ysw/LSDPVz8t6Syp+YmfP41Mnb6hVjuE4mbfMP3oK5rcHV/pTUJ5mTHWlqEOuX5GgDNvuUT3ZXPE+LKbzW71sFJg6QV8waiYnAdhcCzNq4O63lUjjGGGKUYiyJaIuJ1HnFTOHYVr+CZGU5rRlZ8N6u8OqPdN+bTuNvb2Kxtc2mxpFuThsd/f3Cm8ncv3czEr3PPqPEeNb3ypw8WrI86zT+F9q4xCsxZYiDrFbHbSAAOlZ3loYA1K4vLzqXpNZvxziXbXC/SYX+kaD47++i7mzGFLORAS905QAJMfi0Hw99UOB5Tu3AC57IeBEn4Tp76NKGjUVN9zCpEggj0I/WrLA8HvXsjIkAaEtoI8up91FvDuX7FqIXMw/E+p9w2HuFOcR43Zs6O4zflXU/Dp74pjXJs0ICluVAwHKllR9594d/AfLU/H3VeWkRAEUKo6KIHrAoOxfNrvpbXIvjoW9ddB+9aqrPEW7UXMxLKwYFjuNmBPSR9aXw3uu4o6w2wCP+KYXtbTp1KmPXp86zS3fgQQcwBA/wB/StSsXg6hlMhhIPlVBjeVVuXi5bKpJMAaknfU6DWfHehSfpkFF7ZQoHEGDq2YjxGgmpdjg1277FswROY6AbeO432ors8MwmGhiFB6M5kk+U9fQVZ4XELcUOplTsdvrTurmLBIKYnKHcDykAZuXC3koge8nf4Cp738JhB+BT4DvMfXc/GqTmfidxb7W87KgCkBTE6SZiCQdaHy+22oY+ndA+orgwvEuKJcAbBE2M5umBaQCTEvvvr3Rp8zVjwjBXDF3EMWfcKdAnnlGmb3aVE5c4EFi9dXvbqp/DoNWH5vp67Nc1cf7NGCEAhSR591mOvkFJoED/VvuhdN82cdKIwtwYWTrvodB5wpPurKuJ82srHtrFwBXAJGwYrDBp0nKwOXyr3jfFMUwup2Rcn7tSpBIbIQSAp1GVz3oI86pv8AFKTLo6HtCxBEiJJ6/iBIXbZfgdYbYGFZlExMT6ps8YsXX7xBgkzcAEhVVNSd5m42WdwKjfZrLKGUsuiAEGcrMUMevfED+U1LvY/CPbAm2xUINVIPhoSNSDqWpsYDDFCykCM7AhhoAx1PkunrNC7tiq2byIUW9YbSLobeJ8CVIjxnMs++k9/Me6rbnQwNgdPLX5mnbGDlgFunuwuomMuU7TtmYfCkNYfMRmQzp1EEg7fIe8V0FGQmmvEkkowHxg6n+1eWsWo1Mgny8daduI+0Lp4N45hr6a/Cm2ZpPc002YeY/vRv2EbH+0/h+LwZzEa+dWWE5qdf/MI95qiRzsUM6+H73pNxpaOzPy8p/fnTtqOHP6pXUmOyPojOxzv0LKfWpn+LrD6OFPwP1rPAROqfSvGOmifSqjiH9yongqRK0WxxLB5g6nKR4TGum21DvNXG0uHKrd0bedDRxBAgL8x4a152p6r+4mg7iC4R9imp8GGu1Z9UzKb6nfTWuXJ4E/Gl96JgbfOk6z03A+AmssdPkt3eV4YnROvh4Uu3Ond/5r3IYkmP968zSNWpgI7CEylZmMQAP96adiIk9KXbI6k7Ca8YL4T8aBuJlcLFS8PcNu4t1CQG3ir3C8xXg/ZkJlPWIMGkvawzZrTL2OsBgdJ6SOlMpw9lupauEBiRkfo4q5bUpj4D7b7LDqpVD8Yv1239Ftn8OcCqqWG0CPfRxQDylxFcKnYu6tOonumdt6LLHGrbHLqG8DUKtJ4NwptqsNwVYEAa6bb+XrVLjuZ7SEqn3j+A0H+o7+6atftSfmr0sjb5W9YNSAj/AGCbUCLFBWN43euxLZFaVhdNemu5qma2cuupUj4eHxrRr3DLD+1bQ+4D6VHvcu4dge6RIiQx/Wa0CswWiFPw3ZlAN20CUgQDofjXPhpPdkd7KZ6eG1GNzlG3lhblwayJymPkKYucptJK3RJA3UjvAyDoT4UwqsKGh4Vfwbj74dBaydqskoQYjxGoPXX301j+Z8S8hfuwN8okj1Y/pFSr/LF8A5ch1kQ0RoZ3A8vhUa9wfELJ7Jp0bQgyRuND50IpkyjqeqgYslizyZKkmZMj1o55OxOfD/0sV+h/WhHEYN1BBtMArdVYSD5/CiLkq6PvlHirD0IP6AV1UfAuYfiUDm+BiBMeyje6WU+6pvLfAQAt66sHdVPTTcj5gdKt8XwhLl9bz65FgL0mSZPpNQOP8WiLaMAS2Uz0J1E+sGphxcA0IkAGUxzNzAqKVDhYzZm1MAI1wnTfRG0rLuMcQxDsyKbbZi6QWWVCnsmgz3WbtlCg6ntBpsajcd4hiCDcGRpti9GZTmCMbJXL1lWMgdG1ioL/AGpLrM1hLn3rvlVh3mLWICZWkhblq2pgGDAO9dMWCs1kXMJo8Wu9mTdsMVKjOyyClm6hUGCDEsMwJ6SI60xa5gXMTft3ACGBXLIMXLzNb1jQC6hPmm21efaLqWdbDQq3AjKSNV7VWJgHRRdcaEQbQM71Ks8ZALTavSbhJCiTHaPiDAkE5hchumUTrtQDjOfkqFo/j81B+24R7hzm0xlSXKEBu4qsSI0Bh4HjBqNaw2FIEhBqgPfI37PNE9NbknplG1FnKluxi7ygrEldWRSQfvSAN9AHUL0IUaUdYjk3CKJNsaeCjprsBrVAzVt7KNTiBTMX91i1rA2oXKzAsg2beSs+hMkR/LXNhgC7C4896Tv4gSZ19mJ8YrTL3DuGeK9dkb9FqM+B4b4/BG/tVBQ8kv8A6+h9lnn2cgz2mpncbxI/v8a8S2Qcoce9fITPlrR+vDsAzBVzEkwIVtzp1FU3NfLiWQWVSQQfHfw0omiQJH1KLeJa52k29ELOhX8Y1/l9T/emSjDXMNfLavbhQ7Ix1Pj7qSCuv3Zj0Pp/eoyO5Wod4SM5/MNY6eP/ABXjOfza+grgp/8AT/cR9aUy+CfSuE9ymt3CZIHVvHw8qQYiZNLKt4Dp4eNKXNGwoRKeYTRg9SdfPauCDwJ3+NWvL3Dlv3Dbd8umkbk+FXF7ly0v/nPEnXJInwJB0Pkdao2iXCVF/EMY7SUK6flpABJ9n6eNE1vlm20hMQZgnVSAOpJMaCqHH4M2bhtvmkGPUbyKD2Obc49E1Osx5hpv6pq4TEaDQ9aQ2KK+BnXauGU9CT76WqTsh+E0lzgqlhlWfNHD84+02Tmtvq0fhPmKsuDXDi8IUn7+xDIeumq/SKoeH4q7hrgCt3GOoOqsPMVfNzOmHJCYZFLjVl0+VVY+mXF7jE2cPuFiqsqaBTYNRF2n7H0t1UrjOPbEYdMXaJlBlvKN1848B9DVpwTmZ72G7USb2FIZh1e3ufUwD7x50DYfF3MM/bWX7r7yJBB6MvWiXAcyWFS79mwyLdZDMEgH0WNtdqDagc6XGDFxvsQkq0nMphrGyJsdtw5XnHObLmHv28RbYvYvAMvgwiGU+B/v5UQnjTBLq2WJz2xfsQdWXTOq+Y00/nFZLy5zCtm21i8hu2mPsNsvmp3U1ZcZ5nW22Ht2bJtrhpNtu0zEyPGPZ3kHekFVpBcT6bd5Sv4apqDA3HO0EDE9ZgHoStD4Dzn2yJeLa27ipeH8r91HjpBIn0JqbZ5wuNcv4c6X7WZlA0zhdSI8cpDCs2u8yYe3bu3lwvfxVso8P93J9olI0M66H4TXuB5qtTZxd6y7XbPdz23AJEEKt0Ed4QTDaHprQ1NsJ/pDwn3cGGOWM5jOJkeULUl53mz2iZ+4yrcDAT3vZYAbiZFT7/Oip2TExbeRmK6hl9oED1B99YtwjjzWsS4cF7N8NlE9G7yhSdipiPCPOm7XFXy3bJzMt0i5Zaf8q8u4M+IlSPSl1NVBRdPT7H8ZW9pzUud1P4VDiPxIYgif6hUleY7ffmJVQ2h3UgHMPKDXz9hebnyWbjLmuWc1u6CdLth+jDfQlhPmPCp2K5qW19nuWc5S13GzupN22zMSvdjRVYqCRPwoamG6Pg1AY77P36Lfk4xbPXoCfIFcwPwBr1uK2RLE9CfUAAk+kEGsH4dz7btypzEquW28gqUzKyi6sTmUArpuDGm5Vb/iJZUW17O6USdC6zqWJWY1TK2XXWAD01H+Pdd4VbZarzJzE2V1tiAsZjoT3oy6DxkbVmnGhjLjMARm7W2sSs5kyhWUZp07VZMR3tT1oZu84Tl7jsBaa05zAFgZKHYgMrEmesL4U7w/mm6Mp+zOxtoIKyAHyPaRvZPdKFBl6m2pB6V2tmFUUajbwF7cwOLJMWwwZ7qqFgz26qrAAOe4ua26t7MsNTNSMVib1xGBwxg2rjA6jRrrDEOAd5YghB1RSNoLd/imIdCgwVxIVraklhkd2zEGU12shUPeHZrqZM9YxeJVluHDEozXbsZmEQUuushdIexI8sy9aW3JP8XOPf8Afd08TeY//jPLXSGGbo4ut2ZWJ1+1N3thNsETvHw2LvqVZrNxg3YsTn/kWzIMGGZuxbXU93oZr21hsX2eQ2lkIihs6grDLmI726i3aUzoDaWYMgpxFzEAyVtW2Bc5iyiAzraQnvEQhW3r0C2yZES0oQMW9/2rflfiN63cXNYKjKCCHBACuF94yhAv9JiQdNP5hvOLS3rRIKwSOhUxII69PnWR4XEXQySthJKDLJlVVmRFIkwFuDUdGdehgaxyzdF/CKrEHugGPAqCN/WtNM2WDimwQ6FQPjbGI/zl7K5+cbHrr/v8aq+I8Ju2tYzp+Zdo8x0+nnUvh3Cma/2TbIe/p0XQ/EwPf5VM43xh0v5bZGVBBBiCevw0HxrSFC4dDVB5bwxJa6V9nRRO7Rr8tP8AqpjBuzm5YuiGYllno25Hof0pXE+Lq9oIi9n3paIjedI89fcKawmONzKrq1wrGV1BLofXqPX504KBBuSEFcTwl205XMvhqDtr/wAVWOrAwbi6+XmdtaO+euHqQLmWSfrQIqqNOx184rHVZpdH5Xp8PU1sn8JNxo07X6eP+9M3GWf8wn0qUASNLaj30w6ODug/5mpme5V2x3CahP5j8a51XorUu8SN3X3UhnH/AKnwFdbuPynEr3DXGRgyqQQZGtaBw/FW7qm8GVbhWGRmABbaTO48qzw+rn9/80iPJvj/AKaenV0W7+ijWoCr0WiAwpE4cZva7/tDwgbe6Kq+ZhaNgHtE7RNgDmldomBMfShNU/kOvnScv8o/Yqjq5LYj6/hTZwulwOrv3SQ2vt9f0p1GA2c669K8Cn+Wk9uR1UzrWcHTnv5rWb4RGnLVwobTPbLjYBtR4b1V4rBO33Nxcl5dgdM3oeoq25ptCxe7cKxz7MDoD4eVSOEY1eI22s3IW+netP1/fjV306ZcaWDtv+9l57K1QMFU3bzMYPO3MbrrHKQtL2V7E2wbgkKQdD11ofxHBb+ExFtGAGZgFfdGBIG/v23ou4obuLw33emKw8rdtxqR1K+MxI94qs5PxwxVt+H4gmTLWXO6ONYB38SPeKnVp09Qa0Rsfse7IUa1YMdUeZ/kNuo6RfqOae47ydhkui39r7O9c1AZO4SdhmB7skbmqyxwVnujCYkrauWyDmZgoNuRmysdDpqP+at+NYI8QtxoMfhgUuW+t1QfaSd/H/qPiKZxuFuYvhpuXkdcRgzlzMCDctaaGdyP0/mqb2N1Etb+9x0IXUqrwxoe+8wcS0nBGJafv5qu4xwcYa+cMXBsXgGtXWPdE7MWURodDHSD1pfHuEWsM1t7FwPhL4yF9XCsDDzlEmPaHXfwp/gKfbcE2FuEK9mWw9xjHm1sk9D08PcKY5YvWvs97D4piLLPvE9jcA7riJMH2TH96SAcDOOnTyV9T25Mlphw3Bw4dfuCE5xXC2bJsXcPdnB3DBcoXNu4ujwrQRPtAE9TU/CYKwuOtPblsJilY2wzMALsFctwzOjx1/GKruBOlu3fs3Ju2Lq50gAxcWYZVYgZtgRIkUjhmLP2a7aQGHIZAGg2bw6gwZVhpB8OlEcj3b7FAtdBEnadweZ6j7HdWXB+F2Xt3r1vDIboRkNi4HZbd5CGYKC2aLiB8smVZCJMimrPBcO6G3bQf+LTPh3Z5a0672tV/PKFp1DIY60zc5lvdkWFpBcdra3rgzK5Ns5kOhyhv5on60zxLF37hsrchYJey4thMxcjOWCgSSQJI6+tD4I77/aYNqyZMeuw+d/lmZV0+HttlvLZtEWEDp93lCvaUC/avBILbdsubUjTUNFOYTB2iv2ZVTsrlw3VBy/5dwAKwJ3axcQgidVDbgmqsYDEXHxfeKtPZuGudn2ztmyqw2ZpVoJIB8dajjlwobRuX8qBU7VuzfNaFxcySpBzrmhJjRtDGho+i4ARGrvv3ndXacRttmLtbQXmUX1khCUm085R3Q9twytsLidImo2C5mtBou3tiFdlXRwkojBV0h7TxA1VrSGKbwPLaSq383aTd7TM57Jri5soITKQMht3QQ3eC3ANtPbfD7Fgpmtdk2V3UuFfRgbdxSHEObTAOn51BPWul2UIp3Fz3+vomsVzbZZYUXS2W6ZEDIziQszJUPlYNoV7K0ADFePxPFPOXB3A+e1DGQA5YPDAqJDM9yNRAvsDMip3EuKWFQ5WtnLbRTbUShBOW7bV8sorKTvBBRDuzARl5gN0G2li5iDNyTIGZcoUkZQdTnlk1Ga5IMlYB6lMAIkN9z/SRaxeMhZW1aAJOd2Mgsfs4uGW/DGU9JfMwJINMtw+65hripKkFEQHL3fs7KAeoKWUKlt3Q6RI9OFxbsQwtWpJLGVctnQ237oJnOVVWj8bJtNKucEYQb+KuMhC6pADTbl4bXN3RvEsLbyJy5hE8k0gcx9U5iuD5FLvdcic5ygCRlF26QCdZyoBMd4AkQZo6/hrxK3PZC6Lkgj2ge8NSQOgJkj18zGc3LODtse0Id4Ug3Ga5JALCTbMENKoRrHZtr3gat+Cca7Eg2MNc3WGyKg1EWyW/FJBJbqesGBVhAKlWYXsj9BbJdwYQ3biLNx4MTEkCFGuw/uaFk5VcnNduKCdTlEn3kwJ38a67zyxUfdojEdWLdJ2A8wI/mHjQnxjm92JD38sHVRAjWNt95+E+E6GugXWBlGoTARXdwmDsCTDkeJzfL2flVHxPm+2oi3lA/fTagl+IBz3RduDee9G0xrGuw9CKjOjiCLSr/UQfLp13rv/AEH/AJWhvBifjKn8X42106uSPL9/uKp333c/H99TTnbETNxB5AU3mkzLsfIVFz9WVrYwNEBOYdEzqHDBZGbXWOvXXrWk2+SsB2YuCXUxBzKAfedB7zWZnU+yfeaIuVOZ2wp7O7law3tKTMT4TVKZaMhR4hj3CWH03V9iuA4O1q2Eux4lhB/6lkU1Zw+ELKowq94gSXJ3MdBVxi8OUTt8LcJssJ7pnL6jYj19/jT/AB8W7dxD2KmRmlSUMg+Wh6bitAhYdZNpPuUIcxcqAs/2ZjmTe0d/GU/MPnQU9jKYIcEGIOnnWq4nHNeukpazDSBHeUx0dNR7zSeYOXrd6ybl4CxdA0ZmXvf1Zdz7ppKlIOuFoo8UWQ1/7WWFPFWPvpDW9fZHvPnS7oHlp5mkxHh8D76ymF6QK5gANlFeow8UGtc90Dw/01DNwmlc8NKZrSQiLgvH/u+wxKG7aOgPVf7/AFq54Ny7h7d5MRbxJCKcwVlM+k+Huq/4b/D52/AY9DRbb5BJthSIinY828SDGJz7rBWDb+GSNWYx7LKuZrl4Yz7Thsyd0DMPxEbyOo20PhVzwbHZmGIuYSwL/S4pIJOxJXx99aVguRQoytBHhT9vkOyOtd4kOLpzeOqQsY5gYRgRPONu7LEXwl/7acRcEOWklZEaQMvXQVbY4Y1mNu9ce7Yb8JiCvqBrHnW1DlSwQMwkjrUheXrAEZZA8anqaJunJBglosI8vLZYIvLl60wyEtb3A6EHcGrTC8hXR30QG3cGqEgEjyB8OlbgeGWiACoIGgpf2RNBlGm3lQliDqlSOXVYxwvkNslwBojVARBDjprtpU/A8oW+yYvYLO7Q8MVhdwyjaZ8eta12K75R8K6KYPbyCk57zkrN/wDCZ7JbRRbqAtnlBmdTqjBolXUSN+nhU29ytcdu8zFSF6mbboAEuW/yHQSB4nyo5NJJptfRRLyEFf4QmS4zZlC3MxH3gHsMT+cQNfL1r3iXLTlTCh+4V1OpzCGkDQ697+rXrRkTTa3gdiDHgaOs7JPEKxviXBcSCctxrcpkDDwGaM2SW8VEjeAOlCB4OD/m3CRHfW2C2VCIs3UzRNvOTmC6jQQCSB9A8W4atyHA7w8NJHX9++su45wy8SotoEyswJAIX7zRsx1AG50ECW01rnMDhK2UOIOMKg4ZYs2nUsqIwe1mzkOcyAkOj5ZyXBFwEaBlAPcavb3EVLBLIe6WLrDA+1OUGJl86d1joWi2xhhIVY4HbULnPaSzqo73Zhxoi5li4pzfhIBkMokwGk3cfbsKNckracIoEkglIYp924PebMSpmCDqhScQFckE2v37qJefE32GYpZUzqwbPBixcU6SSO6TOXdNYCw1isAsn7Rccltc1wlY7wQMNTnhRlMmNVg5WDr7Za5eabKCygzDMSc0KMy91QWVlVwoygiLmUGCFqLds2QxN1mukgksSQAzAXJXKZzGHII7jhiR3lylThO3MCyfw2MsL93bslmkexCie0IH3p70AsoVmBOtsyG1r20+IcFCbYmdhnJORhoD3BMiQSNHXXKVWmnx7NmS0sqJysO6iqWBnKwACEsVYaCTOgyhF4Thxut95cJYaZVgDTvwx9pj3n3GbU6wQWduwXEACT+UzfsqrAXLj3BuBmJicsyqwQTrvvJkSozIVcjTbswPF4GxboJP76aRpXCuWrNmyXvAKANh4ba6SZnbrOtLx/BMIUFyW7M/iUZgPWNR+5q/g81lPFtmFlz3Ln4nCbAgDpptm1/fUVHupm1l39SQPHy8a0Z+WbDj7m7aB6TofHZtarcZyLdGvef+nb5UDRcnbxLPJBi9waKi+e/jXG60+2SP5RHSrjF8AvJPcCjxOpqkvWip1zMfH2RSkFqs1zXJsoJJif6mrk0/KPRZ8qSwI3gegn517m9fef0FAKiIeVOaXwjwZe03tKYA93hR5xPmbhzKtx2Fwgd1ADImNCNunnWP5h/xpXGqNqELPU4Zj3asI44p/EF4y4a2LS9NNfhsKD8fxS7eJNy4zHzNR1w7N7IJp61w+4ekCgXOcqMpU6eAoobTeKjXbvh+tT/shDww0p25gdNRpUyxzhZWD2tVOBPma9a0w6VL+wMJKyRXdu40099S0R/sqa/4r6/rq6mb+KRPbdV/qYD61JYU9XVWX+P4dRPaAj+UFvoKrL/OdoexbuN5mFH1J+VPodsl1BE1eUHXOcnbRLar/US30iq+9zNiG0z5f6QB9RNOKLkpeFoNRb+Ntp7VxF9WA+VZticdePt3Hb1YkVzYZRBzQSJ0GgqjaHVI6oEcXuZcMJi5mj8qsfnEfOoD83W8sqjETHegfSaE8/Zkysz1B0I8qZYZf5rbfL+xFUFFoUyZRBiOb7mwREJ2Jlh5GZH0qrvcwYpjHaQRuoCrPoYn51XsFy5c0693QgjxmmWadNdBHuqgY0cksBLxOJc5g1x3g6EsSfmaJuRsRIurpAKkQI3zT9KF1sbEmesa6j9TV/yY8XbixBKTps0MBI8PaovHwpXxpRbevhRLGBIE+pgfMiqnj/ChcUsszvpoQRsR57+Rk1K43azYe6u/cb5CR9KpuVuNEgWbpOYaITufAH9D129ZtEXCk2YkIA46l4O4shkOrsVH3gAEZgVPeAG4AmANTlEQ8HwuymxW4xlWbuRlYRacW7mZGU6kGSdt+8o03mjgwdJAMDXu6Mh8VPw08um9ZTxbhd8llLZLZ1MyLRcd+bv4ULaTsCYO+tI8cxdehReHiJhQ8RxZgy9iFcAAhiDlTIGXKepQKBDT3QzLmZZly7w7K2e+xuOukZi0BdSM0hmWCxKocwkNBBqxS1ZtoxE2jb7+YlO0AYBWAZQGHWIzIwJ9ucooLK3sazW0hcOrCTGUGC2TUz2ZIJAUQkzoJqJEZuVpaZuLAc07YuXL79lh1mNcw9lSBlkZYBaMveGXMNGU1qfKHJ6YdO1ukFgJkxCjfQbBRqRsKn8jcqpZtKcsDoIgsYjM4BIkiJiZ9IAl8w9tfPZWbbm2D3miA5HSTplBHv8ASqsEG+fosNeuXnS2wQvx3ibYh4TS2p08/Mj96VH4Xjmw507yn2lOx/sfP61f2uUcQ35E9Wk/BQfrUizylZVgtzEDMdAq5QT5CSfpV/EaFL4YhRU4Jhr4N22bkdbaZZB8II0+nhVauMw1qQlu+CPFymvmFNFF7C4bAkNluliIDSYPkdQvnBFC/MGOS+wZbWQ9WnVh0kAR9a5jpKQCfJPYPjZvXBb7MBYMktm2HmKFOfsGqsMi7jYaCr7li3N8+AQ/VR/eq7+JLFQoXdhFVeRoMpqIisA1Z2YGh7zeA299Kg7f+0aAeprnQW13BY/M1yJA90nzrGvXXJZLNlA1+Qom4Ny/nIAWSep1+FL5Q4IWEle8xrVuD8LSzA0zkTHgNAfrVmNEaisfEcRp+EKiwvJihYLAH0n505/g9YgEVK45xx7N7IgUgKJBB3Ou4I6RSLHNv57J9VafkR+tUk5WGahuqvEckSZETUd+TH2KzRfhuY8M27Mv9Sn/ALZFWuGxNp/YuI3kGE/DelL4vCPi1BlZhf5UdR7J+FU1/gYzapJ9K3RbNenDDqB8KXx27Jm13BUfE+C40GVvNeHhmKn/AEk5fnQ/fDKYuWiG8xH1rUKbvWVcQ6hh4EA/WsrK5atbqYKyy/fJERA8KSjACKOsdypZf2CbZ+I+B1+BocxfLN+00he0UHdNT/p3+E1YVWuOUmiBhVYwrbgVxtyYPdPnUnG5lM6x16QaQl1X7je41aBhSDiRKXiEDg5dx86ircDDI5ykbH9DTdxSjR1HWlXboeJEHqfGhK4NhLNuEKsRH4dZ18vKopWJUHfcdDTpAnLHpFLRAGGcfvzoo4UZLeYkHSBNekZQTGYHSdo9R+tSXaCA8BujAfUdRTJCq2sg9VGoPp5UQlmVFukR4rOkaFTVvype/wDFAawyEepAmfXu1TLb1gjU7Va8uKUxNs6MJyyOhIK/rQNwVzgIR26yIPXSsxvNlJ1I3G34hvHhrHlWpMtZnxvDsMTdAkw5MeTd4R8aSmVKllFHLPG+2Xs7n+YBv0cf/wBeI9/jEbmPhAAzKNBJ3iNNRMEawAQQQYoZs3Cp7jEEGQdmU+h9oUa8D4umJQq0ZwO8NpHiB4fT4UxGlEgtMhYrjuD9rfK/5di2c/Zlj3EJXtBbhTE6nbKu50E0UcPvWbGRmA7O2Fy5XtkXEkgZSCrExIO67nvGWos45wKB92Ae9mE+O2jLDIfMH5VlvGLVzEXBYAGUFnAbKpBAl5ZFlicu4BJ0qLmincc1uY/xoBNgty4HzPh8QgKNHSDGmnl0qxxVt7i/c3gnmFV/rtWFvj+wVZLPbXuoHKgsqiAouoHt5ojbs201JqTyxzJfGZ5vNBCncgEyTMBmUxBBICmG16UlpjmpnhzdzcLSOIcFxh3uG6PAOf8A4mB7hVDcwjoZdWU9JUj4f3pdr+JIQopZXkamQ0axDFNA2m09RRPhudMM5KMVkbgMjeewM/EVQPI6pdDhkKNwjji3B2GJAIOgZtj5N4Hwb/mqzmbl97IL25a3809fEefxom+wYK+MyZJ8UOX5DT5VNwOCa0MnaF0/CGHeXyzDceUUNekyFN1kEcm4bvXD5L8yT+lVX8RcLLKfBf71olnhlu0zsgjPEjoInbw32oJ/iKp6flHn1PSrNcHKbDNSVj3FbWVkHQx9aKuXeX+1OYj0/vVcvAbuJuJmEIDr4+Q2rYeFYC3hbIuXBEAAL1J6AD9+NTYAHEkLfXraWAA3TWDwtvBWc7jvH2V6k/vr0qZyqrXBcvvqztA8lXoPAST8KEeLY571ztH9w6KPAUei39nwXgy2/wD3n/7NTPMCOawOaY6lAXEb/aXrjeLGPTYfICmhbrmsxT1ozVQYsrRayjNbg08gBp8W/Gm2tRtQuEcqTh8ZdT2LjqPAMY+GxqcvMWKAjtAfVUn6VCwGFuXTFtGc+Q0Hqdh76ILHKF0jvMinw1PzpHOZzQ09EZYbGW7glHVvQ6+8bin66urDUbpdC0MdqErq6urqROmMVg7dwQ6BvUfrvVDiuULc5rbFTvlOo+O4+deV1O17m4SloKHuJcHxCPme2Y/MveEe7Ue8CoAsZ9V9/hXV1aqL9eVCoNAsldiRBMMB1B+tdcuq+jEA9D099dXVY2SNGr0TFx2XusA0bTr8DTVwnNJ1nw/Sva6u5wiMSlW7QK76zp/v4UvCXMt+2WlWDqZGzd4bj+1dXUThCLwtKZaFOZOAu7tcQZgwGZesjSR+/dXV1ZWOIMrNMFB2MXLKtmzA9RBA8/HpSuHXWtkXE9obeP8AuI6V1dWsXK0/8o84ZxC3irZ0g7Mp3U/28DQnx7ltUZmgMD4oSFIIIYMhDKd9R411dSAXhSBLHwEBcz3XHcIZlaGZQ1tu0AnIQxQOw1bQkwfOpHDsFZdbdtRnCgAMlhCJOsXMha8jgmMxNvYHzr2urML1YPNek46aGoclXYYM2OzZbpKucoLp2gK6KFuZoeDHdJ1GkmrHHXfu7rMpBgQW+0OCSwErnVbdojeVJ8POurqZrbH1XOd8TR5KTy/xa4ljMDcfvN3lFwjpAzIrTt+IiOlWFv8AiBetXIzHLlWZVkAMmQe01O3tQBXV1EkimCgGNdUc0hFY5/VRLqDoD7SCZHjmIoWxHHG4licltSqxBgghQOpaNT5DeurqId/kACn4LW0y/mjnhXCbOGtZ37qIJ16nx8yTVRdv3sbcOVCQNFHRR/M20murqcvN3LI24LiiHhfKaLDXjnYahRIUH6t+9Kd50xGWyqfnb5DU/PLXV1Ra4ueJRbdBwWm+xM6An9+Fe11ajhUBV3w3ly/c1Zci+L6H/Tv8YojwPKllNXm4fPRf9I/UmurqwuquKqGhXaW1UQAFUdBAAqDe47hlMG6s+Un5gGvK6jTYHTKJX//Z"
          title="Contemplative Reptile" 
          style={{height: "140px"}}
        />
        <CardContent>
            <p style={{textAlign:"center",fontSize:"25px"}}>Mailing Box</p>
            <Button variant="contained" color="primary" onClick={this.sendMail}>Send Mail</Button>
        </CardContent>

          <div style={{boxShadow:"10 15",padding:"20px",width:"100%"}}>
            <TextField
              id="outlined-multiline-static"
              label="Subject"
              multiline
              rows="1"
              placeholder="Add Subject Here"
              variant="outlined"
              style={{width:"100%",margin:"10px 0px"}}
              InputProps={{
                style:{
                  fontSize:"15px"
                }
              }}
              InputLabelProps={{
                style:{
                  fontSize:"15px"
                }
              }}
              name="MailSubject"
            />
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows="7"
              placeholder="Type Message Here"
              variant="outlined"
              style={{width:"100%",margin:"10px 0px"}}
              name="MailMessage"
              InputProps={{
                style:{
                  fontSize:"15px"
                }
              }}
              InputLabelProps={{
                style:{
                  fontSize:"15px"
                }
              }}
            />
          </div>
          </Card>
        </Fade>

  </Modal>

<Paper  style={{width:"100%",      display: 'flex',
      flexWrap: 'wrap',}}>
<Table  style={{width:"100%",fontSize:"20px"}}>
<TableHead>
<TableRow>
<TableCell style={{width:"100%",fontSize:"20px"}}>Enrollment No</TableCell>
<TableCell style={{width:"100%",fontSize:"20px"}} align="right">Semester</TableCell>
<TableCell style={{width:"100%",fontSize:"20px"}} align="right">Section</TableCell>
<TableCell style={{width:"100%",fontSize:"20px"}} align="right">Group</TableCell>
<TableCell style={{width:"100%",fontSize:"20px"}} align="right">Present</TableCell>
<TableCell style={{width:"100%",fontSize:"20px"}} align="right">Absent</TableCell>
<TableCell style={{width:"100%",fontSize:"20px"}} align="right">Select</TableCell>
</TableRow>
</TableHead>
{ <TableBody>
{
    this.state.data.map(row => (
<TableRow key={row.enrollment_no}>
<TableCell component="th" scope="row" style={{fontSize:"10px"}}>
{row.enrollment_no}
</TableCell>
<TableCell  style={{fontSize:"10px"}}align="right">{row.semester}</TableCell>
<TableCell  style={{fontSize:"10px"}} align="right">{row.section}</TableCell>
<TableCell  style={{fontSize:"10px"}} align="right">{row.group}</TableCell>
<TableCell  style={{fontSize:"10px"}} align="right">{row.totalPresent}</TableCell>
<TableCell  style={{fontSize:"10px"}} align="right">{row.totalAbsent}</TableCell>
<TableCell  style={{fontSize:"10px"}} align="right"><input type="checkbox" onClick={()=>{console.log(this.state);this.addToSendMessageArray(row.enrollment_no)}}></input></TableCell>
</TableRow>
))
}
</TableBody> }
</Table>
</Paper>
</div>
</div>
      </div>
    );
  }
}

export default analyticsWrapper;
