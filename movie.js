
//  let movies=document.querySelectorAll(".movies-wrap")
//  let pop=document.querySelectorAll(".pop")
// movies.forEach(function(movie){
//     movie.addEventListener("click",()=>{
//     console.log("clicked")
//      pop.classList.toggle("show")
//     })
// })
// URLs
const api_key = "api_key=cdb0e57439f0b47c8bb63ec0dff4f7aa";
const base_url= 'https://api.themoviedb.org/3';
const popular_movies_url= '/discover/movie?sort_by=popularity.desc&'
const trending_movies_url ='/movie/top_rated?';
const r_movies_url ='/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&'

const theatre_movies_url='/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&';
const kid_movies_url ='/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&';
const best_dramas_url ='/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&';
const search_url= base_url + '/search/multi?'+api_key+'&language=en-us'
const youtube_url= 'https://www.youtube.com/watch?v='

// Concatenated URLs
const popular_movies= base_url + popular_movies_url +api_key;
const kid_movies = base_url + kid_movies_url + api_key;
const theatre_movies= base_url + theatre_movies_url +api_key;
const r_movies = base_url+r_movies_url+ api_key
const dramas = base_url + best_dramas_url +api_key;
const trending_movies= base_url+trending_movies_url+api_key
const img_url='https://image.tmdb.org/t/p/w500';




let homeMovieEl=document.querySelector(".movie-page")
let popular = document.querySelector(".popular-movies");
let kid= document.querySelector(".kid-movies")
let trending = document.querySelector(".trending-movies");
let rate_r =document.querySelector(".r-movies")

let arrows= document.querySelectorAll("button");
let movieList= document.querySelectorAll(".movie-list");
let searchForm =document.querySelector(".search-box")
let search = document.querySelector("#search");
let searchBtn= document.querySelector("#search-btn");
let menuBtn=document.querySelector("#menu");
let sideBar=document.querySelector(".side-bar")





// Fetching The Urls
function getPopularMovies(url){
    fetch(url).then(res => res.json()).then(data=>{
        popularMovies(data.results)
    })
}
function getHomeMovie(url){
    fetch(url).then(res => res.json()).then(data=>{
        homeMovie(data.results)
        
})
}

function getKidMovies(url){
    fetch(url).then(res=>res.json()).then(data=>{
        kidMovies(data.results)
    })
}
function getTrendingMovies(url){
    fetch(url).then(res=>res.json()).then(data=>{
        trendingMovies(data.results)
    })
}
function getRMovies(url){
    fetch(url).then(res=>res.json()).then(data=>{
        RMovies(data.results)
    })
}
// Calling The Get Movie Functions For Each Movie Section
getHomeMovie(theatre_movies)

function homeMovie(data){
    data.forEach(home_movie=>{
    homeMovieEl.innerHTML=""
    let {id,title,poster_path}= home_movie;
    let homeEl = document.createElement("div")
    homeEl.classList.add("image")
    homeEl.innerHTML=`<img src="${img_url+poster_path}" alt="${title}">
    <div class="home-info">let us play</div>
</div>
<div class="icon-list">
    <p><i class="material-icons">add</i><span>My List</span></p>
    <span class="play"><i class="material-icons">play_arrow</i>Play</span>
    <p><i class="material-icons">info</i><span>Info</span></p>
</div>`
homeMovieEl.insertBefore(homeEl,homeMovieEl.children[0]);

const getTrailer= base_url+'/movie'+ "/"+`${id}` + '/videos?'+api_key
let play= homeEl.querySelector(".play")
play.addEventListener("click", ()=>{
    console.log("click")
    fetch(getTrailer).then(res=> res.json()).then(data =>{
        getTrail(data.results)});
       

})

})
}
// Popular Movies
getPopularMovies(popular_movies);

