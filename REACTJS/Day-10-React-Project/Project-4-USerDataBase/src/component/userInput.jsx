import React,{useState} from 'react'
import style from './users.module.css'


const UserInput = (props) => {
    const [ userInput, setUserinput] = useState({name:"", email:"", email:"", password:""})

    const HandleUserInput = (e)=>{
       const fieldName = e.target.name;
       setUserinput((oldinputData)=>{
        return {...oldinputData, [fieldName]:e.target.value}
       })
 
    }

    const SubmitUserData =(e)=>{
        e.preventDefault()
       props.onDataCollect(userInput);
    }

  return ( 
    

    <form action="" onSubmit={SubmitUserData} className={style.formdesign}>
        <div>
            <label htmlFor="name">Your Name :</label>
            <input type="text" name="name" id="name" onChange={HandleUserInput} />
        </div>
        <div>
            <label htmlFor="username">Your Username :</label>
            <input type="text" name="username" id="username" onChange={HandleUserInput} />
        </div>
        <div>
            <label htmlFor="email">Your Email :</label>
            <input type="email" name="email" id="email" onChange={HandleUserInput} />
        </div>
        <div>
            <label htmlFor="password">Your Password :</label>
            <input type="password" name="password" id="password" onChange={HandleUserInput} />
        </div>
        <div>
           
            <button type="submit">Submit Data</button>
        </div>
    </form>
  )
}

export default UserInput;