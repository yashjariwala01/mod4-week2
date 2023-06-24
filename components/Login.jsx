import "../login.css"
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";


const Login = () => {

    let [loggedInUser, setLoggedInUser] = useState({
        username: "",
        password: ""
    })

    let [error, setError] = useState("")
    const [result ,setResult] = useState('')
    
    const navigate = useNavigate();



    function handleLogin(e){
     
        e.preventDefault();
         if(!loggedInUser.username || !loggedInUser.password){
             return setError("Please fill all the fields")
         }

            // make a post request to login the user

        fetch('https://dummyjson.com/auth/login',{
            method:'POST',
            headers:{ 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username:loggedInUser.username,
                password: loggedInUser.password,
            })
        })
        .then(response=>response.json())
        .then(res=>{
           localStorage.setItem("response" , JSON.stringify(res)) 
           setResult(res);
            navigate('/homepage')
           return console.log(res)
        })
        .catch(error=>{
            console.log(error.message);
            setError(error.message);
        })

    }



    return(
        <div >
                
            {
                error ?<h1>Error</h1> : (<form>  
                <input type="text" placeholder="username" 
                  onChange={(e) => setLoggedInUser({...loggedInUser, username: e.target.value})}
                />

                <input type="password" placeholder="Password" 
                  onChange={(e) => setLoggedInUser({...loggedInUser, password: e.target.value})}
                />

                <button type="submit"  onClick={handleLogin}>Login</button>

                </form>)
            }
            {<h1>{result}</h1>}
        </div>
    )
}

export default Login;