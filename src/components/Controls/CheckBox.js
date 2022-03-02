import { Checkbox, FormControl, FormControlLabel } from '@material-ui/core';
import React from 'react'

export default function CheckBox(props) {

    const {name ,label, value , onChange} = props;

    const ConvertToDefEventPara = (name, value) => ({
        target: {
            name,value
        }
    })
    return (
       <FormControl>
           <FormControlLabel 
           control ={
               <Checkbox 
               name ={name}
               color = "primary"
               checked = {value}
               onChange={e => onChange(ConvertToDefEventPara(name, e.target.checked))}
               />}
               label = {label}
           />
       </FormControl>
    )
}
