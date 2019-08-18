import React,{Component} from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
class Footer extends Component{
    render()
    {
        return  (
            <AppBar style={{position:"absolute",bottom:"0",width:"71.7%"}} position="static" color="primary" >
            <Toolbar color="primary">
                <p style={{fontSize:"30px",width:"100%",fontWeight:"500",display:"block",textAlign:"center"}}> 
                    {this.props.footer}
                </p>
            </Toolbar>          
            </AppBar>
        )
    }
}

export default Footer;