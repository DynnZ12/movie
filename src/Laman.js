import { useState,useEffect } from 'react';
import { getMovieList, searchMovie } from './api';
import './App.css';


export default function Laman() {
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() =>{
    getMovieList().then((result)=>{
      setPopularMovies(result)
      
    });
  }, []);

  const imageUrl = 'https://image.tmdb.org/t/p/w500'
  
  const PopularMovieList = () =>{
    return popularMovies.map((movie, i) => {
      return (
        
        <div className='movie-wrapper' key={i}>
            <div className="atasC card w-61 h-62 shadow-xl  text-white">
              <div className='images '>
                  <figure><img className='imageUtama' src={`${imageUrl}/${movie.poster_path}`} alt=" Harap Mengerti Api Gratisan" /></figure>
              </div>
           <div className="absolut card-body text-white place-content-end">
          <h2 className="card-title testing ">
            {movie.title}
          </h2>
      <div className="card-actions  mt-4">
        <div className="release items-start text-xs ">{movie.release_date}</div> 
        <div id="voteS" className="badge badge-outline badge-sm text-xs">
          {movie.vote_average}
          <img className='ms-1' src={require('./favicon-16x16.png')} height='12' width='10'>
            </img>
            </div>
      </div>
    </div>
  </div>
  </div>
      )
    })
    }
    
  const pop = document.getElementById('poop');
  
  const search = async (q) =>{
    if( q.length > 3 ){
      const query = await searchMovie(q)
      setPopularMovies(query.results)
      pop.style.display = "none";
    }
   
  }
 
  return (
   <>
     <div className="App-header">
    <div className="navbar bg-base-100">
<div className="flex-1">
 <a href='./' className="btn btn-ghost normal-case text-xl">DynnZ</a>
 {/* <a href="./Toprate.js" className='btn btn-ghost ms-5 text-sm'>Top Rated</a> */}
</div>
<div className="flex-none gap-5">   
   <div className="form-control">
   <input type="text" placeholder="Search" onChange={({target}) => search(target.value)}  className="input input-bordered w-24 md:w-auto" />
 </div>
 <div className="flex-end">
 

 </div>
</div>
</div>
</div>
<h1 id="poop" className='text-4xl text-white mt-8 ms-8'>Popular</h1>

<div className='Movie-container mt-4 mb-8'>
     
          <PopularMovieList />
       
          </div>
         </>
  )
  }
    