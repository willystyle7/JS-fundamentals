// https://adventofcode.com
// Find the completion string for each incomplete line, score the completion strings, and sort the scores.
// What is the middle score?

function solve(arr) {
    arr = arr.split('\n');
    const charPoints = {
        '(': 1,
        '[': 2,
        '{': 3,
        '<': 4
    };
    const closingChars = {
        ')': '(',
        ']': '[',
        '}': '{',
        '>': '<'
    };
    incompleteRows = [];
    for (let row of arr) {
        let wrongRow = false;
        let stack = [];
        for (let char of row) {
            if (char in closingChars) {
                let top = stack[stack.length-1];
                if (top === closingChars[char]) {
                    stack.pop();
                } else {
                    // wrong line
                    wrongRow = true;
                    break;
                }
            } else {
                stack.push(char);
            }
        }
        if (!wrongRow && stack.length > 0) {
            incompleteRows.push(stack.slice());
        }
    }
    // console.log(incompleteRows);
    incompleteRows = incompleteRows.map(row => {
        let score = 0;
        while (row.length) {
            let char = row.pop();
            score *= 5;
            score += charPoints[char];
        }
        return score;
    });
    incompleteRows.sort((a, b) => a - b);
    // console.log(incompleteRows);
    let middle = incompleteRows[Math.floor(incompleteRows.length / 2)]
    return middle;
}

let arr =
`[({(<(())[]>[[{[]{<()<>>
[(()[<>])]({[<{<<[]>>(
{([(<{}[<>[]}>{[]{[(<()>
(((({<>}<{<{<>}{[]{[]{}
[[<[([]))<([[{}[[()]]]
[{[{({}]{}}([{[{{{}}([]
{<[[]]>}<{[{[{[]{()[[[]
[<(<(<(<{}))><([]([]()
<{([([[(<>()){}]>(<<{{
<{([{{}}[<[[[<>{}]]]>[]]`;

console.log(solve(arr)); // 288957

