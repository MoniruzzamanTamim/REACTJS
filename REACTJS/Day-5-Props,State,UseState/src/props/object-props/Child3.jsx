import React from 'react'

function Child3({employee}) {
    const {name,salary,address} = employee;
    const {city,country} = address;
  return (
    <div>
        <p>Hello My Name is: {name} </p>
        <p>My Corrent Salary is: {salary} </p>
        <p>I am Come From {city + "," + country} </p>
    </div>
  )
}

export default Child3