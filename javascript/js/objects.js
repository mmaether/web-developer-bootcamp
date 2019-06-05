var movies = [
  {
    title: "In Bruges",
    rating: 5,
    hasWatched: true,
  },
  {
    title: "Frozen",
    rating: 4.5,
    hasWatched: false,
  },
  {
    title: "Mad Max Fury Road",
    rating: 5,
    hasWatched: true,
  },
  {
    title: "Les Miserables",
    rating: 3.5,
    hasWatched: false,
  }
]

var watched = "";
movies.forEach(function(movie){
  if(movie.hasWatched == true) {
    watched = "watched";
  } else {
    watched = "not seen";
  }
  console.log("You have " + watched + " \"" + movie.title + "\" - " + movie.rating + " stars");
})
