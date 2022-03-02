import React from 'react'
import './App.css';
import SideMenu from "../components/SideMenu";
import { CssBaseline, makeStyles, withStyles,createMuiTheme } from '@material-ui/core';
import Header from "../components/Header";
import Employees from '../Pages/Employees';


const theme = createMuiTheme ({
 palette : {
   primary:{
     main: "#333996",
     light: '#3c44b126'
   },
   secondary : {
      main: "#f83245",
      light: '#f8324526'
   },
   background:{
     default: "#f4f5fd"
   },
 },
    shape: {
      borderRadius: '12px'
    },
     overrides:{
       MuiAppBar:{
         root:{
           transform: 'translateZ(0)'
         }
       }

     },
     props:{
       MuiIconButton:{
         disableRipple:true
       }
     }

})
const useStyles = makeStyles({
  appmain:{
    paddingLeft: '320px',
    width: '100%'
  }
})
function App() {
  const classes = useStyles();
  return (
    <>
    <SideMenu />
    <div className= {classes.appmain}> 
    <Header/>
   
      <Employees/>
     </div>
     <CssBaseline/>
     
  </>
  )
}
 
export default App;
