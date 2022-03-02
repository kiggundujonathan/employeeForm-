import React from 'react'
import { Grid} from '@material-ui/core'
import { useForm, Form } from './useForm';
import * as employeeServices from "../services/employeeServices";
import controls from "../components/Controls/controls";
const genderItems = [
    {id: 'male',title:'Male'},
    {id: 'female',title:'Female'},
    {id: 'other',title:'Other'},
]
const initialFValues ={
    id : 0,
    SurName: '',
    OtherName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
}

export default function EmployeeForm() {

    const validate =() => {
        let temp = {}
        temp.SurName= values.SurName?"":"this field is required."
        temp.OtherName= values.OtherName?"":"this field is required."
        temp.email= (/$|.+@.+..+/).test(values.email)?"":"Email is not valid."
        temp.mobile= values.mobile?.length>9?"":"minimum 10 numbers required."
        temp.departmentId = values.departmentId.length!==0?"":"this field is required."
        setErrors ({
            ...temp
        })
    }
const { values,
    errors,
    setErrors,
    handleInputChange,

} = useForm(initialFValues);
     const handleSubmit= () => {
        window.alert ('submitting...')
     }
    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                    <Grid item xs={6}>
                    <controls.Input
                     variant= "outlined"
                     label= "Surname"
                     name ="SurName"
                     value = {values.SurName}
                     onChange= {handleInputChange}
                    />
                     <controls.Input
                     variant= "outlined"
                     label= "Othername"
                     name ="OtherName"
                     value = {values.OtherName}
                     onChange= {handleInputChange}
                    />
                    <controls.Input
                       variant= "outlined"
                       label= "email"
                       name ="email"
                       value = {values.email}
                       onChange= {handleInputChange}
                       />    
                        <controls.Input
                       label= "Mobile"
                       name ="mobile"
                       value = {values.mobile}
                       onChange= {handleInputChange}
                       /> 
                        <controls.Input
                       label= "City"
                       name ="city"
                       value = {values.city}
                       onChange= {handleInputChange}
                       />       
                    </Grid>
                <Grid item xs= {6}>
                    <controls.RadioGroup
                    name = "gender"
                    label = "Gender"
                    value = {values.gender}
                    onChange= {handleInputChange}
                    items = {genderItems}
                    />
                     <controls.Select
                      name= "departmentId"
                      label= "Department"
                      value={ values.departmentId}
                      onChange={handleInputChange}
                      options ={employeeServices.getDepartmentCollection()}
                     />
                     <controls.DatePicker
                     name = "hireDate"
                     label = "Hire Date"
                     value = {values.hireDate}
                     onChange={handleInputChange}/>
                     <controls.CheckBox
                     name = "isPermanent"
                     label = "Permanent Employee"
                     value = {values.isPermanent}
                     onChange={handleInputChange}
                     />
                     <div>
                      <controls.Button
                       type = "submit"
                       text = "submit"
                      />
                       <controls.Button
                       text = "Reset"
                       color = "default"
                      />
                     </div>
                </Grid>
            </Grid>
            </Form>
    )

    }