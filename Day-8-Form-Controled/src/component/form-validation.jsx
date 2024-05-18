import React, { Fragment } from 'react'
import {useFormik} from 'formik'
import * as Yup from "yup"


const FormValidation = ()=>{


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            number: '',

           },
           validationSchema:Yup.object({
            name: Yup.string().min(4, "Please type Minimum 2 Charecter").required(),
            email: Yup.string().email().required(),
            password: Yup.number("please Type Number Only").required(),
            number: Yup.number().positive("Please Type Positive Number").integer( "Please type Purno Songkkha").required(),
          }),

           onSubmit: values => {
            console.log(values);
           },
          
    })

    console.error(formik.errors)

    return(
   <div>
    
        <form onSubmit={formik.handleSubmit}>
            <input type="text" name="name" id=""   onChange={formik.handleChange}/>
            {formik.touched.name &&  formik.errors.name && (<span>{formik.errors.name}</span>)}
            <br/>
            <input type="email" name="email" id=""  onChange={formik.handleChange}/>
            {formik.errors.email && <span>{formik.errors.email}</span>}
            <br/>
            <input type="password" name="password" id="" onChange={formik.handleChange} />
            {formik.errors.password && <span>{formik.errors.password}</span>}
            <br/>
            <input type="number" name="number" id="" onChange={formik.handleChange}  />
            {formik.touched.number &&  formik.errors.number && (<span>{formik.errors.number}</span>)}
                 <br/>
            <button type="submit">Submit</button>
        </form>



   </div>
    )
}

export default FormValidation;