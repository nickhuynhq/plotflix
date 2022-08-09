let movieTitle = '';
const movieInfo = `http://www.omdbapi.com/?apikey=e145bd69&t=${movieTitle}&plot=full`;


const formButton = document.getElementById("formButton");
formButton.addEventListener("click", handleButton);

let inputSearch = document.querySelector(".form__search");


function handleButton(event){
    event.preventDefault();
    console.log("clicked");

    movieTitle = inputSearch.value;
    console.log(movieTitle);
    let movieInfo = `http://www.omdbapi.com/?apikey=e145bd69&t=${movieTitle}&plot=full`;

    axios.get(movieInfo).then(response => {

        const movieInfo= response.data;
        let moviePlot = movieInfo.Plot;
        let movieTitle = movieInfo.Title;
        let moviePoster = movieInfo.Poster;
        let movieYear = movieInfo.Year;
        console.log(movieYear)

        let posterEl = document.querySelector(".movie__poster");
        posterEl.setAttribute("src", moviePoster);
    
        let plotEl = document.querySelector(".movie__plot");
        plotEl.textContent = moviePlot;
    
        let titleEl = document.querySelector(".movie__title--mobile");
        titleEl.textContent = movieTitle;

        let titleEl2 = document.querySelector(".movie__title--not-mobile");
        titleEl2.textContent = movieTitle;

        let yearEl = document.querySelector(".movie__year--mobile");
        yearEl.textContent = `(${movieYear})`;

        let yearEl2 = document.querySelector(".movie__year--not-mobile");
        yearEl2.textContent = `(${movieYear})`;

       
    
    
    }).catch(error => {
        console.log(error);
    });
}

// axios.get(movieInfo).then(response => {

//     const movieInfo= response.data;
//     let moviePlot = movieInfo.Plot;
//     let movieTitle = movieInfo.Title;

//     let plotEl = document.querySelector(".movie-plot")
//     plotEl.textContent = moviePlot;

//     let titleEl = document.querySelector(".movie-title")
//     titleEl.textContent = movieTitle;


// }).catch(error => {
//     console.log(error);
// });