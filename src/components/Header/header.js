import React,{Component} from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class Header extends Component{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <AppBar position="static" color="primary" style={{marginBottom:"10px"}}>
            <Toolbar color="primary">
                <p style={{fontSize:"30px",width:"100%",fontWeight:"500",display:"block",textAlign:"center"}}> 
                    {this.props.heading}
                </p>
            </Toolbar>          
            </AppBar>
        )
    }
}

export default Header;
