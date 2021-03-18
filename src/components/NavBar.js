import React from 'react';
import CustomBtn from './CustomBtn';
import logo from '../logo.svg' //imports the logos needed using .. which is in the src folder
import logoMobile from '../logoMobile.svg';
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "15%", 
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})
function NavBar() { //this is the menu bar that acts as  a flex box, the className is referred thoughout he MaterialUI
    const classes = styles();
    return (
        <Toolbar position = "sticky" color ="rgba(0, 0, 0, 0.87)" className= {classes.bar}> 
            <img src={logo} className={classes.logo}/>
            <img src={logoMobile} className={classes.logoMobile}/>
            <Typography variant ="h6" className={classes.menuItem}>
                About
            </Typography>
            <Typography variant ="h6" className={classes.menuItem}>
                Videos
            </Typography>
            <Typography variant ="h6" className={classes.menuItem}>
                Contact/Social Media
            </Typography>
            <CustomBtn txt= "SUBSCRIBE TO DOKKANDEAN" /> 
        </Toolbar>
    )
}

export default NavBar
