function moviesParser(input) {

    let movies = [];

    for (const element of input) {

        if (element.includes('addMovie')) {
            let name = element.replace('addMovie ', '');
            addMovie(name);
        } else if (element.includes('directedBy')) {
            let [name, director] = element.split(' directedBy ');
            addDirector(name, director);
        } else if (element.includes('onDate')) {
            let [name, date] = element.split(' onDate ');
            addDate(name, date);
        }
    }

    function addMovie(name) {
        movies.push({ name });
    }

    function addDirector(name, director) {
        let movie = movies.find((m) => m.name === name);
        if (movie) {
            movie.director = director;
        }
    }

    function addDate(name, date) {
        let movie = movies.find((m) => m.name === name);
        if (movie) {
            movie.date = date;
        }
    }

    let jsonStr = '';

    for (const movie of movies) {
        if (movie.hasOwnProperty('name') && movie.hasOwnProperty('director') && movie.hasOwnProperty('date')) {
            jsonStr += JSON.stringify(movie) + '\n';
        }
    }
    console.log(jsonStr);
}


moviesParser(
    [
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
    ]
);
