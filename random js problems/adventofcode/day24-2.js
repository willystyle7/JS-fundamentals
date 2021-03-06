// Hexagonal grid tiling: https://en.wikipedia.org/wiki/Hexagonal_tiling
// after first composition, make 100 days transformations:
// - Any black tile with zero or more than 2 black tiles immediately adjacent to it is flipped to white.
// - Any white tile with exactly 2 black tiles immediately adjacent to it is flipped to black.


function solve(lines) {
    let blacks = new Set();
    for (let line of lines) {
        let row = 0;
        let col = 0;
        while (line) {
            switch (true) {
                case line.startsWith('e'):
                    line = line.slice(1);
                    row += 2;
                    break;
                case line.startsWith('se'):
                    line = line.slice(2);
                    row += 1;
                    col += 1;
                    break;
                case line.startsWith('sw'):
                    line = line.slice(2);
                    row -= 1;
                    col += 1;
                    break;
                case line.startsWith('w'):
                    line = line.slice(1);
                    row -= 2;
                    break;
                case line.startsWith('nw'):
                    line = line.slice(2);
                    row -= 1;
                    col -= 1;
                    break;
                case line.startsWith('ne'):
                    line = line.slice(2);
                    row += 1;
                    col -= 1;
                    break;
                default:
                    break;
            }
        }
        let coords = `${row}:${col}`;
        if (blacks.has(coords)) {
            blacks.delete(coords);
        } else {
            blacks.add(coords);
        }
    }
    for (let day = 1; day <= 100; day++) {
        let toAddBlacks = new Set();
        let toRemoveBlacks = new Set();
        for (let black of blacks) {
            // find to remove
            let [row, col] = black.split(':');
            row = Number(row);
            col = Number(col);
            let neighbours = findBlackNeighbours(row, col);
            if (neighbours === 0 || neighbours > 2) {
                toRemoveBlacks.add(black);
            }
            // find to add
            if (!blacks.has(`${row + 2}:${col}`) && findBlackNeighbours(row + 2, col) === 2) {
                toAddBlacks.add(`${row + 2}:${col}`);
            }
            if (!blacks.has(`${row - 2}:${col}`) && findBlackNeighbours(row - 2, col) === 2) {
                toAddBlacks.add(`${row - 2}:${col}`);
            }
            if (!blacks.has(`${row + 1}:${col + 1}`) && findBlackNeighbours(row + 1, col + 1) === 2) {
                toAddBlacks.add(`${row + 1}:${col + 1}`);
            }
            if (!blacks.has(`${row + 1}:${col - 1}`) && findBlackNeighbours(row + 1, col - 1) === 2) {
                toAddBlacks.add(`${row + 1}:${col - 1}`);
            }
            if (!blacks.has(`${row - 1}:${col + 1}`) && findBlackNeighbours(row - 1, col + 1) === 2) {
                toAddBlacks.add(`${row - 1}:${col + 1}`);
            }
            if (!blacks.has(`${row - 1}:${col - 1}`) && findBlackNeighbours(row - 1, col - 1) === 2) {
                toAddBlacks.add(`${row - 1}:${col - 1}`);
            }
        }
        toAddBlacks.forEach(black => blacks.add(black));
        toRemoveBlacks.forEach(black => blacks.delete(black));
        // console.log(`day ${day} - ${blacks.size}`);
    }
    return blacks.size;

    function findBlackNeighbours (row, col) {
        let count = 0;
        if (blacks.has(`${row + 2}:${col}`)) count++;
        if (blacks.has(`${row - 2}:${col}`)) count++;
        if (blacks.has(`${row + 1}:${col + 1}`)) count++;
        if (blacks.has(`${row + 1}:${col - 1}`)) count++;
        if (blacks.has(`${row - 1}:${col + 1}`)) count++;
        if (blacks.has(`${row - 1}:${col - 1}`)) count++;
        return count;
    }
}

let lines = `sesenwnenenewseeswwswswwnenewsewsw
neeenesenwnwwswnenewnwwsewnenwseswesw
seswneswswsenwwnwse
nwnwneseeswswnenewneswwnewseswneseene
swweswneswnenwsewnwneneseenw
eesenwseswswnenwswnwnwsewwnwsene
sewnenenenesenwsewnenwwwse
wenwwweseeeweswwwnwwe
wsweesenenewnwwnwsenewsenwwsesesenwne
neeswseenwwswnwswswnw
nenwswwsewswnenenewsenwsenwnesesenew
enewnwewneswsewnwswenweswnenwsenwsw
sweneswneswneneenwnewenewwneswswnese
swwesenesewenwneswnwwneseswwne
enesenwswwswneneswsenwnewswseenwsese
wnwnesenesenenwwnenwsewesewsesesew
nenewswnwewswnenesenwnesewesw
eneswnwswnwsenenwnwnwwseeswneewsenese
neswnwewnwnwseenwseesewsenwsweewe
wseweeenwnesenwwwswnew`.split('\n');

