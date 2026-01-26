import React from 'react'

function Form({ name, email, number, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" ref={name} />
      <input type="email" name="email" ref={email} />
      <input type="number" name="number" ref={number} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form;
