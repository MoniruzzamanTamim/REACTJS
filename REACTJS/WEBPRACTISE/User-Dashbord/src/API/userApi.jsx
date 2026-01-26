import React,{useState, useEffect} from 'react'

function useUserApi(url) {
        const[user,setUser]=useState([]);
        const[error,setError]=useState();
        const[loading,setLoading]=useState(true);

    
    useEffect(() => {
        fetch(url)
        .then((res)=>{
            if(!res.ok) {
                throw Error("Your User API not Connected...")
            }
            else{
                return res.json();
            }
        })
        .then((data)=>{
            setUser(data)
            setLoading(false)
        })
        .catch((err)=>{
            setError(err.message)
            setLoading(false)
        })
    
    }, [url])
return {user,error,loading}

}

export default useUserApi