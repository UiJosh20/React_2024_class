import axios from "axios";
import React, { useEffect, useState } from "react";
import Example from "../example/Example";
import { useNavigate } from "react-router-dom";

const LandingPageHome = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  let url = "https://api.github.com/users"

   useEffect(()=>{
    setIsLoading(true)
    fetchJokes()
    setTimeout(()=>{
      setIsLoading(false)
    }, 3000)
    
   },[])

   
   
   const  fetchJokes = () =>{
    axios.get(url)
    .then((response)=>{
      console.log(response.data);
      if(response.data){
          // navigate("/ex")
      }
      
    })
   }

   const handleParam = () =>{
     let id = 1;
     let username = "dr_anonymous"
     localStorage.setItem("id",JSON.stringify(id))
     navigate(`/account/${id}/${username}`)
   }
    
  return (
    <>
      {isLoading ? (
        <div class="loader"></div>
      ) : (
        <section className="p-10">
          <h1>Welcome to the use state class</h1>
          <Example/>
          <button className="bg-red-300 p-3 rounded-md" onClick={handleParam}>Check out your account</button>
        </section>
      )}
    </>
  );
};

export default LandingPageHome;
