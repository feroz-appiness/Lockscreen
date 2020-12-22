import React from 'react'

import flexibeesLogo from '../Assets/Group.png'
import loginImage from '../Assets/Login-image.png'
import Button from '../Components/Button'
import {useState} from 'react'
import {Link,Redirect} from 'react-router-dom'
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles({
    root: { flexGrow: 1 },
    flexibeesLogoRightSide:{
        position: 'absolute',
       
        top: '94.34px',
        bottom: '652.34px',
        right: '373.03px'
     
    },

lockScreenRight :{
    
    position: 'absolute',
    right: '0px',
    top: '0px',
    bottom: '0px',
    
    width: '651.4px'
    
},
flexibeesLoginTextWrapper:{
    position: 'absolute',
left: '20.29%',
right: '11.68%',
top: '29.54%',
bottom: '61.57%',
width: '331.67px',
height: '80px'
},
flexibeesLoginText:{
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '34px',
    lineHeight: '40px',
    
    color: '#000000',



},

buttonWrapper:{
    position: 'absolute',
    top: '70%',
    left: '20%'
    

}

})



const Lockscreen = (props) => {
    const classes=useStyles()
    const [isLoggedIn,setisLoggedIn]=useState(false)
    const handleSetLogIn=()=>{
        setisLoggedIn(true)
    }
    isLoggedIn && <Redirect to='/Dashboard'/>

    return (
       <div className={classes.root}>
       <Grid container >
       <Grid item xs={12} lg={6} sm={12} md={12}>
      <img src={loginImage} alt='login-img'/>
      </Grid>
      <Grid item xs={12} lg={6} sm={12} md={12}>
      <div className={classes.lockScreenRight }>
      
      <img className={classes.flexibeesLogoRightSide} alt='flexibees logo' src={flexibeesLogo}/>
     
      
      <div className={classes.flexibeesLoginTextWrapper}>
      <p className={classes.flexibeesLoginText}>Login to flexibees as a Super admin</p>
      </div>
      <div className={classes.buttonWrapper}>
      <Link style={{ textDecoration: 'none' }} to='/Dashboard'><Button onClick={handleSetLogIn} buttonText='Get Started'></Button></Link>
      </div>
     
      
    </div>
      </Grid>
     
      </Grid>
       </div>
      
       
     
       
    
       
      
    )
}

export default Lockscreen
