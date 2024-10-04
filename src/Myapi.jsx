import React, { useEffect, useState } from "react";
let Myapi=()=>{
    let [state,setState]=useState([]);
    useEffect(()=>{
        let api=fetch("http://localhost:2020/details")
        api.then(val=>val.json()).then(x=>setState(x))
    },[])
    return(
      <div>
          { state.map((y)=>{
                return(
                    <h1>My name is {y.age}</h1>
                )
            })
        } 
      </div>
    )
}
export default Myapi;