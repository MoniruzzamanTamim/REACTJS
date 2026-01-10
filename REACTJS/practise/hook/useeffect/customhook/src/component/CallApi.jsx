import React, { useEffect, useState } from 'react'


function callApi(url) {

    const [isVallue, setIsVallue]=useState();
    const[isError, setIsError]=useState();
    const[isLoading, SetIsLoading] = useState(true);

    useEffect(()=>{
        fetch(url)
        .then((res)=>{
            if(!res.ok){
                throw new Error("User Json Response Error");
            }
            else{
                return res.json()
            }
        })
        .then((data)=>{
            setIsVallue(data);
            SetIsLoading(false)

        })
        .catch((err)=>{
            setIsError(err.message)
            SetIsLoading(false)
        })

    },[url]);

           return {isVallue,isError,isLoading}
}

export default callApi