async function getData(value){
  let url = `${endpoint}?apikey=${key}&s=star`;
  
  if (value) {
    url = `${endpoint}?apikey=${key}&s=${value}`;
  }
    const endpoint = 'http://www.omdbapi.com/';
    const key = '827f3e5d';
    
//getData met de input combineren 
    fetch(url)
      .then(response => response.json())
    //   .then(data => clean(data.data))
    //   .then(data => store(data))
    .then(data => showData(data))
      .catch(err => {
        console.log(err);
      });
  }
  
  getData()

  function showData(data) { // toont de data op de website
    const movies = data.Search; // met de 'await' wacht het script tot de data geladen is
    console.log(movies); // kan je in de console kijken wat de mogelijk data is
    const movieList = document.getElementById('movieList');

  console.log(movieList)
    const movieArray = movies.map(movie => {
      return (
        `<a href="#${movie.imdbID}"><article> <h2> ${movie.Title}</h2> <img src=${movie.Poster} /></article></a>`
        )
    })
    const html = "<h2>TEST</h2>"
    console.log(movieArray)
    movieList.insertAdjacentHTML('beforeend', movieArray.join(' '));
  }   


  // Dynamische request doen
  // const search = document.querySelector('search')
  // const inputValue = search.value
  // `${endpoint}?apikey=${key}&s=${inputValue}`
  // 

  // als je het formulier submit =>
  // inputValue meegeven aan getData(inputvalue)

//   const search = document.querySelector('#search')
//   console.log(search)

//   const button = document.querySelector('#button')
//   console.log(button)

//   let inputValue; 
  
//   function readInput() {
//   inputValue = search.value
//   console.log(inputValue)
//   }

//   button.addEventListener("click", readInput()) {
//     console.log(search.value)
// });






