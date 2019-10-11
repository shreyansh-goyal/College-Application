import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import React from "react";
/**
 * 
 * @param {text,icon,width} props
 * This button will recieve the text and the icon to show and then will return the the constructed button 
 */
export function GeneralButton(props){
return(
    <Button
    variant="contained"
    color="primary"
    >
    <div style={{display:"flex",justifyContent: "space-between",width:props.width,padding:0}}>
    <div>{props.text}</div><div><Icon>{props.icon}</Icon></div>
    </div>
    </Button>
)
}
