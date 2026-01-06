import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicForm from  "./basic-form"
import SecondForm from "./2ndFormHandle"
import ThirdForm from "./form-object"
import FourForm from "./fourForm"
import FiveForm from "./FiveForm"
import FormikForm from "./component/formik-form"
import FormValidation from './component/form-validation'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>Simple Form Control</h2>
      <BasicForm />
      <h2>Doble Input Field And  Vallue Convert Object</h2>
      <SecondForm />
      <h2>object Vallue Singel UseState And Multiple Event Handeling  </h2>
      <ThirdForm />
      <h2>Singel UseState ANd Singel Event Handaling With If Statement</h2>
      <FourForm />
      <h2>Singel UseState ANd Singel Event Handaling For Better Practices</h2>
      <FiveForm />

      <h2>Form-validation With Fomik</h2>
      <FormikForm />

      <h2>Form Validation With Formik And Yup</h2>
      <FormValidation/>



    </>
  )
}

export default App