let arr1 =
`{<<[{(<<<([[<<{}()><<>{}>]{[(){}]{{}()}}]]<[{(()())<[]{}>}(({}[])(()[]))]>)>>{{[<[[(<><>)<{}()>]{(
(({[(<{[[{{[{[<>[]][{}{}]}([{}()][<>()])][[{()()}(()<>)][([]){<>[]}]]}}{<{{{<>{}}(()<>)}[(
<{({[(<{[[((({()()}<<>()>)){<{[]()}<[]()>><[()[]]>})<{[<[]{}>]<{{}[]}{()[]}>}<[[[]<>]]<(<>())(<>{})
<{<[{[(<<(<(<[(){}]{()()}>)[{({}())[<>{}]}]>((<(()<>){<>()}>{{{}<>}([][])})))([({[{}()]<[]()
<[<{(<{{{{[{[{[]{}}<()[]>](<[]{}><[][]>)}<<<<>{}>{<>()}>{([]<>)(()[])}>]}}(<[{[<[]()>[[]<>]]}]>([{
{[<({<{{([{{{(()<>)(<>{})}}}{(([()()]{()())){[{}{}]([])})<<<()()><<>()>>((()()){[][]})>}](({{<<
<{<[[(<(((<{[[()<>]{{}()}][(<>)[<>])}>)))>({{{{((<(){}>(()<>))){(<()<>>(()()))[<()<>><[]<>>]}
<{<({(<(<{{<[((){})[()<>]]{{<>{}}([][])}>}[<{[[]()]}{<[]{}>(()<>)}>(<[()]<{}()>><{()<>}{[]()}>)]}
{<<({{{(<{{<<[{}{})[(){}]>{<<><>><[]{}>}>({({}())[<>[]]}{{{}{}}<<><>>})}}({[[(()){(){}}]({[]()}<<>{}
{{{<(([{<([[[[<><>][[]<>]](({}[])<{}{}>)][[<[][]>{{}<>}]<([]{})([]{})>]]{<[(())({}{})]<((){}){<>[]}
[(<(<<[{{{<<[({}[])<<>>][{{}<>}<[]{}>]>([({}<>){{}[]}]{(<>{})})>}(<<<{()<>}{(){}}>(([]<>){{}[]})>
{{<([({([<([[(()[])<[]()>][{{}{}}<<>()>]](({<>}{<>[]})<{[][]}{()[]}>))[[<({}[])<<>[]>>[<<>{}>({}<>)}][(<<><>>
<<<<{{(<{<(<[<<><>>(<>[])]{{<>}((){})>>(({<>()}(<>{})){{{}{}}[(){}]}))<<[[()()][[]<>]]([<><>])><[<[]<>>[[
<<[<(([(<([<({<><>}{[]<>}){(<>{})<<><>>}>({<<>[]>{()[]}}{(<>())[()[]]})])(<(<{[]<>}{[]{}}>{[()
(<[<(({{{<(<<{[][]}([][])>[<{}{}>{{}<>}]><<<{}[]>[(){}]>>){{([()<>][{}<>])[<<>()>[<>[]]]>[{<[]{}>[[]{}]}[(
<([<(<<{[{{{{{{}[]}{()<>}}([{}()]<{}()>)}{{({}())(<>())}[[<>()]<()()>]}}<{<[<>]>[[[]{}]({}{})]
{[[[[{(<({[[<{{}()}(<>{})>{<<>{}>}]][<[<[][]><[]{}>](([][]))>({<[]()>[{}[]]}[[<>{}]<[]()>])]}(<<(<<>()>)[{<><
({(([<<({<<<{([][]){<>()}}<[{}<>]{<>{}}>](<[()<>][[][]]>({()[]}[[][]]))>{[<[[]{}](()())>((<><>)<{}{}>)][
{[(([{[(<[[(<{{}[]}{()()}]<({}<>)[<><>]>)[[[<>{}](<>())][[{}{}]<{}{}>]]]{<<({}[])[<>[]]>{{
{{([<[{[<(([{({}{})({}[])}[{<>[]}[()()]]][([<>{}](<>))]))>{{([<<()()>(<><>)>((()[]))]]<<(<[]{}>[<>[]]
{{{<[[<{[(<{{({}{})<<><>>}(<[]{}>[(){}])}({{[]()}(()<>)]<{[]<>}[<>[]]>)>[{((<>()){()()})((<><>)<<>>)}
({{<<([<<[<([({}())([]<>)]{<(){}>})([[()()]])>]>><<[<(({<>{}})[(()<>){{}()}])([{()[]}[<><>]](<<>[]>[[]{}]
([<<(<<({<<{(<()()>)[<<>()>[(){}]]}({(()<>)([][])})>>}({<[{{(){}}<{}{}>}<([]{}){[][]}>]>}))[[([[[([][]){(
([[<([(<{{(({(<><>)<()>}[{()<>}({}<>)]))<([[()](()[])][{()<>}[<><>]])<<[[]{}]<()[]>><{<>[]}[{}[]]>>>][{{<<()[
{[([<{((<[{{<{<>{}}><([][])<<>[]>>}<<[{}[]]>([(){}])>>{<([()[]]{{}()})(({}[]))><<{()()}<()[]>>
<({<(<[{<[[{[{()<>}[()[]]]{[[][]]({}<>)}}<<([]())>>]{(<{<><>}<[]()>><{<>{}}>)[(<{}[]><<>()
[{({[<{<(<<([{[]<>}([]())]{{(){}}})>{(<{<>{}}(<>{})>{{[]<>}([]())})({<<><>>}({()[]}<{}<>>))}>([
<<<<<<<{<{{[[<[][]>{<>{}}]<<{}()>[[]{}]>]((([]{}))({<><>}({}<>)))}[<[<[][]>][[<>][{}[]]}>[{(()<>)}[<(){}
([[{<{(<[{[([[{}{}][()()]](<{}[]>[<>[]])}]}(<<<((){})[<>()]><{{}[]}([][])>>>(<[<{}<>>{{}()}][{()()}(<><>)]>
{[{[{([[[[<[([(){}]<{}<>>)[({}())(()[])]]>]<([<{{}<>}>[<<>>{()[]}]]{<<<>{})<<>{}>><<<>{}>(<><>)
{<([<((((<[[{<<>{}>[<>()]}]<<(()<>)<()()>>[([]{})<(){}>]>][({<{}[]>}<[()<>](<>())))<<[[]()]<
([[(<<{[{<[<<<<>[]><<>[]>>({[]<>}<<>{}>)>([<<><>>(()())]({{}()}))][[<([]<>)({})>{{[]()}[[][]]}]<([
<[<[[([[([<[([(){}]<<>{}>)<(()())[{}{}]>]{({()()}{[][]})((()[])({}{}))}>[[{[{}{}](<><>)}{{[]{}}{
[(<({<{(([{[<((){})>{{[][]}{()[]}}]}]{((<([]())<<>{}>>{{<>()}{[]}])){(<<{}<>><<>[]>>){({{}[]}<<>[]>)<[(){}]
{((((<[[{<{({([]())[{}]}[<{}[]>{()}])}>}]{<[<<(<{}{}>(()[]))>[{{<><>}{[]{}}}<[[][]][()<>]>]>](<<{[[](
<((({(<[[({({({}{}}{{}[]}})([{[]}({}[])]{[{}()]({}())})}{([{{}{}}(<>[])]<({}[])[<>()]>)[[<
(([([[([<((<(<()()>({}()))[[<>]<<>[]>])[<([]<>)>(<()()>(<>{}))])<{[{[][]}(()<>)]}[[({}[])<()
{{(((([<<(<{<[[]<>][<><>]><[{}()]<<>()>>}<{{{}()}([]{})}(<()<>><{}<>>)>>){<({[()[]](<>{})}[[<>()](()[])])<
<(<<([<[[([(([[]()]<(){}>)[{{}()}[{}[]]])][<<<<>()>(<>)>{{()[]}[{}<>]}>])([[([<>[]]<<>()>){{<>()}<()<>>}][
<<<([([{((([<{[]{}}<(){}>>[(()<>)[[]{}]]]<{<[]{}><[]{}>)>)<<[[{}{}]{{}()}][{()[]}[()()]]>([{[
{(<<{<[<{<{{(<<>()>{{}[]})[{[]<>}{()[]}]}}(({({}<>)<()>}<[{}{}]{{}<>]>)({<{}{}>((){})}{{[][]}[[][]]
{([[<[<[[(<([<()>{[]{}}]<[<>{}](()[])>){({{}}([][]))}>)[({(((){})<{}{}>)})[({({}[])[[]()]}<<{}<>>(<><>)>)
[[<[[([([[{((<{}{}><<>()>)<<<>{}>((){}>>)<<<(){}><[]{}>>([[]{}])>}({[[<>{}]({}())]<<<><>>>})]]((<{{(
[<{{[([{[[<((([]){(){}})<{<>[]}{[]{}}>){[[[]{}]{[]{}}]}>]{[([<()[]>[<>{}]](([][]){<>{}}))]}]}{
({([{((<[([[<[{}()][()[]}>]{<{<>[]}<{}{}>>[<<>>{()<>}]}]<({{{}<>}{{}<>}}{<<>{}><()<>>})<(([]()
({<(({{{{{<{{{[]()}<[]>}[{<>{}}[[][]]]}[{({}())({}())}{({}{})<[]{}>}]>}{[<(([]())({}<>))>[({{
<<<{[[[<<{[<<((){})(()())>[[[]<>]<<><>>]>{{[{}{}]{(){}}}<{<><>](()())>}][(<{(){}}>)]}>(<[<[
{[<[{<({([({(<<><>>){([][]){(){}}}}[{{()()}[<><>]}]]{<{<<>>(<><>)}{{<>[]}(<>)}>[{{[]<>}[<>[]]}((<>[]){[]})]}]
<{[{{[<{[<<<[({}<>)[{}]][{{}{}}]>(({()[]}<{}<>})<[{}]([][])>)>>[[<<[()<>]({}[])>(<[][]>[{}()])>({{
(({[<([({{<{{(()<>)[{}[]]}<{(){}}<<>()>>}(<[()()](<><>)>{[()()]([]<>)})>({(([]()){{}})<[[]()](<>{
{{<<[<((<<({[(()<>)([]<>))({[]{}})}[([()[]]{[]{}})])<((<[]{}>(()())))>>{<<<<{}>(<><>)>>(<{<><>}>)>}>
{{([{{[{([({[<{}<>>({}[])][({})<()<>>]}[<(<>())(<>{})>({(){}}<[]()>)])<{<<{}{}>>[<()()>(<>{})]}({[()<>
(<(({{<<(<[{{{(){}}(<>[])}<(<>())>}{<{<><>}({}{})>{<[]{}><()[]>}}][<((()[])<{}<>>)((<><>){()()})>]
<((({{{([([(<{()[]}[{}()]>)][[[[{}[]][<>{}]][{{}}[()()]]]([[{}<>]]{(<>())(()[])})])[{{(<{}()]<<>()>)[{<><>}[
(([({[([({([[[[]{}]({})]{{[]{}}{{}()}}][[[<>{}]]<<()[]>[<>{}]>]){<<[[]()]<{}[]>>({(){}}<<>{}>)>
(<{<[({(<({{{[[]<>][<>()]}}[{[[]()]{[]{}}}]}<(([[]()])<<<>[]>{[][]}>)[<([][]){<>{}}>([{}{}]{{}<>
<{((([[{{{{[[{[]()}[<><>]]<[<><>][{}{}]>](<{{}}({}{})>{<{}>[()<>]})}{([<[][]>]({<>{}}<[][]>))<{[<>{}]}>}
{<{<([<<[<<{<<<>{}>[()()]>{<[]()><()[]>}}[{([]<>>{[][]}}[({}[])([][])]]>{<[[<>[]]<{}[]>]<[{}[]][[][]]>>}>{{<
([<[[[<[[<[{<<<>{}>[<>]>(([][]))}([<{}[]>{<>{}}][<{}[]>])]<{{(()[])[[]()]}}[{{{}[]}[{}<>]}(({}(
[{<[{[<{<{(({{{}()}<[]{}>}{[[]()]})<{[<>[]][<><>]}<(()<>){[][]}>>)<(({{}()}<{}>){(()){[][]}})<{[()<>
(<{([[{{(((([(()<>)](({}[])[()[]]))])([(([<>]<<>{}>)<{(){}}{<><>}>)[[{[]{}}<<><>>][({})[<>[]]]]]{{<({}{})<()
{<{(<<<<{{{{[<()()>{(){}}](({})<()()>)}{<[[]{}]<<><>>>}}[<{[<>]{()<>}}[[[]()]]>]}({([[<>[]]{{}()}]){<<{}<>
([[{<[[{[<{[<({})<<>[]>>{{[]<>}[[]{}]}]{([<>[]][[]{}])(<{}><()>)}}{<{{{}[]}<{}{}>}{<<><>>[[]()
((<[<(({<{{{{<()<>>}((()())(<>{}))}}{[{({}[]){<>()}}[<()<>>]}}}[<[({()<>}{<>{}}){{<>()}[<><>]}]<(<(){}>(
[({[(([({[({(<<>[]>)([{}<>]{()()})}<<(<>{})(()[])><[<>{}](()<>)>>)]<[[{(<>()){<>()}}{(<>()}{{}[]}}]]>}{[(([
[{{<<(({<<<[[({}()){[]}][{(){}}]]>[[<{()<>}([]())>]]}((<<(<>())<()[]>>[(<>()){[][]}]>{[({})<()()>]}))
[{((([{<<<[<<[{}]<[]()>><([][])[<>{}]>>{[<{}<>>{[]<>}]([<>[]])}](<(<{}[]>{{}()})>([(<>{})<[]<>>]{{<>[]}{<>
(<[([<[[{{[(<(()())(<>{})><<{}[]>{<>[]}>)<<([]{}){[]}>{(()[])[<>]}>]({<{<>()}>[<<><>>[()[]]]}[(
[<(<[([<[([<[[[]][()()]]{[[][]]{[][]}}>(<([]{})>)][<({[][]})<({}[])([]())>><{{[]()}}{<{}[]>)>])[{[<<()(
{{<{[(({[[(((<<>()><<>})<(()()){[]()}>)(<{[][]}<[][]>>{[[][]]{[]}}))<[<{<>{}}>]>]{{[[{<>{}}[
<{<[{{[<<[[{<{{}()}><[()()]([]{})>}][<[(()<>){<><>}]{[{}()]}>{[{()[]}[<>{}]]{(()[])[<>[]]}}]]<([{{<>()}{
{<<[<[(<{([<{[<>{}][{}{}]}({[]()}(()))>(<([]{})><<<>{}><{}<>>>)][{{{[]{}}}[([]<>){[]{}}]}<(<<>
{[(<{({(<<({(({}()){[]{}})<(()[])>}[((<>{})([]()))<{{}[]}[<>[]]>])<[<[{}()]{[][]}><<[]{}>>]>>{
({(((<<{([{[[<<>{}>[[]()]][{<>[]}<()[]>]]}{({<[][]}{<>()}})({<{}<>>{{}<>}}<{[]{}}({}())>)}]
[[{[{<<<[[([<<<><>>[()[]]><{<>[]}>])]{([[<<><>>[<><>]][{<>()}{{}{}}]]([{<>()}<{}[]>]{{[][]}([]<>)})){{(
{<([[[[[[{([[<[][]><{}()>]<([][])<(){}>>]({[[][]]{()[]}})){({<{}{}><<><>>}){([{}{}]{<><>}){(
({<[(((((<(<[[[]<>](<><>)]<{<>[]}[(){}]>>>(({[<>[]]<<>()>}{[()()]<{}<>>})[{<{}[]>[{}[]]}[[[](
({{[(({({[({{<<>{}>((){})}(({}{}))})]<[<[({}{})((){})]<<<>{}>>><{[{}[]](<>{})}<<[]<>>([][]
({([[<{(([<(((())[<>()])[[[]]<{}()>])<[<()<>>{(){}}][{()<>}[[]<>]]>><[<[<>{}]{<>()}>](<(<>())
{((<<[({(((<{{{}{}}<<>{}>}<({}())<<>[]>>><([<>])<[[]()]>>)[[<<<>[]>(()<>)][([]())]]{{<[]<>>([]{})}<{{}()}(
((([{{[(<{{((<{}{}><<><>])[({}<>)[[]<>]]){<{()[]}[[]()]>(([])[{}[]])}}(<[[[]{}][{}[]]][[()[
[{{<{<(<[<{({<[]<>>}<<[][]>[()[]]>){<(<>()]{<>[]}>[<{}[]>{()()}]}}>{[[{[()()]<<>[]>}<[[]<>](<>
<((<[<<[(<{[[(<>{})(<>{})]<{{}()}>](([{}{}][(){}]}[[<><>]{{}<>}])}<{[[{}{}][{}()]][(()())<[][]>]}>><<
[(({[[{[{<{[(<<>[]><{}{}>)(([]{}){(){}})]{[[[][]]<<>()>]({<>()}(<>{}))}}[<{{<>()}([]{})}[{[]()}[()[]]]>[[
[({[([{[({<<([<>[]])(<{}<>><{}{}>)>>{<[{[][]}<{}[]>){[<><>]<()()>}>[(<<>{}>{[][]})[{()<>}(<
[<<<{[[({<{[{<()()><{}[]>}]<{(()())<{}{}>}{{<>{}}<<>()>}>}<{[{{}[]}(<>)]((<>())[()<>])}{<[<
[[(<(({([<<<[<{}<>>(<>{})][{<>[]}([][])]><<<[]<>>(())>[[(){}][()<>]]>><{(<{}<>>[{}{}])<{()
[<<{[([<([([(({}{})[<>[]])<{[]<>}(()())>]<<<{}[]>{<>{}}>{({}[]){{}<>}}>)(([[[][]]](<{}{}><[]{}>)){[<{}[]>{{}<
[<{[({[{{<[([<<><>>[[][]]]([{}{}]({}{})))([[{}<>]<[]{}>][[<>()]{[][]}])]<<(<<>{}><<>{}>){[<>{}](<>[
({[<[[{[(<<[<{[][]}([]<>)>[<<>[]>[()[]]]]<(<{}[]><<>{}>)[<[][]>]>>[[{{<><>}{<>}}<[{}()]{<><>}}]{(<<>{}>
<<({[<[([{(([{(){}}][(()<>){{}<>>])<(<<>>)<[[]{}]{<>{}}>>)}<[<{<<>()>(<>())}>[{<[][]>(<>{})}[<{}[
{(<(({(((({({[<><>]<[]()>}{{<>[]}{<>()}}){({{}()}{()()})((<><>><()[]>)}})<[[{({}())({}{})}[{<><>
({(<({(<{((({([]{}){[]()}}({()<>}{(){}))){({<>[]}<[]{}>)<<[]()><[][]>>}))}>){(({[[[<<>[]>][<()[]>([][])]](
([<{<{(([(<<([{}]([]{}))<(()())({})>>([<{}()>(<>())])>{[[[()()]]<[<>{}]<{}{}>>][<{(){}]{<>{}}><(<>[
[<[{(({<({([[{[][]}({}[])]([{}()]<{}[]>)])((<<[]{})({}())>{(<>{}){{}()}})[[<<>>(())]])}[{[[[()()](<>[
(<(((({(<{[{(<<>()>([]()))[<[]()>[<>]]}]<<[[()<>]([]{})]><(<[]{}>{<>[]}){{[]()}(()[])}>>}>)
<(<<(<<[(([{<<[]{}>(()())>{[(){}]([][])}}][(<{{}{}}{[][]}>(([][])<<>[]>))]))[[<<([{}[]]<[]{}>)>[([()[]]<{}
[<<<<(<(((<[(<()[]><[]{}>)](<{[]{}}[[]{}]>[<{}<>><<>{}>])>[[{{<>()}}([()<>][[]{}])]<(<[][]>((){}))<<[]
[<<[([{([[({{{()()}({}{})}({()[]}{<>{}})}{[{<>[]}[<>()]]((<><>)({}()))}){[{<{}{}>(<>[])}{{{}<>}}][<([]{})
[((({<<<<[<([{(){}}(()[])}{{[][]}({}{})})([{{}{}}{[]()}](([]<>){<><>}))><<<<{}[]>(<>[])>{(<>{})[<>
{<[({<[<[([{<{[][]}<{}{}>>([{}>)}([{[][]}({}[])][[{}()]])]{[[[{}<>]<<>{}>]{<<><>><[][]>}][(
{({<{[<{[<<[(<<>><<><>>)[<()[]>[{}[]]]]<[(<>[])<{}>]{({}[]){()[]}}>>{[<{[]()}({})>((())[()[]])](<({}<>)`;

console.log(solve(arr1)); // 2421222841
