var title = document.getElementsByClassName("title")[0];
var list = document.getElementsByClassName("list")[0];
title.innerHTML = "Popular Movies";
var linksTitle = [
  {
    title: "Google",
    link: "https://www.Google.com",
  },
  {
    title: "Twitter",
    link: "https://www.Twitter.com",
  },
  {
    title: "Facebook",
    link: "https://www.Facebook.com",
  },
  {
    title: "Wuzzuf",
    link: "https://www.Wuzzuf.net",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com",
  },
];

// const base_url = "https://jsonplaceholder.typicode.com/posts";
const movie_base_url =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=9aeaa4994a27aedb991bf0bea7ee555b";

const image_url = "https://image.tmdb.org/t/p/w500";

initList();

// linkLists();

async function initList() {
  var response = await fetch(movie_base_url);
  if (response.ok) {
    var movies = await response.json();
    console.log(movies);
    movies.results.forEach((movie) => {
      var div = document.createElement("div");
      var p = document.createElement("p");
      var image = document.createElement("img");
      var text = document.createTextNode(movie.original_title);
      image.src = image_url + movie.poster_path;
      image.alt = movie.original_title;
      image.title = movie.original_title;
      image.width = "200";
      image.height = "200";
      image.addEventListener("click", () => {
        window.location.href = "../details/details_index.html";
      });
      p.style.fontSize = "25";
      p.style.fontWeight = "bold";
      p.appendChild(text);
      div.appendChild(image);
      div.appendChild(p);
      var li = document.createElement("li");
      li.appendChild(div);
      list.appendChild(li);
    });
  }
}

// function linkLists() {
//   linksTitle.forEach((e) => {
//     var a = document.createElement("a");
//     var li = document.createElement("li");
//     var text = document.createTextNode(e.title);
//     a.appendChild(text);
//     a.title = e.title;
//     a.href = e.link;
//     li.appendChild(a);
//     list.appendChild(li);
//   });
// }
