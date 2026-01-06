import React,{useState, useEffect} from 'react';
import usecustomhooks from './custom.hook'

const CustomApi = () => {

    const  { apiData, isLoading, error } = usecustomhooks("https://jsonplaceholder.typicode.com/albums")
    return (
        <div>

        {isLoading && <p>Page Loading.......</p>}
        {apiData && apiData.map((todo)=>{
             return  <div key={todo.id} style={{textAlign: "left", border: "1px solid red", margin: "10px 0"}}> 
                 <span>{todo.id}</span>
                 <h3>{todo.title}</h3>
                 
                 
                  </div>
        })}
     {error && <p>{error}</p>}
     
         </div>
    );
};

export default CustomApi;