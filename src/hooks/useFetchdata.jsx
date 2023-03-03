import React, { useState,useEffect } from 'react'
import instance from '../api/instance'

const useFetchData = (ENDDATA) => {
    const [data , setData] = useState([])
    useEffect(()=>{
        instance.get(ENDDATA)
        .then(response => 
            {setData(response.data)}
        )
       
       },[ENDDATA])
       return [data]
}

export default useFetchData