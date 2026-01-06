import React from 'react'
import {useFormik} from 'formik'


const FormikForm = ()=>{


  
   

    const formik = useFormik({
        initialValues: {
           name: '',
           email: '',
           password: '',
          },
          onSubmit: values => {
           console.log(values);
          },

    })


 return (
    
    <form onSubmit={formik.handleSubmit} >
    
    <input type="text" name='name' onChange={formik.handleChange}  /> <br/>
    <input type="email" name="email" id=""  onChange={formik.handleChange}/> <br/>
    <input type="password" name="password" id="" onChange={formik.handleChange} /> <br/>
    <button type="submit">Submit Formik Data</button>


    </form>

 )

}

export default FormikForm;