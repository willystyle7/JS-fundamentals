function bookSheld(input) {
    let shelfs = {};
    input.forEach(line => {
        if (line.includes('->')) {
            let [id, genre] = line.split(' -> ');
            if (!shelfs.hasOwnProperty(id)) {
                shelfs[id] = { genre, books: [] };
            }
        } else {
            let [title, author, genre] = line.split(/: |, /);
            for (const id in shelfs) {
                if (shelfs[id].genre == genre) {
                    shelfs[id].books.push({title, author});
                }
            }
        }
    });
    Object.keys(shelfs)
        .sort((a, b) => shelfs[b].books.length - shelfs[a].books.length)
        .forEach(id => {
            let genre = shelfs[id].genre;
            let books = shelfs[id].books;
            console.log(`${id} ${genre}: ${books.length}`);
            books
                .sort((a, b) => a.title.localeCompare(b.title))
                .forEach(book => {
                    console.log(`--> ${book.title}: ${book.author}`);
                });
        });
}

bookSheld([
    '1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history'
]);
