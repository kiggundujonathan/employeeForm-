import { AppBar, Toolbar, Badge, Grid, InputBase,IconButton} from '@material-ui/core'
import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { makeStyles, withStyles } from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';


const useStyles = makeStyles({
     root: {
         backgroundColor: '#fff',
         tranform: 'translateZ(0)'
             } ,
       searchInput: {
           opacity: '0.6',
           padding: '0px 8px',
           fontSize: '0.8rem',
           '&:hover':{
               backgroundColor: '#f2f2f2'
           },
        '&:MuiSvgIcon-root': {
            marginRight: '8px'
        }
       }       
 })
export default function Header() {
    const classes = useStyles();
    return (
       <AppBar position = "static" className = {classes.root}>
           <Toolbar>
               <Grid container
               alignItems = "center">
                   <Grid item >
                     <InputBase
                     placeholder = "Search topics"
                     className = {classes.searchInput}
                     startAdornment = {<SearchIcon fontSize ="small"/>}
                     />
                     </Grid>
                     <Grid item sm>
                     </Grid>
                     <Grid item> 
                     <IconButton>
                         <Badge BadgeContent={4} color = "secondary" >
                             <NotificationsNoneIcon fontSize = "small" />
                             </Badge>
                             </IconButton>
                             <IconButton>
                         <Badge BadgeContent={3} color = "primary" >
                             <ChatBubbleOutlineIcon fontSize ="small"/>
                         </Badge>
                     </IconButton>
                     <IconButton>
                            <PowerSettingsNewIcon fontSize ="small" />
                     </IconButton>
                     </Grid>
               </Grid>
           </Toolbar>
       </AppBar>
    )
}
