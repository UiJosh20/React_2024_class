import axios from "axios";
import React, { useEffect, useState } from "react";

const LandingPageHome = () => {
  const [isLoading, setIsLoading] = useState(false);

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
      
    })
   }
    
  return (
    <>
      {isLoading ? (
        <div class="loader"></div>
      ) : (
        <section>
          <h1>Welcome to the use state class</h1>
        </section>
      )}
    </>
  );
};

export default LandingPageHome;
