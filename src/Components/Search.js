import React from 'react';
import { AppContext } from './Contexts';
import { useContext } from 'react';

const Search = () => {

  const { searchQuery, setSearchQuery, error } = useContext(AppContext);

  return (
    <div class="">
      <div class="container-fluid search-box pt-1">
        <div class="row">

          {/* LOGO */}
          <div class="col-lg-2 col-md-2 col-12">
            <img src="https://www.cnncreativemarketing.com/wp-content/uploads/2019/06/TheMovies_LOGO_EP_Tagline_900px-1.png"></img>
          </div>

          {/* SEARCH */}
          <div class="col-lg-8 col-md-10 col-12">
            <form action="#" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input class="form-control w-75 mx-auto mt-3" placeholder='Search Your Favourite Movies' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}></input>
              </div>
            </form>
          </div>
          <div class="col-lg-2 col-md-2 col-12 mt-3"></div>
        </div>

      </div>

    </div>
  );
};

export default Search;