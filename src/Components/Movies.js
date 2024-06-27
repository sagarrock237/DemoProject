import React, { useContext, useState } from 'react';
import { AppContext } from './Contexts';
import { useNavigate } from 'react-router-dom';

const Movies = () => {
  const { movie, error } = useContext(AppContext);
  const navigate = useNavigate();


  //FOR NAVIGATING TO MAIN MOVIE PAGE
  const navigateMainMovie = (id) => {
    navigate(`/movieMain/${id}`); // Navigate to the /about route
  };

  return (
    <>
      <div class='container-fluid bg-black'>
        <div class="row">
          {
            movie.map((item) =>

              <div class="col-lg-3 col-md-4 col-10 mx-auto movies-container">
                <div class="my-4 border movies-container-in">
                  <img src={item.Poster}></img>
                  <div class="bg-white px-2 py-2">
                    <span style={{ fontSize: '22px', fontWeight: 600 }}>{item.Title}</span><br></br>
                    <div class="movies-data">
                      <div>
                        <span>Released in year {item.Year}</span><br></br>
                        <span>Type = {item.Type}</span></div>
                      <div class="movies-explore"><button class="btn btn-success" onClick={()=>{navigateMainMovie(item.imdbID)}}>Explore</button></div>
                    </div>
                  </div>

                </div>
              </div>

            )
          }
          {
            error.show ?
            <div style={{height:'100vh'}}>
              <h1 class='text-white text-center'>No more Result</h1>
            </div>
            :null
          }
        </div>
      </div>
    </>

  );
};

export default Movies;