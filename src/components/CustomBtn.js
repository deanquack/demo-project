import React from 'react'
import {Button} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles' //hook that allows to write css code in the components folder

const StyledButton = withStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "44px",
        padding: "0 25px",
        boxSizing: "border-box",
        borderRadius: 0,
        background: "#4f25f7",
        color: "#fff",
        transform: "none",
        bozShadow: "6px 6px 0 0 #c7d8ed",
        transition: "background .3s, border-color .3s, color .3s", "&hover":{
            backgroundColor: "#4f25f7"
        },
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

function CustomBtn(props) { //gets called by the app function so that we can create custom text in app.js
    return (
        <StyledButton variant="contained">{props.txt}</StyledButton>
    )
}

export default CustomBtn