function popularMovies(data){
    for (let i = 0; i < 1; i++) {
    data.forEach(popular_movie => {
        
        let {id,title,poster_path,release_date,overview}=popular_movie;
        let movieEl= document.createElement('div');
              movieEl.classList.add("movies-wrap");
            
         movieEl.innerHTML= `<div class="movie">
                   <img id="poster"src="${img_url+poster_path}" alt="${title}">
        </div>

        <!-- Pop-Up -->
        <div class="pop">
            <div id="close"><i class="material-icons">close</i></div>
            <div class="name">
         <div class="img"><img src="${img_url+poster_path}" alt="${title}"></div>
            <div class="information">
            <span class="title">${title}</span>
            <p class="year">${release_date}</p>
            <p class="info">${overview}</p>
        </div>
        </div>
        <div class="icons">
         <p> <i class="material-icons play">play_arrow</i><span>Play</span></p>
           <p> <i class="material-icons" id="download" >download</i><span>Download</span></p>
           <p> <i class="material-icons" >add</i><span>My List</span></p>
           <p> <i class="material-icons">visibility</i><span>View</span></p>
        </div>
    </div>
    </div>`

    popular.insertBefore(movieEl,popular.children[0]);

    const getTrailer= base_url+'/movie'+ "/"+`${id}` + '/videos?'+api_key
    let play= movieEl.querySelector(".play")
    play.addEventListener("click", ()=>{
        console.log("click")
        fetch(getTrailer).then(res=> res.json()).then(data =>{
            getTrail(data.results)});
           
    })
    let closeBtn = movieEl.querySelector("#close")
    closeBtn.addEventListener("click",()=>{
        console.log("click")
       let pop= movieEl.querySelector(".pop")
        pop.classList.toggle("close")
        
        })
    }


    )};
    
}
// Kid Movies

getKidMovies(kid_movies)
function kidMovies(data){
    for (let i = 0; i < 1; i++) {
    data.forEach(popular_movie => {
        
        let {id,title,poster_path,release_date,overview}=popular_movie;
        let movieEl= document.createElement('div');
              movieEl.classList.add("movies-wrap");
            
         movieEl.innerHTML= `<div class="movie">
                   <img id="poster"src="${img_url+poster_path}" alt="${title}">
        </div>

        <!-- Pop-Up -->
        <div class="pop">
            <div id="close"><i class="material-icons">close</i></div>
            <div class="name">
         <div class="img"><img src="${img_url+poster_path}" alt="${title}"></div>
            <div class="information">
            <span class="title">${title}</span>
            <p class="year">${release_date} </p>
            <p class="info">${overview}</p>
        </div>
        </div>
        <div class="icons">
           <p> <i class="material-icons play">play_arrow</i><span>Play</span></p>
           <p> <i class="material-icons" id="download" >download</i><span>Download</span></p>
           <p> <i class="material-icons" >add</i><span>My List</span></p>
           <p> <i class="material-icons">visibility</i><span>View</span></p>
        </div>
    </div>
    </div>`

    kid.insertBefore(movieEl,kid.children[0]);

    const getTrailer= base_url+'/movie'+ "/"+`${id}` + '/videos?'+api_key
    let play= movieEl.querySelector(".play")
    play.addEventListener("click", ()=>{
        console.log("click")
        fetch(getTrailer).then(res=> res.json()).then(data =>{
            getTrail(data.results)});
            
           
    })

        }


    )};
    
}
  function getTrail(data){
     data.forEach(trail => {
        let {key}=trail;
        let trailer ='https://www.youtube.com/watch?v='+ key
        window.open(trailer,"_blank") 

     })
  }
// Trending Movies
  getTrendingMovies(trending_movies)
