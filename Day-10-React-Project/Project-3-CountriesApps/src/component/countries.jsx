
import React,{useState, useEffect} from 'react';
import Country from './country';
import { v4 as uuidv4 } from 'uuid';
import style from './counties.module.css'
import Search from "./serach"


const countries = () => {

    const [countries, setCountries] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [ error, setError] = useState(null)
    const [filterdata, setFilterdata] = useState([])

 
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then((res)=>{
            if (!res.ok) {
                 throw Error(`Your Contries Api Not Connected ${res.status} Error`)
            } else {
                return res.json();
            }
        })
        .then((countries)=>{
            setCountries(countries);
            setFilterdata(countries);
            setIsLoading(false);
            
        })
        .catch((error)=>{
            setError(error.message);
            setIsLoading(false);
        })
    }, [])

    const RemoveItem = ((RemoveItem)=>{
        const FilterDataCountry = countries.filter((filterCountry)=>
            filterCountry.name.common !== RemoveItem )
        setFilterdata(FilterDataCountry)
    })

    const searchDAta = ((searchDAta)=>{
   
        const filterCountryData = countries.filter((filterCountry)=>
            filterCountry.name.common.toLowerCase().startsWith(searchDAta.toLowerCase())
           
        )
        setFilterdata(filterCountryData);

        
    })
    



    return (
       
       <div>
        <Search onSearch = {searchDAta} />
        <div className={style.MainDegign}>
            {isLoading && <p>Api Loading....</p>}
            {error && <p>{error}</p>}
            {filterdata.map((country)=>
                <Country  country= {country} id={uuidv4()} key={uuidv4()} onRemoveItem ={RemoveItem} />
            )}

        </div>
       </div>
    );
};

export default countries;