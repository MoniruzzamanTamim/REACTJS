import React,{useState, useEffect} from 'react';
import usecustomhooks from './custom.hook'

const SecondAPI = () => {

    const  { apiData, isLoading, error } = usecustomhooks("https://jsonplaceholder.typicode.com/comments")
    return (
        <div>

        {isLoading && <p>Page Loading.......</p>}
        {apiData && apiData.map((todo)=>{
             return  <div key={todo.id} style={{textAlign: "left", border: "1px solid red", margin: "10px 0"}}> 
                 <span>{todo.id}</span>
                 <h3>{todo.name}</h3>
                 
                 
                  </div>
        })}
     {error && <p>{error}</p>}
     
         </div>
    );
};

export default SecondAPI;