let movieTitle = '';
const movieInfo = `http://www.omdbapi.com/?apikey=e145bd69&t=${movieTitle}&plot`;

const formButton = document.getElementById("formButton");
formButton.addEventListener("click", handleButton);

let inputSearch = document.querySelector(".form__search");


function handleButton(event){
    event.preventDefault();
    let movieTitle = inputSearch.value;

    inputSearch.value = '';
    if (movieTitle !== ""){
        console.log(movieTitle);
        let movieInfo = `http://www.omdbapi.com/?apikey=e145bd69&t=${movieTitle}&plot=full`;
        
        axios.get(movieInfo).then(response => {

            const movieInfo= response.data;
            console.log(movieInfo);
            let moviePlot = movieInfo.Plot;
            let movieTitle = movieInfo.Title;
            let moviePoster = movieInfo.Poster;
            let movieYear = movieInfo.Year;
            let movieGenre = movieInfo.Genre;
            let movieRating = movieInfo.imdbRating;
            let movieId = movieInfo.imdbID;

            let containerEl = document.querySelector(".movie");
            containerEl.innerHTML="";

            if(movieTitle === undefined){
                let errorEl = document.createElement("img");
                errorEl.classList.add("movie__error");
                errorEl.setAttribute("src", "../images/invalid-title.png");
                containerEl.appendChild(errorEl);

                let errorMsgEl = document.createElement("h2");
                errorMsgEl.classList.add("movie__error-message");
                errorMsgEl.textContent = `Please enter a valid Movie Title`;
                containerEl.appendChild(errorMsgEl);

            } else {

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

                let posterAnchor = document.createElement("a");
                posterAnchor.classList.add("movie__anchor");
                posterAnchor.setAttribute("href", `https://www.imdb.com/title/${movieId}/`);
                posterAnchor.setAttribute("target", "_blank");
                movieLeft.appendChild(posterAnchor);

                let posterEl = document.createElement("img");
                posterEl.classList.add("movie__poster");
                posterEl.setAttribute("src", moviePoster);
                posterAnchor.appendChild(posterEl);

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

                let movieRightMid = document.createElement("div");
                movieRightMid.classList.add("movie__right-middle");
                movieRight.appendChild(movieRightMid);

                let genreEl = document.createElement("h3")
                genreEl.classList.add("movie__plot");
                genreEl.textContent = movieGenre;
                movieRightMid.appendChild(genreEl);

                let ratingContainer = document.createElement("div");
                ratingContainer.classList.add("movie__rating-container");
                ratingContainer.setAttribute("src", "../images/gold-star.svg.png");
                movieRightMid.appendChild(ratingContainer);

                let starEl = document.createElement("img");
                starEl.classList.add("movie__star");
                starEl.setAttribute("src", "../images/gold-star.svg.png");
                ratingContainer.appendChild(starEl);

                let ratingEl = document.createElement("p")
                starEl.classList.add("movie__rating");
                ratingEl.textContent = movieRating;
                ratingContainer.appendChild(ratingEl);

                let movieInfoEl = document.createElement("div");
                movieInfoEl.classList.add("movie__info");
                movieRight.appendChild(movieInfoEl);

                let plotEl = document.createElement("p")
                plotEl.classList.add("movie__plot");
                plotEl.textContent = moviePlot;
                movieInfoEl.appendChild(plotEl);
            };
        }).catch(error => {
            console.log(error);
        });
    } 
}