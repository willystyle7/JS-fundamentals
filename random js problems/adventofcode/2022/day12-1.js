// https://adventofcode.com
// What is the fewest steps required to move from your current position to the location that should get the best signal?
// Djiiksctra algo
// https://www.reddit.com/r/adventofcode/comments/zjnruc/2022_day_12_solutions/
// https://github.com/tbpaolini/Advent-of-Code/blob/master/2022/Day%2012/day_12.c
// https://github.com/FriendlyUser1/adventofcode/blob/main/2022/day12/hill.js

function solve(input) {
    // TODO
}

let input = `Sabqponm
abcryxxl
accszExk
acctuvwj
abdefghi`;

console.log(solve(input)); // 31

let input1 = `abcccccccccccccccccccccccccccccccccccccccccccccccccccaaaaacccccccccccccaaaaaaaccccccccccccccccaaaaaaccccccccccccccccccccccccccaaaaacccaaaccccccccccccccccccccccccccccccaaaaa
abcccccccccaaaccccccccccccaaaccccccccccccccccccccccccaaaaaacccccccccccccaaaaaaaaaaaccaaaaccccaaaaaaacccccccccccccccccccccccccccaaaaaacaaaaccccccccccccccccccccccccccccccaaaa
abcccccccccaaaaaacccccccccaaaacccccccccccccccccccccccaaaaaaccccccccccccaaaaaaaaaaaccaaaaacccaaaaaacccccccccaaacccccccccccccccaaaaaaaacaaaaccccccccccccccccacccccccccccccaaaa
abcccccccccaaaaaacccccccccaaaaccccaacccccccccccccccccaaaaaaccccccccccaaaaaaaaaaaaaacaaaaaaccaacaaaccaacccaaaaaaccccccccccccccaaaaaaaacaaaccccccccccaccccaaaccccccccccccaaaaa
abcccccccaaaaaaaccccccccccaaaacccaaaaccccccccccccaaccccaaacccccccaaacaaaaaaaaaccccccaaaaaacccccaaaccaacccaaaaaacccccccccccccccccaaccccccccccccccccaaacccaaaccccccccccccaaaca
abcccccccaaaaaaacccccccaaacccccccaaaacccccccaaccaaaccccccccccccaaaaacaaaaaaaaaccccccaaaaaccccccccaaaaaaaacaaaaaccaacaaccccccccccaaccccccccccccccccaaaaaaaaaccccccccccccccccc
abcccccccccaaaaaaccaaccaaacccccccaaaacccccccaaaaaaaccccccccccccaaaaaaccccaaaaaacccccccaaaccccccccaaaaaaaaaaaaacccaaaaacccccccaaaccccccccccccccccccaaaaaaaackcccccccccccccccc
abcccccccccaaaaaaccaaaaaaaccccccccccccccccccaaaaaacccccccccccccaaaaaaccccaaaaaaccccccccccccccccccccaaaaccaaaaaccccaaaaaccccccaaaaaccccaaaaaccccccccaaaajjkkkkkccccccaacccccc
abcccccccccaaccccccaaaaaaccccccccccccccccccccaaaaaaaaccccccccccaaaaacccaaaacaaccccccccccccccccccccaaaaaccccccccccaaaaaacccccaaaaaaccccaaaaaccciijjjjjjjjjkkkkkkccaaaaaaccccc
abcaaaccccccccccccccaaaaaaaaccccccccccccccccaaaaaaaaacccccccccccaaaacccaaaccaaccccccccccccccccccccaacaaacccccccccaaaacccccccaaaaaacccaaaaaaciiiijjjjjjjjjoopkkkkcaaaaacccccc
abaaaacccccccccccccaaaaaaaaaccccccccccccccccaaaaaaaacccccccccccccccccccaaaaaaaccccaccaccccccccccccacccaacccccccccccaaccccccccaaaaacccaaaaaaiiiiiijjjjjjoooppppkkcaaaaaaacccc
abaaaaaccccccccccccaaaaaaaaccccccccccccccccaaaaaaaccccccccccccccccccccccaaaaaaccccaaaacccccccccccccccccccccccccccccccccccccccaaaaccccaaaaaiiiinnnoooooooooppppkkkaaaaaaacccc
abaaaaacccccccccccaaaaaaaccccccccccccccccccccccaaacccccccccccccccccccaaaaaaaacccccaaaaccccccccccccaaccaacccccaccccacccccccccccccccccccaaaciiinnnnoooooooouupppkkkaaaaaaacccc
abaaaaccccccccccccccccaaaccccccccccccccccccccccaaacccccccaaccccccccccaaaaaaaaacccaaaaaacccccccccccaaaaaaccccaaaaaaaacccccccccccccaaccccccciiinnnntttooouuuuupppiiacaaacccccc
abaaaacccccccccccccccccaaccccccccccccccccccccccccccccccaaaacacccccccccaaaaaaaacccaaaaaacccccccccccaaaaaccccccaaaaaacccccccccccaaaaaacccccciinnnttttuuuuuuuuuuppiiccaaacccccc
abcccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaacccccccccccaaaaaaaccccaacccccaaccccccaaaaaacccccaaaaaacccccccccccaaaaaccccccciinnntttttuuuuxyuuuppiiicccccccccc
abccccccccccccccccccccccccccccccccccccaaacccccccaaccccccaaaaccccccccccccaaccccccccccccccccaacaaacaaaaaaaacccaaaaaaaaccccccccccaaaaaaaccccchinnnttxxxxuuxyyyuuppiiiiccccccccc
abccccccccccccccccccccccccccccccccccccaaaaaaccccaaacccccaaaaccccccccccccaaccccccccccccccccaaaaaccaaaaaaaaccaaaaaaaaaaccccccccaaaaaaaaccccchhhnnttxxxxxxxyyuvppppiiiccccccccc
abccccccccccccccccccccccccccccccccccaaaaaaaaaaccaaaaaaacacaacccccccccccccccccaaaccccccccaaaaaaccccccaacccccaaaaaaaaaaccccccccaaaaaaaaccccchhhnntttxxxxxxyyvvvppqqiiicccccccc
abccccccccccccccccccccccccccccaacaccaaaaaaaaaaaaaaaaaaacccccccccccccccccccccaaaaaaccccccaaaaaaacccccaacccccaccaaaaacacccccccccacaaaccccccchhhnnnttxxxxxyyyvvvvqqqqiiiccccccc
SbccccccccccccccccccccccccccccaaaaccaaaaaaacaaaaaaaaaaccccccccccccccccccccccaaaaaaccccccccaaaaaaccccccccccccccaaaaccccccccccccccaaacccccchhhmmmtttxxxEzzyyyyvvvqqqqiiccccccc
abcccccccccccccccccccccccccccaaaaaccccaaaaaccaaaaaaaaacccccccccccccccaaaaaccaaaaaaccccccccaaccaacccccccccccccccaacccccccaaaaccccccccccccchhhmmmtttxxxyyyyyyyyvvvqqqjjjcccccc
abcccaaacccccccccccccccccccccaaaaaacccaacaaaaaaaaaaaaacccccccccccccccaaaaacccaaaaaccccccccaacccccccccccccccccccccccccccaaaaacccccccccccchhhmmmttsxxyyyyyyyyvvvvvqqqjjjcccccc
abcccaaaaaacccaacaaccccccccccacaaaacccaacccaaaaaaaaaaaacccccccccccccaaaaaacccaacaaccccccccccccccccccccccccccccccccaacccaaaaaaccccccccccchhhmmmssxxwwwwyyywvvvvvqqqjjjjcccccc
abccaaaaaaacccaaaaaccccccccccccaaccccccccccaaaaaaaccaaccccccccccccccaaaaaacccccccccccccccccccccccccccccccccccaaccaaacccaaaaaacccccccaaachhhmmssswwwwwwyyywvvqqqqqqjjjccccccc
abcaaaaaaacccccaaaaacccccccccccccccccccccccccccaaaccccccccccccccccccaaaaaacccccccccccaaccccaaccccccccccccccccaaacaaacccaaaaaacccccccaaacgggmmsssswwwswwyywwrrqqqjjjjcccccccc
abcaaaaaaaccccaaaaaacccccccccccccccccccccccaaccaaaccccccccccccccccccccaaccccccccccccaaccccaaaacccccccccccccccaaaaaaccccccaacccccccaacaaagggmmmssssssswwwwwwrrqjjjjjddccccccc
abcccaaaaaacccaaaacccccccccccccccccccccccccaaacaaccccccccccccccccccccccccccccccccaaaaacaacaaaaccccccccccccccccaaaaaaaaccccccccccccaaaaaagggmmmmssssssswwwwrrrkjjjjddddcccccc
abcccaaaaaacccccaaccccccccccccccccccccccccccaaaaaccccccccccccccccccccccccccccccccaaaaaaaacaaaacaaccccccaaccaaaaaaaaaaacccccccccccccaaaaaggggmmmmllllsrrwwwrrkkkjdddddaaacccc
abcccaaaccccccccccccaacccccccccccccccccccccaaaaaaccccccccccccccccccccccccccccccccccaaaaacccccccaaaaaaccaaaaaaaaaaaaaacccccccccccccccaaaaaggggmmllllllrrrrrrrkkkdddddaaaccccc
abccccaaaaaaccccccccaacaaaccccccccacccaaccaaaaaaaaccccccccccaaaccccccaacccccccccccaaaaaccccccccaaaaacccaaaaaaaaaaaaccccccccccccccccaaacaacggggggflllllrrrrrrkkddddaaaaaccccc
abccccaaaaacccccccccaaaaacccccccccaaaaaaccaaaaaaaaccccccccccaaacacccaaaaccccccccccaacaaacccccaaaaaaccccaaaaaaaccaaacccccccccccccccccaacccccggggffffllllrrrrkkkdddaaaaaaacccc
abccaaaaaaacccccccaaaaaaccccccccccaaaaaccccccaacccccaaccccaacaaaaaccaaaacccccccaaccccaaccccccaaaaaaaccaaaaaaaaccaaaccccccccccccccccccaaaccccccgffffflllkkkkkkeedaaaaaaaacccc
abccaaaaaaacccccccaaaaaaacccccccccaaaaaacccccaacccccaaacccaaaaaaaaccaaaacccaaaaacccccccccccccccaaaaaacaaaaaaaacccccccccccccccccccccccaaaacaacccccffffllkkkkkeeedccaaaaaacccc
abccccaaaaaaccccccccaaaaaacccccccaaaaaaaacccccaaccccaaaaaaaaaaaaccccccccccaaaaaaaacccccccccccccaaccaaccccaaaccccccaacccccccccccccccccaaaaaaaccccccfffffkkkkeeeecccaacccccccc
abccccaaccaaccccccccaaccaacccccccaaaaaaaacccccaaccaaaaaaaaccaaaaacccccccccaaaaaaaaccccccccccaacaaccccccccaaccccaacaaaccccaacccccccccccaaaaaaccccccaafffeeeeeeecccccccccccccc
abccccaaccccccccccccaaccccccccccccccaacccccaaaaaaaaaaaaaaacaaacaaaaaaacaccaaaaaaacccccccaaacaacccccccccccccccccaaaaaccccaaaacccccccaaaaaaaaccccccaaaaffeeeeeeeccccccccccccca
abacccccccccccccaaacccccccccccccccccaacccccaaaaaaaaaaaaaacccaaccaaaaaaaaaaaaaccaaacccccccaaaaaccccccccccccccccccaaaaaaccaaaacccccccaaaaaaaaaccccccaaacceeeeeccccccccccccccaa
abaaccccccccccaaaaaacccccccccccccccccccccccccaaaacccaaaaaaccccccaaaaaaaaaaaaaaaaaaaccccccaaaaaaacccaaaccccccccaaaaaaaaccaaaaccccccccaaaaaaaaccccccccccccaaacccccccccccaaacaa
abaaccccccccccaaaaaacccccccccccccccccccccccccaaaaacaaaaaaaccccccaaaaaaaaaaaaaaaaaaccccccaaaaaaaaccccaaaaccccccaaaaacaaccccccccccccccccaaaaaaacccccccccccacacccccccccccaaaaaa
abacccccccccccaaaaaaccccccccccccccccccccccccaaaaaacaaaccaaccccccaaaaaaccaaaaaaaaccccccccaaaaaaaaccaaaaaacccccccccaaaccccccccccccccccccaacccccccccccccccccccccccccccccccaaaaa`;

// console.log(solve(input1)); // ?

