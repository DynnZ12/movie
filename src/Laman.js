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
            <div className="card w-96 bg-base-100 shadow-xl ms-5">
            <figure><img src={`${imageUrl}/${movie.poster_path}`} alt="Harap Mengerti Api Gratisan" /></figure>
           <div className="card-body">
          <h2 className="card-title testing">
            {movie.title}
           <div className="badge badge-secondary">NEW</div>
      </h2>
      <div className="card-actions justify-end">
        <div className="badge badge-outline">{movie.release_date}</div> 
        <div className="badge badge-outline">{movie.vote_average}<img className='ms-1' src={require('./favicon-16x16.png')} height='12' width='10'></img></div>
      </div>
    </div>
  </div>
  </div>
      )
    })
  }

  const search = async (q) =>{
    if( q.length > 3){
      const query = await searchMovie(q)
      setPopularMovies(query.results)
    }
   
  }
 
  return (
   <>
    <div className="App-header">
    <div className="navbar bg-base-100">
<div className="flex-1">
 <a className="btn btn-ghost normal-case text-xl">DynnZ</a>
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

<div className='Movie-container mt-8 mb-8'>
     
          <PopularMovieList />
       
          </div>
         </>
  )
}
