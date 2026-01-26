import React, { useReducer, useRef } from 'react'
import Form from './Form'

const UserData = [
  { name: "Tamim", email: "Tamimiqbal896@gmail.com", number: "01739820399" },
  { name: "Iqbal", email: "Tamimiqbal896@gmail.com", number: "01739820399" },
  { name: "Rahim", email: "rahim@gmail.com", number: "01739820399" },
];

const initialValue = {
  userDatas: UserData
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        userDatas: [...state.userDatas, action.value]
      };

    default:
      return state;
  }
};

function MainComponent() {
  const nameRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();

  const [state, dispatch] = useReducer(reducer, initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();

    const values = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      number: numberRef.current.value
    };

    dispatch({
      type: 'ADD',
      value: values
    });
  };

  return (
    <>
      <div>MainComponent</div>

      <Form
        name={nameRef}
        email={emailRef}
        number={numberRef}
        onSubmit={handleSubmit}
      />

      <hr />

      <h3>User List</h3>
      <ul>
        {state.userDatas.map((user, index) => (
          <li key={index}>
            {user.name} — {user.email} — {user.number}
          </li>
        ))}
      </ul>
    </>
  )
}

export default MainComponent;
