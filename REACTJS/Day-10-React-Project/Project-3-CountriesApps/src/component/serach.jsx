import React,{useState, useEffect} from 'react';




const serach = (props) => {
    const [userinput, setUserinput] = useState()

    const VAlluHAndle = (e)=>{
        setUserinput(e.target.value);
    }
    
    useEffect(()=>{
    props.onSearch(userinput);
    },[userinput])
    
    return (
        <div>
            <input type="text" name="name" id=""  placeholder='Search Your Country' onChange={VAlluHAndle} value={userinput} />
        </div>
    );
};

export default serach;