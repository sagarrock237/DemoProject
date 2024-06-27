// CONTEXT API
import React, { useEffect, useState } from "react"

const AppContext = React.createContext();

const my_API = `http://www.omdbapi.com/?apikey=19d43ad3&s=`


const AppProvider = ({ children }) => {

  const [loading, setLoading] = useState(true)
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState({show: false, msg:''});
  const [searchQuery, setSearchQuery] = useState("cars")


  //GET MOVIES LIST FORM API
  const getMovies = async(url) =>{
    try{
      const res = await fetch(url);
      const data = await  res.json();
      console.log(data)
      if(data.Response === 'True'){
        setLoading(false);
        setMovie(data.Search)
      }else{
        setError({
          show:true,
          msg:data.error
        })
      }
    }
    catch(error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getMovies(`${my_API}&s=${searchQuery}`)
  },[searchQuery])



  //PROVIDER

  return <AppContext.Provider value={{loading, error, movie, searchQuery, setSearchQuery}}>
    {children}
  </AppContext.Provider>


}



export { AppProvider, AppContext }