import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';




const useStyles=makeStyles({
    root:{
        backgroundColor: '#F8B817',
        '&:hover': {
            backgroundColor: "#F8B817",
         },
        width:'163px',
        height:'50px',
        borderRadius:'4px'
        
    },
    flexibeesButton:{position: 'absolute',
        left: '0%',
        right: '0%',
        top: '0%',
        bottom: '0%',
        backgroundColor: '#F8B817',
        borderRadius: '4px'
        }

})
const FlexiBeesButton = (props) => {
    const classes=useStyles()
    const {buttonText}=props
    return (
        <div className='flexibees-button'>
        <Button  className={classes.root} disableRipple><p>{buttonText}</p></Button>
        </div>
    )
}

export default FlexiBeesButton
