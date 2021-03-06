import { FormControlLabel,FormControl,FormLabel, RadioGroup as MuiRadioGroup, Radio} from '@material-ui/core';
import React from 'react'

export default function RadioGroup(props) {
    const {name ,label, value , onChange , items} =props;
    return (
        <FormControl>
                    <FormLabel>{label}</FormLabel>
                    <MuiRadioGroup row ={true}
                     name = "name"
                     value = {value}
                     onChange= {onChange}>
                         {
                             items.map(
                                 (item) =>(
                                    <FormControlLabel value={item.id} control= {<Radio/>} label= {item.title}/>
                                 )
                             )
                         }
                     </MuiRadioGroup> 
                     </FormControl>
    )
}
