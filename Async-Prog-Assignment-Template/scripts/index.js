import navbar from "../component/navbar.js";

let nav = document.getElementById("nav_append");
nav.innerHTML = navbar();

let images = [
  "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Ym9sbHl3b29kJTIwbW92aWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1497015455546-1da71faf8d06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9sbHl3b29kJTIwbW92aWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvbGx5d29vZCUyMG1vdmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym9sbHl3b29kJTIwbXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Ym9sbHl3b29kJTIwbXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1564736676781-d0f57b29f67a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9sbHl3b29kJTIwbXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  "https://media.istockphoto.com/photos/indian-friends-belly-dancing-picture-id487511899?b=1&k=20&m=487511899&s=170667a&w=0&h=Hd7bZ3NBygtrMrefhQ7YWRLHwp1SChdisJmRbxdXS3Q=",
  "https://media.istockphoto.com/photos/traditional-indian-music-performance-group-picture-id171347816?b=1&k=20&m=171347816&s=170667a&w=0&h=arfa00II-KXZ7Lm84UnLS-Q0o-JQvFaAkSfeYKFnIx4=",
  "https://media.istockphoto.com/photos/tabla-drums-and-bells-for-dancing-picture-id481704172?b=1&k=20&m=481704172&s=170667a&w=0&h=EUiBQ57WckyKHTjrxaTl6ULonLlS4kUXWZTwrO4SOms=",
];

// console.log(imgData);

let slide = document.getElementById("slideshow");
//    let container = document.getElementById('container');
let i = 0;
setInterval(function () {
  if (i === images.length) {
    // for making cyclick process
    i = 0;
  }
  let image = images[i]; // url
  slide.innerHTML = null;
  let img = document.createElement("img");
  img.src = image;

  slide.append(img);
  i++;
}, 1000);

// ***********************************************************

let dataBase = [
  {
    poster:
      "https://1.bp.blogspot.com/-xyH0Qs6yPmI/Xvs0bhdcQPI/AAAAAAAAZ_s/9kRuWAaGKLoXcwq-Dz-cgswdrMV3eHYOQCLcBGAsYHQ/s1600/Bhuj-Movie-Poster.jpg",
    name: "BHUJ ",
        releasedate: "01/ 26/2020",
        rating:1,
  },
  {
    poster:
      "https://pbs.twimg.com/media/FM-zbw5UcAMscgy?format=jpg&name=4096x4096",
    name: " PARUSU RAM",
      releasedate: "01/ 26/2020",
      rating:3,
  },
  {
    poster:
      "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1643818675.jpg",
    name: "VALAMAI ",
      releasedate: "01/ 26/2020",
      rating:4,
  },
  {
    poster:
      "https://assets.gqindia.com/photos/5ff48d545a0f252d355ec8c5/master/w_1600%2Cc_limit/Marakkar_Arabikadalinte-Simham.jpg",
    name: "MARAAKAR ",
      releasedate: "01/ 26/2020",
      rating: 4,
  },
  {
    poster:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:q-80/et00129624-ftnryeuyhl-portrait.jpg",
    name: "BATMAN ",
      releasedate: "01/ 26/2020",
      rating:4,
  },
  {
    poster:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2021-06-29-at-10-05-30-am-1624975547.png?crop=1xw:0.8384413309982487xh;center,top&resize=480:*",
    name: "THE TOMARROW WAR ",
      releasedate: "01/ 26/2020",
      rating:2,
  },
  {
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ9aQslSN4XcMhwr2mQbpzbvz42Jf0NfRhiw&usqp=CAU",
    name: "fAMILY MAN ",
      releasedate: "01/ 26/2020",
      rating:3,
  },
  {
    poster: "http://timesofindia.indiatimes.com/photo/80667156.cms",
    name: "dOCTER ",
      releasedate: "01/ 26/2020",
      rating:1,
  },
  {
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ6ffc98nIr1fgRJ2GfoMrhxIV50taxFMIjw&usqp=CAU",
    name: " VEERAMAE",
      releasedate: "01/ 26/2020",
      rating:3,
  },
  {
    poster:
      "https://i.pinimg.com/originals/25/71/60/2571603b026255a01b9a283af04008ea.jpg",
    name: "DHAKAD ",
      releasedate: "01/ 26/2020",
      rating:5,
  },
  {
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3XPsU3YOq4IYvZe-Tp7CzB0dc6qrd8WGeeQUA33glyFHhNux8iiU7BtuiAPtw7bwcGaQ&usqp=CAU",
    name: "RRR ",
      releasedate: "01/ 26/2020",
      rating:5,
  },
  {
    poster:
      "https://m.media-amazon.com/images/M/MV5BNWU5NjgyMmEtYTBkZC00ZTBmLTg5YTQtM2FlMzg1Y2Y4NWI2XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    name: " MARKARNIKA",
      releasedate: "07/ 23/ 2018",
      rating:1,
    
  },
];

let movies = document.getElementById("movies");
localStorage.setItem("data", JSON.stringify(dataBase));
let data = JSON.parse(localStorage.getItem("data"));
displaydata(data);



function checkMovies() {
    var selected = document.querySelector("#sort-buttons").value;
    // console.log(selected);                                                                                                    
    if (selected == "high") {
        // we should write deccending order logic 
        data.sort(function (a, b) {
            return (b.rating) - (a.rating)
        })
        
    }
    if (selected == "low") {
        // we should write accendig order logic
        data.sort(function (a, b) {
            return (a.rating) - (b.rating)
        })
    }
    
    
    displaydata(data);
    
}

function displaydata(data) {
    document.querySelector("#movies").textContent = "";
    data.map(function (el) {
        let box = document.createElement("div");
      box.setAttribute("id", "box");
      let img = document.createElement("img");
      img.setAttribute("id", "poster")
      img.src = el.poster;
      let name = document.createElement("p");
      name.innerText = ` Movie Name : ${el.name}`;
      let date = document.createElement("p");
      date.innerText = ` Release Date :${el.releasedate}`;
      let rating = document.createElement("p");
        rating.innerText = ` Rating :${el.rating}*****`;
      box.append(img, name, date, rating);
      movies.append(box);
    });
}