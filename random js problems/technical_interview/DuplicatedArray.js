// return only objects that have duplicated words in tilte

let movies = [
    { title: 'godfather and the aliens', rating: 7 },
    { title: 'Breakfast at Tiffany Breakfast', rating: 6 },
    { title: 'Coming of age age', rating: 7 },
    { title: 'Coming of age , ,coming', rating: 7 },
    { title: 'Coming of age age', rating: 7 },
];

const duplicatesArray = (movies) => movies.filter(movie => {
    let words = movie.title.toLowerCase().split(/[^a-zA-Z]+/g);
    unique = [...new Set(words)];
    return words.length !== unique.length;
});

console.log(duplicatesArray(movies));