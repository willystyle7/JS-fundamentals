function generateCatHtml(cat) {
        return `<div class="cat cat-${cat.breed}${cat.gender === 'female' ? ' highlight' : ''}">\n\t<h3>${cat.name}</h3>\n</div>`;
}

let cat = {
    name: 'Whiskers',
    breed: 'tabby',
    gender: 'male'
}

console.log(generateCatHtml(cat));