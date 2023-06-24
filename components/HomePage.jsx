import React, { useEffect, useState } from 'react'

const HomePage = () => {
    const [data, setData ] = useState({});
    const [error,setError]= useState("");

    const response = JSON.parse(localStorage.getItem("response"))
    useEffect(()=>{
        if(response.id){
        fetch(`https://dummyjson.com/users/${response.id}`)
        .then(res=> res.json())
        .then(res => {
            console.log(res)
            setData(res)
        })
    }else{
        setError("invalid credentials")
    }
    },[])
    

  return (
    <div>
        {
            !error && data && (<div key={data.id}>
                        <h1>Profile Page</h1>
                        <h4>Details of the user</h4>
                        <p>{data.firstName}</p>
                        <p>{data.lastName}</p>
                        <p>{data.age}</p>
                        <p>{data.gender}</p>
                        <p>{data.university}</p>
                        <p></p>
                    </div>)
        }
        {<h1>{error}</h1>}
    </div>
  )
}

export default HomePage
