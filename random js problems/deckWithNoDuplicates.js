let deck = [
    {
        id: 1,
        name: 'name1',
        cost: '3',
        class: 'spade1'
    },
    {
        id: 1,
        name: 'name1',
        cost: '3',
        class: 'spade1'
    },
    {
        id: 2,
        name: 'name2',
        cost: '4',
        class: 'spade2'
    },
    {
        id: 2,
        name: 'name2',
        cost: '4',
        class: 'spade2'
    },
    {
        id: 3,
        name: 'name3',
        cost: '1',
        class: 'spade3'
    },
    {
        id: 4,
        name: 'name4',
        cost: '6',
        class: 'spade4'
    }
];

function deckWithDuplicates(deck) {
    deckWithCounts = deck.map(item => {
        let count = deck.filter(x => x.id === item.id).length;
        item.count = count;
        return item;
    });
    let deckWithNoDuplicates = deckWithCounts.filter((item, index) => index === deck.findIndex(el => el.id === item.id));
    console.log(deckWithNoDuplicates);
}

deckWithDuplicates(deck);
