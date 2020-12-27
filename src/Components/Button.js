import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';




const useStyles=(bgColor,Width,Height)=>makeStyles({
    root:{
        backgroundColor: bgColor,
        '&:hover': {
            backgroundColor: bgColor,
         },
        width:Width,
        height:Height,
        borderRadius:'4px',
        fontFamily: 'Manrope',
        textTransform: 'none',

fontWeight: 'bold',
fontSize: '15px',
lineHeight: '170%',
color:'#222222',
fontStyle:' normal',
textAlign: 'center',
letterSpacing: '0.16px',
fontFeatureSettings: `'pnum' on, 'lnum' on`,

        
    },
    

})
const FbButton = (props) => {
  
    const {buttonText,bgColor,Width,Height}=props
    const classes=useStyles(bgColor,Width,Height)()
    return (
        <div className='flexibees-button'>
        {buttonText.map(item=>{
            return(
                <Button className={classes.root}>{item}</Button>
            )
        })}
        </div>
    )
}

export default FbButton
