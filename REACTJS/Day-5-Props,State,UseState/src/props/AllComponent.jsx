import React from 'react'
import Parent from './basicprops/Parent'
import ParentObj from './object-props/ParentObj'
import ParentArray from './array-props/ParentArray'
import ParentFunction from './function-props/ParentFunction'
import ParentAssignment from './Assignment-1/ParentAssignment'
import Products from './Assignment-2/Products'
import ClassComponent from './classComponent/ClassComponent'


function Allcomponent() {
  return (
   <>
    <Parent/>
    <ParentObj/>
    <ParentArray/>
    <ParentFunction/>
    <ParentAssignment/>
    <Products/>
    <ClassComponent/>

   </>

  )
}

export default Allcomponent