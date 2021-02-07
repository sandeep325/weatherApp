import React, { useEffect, useState } from 'react';

const Tempapp = () => {
     const [city, setCity] = useState(null);
     const [searchQuery, setSearchQuery] =useState("delhi");
   
     useEffect( ()=>{
   const fetchApi = async () =>{
       const url = `http://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&units=metric&appid=0a44234c9e42a592d8da0c7edd74cfdf`;
                 const response = await fetch(url);
                const resjson =  await response.json();
                //   console.log(resjson);
                setCity(resjson.main);
    }
         fetchApi();
     } , [searchQuery])

    return ( 
    <>
   <div className="box">
   <div className="inputData input-container">
  <input type="search" className="inputfiled" 
                 onChange= { (event)=>{setSearchQuery(event.target.value)} }  defaultValue={searchQuery}/>
   </div>

   {!city ? ( <p>No Data Found 😢 </p>) : (
       <div>
       <div className="info">
           <h2 className="location">
           <i className="fas fa-street-view"></i>{searchQuery}</h2>
           
           <h1 className="temp">
             {city.temp} °Cel
           </h1>
           <h3 className="tempmin_max">Min {city.temp_min} °Cel | max {city.temp_max} °Cel </h3>    

       </div>
{/* wave animate */}
<div className="wave-one"></div>
<div className="wave-two"></div>
<div className="wave-three"></div>
       </div>

   )}

    

</div>     

    </>
);
}
export default Tempapp;