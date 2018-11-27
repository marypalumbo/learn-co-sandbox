fetch('http://www.omdbapi.com/?apikey=9ea864c4&t=iron+man')
.then((movieResponse) => {
  return movieResponse.json()
  })
.then((movieJson) => {
  const title = document.querySelector('#title')
  const rated = document.querySelector('#rated') 
  const year = document.querySelectory('#year')
  
  title.innerText = movieJson['Title']
  rated.innerText = movieJson['Rated']
  year.innerText = movieJson['Year']
}
)

// asynchronous programming 

console.log(movieData)
