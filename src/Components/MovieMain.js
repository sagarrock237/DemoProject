import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
const MovieMain = () => {

  const { id } = useParams(); //Will take ID form URL
  const [movieDetail, setMovieDetail] = useState({})

  useState(() => {
    fetch(`http://www.omdbapi.com/?apikey=19d43ad3&i=${id}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setMovieDetail(json)
      });
  }, [])

  return (

    
    <div class="container ">
<div class="movieDetail">
<div><img src={movieDetail.Poster}></img></div>
      <div style={{width:'300px'}} class="movieText px-2 py-2">
        <span  style={{fontWeight:600, fontSize:'24px', fontFamily:'sans-serif'}}>{movieDetail.Title}</span><br></br>
        <span  style={{fontWeight:600, fontSize:'14px', fontFamily:'sans-serif'}}>{movieDetail.Released}</span><br></br>
        <span style={{fontWeight:600, fontSize:'14px', fontFamily:'sans-serif'}}>{movieDetail.Genre}</span><br></br>
        <span style={{fontWeight:600, fontSize:'14px', fontFamily:'sans-serif'}}>IMDB Rating: {movieDetail.imdbRating}</span><br></br>
        <span style={{fontWeight:600, fontSize:'14px', fontFamily:'sans-serif'}} >Collection: {movieDetail.BoxOffice}</span>
      </div>
</div>
    </div>
  );
};

export default MovieMain;