function trendingMovies(data){
    for (let i = 0; i < 1; i++) {
    data.forEach(trending_movie => {
        
        let {id,title,poster_path,release_date,overview}=trending_movie;
        let movieEl= document.createElement('div');
              movieEl.classList.add("movies-wrap");
            
         movieEl.innerHTML= `<div class="movie">
                   <img id="poster"src="${img_url+poster_path}" alt="${title}">
        </div>

        <!-- Pop-Up -->
        <div class="pop">
            <div id="close"><i class="material-icons">close</i></div>
            <div class="name">
         <div class="img"><img src="${img_url+poster_path}" alt="${title}"></div>
            <div class="information">
            <span class="title">${title}</span>
            <p class="year">${release_date}</p>
            <p class="info">${overview}</p>
        </div>
        </div>
        <div class="icons">
           <p> <i class="material-icons play">play_arrow</i><span>Play</span></p>
           <p> <i class="material-icons" id="download" >download</i><span>Download</span></p>
           <p> <i class="material-icons" >add</i><span>My List</span></p>
           <p> <i class="material-icons">visibility</i><span>View</span></p>
        </div>
    </div>
    </div>`

    trending.insertBefore(movieEl,trending.children[0]);

    const getTrailer= base_url+'/movie'+ "/"+`${id}` + '/videos?'+api_key
    let play= movieEl.querySelector(".play")
    play.addEventListener("click", ()=>{
        console.log("click")
        fetch(getTrailer).then(res=> res.json()).then(data =>{
            console.log(data)
            getTrail(data.results)});
            
           
    })

        }


    )};
    
}
  function getTrail(data){
     data.forEach(trail => {
        let {key}=trail;
        let trailer ='https://www.youtube.com/watch?v='+ key
        window.open(trailer,"_blank") 

     })
  }
// R Movies
getRMovies(r_movies)
function RMovies(data){
    for (let i = 0; i < 1; i++) {
    data.forEach(r_movie => {
        
        let {id,title,poster_path,release_date,overview}=r_movie;
        let movieEl= document.createElement('div');
              movieEl.classList.add("movies-wrap");
            
         movieEl.innerHTML= `<div class="movie">
                   <img id="poster"src="${img_url+poster_path}" alt="${title}">
        </div>

        <!-- Pop-Up -->
        <div class="pop">
            <div id="close"><i class="material-icons">close</i></div>
            <div class="name">
         <div class="img"><img src="${img_url+poster_path}" alt="${title}"></div>
            <div class="information">
            <span class="title">${title}</span>
            <p class="year">${release_date} <span class="rate">16+</span><span class="time"> 2h:32m</span> </p>
            <p class="info">${overview}</p>
        </div>
        </div>
        <div class="icons">
           <p> <i class="material-icons play">play_arrow</i><span>Play</span></p>
           <p> <i class="material-icons" id="download" >download</i><span>Download</span></p>
           <p> <i class="material-icons" >add</i><span>My List</span></p>
           <p> <i class="material-icons">visibility</i><span>View</span></p>
        </div>
    </div>
    </div>`

    rate_r.insertBefore(movieEl,rate_r.children[0]);

    const getTrailer= base_url+'/movie'+ "/"+`${id}` + '/videos?'+api_key
    let play= movieEl.querySelector(".play")
    play.addEventListener("click", ()=>{
        console.log("click")
        fetch(getTrailer).then(res=> res.json()).then(data =>{
            console.log(data)
            getTrail(data.results)});
            
           
    })

        }


    )};
    
}
  function getTrail(data){
     data.forEach(trail => {
        let {key}=trail;
        let trailer ='https://www.youtube.com/watch?v='+ key
        window.open(trailer,"_blank") 

     })
  }




// Search Button
searchBtn.addEventListener("click",(e)=>{
    e.preventDefault()

    let searchTerm = search.value;

    if(searchTerm){
        getPopularMovies(search_url+"&query="+searchTerm)
    }
})
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault()

    let searchTerm = search.value;

    if(searchTerm){
        getPopularMovies(search_url+"&query="+searchTerm)
    }
})
// Getting Movie Trailers


// Making A Carousel Effect
    arrows.forEach((arrow,i) =>{
        let itemNumber= movieList[i]
        let number=20;
        let clickCounter=0;
        arrow.addEventListener("click",()=>{
            clickCounter++;
            if(number -(9+clickCounter)+(9-2)>= 0){
        movieList[i].style.transform = `translateX(${
        movieList[i].computedStyleMap().get("transform")[0].x.value
    -300}px)`}
    else{
        movieList[i].style.transform = `translateX(0)`
        clickCounter=0
    }
        })
        
    })

menuBtn.addEventListener("click",()=>{
    sideBar.classList.toggle("show")
    switch(menuBtn.innerText){
        case'close':menuBtn.innerText='menu';
        break;
        case 'menu':menuBtn.innerText='close'
    }
})

 