import React,{useState, useEffect} from 'react';

const CustomHooks = (url) => {
   
    const [apiData, setApiData] = useState(null)
    const [isPAgeloading, setIsPageLoading] = useState(true)
    const [ errorData, setErrorData] = useState(null)

    useEffect(()=>{
        fetch(url)
        .then((responseData)=>{
            if (!responseData.ok) {
                throw Error("Your API LINK NOT VALID , PLEAS SENT VALID URL")
            }else{
                return responseData.json()
            }
        })
        .then((CollectDAta)=>{
            setApiData(CollectDAta)
            setIsPageLoading(false)
        })
        .catch((errorData)=>{
            setErrorData(errorData.message)
            setIsPageLoading(false)
        })

    },[url]);
    return {apiData, isPAgeloading, errorData}
};

export default CustomHooks;