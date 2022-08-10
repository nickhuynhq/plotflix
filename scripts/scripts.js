let movieTitle = '';
const movieInfo = `http://www.omdbapi.com/?apikey=e145bd69&t=${movieTitle}&plot=full`;

const formButton = document.getElementById("formButton");
formButton.addEventListener("click", handleButton);

let inputSearch = document.querySelector(".form__search");


function handleButton(event){
    event.preventDefault();
    console.log("clicked");

    movieTitle = inputSearch.value;
    if (movieTitle !== ""){
        console.log(movieTitle);
        let movieInfo = `http://www.omdbapi.com/?apikey=e145bd69&t=${movieTitle}&plot=full`;

        inputSearch.value = '';

        axios.get(movieInfo).then(response => {

            const movieInfo= response.data;
            let moviePlot = movieInfo.Plot;
            let movieTitle = movieInfo.Title;
            let moviePoster = movieInfo.Poster;
            let movieYear = movieInfo.Year;

            let containerEl = document.querySelector(".movie");
            containerEl.innerHTML="";

            // Left Section
            let movieLeft = document.createElement("div");
            movieLeft.classList.add("movie__left");
            containerEl.appendChild(movieLeft);

            let titleEl = document.createElement("h2");
            titleEl.classList.add("movie__title--mobile");
            titleEl.textContent = movieTitle;
            movieLeft.appendChild(titleEl);

            let yearEl = document.createElement("h2");
            yearEl.classList.add("movie__year--mobile");
            yearEl.textContent = `(${movieYear})`;
            movieLeft.appendChild(yearEl);

            let posterEl = document.createElement("img");
            posterEl.classList.add("movie__poster");
            posterEl.setAttribute("src", moviePoster);
            movieLeft.appendChild(posterEl);

            // Right Section

            let movieRight = document.createElement("div");
            movieRight.classList.add("movie__right");
            containerEl.appendChild(movieRight);

            let movieRightTop = document.createElement("div");
            movieRightTop.classList.add("movie__right-top");
            movieRight.appendChild(movieRightTop);

            let titleEl2 = document.createElement("h2");
            titleEl2.classList.add("movie__title--not-mobile");
            titleEl2.textContent = movieTitle;
            movieRightTop.appendChild(titleEl2);

            let yearEl2 = document.createElement("h2");
            yearEl2.classList.add("movie__year--not-mobile");
            yearEl2.textContent = `(${movieYear})`;
            movieRightTop.appendChild(yearEl2);
    
            let movieInfoEl = document.createElement("div");
            movieInfoEl.classList.add("movie__info");
            movieRight.appendChild(movieInfoEl);

            let plotEl = document.createElement("p")
            plotEl.classList.add("movie__plot");
            plotEl.textContent = moviePlot;
            movieInfoEl.appendChild(plotEl);
        
        
        }).catch(error => {
            console.log(error);
        });
    } 
}