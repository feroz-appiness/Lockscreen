import React from 'react'

import flexibeesLogo from '../Assets/Group.png'
import loginImage from '../Assets/Login-image.png'
import FbButton from '../Components/Button'
import {useState} from 'react'
import {Link,Redirect} from 'react-router-dom'
import {Grid,Container,Box} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles({
   
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
const buttonLabels=['Get Started','view or update']
    return (
       <Box >
       
       
      <img src={loginImage} alt='login-img' height='400' style={{height:'auto',maxWidth:'100%'}}/>
   
     
      <div className={classes.lockScreenRight }>
      
      <img className={classes.flexibeesLogoRightSide} alt='flexibees logo' src={flexibeesLogo}/>
     
      
      <div className={classes.flexibeesLoginTextWrapper}>
      <p className={classes.flexibeesLoginText}>Login to flexibees as a Super admin</p>
      </div>
      <div className={classes.buttonWrapper}>
      <Link style={{ textDecoration: 'none' }} to='/Dashboard'><FbButton onClick={handleSetLogIn} buttonText={buttonLabels} bgColor={'red'} Width={'163px'} Height={'50px'}></FbButton></Link>
      </div>
     
      
    </div>
     
     
     
       </Box>
      
       
     
       
    
       
      
    )
}

export default Lockscreen
