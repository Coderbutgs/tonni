import {useState} from "react";
import dataContext from "./dataContext";

const DataState = (props)=>{
    
    const userId = "65b3a22c01d900e96c4219ae";
    const[data,setData] = useState([]);
    const getData = async()=>{
        try {
            const response = await fetch(`https://portfolio-backend-30mp.onrender.com/api/v1/get/user/${userId}`); 
            if (!response.ok) {
              throw new Error('Network response was not ok.');
            }
            const res = await response.json();
            setData(res);
          } catch (error) {
            
          }
    }

 
    return(
        <dataContext.Provider value = {{data,getData}}>
            {props.children}
        </dataContext.Provider>
    )
}

export default DataState;