console.log(solve(lines)); // 2208

lines = `seseseseseswsesesenwseseseswenweeese
nwneneseswneneweeneneeeeneeneene
swswseswswswswswseseeswswswswseswsesww
nwsenwnenenwnwnwewnwnwnwnwnwnwwnwnwnw
sesewseesesenwnewewwnewseeseseswsene
eneneneeewswnenewsenenwnwnenewnene
neneneswseseeeswsw
newneeeeneeeeeeeene
wnwwwswwwnwewnwwsewenwwwwnww
swewswswseseseswseewseseseneswnewwsesw
nwswnwsenwnenwwnwnwnwwnwwnwnwnwwnwnwnw
swwwwwnewwwwswswwwwwwseswsww
wwwewwwwswwwwwwwwwswsw
wnwnwnwnwnwnewwnwwnwnwnwsewswwnwww
sweswnwwwnwwnwnwnwseenwnwnwnwnenwnwnw
nenwwwsewnenwwwwwwnwwnwwswnwnww
eeneeesweeesenwneneeeenweeeene
enwwswnwwnwnweswnwnwseswnwnwnwsewnenenw
nwnwnwnwnwswnwnwnwnwnwnwnwnwnesenwnwnwnenw
nwswwsewswwwwww
sesweseeneeswnweeseweseswsesenwnw
sewswwnwneeswswnewswswswwwwnwswwse
enwnwswnwnenwnenwswneneneneneswnwsewnenwnw
nwnenwnwsenwnwnwnwnwwwnwnwnwnwnwnwnwnw
seesesesesesewsesesesesesesesesesesesene
swneneseswsewswwsenesesewswwnewswseswne
swnwswsenesewneswswnwswsewewswseswnene
wwswwseseswwnwnww
esewnwseseswnweseesenwswseesesesee
seeneneneseenenwsweeeeeeeewe
seseswseswsewseseswsweseswseseswswsese
swneeneeneseneweesewne
nenenenenenenenenenenwnenwsenenenenenene
neneneswneneneneneneswnenenenwenwnenene
wewwewwwnwswswnwewwwwwwwsw
seseseenwsweeeesenweneeeseewse
neneneneenenenenwnenenenewnewnwnwnesenw
nwnwnwwewwseswnesewnwswwseswenene
wwswswswswswwswswsweswswsw
nwnewnwwsenwnwnwnwwnwwnwsenwwwnwwsenw
swweeenwseeseseeenwweseeseseeese
nwnwnwnenwnwnenwwnwnwnwnwnwnwnwnwnwnwe
nwnwnwnwnenwnenenenwenwnwnwnwswnwswnwnw
wwwswwewwwwwwwwwnwwwwwsw
neneneneneeneeneenenenesw
nwswneeneeneseweneeweneneswnwswneswse
seeswwenwneeneeeneeswneeswsenwe
weewwwwwswwwnewwwwnwwwsww
wneseewneweswneneneneneneeswnenesene
swnwenwenwseswneswewnwwnwwsenwnwe
wsewnenenenenenenenenenwnesesenenenene
nenwneneneeneneneswnenenewneenenenenene
eswswswwswnwwswswsweswnwswswswwswe
seeseseseseeeswsewnwneseseesesesese
eseenwseseesweeeeseeweeeesee
eenewneeneneeneeneeswneneneswsene
nwnwsenwnenwnwnwnwnwnwswnwnwnenwnwnwnwnwne
wnwwnweeseswnwnwsweesenewnwnwnwnw
nesweneenenwnwneneswneneseewene
nenenenenenenenenenenwsenenenwneneneeswnenw
swswsweswseswswseswseswswswnwnwsenwswsee
wwnewwwwwsewwewsewnwswwnwnew
swswswseswswswswswseswswsewsweswseswsw
eeneenesweeeeeeeeeneenweee
nwwwwwwnewnwwwwswwww
nenwnwneeneswnwnwnwswnenenwnewswnwswnw
eseseenwsesesesesewsesesesesesesesesese
wwnwwnwwnwenwwnwnwnwnwnwnwsenwswnw
sesewseseeeneewesenwseeseenesee
seeesewsesewwneeeeeseeeeenenw
wswswswswswswwswwwswewwwswwwsw
eswwswswwwwswswseswwwnewwwwwwsw
weseswseeswneseswwsewswseeewnenwsw
nwnwnwnwnwnwenenwnwenwnenwnwenwnwwswsw
senwnenweesesewwesweeeseneneew
nwwnenenenwneeneneneswneneswwsewseene
wswwwewswwewsw
eswneeeeeeeeswneeneeeneenwe
nwseeswnwsesweseseseseseeneswneseseese
eeseesenweeee
senwnwsenwnenwnwnewnenwnwsenenwnwnwswnw
neenwsesewnwnewnwnenesenenwnewseswnene
eweeenwesweeeeeeeseeswneee
eeeswnweeeeneeeeeweeeeee
nwnwnenenenwneneswnwnwnenenenwnenwnesenw
eeweeeeeseseeeeeeeeeee
wswswwsenwwnwneewesewswwnewnew
nenesenesenwnenenwswwnwnenenenenenenee
nenenwenwnwnwnwswnenwneneswnwne
wwswswswwswwwneswwnewww
enwnenwnwwnwnwnweswnwnwnwnwnwswnwnwnene
seseswswswseseswseseseswsesenwseswseswe
newnenwseneeeneneswnenenenenenenwseenee
eeswseeswsesenweeenwsewsee
wnwnwenwnwwnwnwnwwnwnwwnwnwnwwnwnw
nwnwnwnwnenwnwnwnwnwnwewnwnwsenw
swswnwsweswswswswswswswswswseswswswsw
swswwswswswwswswswswswwswwswswweesw
swswswesweswnwswwsenwseswswewnwswswswne
wwwnwwwwewwwwwwwwwwew
wwnwwwwwnwwwwwnwwnwsewnenwnw
nwnwnenwnwnwenwnwswesenwnwswseneneww
newseseesewseweenesesweneewswe
wenwwewswnwwnwnwwwnwenenwsw
neeeeneneneeeenwneswswneswneenesw
seeseseseseswseseeseneseseswnwnwsesewese
eeeeweneeenweenenweeesesesesw
eswnenwneeneenesenenwneseneenwswnenenew
nenwnwwnwnwnwnwenwnwnwnwswnwneneneenw
nwnwnwnwnwnenwnwneenenwnwnwwnenwnenenw
eeeseeeeeeeseweeeewsee
wnwwnwwnwwwwwwnwsenenwnwwwnwww
eseseneesesewnwesweneneswsenweewsw
nwnwnwenwnwwnwnwnwswnweenwnwnwnwnwnww
nenenenwswnenwnenenenwneenenenesenenenene
neeswnwnenenenenenenwneneneneneneeneswne
swseenenwneeneeeeseneenwnenenenee
neswnwnenenenenwnwnwseewnwnenwnwnenene
senwseswsweseseseseswsesenwnwseseneseenw
eneeneneeneswswewneneeswneenwnenw
neenwwneswswsesenesewwsesesesenwwe
seseneseewseseeesewseseseswnwsesene
sesenesesesesesewswseeeseseseeesese
wnenenwnenesenenenenenwneneewnenwsesenw
sesesesesesesenwseseneseseseseseswseswsese
sweswneswswswswswswswswswswswswwswwswsw
nwsweswnwnweseneswsesenewnenwswneenew
neeneneenesweeseenenenewneesweeene
neneeenewwseewneseeeseneenwee
seseseseseeeeeeeseweeseseese
enwswneeeneeseneeneeweeeeenesew
eswswswswswswwnwseseswseeswnwseswswsw
nwewswswwswswswnesewseswswnesweswsee
nwnwenwnwwsenwnwnwnenwnenenwnenwnwnwnwsw
eneneneneneneenenewneneneeneneneene
nwnwnenwnenenwnenwsenwnwnwnwnenenewnwswnenw
wwwnwwswnenewswwseswwwnenewsew
ewwswneenenenwswwnwewenenenewese
nwenwnwnwneseseswnwnwnwswswwneswnwnenwne
nenwenwsenwnwneswnwswnenenwnewnwnwenwnw
wnwnwenwnwwnwnweneswnwnwnwswnwnwnwnwnw
eneeswneenewneenenenewsenwnenee
enwnwnwnwnwnesenwnewnwne
nwwnwwnwnweenwsenenwwwsenwwwswne
wwwnwsweewneswweeswweswsewnw
swseeswwneswseswwswseneswnwswswswwswswsw
enewenweswsesesesewswneeenwwwse
senwnenwnwnwnwnwnwnwnwnwnwnwnwnwnwwnwnw
wsewnenesenwenwswnwnenwswnwnwnwwenwe
wnwwnewwnewwnwnwsewnwnwsweswww
seswswseseseeswnwnwsenweeswnwseswsesese
nwnwwnwneseweenenwnwnenwswneeswseswne
swnwnwswswswswswswswseswseeseseswswsese
nenwnenenwsenenenewnwnwnwnwnenenesenenw
swnwwwwesewweewnwwesenwnwnwnw
swwswseneswwneswsenenenwswneseswswsenenesw
nenenenenenwenesenenenenewnenwnwnenenwne
swnwwswwwswswwswwswwwwseeswsww
eseseseeseseseweseseseseseweee
swsweswswswseswweswnenwswenwwswswne
nwnwnwnwnwnwnesenwnwnwnenenwnenenwnwnene
neswwwwwnewwewseweswwwswww
seseswseneseeseswnwseswseswseswseseswse
sweeeeeweseeeeenwenw
swnwnweewwnwsenwsenwwnewswnenwnwsw
eweeeneenwwseneneswnesewnwseesenwne
swswswswnewwwswswsewwwnwwswweswsw
nwnesenenwewsenwwneseseneswnenenesenw
ewnwenenwseseeneweeesewsw
eeeenwenenweeenweseeneseeseee
esenwseesesesesesweee
sesesenwseswnwswsenwseseenesewsewnwnw
wnwwwwwwnwswwwwewwwwwwww
nwnwsenwnwnwnewnwnwnwnwnwnwwenwnwnwnw
wsewwswwneswwswswwnewswswwwnese
nwnwnwnenenenwnwnwenwwnenwnwnwnwnenenw
nwnwnwnwewnwwnwnwwnwnwwnwnwnwenwnw
wswwswswsewnwswwswsewwwswwswnew
eeewseeeeseneeweeeeeeee
nenenenenenenenenenenenenenenenenenenesw
nwnwnwnwenwnwnwnwneswnwnwnwseenwswwnw
senenwswnenenenwnenewnesene
seswseseeneseneseseeseseseeseseswese
nenwswnwnwsenenwsenwnwsenwnwneswnwwnwenwnw
eeweseneseseseseseeeseeese
swewnwwswwswswwwwwwnwwsewww
swneneneneneeswwnewswseneswneneenenenene
eenwneeneneeseswseneenwnenenenene
sewswsweswseswseenwsenenesese
seswseseswseseseseseseswseseseswseseenw
sweeeeeeeneeseeeseseeee
seweneeswnwneeeeneneenewnesenwne
swwswewwnwnwwnwwewwwwwwnwnwwnw
neneneneneneneswneneneneneneneeneneswnene
wwwnweesenwnewnwswnwnwnwwnwnwnwww
wswnwnwnenwweswewwswswwsewswwsw
sewseseseeeeneseeeeeeeeesee
senenewneseenwneneneneeswnenenwnewnene
neneneeeseneenwneneenwneseneswneeeww
swswswswswswswswswwswswswswsweswswsesw
neswwwswwswwwwewswswewsewswwnw
neneneesweeneneneneneewnenenwnenenene
eswswnenenewneseneneeswnewneesenenene
nwnwnwnwnwnwnwwnwwwnwnwnwswnwwswenwne
seeseesenwswnwesweseneneeeseeeee
eeeeneneneneeneneewneeeseene
seswwswswswswsweswwnwsweswswswswnenw
wwwwneseswwwnwswsewswwswwwswsww
wswnwswswswsesewwwwwswwswwneww
wseswswewswswswswseswewswseswswesw
swnweswwwwswswswswwswww
wswwswwswwswswwnewwsenwwwwswew
neseneenewswwesweneseese
wwwsenwswsewnwnwesweenwwswwnwww
wswnewswsewnwswwswswnewswswswswswwsew
swwswwneseswswswww
neneswnweseenwswneenenweeeeneenee
eenenenwseewseesewswseeeeseeew
enewnwwnwwnwwseneswwwwswnwwsenwnwne
eweseewseeseneneseeseeseenwwsese
neswwswenwwwwwnesewswneswwswsesw
nwnenwnwnenwnwnwnwnwnwnwnwswenenwnenwnw
swnenwnwnenwnenenwnwnwnwnwnwneewsenwnenwne
nwneenwnwnenwnwnwnenwnenwnwnwnewnw
swswseswswswswswswswnwseswswswneswsenwsesw
nwnwnwnenwnenenwnwnwnwnenwswnenwnwnwnenw
nwwnenwnwnwnenwnwsenwnwnwnenenwnwnenwne
neeseewwswseenenw
swwseswswswneseswswswesesenwswneswsesw
newnwwwnwnwwwnwsenwwnwwwesenwnwnw
eswseseswwswseneswsesesesesesenwsesesese
eeeeeeeeeeenweeeeseeee
eesenesewseseeseeeseseeeeseesese
wnwnwnwnwnwenwswnwwnwnwnwnwwwswnwnwnew
nenenwnwnwwesesenwwswnwnewswswswenw
eeseeenwnwswswewnwsweneeenwsenee
eseenwsesweseweeseeseseeswsesene
sesewseneseswsesesesesesesese
nwnenwnwnwnenwswnwenwnewnwnenenwswneene
wwwwwswwwnwwwwwewwwwwww
eseesewseeeseseseeseesesesenesesee
swswewwewwewsw
swseswnwswseeswseswswswswswswswseseswswse
wnwnwwwewwwwwwwswnwnwsenenwww
swswswswswswswseseneswswswswswswswswsww
wenwwewwwswsweswswsenwwswwneew
nwnwneeneswneneneewneswnwneneswnwswnw
wsewswnwnwnwwenwnwnwnwnwnwnwewnwnesw
swswswswswneseswswswswnenwse
eswnenenwseswseseswseseseswseswneseswnw
enenwnwsenwnwnwwneswnenwnwnwnwnwnwenw
sewsesenesewewseseseseseneweseseewse
sesewseswseseswseseseseseswswswseswsenese
neesenenenwneneenenesewneeneeewnw
senenenesenenewwneneenwneneneeenenene
wwwwwnwwwwwnewsewwwwwww
swseswwswswswnwswneene
sesesesesenenwsewseswnesenwwsenenwsewne
nwwwwwwewwww
neneeneeeeswnenenesenwneeneneenenew
eweeeeeeeseneeeeeeewee
newnwnenwnwwwwwswwswwwnwwnwwwnw
nenwnwenwnenwnenenwnenenwnwsenwnwnenew
wswseenenwnwwneswnenwwnenenenenenee
swswnwsweseseswswswseseswswswseswswseenw
seseswswnwseseswwnwsweseseseseseeseswe
nwnwnwwwnwwnwwwnewwwnwsesewnwwnw
swswseweeswswswsewswswnwwwnwenenwsww
eswswesesesesenweseseseseneneseewsenese
wnwenwwwwnewwwwnwnwwwwsw
seeeenwswwsenwsesenwswneswswwwswe
nenesewwwswswswnwswswnewswsw
neseneseswseeseseewswwsewswsenwswswsw
eeseeeseweeneeeeeeeeesesee
sesweenenenweeseeswesweseeeneww
nwnwnenwnenwwswswnwwwse
nenenwswneneesewenenwesenwnenenesene
eesewnwseeneeeeeneseesewwnwe
swenesesenesenenewwnwnenenenesw
swswswswswswswswnwswswswswswswsweswswswsw
eseneswseseseseseseswswsesenw
swsweswswsesenwswswnewswswswswswswnwswsw
wwwneswwswwwneswwsewwswwwwsw
nwnwnwwnwnwnwwnwnwnwnwnwnwenwnwnwwnw
wswwswwwewswswswneswswwwswwwwsw
nenwnenwneenwnenwnenwnwswwnenenwnwnenwnw
seeseseeseeseseweeewnenesw
senwnwnwnwnwnwnenwnwnwnwnwnwnwwwnwsenw
enenesenenwwesewee
swnwswnwneseenenenwswnwnewnenwwnwneesene
swswswseswswswswswswswswswseswswwseesw
swwswnwwwwwwswwewe
wswenewnesesenwswseswseeneneenenwnenwe
wwnwswswewswewww
seseesesesesewsenwseneseseeseseeeww
swseswswswswswseswswseswseswsenwseswswse
wnwwwwwsenwnwweswnwnwsenwewwsw
nenwnwewswnenenenenwnwswnwnwnenenenenwnw
wnwwnwnwnwenwseswnwswenwwwnwwnww
neenwnwswnwneneneenenenwsewneswnwnenwnw
wwswswwwwwwwswwwwnewswnewww
wsenwswsweswewneenweswsenwneneese
swseswnwseseswseseswseswswswseseswseenwse
seswswseneswsesesweseseswseswneswnwwswsese
nenwenwwnwneswnwenwnwnw
neswewnwnwswneenwsenwswnwnenenwnwenenw
eswswnwnwnenwwnwnwswnwnwwnenwnwnwsenw
nwnwnenenwnwnenwswnwnwnwnwnwnenwnwnw
wwwswwwswwwwweneeeswwwwne
eeeenenwneneneneeneeswneeneweee
nwnwnwnwsenwswnwnwnwnwnenwnwnwnwnwnenwnww
swsesesesesesesesesewesesewseseseseseswne
seseeeseeeweeeeeesesewsesee
seswneseswneswsenwenewwsenwsenweswswene
swswswswswswswswswswswswsweeswnwsesww
swwswswswswneswswwswswswwswwwsw
swnwseswswswswswwswswwswswswswswswswsw
nwnenwnenenwswneneneneswnwneenenwnwnenwnene
nwnwwnwnwwsenenwnwnwnwnwwnwwsenwsenw
seseeesesesesesesesenewseeewsewse
swswswenwneneeeenwneenwnwsenene
seseswsewesesesesewseswsenweenwsese
eweeeeesweeenweeeeseee
eseswseswsenwswseswseswswswsw
ewnwwnewnwwnewnwswswnwsenwwnwwwwe
esesenweseseseseswseseseneseseesesenwse
wsweswswwweswwwswswswwwewwswnw
nwnenwnwnwneenenenwnwwnwnwnwnenwwene
seewsweesenwnwwsee
swneswwwswnwenwewswnenwwswseewswswe
eeeeeeeeeeeeseeenwee
sesweeeeseenwenw
wswswswwswwnewseenwswnewswswswswwsw
seswseswneswnwnenwse
senenwswswsenwswseswsenwneeseseswseswse
nwswswswseswneswswseswseseseeswsenesesw
weweswwwswnwwwseswwwnewwnwwsw
neeneeneswneeeeeeneneeneenweene
nwnesenesenwseesewseseseseswesenwew
sesesesesenwnweswweseeeswseneeese
wnwwwewswwwwswewwswwwwnwwww
wswwwswswewwnwwswswswwwswwswww
eeeeeseseeeeneeweeseeenwee
seeeeseeeseeeeeeesesesenwee
seesesenwwswseseneseseswseseseseseseswsese
newwwwswwswwwswwswweswswswsww
nenwnwswnwnwnwnenwnwnwnenenenenwnwnenenw
wwsewwsenwwnenewwnewsenww
swswswswswswswswseseswneseswswswswseswenwnw
seesenwnenewseseswswswwnwseseesesesese
enweseneeneeseeneeeseeweewwee
eeweeeeeeesesenewnwseseesesese
wswsenesesenesesewseenwswswnenwswnwenenw
eswseswesesenwewswwnewnenweswsese
nenwnwneswnwnwnwnenenwnenenwnwnwnwswnwne
nwnenesenenwwneewnwnwnwwnwnwnwnwsenw
seswseswswseseswswneswswswswswswswswsw
nenwneneenenenwswnenwneswneenwneswnenenene
seswswseseswseseswseseneswswseswswseswse
swswseswnenwswswseswswswswseswseswswswswsw
wswwswswwneswswwsweswswswwswsw
nenenesenenwnesenesenenewnwnenwnwnwswsenw
wneenenwnenesesenewnwswnwenwneswnene
sewenwwwwwwseenwnwnwwwnwswwnwne
ewwneeneneeseeesewneneewnewne
nenenesenesenwwneneswnwnweneswswsenwne
weseeeeseeeneneweseseswsewwnw
nwwwswwswsesewswnwswswswwnweswswe
weswwwewwnwwswwwnwseewwwnw
seswswseswseeseswswnwsewseswswnewswswe
sesenwswesenwswseseseseseswswswswswswswsw
wnwnwesewsesewwswnwnwwewnewwnee
seseeseswwswswseswsw
swwnwenwseneswwneenwnewnwnesewswnesee
nwwnwnwnwsenwnwnewnwnwnw
esesewneseeeeeeesee
senwnesewnwnwnenwwswnwwnenesenwnwsww
seswsewswswesewseseseseseneswswsesesw
neseseswwenewswswswnwswsewsesesenesw
senesenwnwswsesewseseswswseseseseswsee
enenenenewneeeneneneneenenenesenenene
wwwwnwnwnwwnwnwnwewwwnw
wnwenwnwnwnwswnwsenwseswwenweenwnwsw
nwnwnwnwenwnwnwnenewnwnwnenwnwnwnwnwnw
seseseenwswnwswswswswseseswneneseswswwsw
neeenwnenwwwnewnenenwnwnesenenenenw
swsenwwnwseneesweswseneneeeneenwwswse
eeeeeseneneeeneneneneeneweesenwe
ewseeswneewenenweeeweneneeeene
swswswswswseneswwswswseswseseseswseswsee
eeeseseseseseseesenwseeeseseseswsese
nwnenenenenewnenwnenenwneswseenenenenenenw
swsesweseswswsenwswseseswswseseswswnwse
senenenewenenenenenenenewnenenesene
nesewseneswwsweseswneseseseswnesese
nwnwnwnwnwwsenwesenwnwnwnwnwnwnwsenwnwnw
nenwnwwnwnwnwnwnenwnwneenenenenenene
wswwsenwwswswwewnww
wwwnewwswwwwwwsewwwwwswww
wswseseneswewseneswswnwswswsenesenwswe
wnwnwenwwnwnwwswswwwnwnwwsweenwnwnw
wswweswwwswnwswswwwwseewswswwnw
swswwwwnwswsweswwswwswswswswswwsww
neseneneeweneneeneneneneneneneeswnenw
nwswswswswswswswswswsesw
nwnwnenwnwnwswnwnwesenwnwnwnwswnwnwswnenw
neswwswseswseneswswseswswswswswswseswswse
swseswsweswswseseswseseswswswswswswnwsw
swsweswesweneeneswneenwneneneneene
seseseseseswsenwseseseseswsese
swwswwewwnewwneswwswwwnewww
neneeeneneeseenenweeee
enwwwswnwnwnewswswwnwwweeseww
nwneeenenenenesenweseeneeweneswsw
nenenewneneneneneneneeenenenenenenene
seeseseseseneseeeseswenwnweseswnwseee
swneswseswseswsesenewsesenesewenesw
nwnwwwwwnwwewwnwwwwwwsenwnw
swswswwsewswswwswnwwsweswnwswwwww
seswseseswseswneseseenwseswwsw
newnewesewwswsewnw
weseesesewneseseseesenesesesesesewse
eeeeseeeeeneeeenenewe
wswwseswseneswswswswnesweseswnwswswswe
eweeseeeeeeneneeeseeseeseswese
nweenwwnwnwwnwenwnwnwnwwwswwswnwse
wwwnenwnwswwnwwwwwnwnwnwwnwwnenwse
enenenenenewnwnesweseewenenesenee
esewswnwenwwnwnwnwnwnwnwswnwwwwse
eeweneswenenweswnesweneneeneee
wseneeseeesewnwswswnenesewneswee
swneeenenenenenwnenenenenenenenewnesene
nwswswswwswseswswswswnwswswsewwswswsw
neenwnwnwnenwnwnwnwnwnwnenwnww
eeeswenweeeseeeeeseseeeee
swseswswswseseswseswneseseswswswsese
nenwnenenwnwnenenenwswnenwnenwnewnwenene
nwnwseseseswswseswswseswsweswswswseseseswse
swnewwwwswwwwsww
seseseswsweswswswswseswseseswseswswsww
nwnenewnenwnwnenwnwnenenenenenesenenenwnw
nwenwnenwnwsenenesenwnwswnesenwneew
swwswwseswswswswwenenenwsene
swswsweseseseseswseswswseswnwswnwseswsenw
wsesenewnewnwwwnwsewnwsewwwnwww
sewswnenesewswenwsenwswneseeneseswsw
swwnwswnwwnwsenwnwwwnwwenenwwnwew
seseseeseswneeseseswesesesesenwswwne
neneeeesenenwnenweeneswneeweseeene
swwswswswsewwwswwnenweweewsewnwsw
seeswseswseseseswseseseseseseswwswnese
esweseseseseseeseseseeeseseseeseenw
wswwswwswswswnwswswswswew
nwnwnwnwnwnwnwnwnweenwwnwnenwsenwnwswnw
eeenwnenewneeeneeeneeeeswneneee
nwwnwwnesesweswswswwseseneeswsweewsw
neweneneeneneneweneneesenenenenenene
nwwnweswnwnwswewnwewenwewwwnw
seswsesesenwwseswneseseseeseseswse
wnwwwnwwwwnwwwewwwwwwww
enwseseseseswswsesesesesesesesesesesesesw
wnwnwwnwnwewnwwwnwwnwwwswnw
eseswseenwneenewnwnwesewnweswswsw
neseswwswwwswswneeswwnweswseswnwesw
seeseseseeenweseeseseeseeswseeese
nwseeseseweseseseeseseeesewnwsesese
swswswseswnwseseswswnwnwsweswseseswswsesw
wweenwswwnwwwwnwnwnwwnwswnwwne
senwwwnewwwwwwswwnwwnwsewwese
swswswswswswswswwswneswswswswseswswswsw
wswswswswswwswwwsweewwswswswswswsw
neneneneeewseneneneneneeneneneeswne
swswneswnwswswswswseswnwswswswwswesese
swwwwwwswsewwwwwenewwwww
nwswwwnwswnewsenwesenwenwnwnwesene
nenewwwnenwweswswwwseswswswwew
seneseseseswswseseswsesesew
swsenwweswwwnewnwnwenwseswsenwswesene
nwnwnwnwnwnenenwnwnwnwnwnenwnenwnwnwnwse
swswswnwswswseswswsweswsweseswswswsewsw
wwswseseseseswweswseeswseswneswswse
sweseswswsesewseseseswsenwneswnesesesese
nenenwnwnwnesenenwnwnenwnweswnenwnwnene
eseneesesenesewsw
seseseseswswsesesesesesewnwseseswswsenwne
sweenenenweeneenene
swwesweneenweeeeese
wseseswseeseseswseneseswnwswseswwswseswse
nwseseeseseeseeseeeenwewwewe
wswswwseswswwswswswswwwwswnenwwsewsw
seswswnwswseswswswswneswnewsweswnwnwse
seswseseseswseseswsenwswsesesesesesesesw
nwsenenwseenwnenenwneswnwnwnww
nenwwwnwnwwwsewwwnwwnwwnwnwswnwne
eeeenesweenenweeene
eseweswseeesesesesenwwnenwsweeeese
ewwwwwwwsewwwwwwnwnwnwnwww
seswseseswseesesesesesewneswseseswswsw
wwwwwwnwwwwwewwwwswwweww
newnewsewswsewenwnwwswneswewesw
eneswneswsweeenwswnwswnwnwswswswsw
sesenweseeseeeeeeee
swswenwnwnwwenwwswsewneewseeswsesw
wneswwwnewwneswwseswwswswwwnew
swwwswwsewseseneswnwneswwwwnwww
eswnwswnwneenwneneseneseswneneneenenenw
senewnwnwsweneswseeneseeewewswneswe
swnwseseenewnenwnewne
neneneneseeneeneneewneneneee
nwnwnwwnwnwwwwnwnwwnwnwwnwwsenww
swwneeneswswseswwsweneswwsenwswswswsw
neneswnwnenewenwnenenwsenwnenenwnwnw
seeeseseeeseeeesewsesee
wsewswwsewwswnesewwnwwwenenenwnw
esenweseeeseeeeseeeseeesweenw
enweeseseenwsesenweseseswnwse
eewneewwneeneeneneneseneneenene
sesesenwneswwswswneseseseswswswseseswsene
weesenewnwswswswnweswswseswsww
seseseeseswseeseseseseseseswsenenwseese
nwwewswwsenwnwsenwnenwnwnwenenwsenesw
seeeeswenweseeeswneswswenwswnwwne
swswsenwseenwsenwnenesewnwwene
eeeeeenweeeeeneseseeeewsese
nwenwwnwnwnwwnwswwwnwwnwwnwnwwwe
nwsenenesenwneeneswnwwnwneseewsewse
swwsenwnenwnwnwsenewsenwsenenwewnenese
wwwwewwnwwwwwwww
neneneneneeneenwneneeneneneeneswnene
senesesesesesesenesesesesesesesesewsesw
enwwswwnewswenewsewsenew
nenesenwwseneneseneneneswnenenenewwnenenw
eeeeeeeesweeeeeseeeeneenw
nwnwwnewesewswsweewwwswneesene
seseeseseeeseewseseeseseseneseee
swenwnenwnwsesewswswnwnwenwnwnwnwene
weswnwswswseseeeswneeeswenweenene
swseswseswsenwseseseseswswswseswsesesw
eseneeswnwswwneseene
swswnwswswswswnwwwswnesesewswwsesw
eeweewsenweeeeeesenwsee
seneseswswweswswsesewseesw
weeeeseeseseeeeseeeseseseee
nwsenwswnwnwnwnwewnwwnwnwnwnwwnwwew
enwnwswseseeneswseswswnwseswswsese
neswnwnenenwnenwnenenenenwnenenenenenenw
wswswswswnwswswswswswswsweswswswswwwsw
eeeneneeeeeneeesweweeeene
eneswnwneweneesw
wwwesewswswwwswwnwwwwwswwsw
nwnwnwswnenwnwnenwnenenesenwnwnwnwnwnwnw
eeseeweswseeeeeeeseesenesenw
eweeeneneeeneeseeeeneeeneene
neseseseneseesenwsewsenwseseseseswsesesw
swswenwnewnwwwsenwweewsenwweww
neswswswswswswwswswswnwswswswswsweneswswsw`.split('\n');

console.log(solve(lines)); // 4280
