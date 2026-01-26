/* eslint-disable no-unused-vars */
import React from 'react'
import { Navigate } from 'react-router-dom'

const Proteced = ({isLogin, children}) => {
 
  if (!isLogin) {
    return  <Navigate to={"/"}  replace />
  } 
else{
  return children;
}

}

export default Proteced