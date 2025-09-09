import React, {useState} from "react";
import "./index.css";
function SimpleProfileCard({name,age,location}){
    const [currentAge, setcurrentAge] =useState(age);
    //making function to update age
    const increaseAge=()=>{
      setcurrentAge(currentAge+1);
    };
    return(
        <div className="card">
            <h2>{name}</h2>
            <p>Age: {currentAge}</p>
            <p>Location: {location}</p>
            <button onClick={increaseAge}Increase Age></button>
        </div>
    );

}
export default SimpleProfileCard