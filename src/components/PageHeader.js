import React from 'react'
import { Paper , Card , Typography} from '@material-ui/core';
import { makeStyles} from "@material-ui/core";

const usestyles = makeStyles(theme =>({
    root : {
       backgroundColor : '#fdfdff'
    },
    PageHeader: {
        padding : theme.spacing(4),
        display : 'flex',
        MarginBottom : theme.spacing(2)
    },
    pageIcon: {
        display: 'inline-block',
        padding : theme.spacing(2),
        color : '#3c44b1'
    },
    pageTitle: {
        paddingLeft : theme.spacing(4),
        '& .MuiTypography-subtitle2':{
            opacity : '0.6'
        }

    }
}))

export default function PageHeader(props) {
    const classes = usestyles();
    const { title , subTitle, icon } =props;
    return (
        <Paper elevation = {0} square className= {classes.root}>
         <div className= {classes.PageHeader}>
             <Card className= {classes.pageIcon}>
             {icon}
             </Card>
         <div className= {classes.pageTitle}>
         <Typography
         variant = "h6"
         component = "div">
             {title}</Typography>
         <Typography
         variant = "subTitle2"
         component = "div"> 
             {subTitle} </Typography>
             </div>
             </div>
        </Paper>
    )
}
