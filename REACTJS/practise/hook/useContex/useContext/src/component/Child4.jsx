import React,{useContext} from 'react'
import UserContext from './UserContext'
function Child4() {
    const data = useContext(UserContext)
    const {datas,ClickFunction}=data
    const {name,phone}=datas
  return (
    <div>Child4


        <h4>Name:{name}</h4>
        <h4 onClick={(()=> ClickFunction(phone))}>Phone: {phone}</h4>
    </div>
  )
}

export default Child4