import React from 'react';
import TextField from '@material-ui/core/TextField';
import { fade, withStyles, makeStyles, createMuiTheme } from '@material-ui/core/styles';
const useStylesReddit = makeStyles(theme => ({
    inputRoot: {
      fontSize:"17px", 
      border: '1px solid #e2e2e1',
      overflow: 'hidden',
      borderRadius: 4,
      backgroundColor: '#fcfcfb',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:hover': {
        backgroundColor: '#fcfcfb',
      },
      '&$focused': {
        backgroundColor: '#fcfcfb',
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main,
      }
    },
    labelRoot: {
      fontSize: "13px",
      "&$labelFocused": {
        color: "purple"
      }},
    focused: {},
  }));
export  function RedditTextField(props) {
    const classes = useStylesReddit();
    return (<TextField 
    style={{width:"95%",margin:"10px auto"}}
    InputProps={{classes: { root: classes.inputRoot } , disableUnderline: true }}
    InputLabelProps={{classes: {root: classes.labelRoot,focused: classes.labelFocused}
    }}
    {...props}
    />);
  }