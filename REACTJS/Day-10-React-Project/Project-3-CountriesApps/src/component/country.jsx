import React from 'react';
import style from './counttry.module.css'

const country = (props) => {
    const {name, population, region, flags , capital, latlng } = props.country
    const [id]= props.id
    
   
    const DeleteCountry =(e)=>{
e.preventDefault()
        props.onRemoveItem(name.common);

    }
    
    return (
        
            <div>
            <img src={flags.png} alt={name.common} srcset=""  className={style.imageDesign}/>
            <h3 className={style.titleDesign}>Country Name: {name.common}</h3>
            <p className={style.desDesign}>Capital : {capital}</p>
            <p className={style.desDesign}>Population : {population}</p>
            <p className={style.desDesign}>Raligion : {region}</p>
            <p className={style.desDesign}>Code:  : {latlng}</p>
        
            <button onClick={DeleteCountry} >REMOVE COUNTRY </button>
        </div>
        
    );
};

export default country;