// https://adventofcode.com
// What SNAFU number do you supply to Bob's console?

function solve(input) {
    input = input.split('\n');
    input = input.map(SNAFUtoDEC);
    // console.log(input);
    let sum = input.reduce((a, b) => a + b, 0);
    return DECtoSNAFU(sum);
}

function SNAFUtoDEC(str) {
    let num = 0;
    for (let idx = str.length - 1; idx >= 0; idx--) {
        let sign = str[idx];
        let coef = 0;
        switch (sign) {
            case '=':
                coef = -2;
                break;
            case '-':
                coef = -1;
                break;
            case '0':
                coef = 0;
                break;
            case '1':
                coef = 1;
                break;
            case '2':
                coef = 2;
                break;
            default:
                break;
        }
        num += coef * Math.pow(5, str.length - 1 - idx);
    }
    return num;
}

function DECtoSNAFU(num) {
    let snafu = '';
    while (num > 0) {
        let reminder = num % 5;
        let sign = '';
        switch (reminder) {
            case 0:
                sign = '0';
                num = Math.floor(num / 5);
                break;
            case 1:
                sign = '1';
                num = Math.floor(num / 5);
                break;
            case 2:
                sign = '2';
                num = Math.floor(num / 5);
                break;
            case 3:
                sign = '=';
                num = Math.floor(num / 5) + 1;
                break;
            case 4:
                sign = '-';
                num = Math.floor(num / 5) + 1;
                break;
            default:
                break;
        }
        snafu = sign + snafu;
    }
    return snafu;
}

// console.log(DECtoSNAFU(1)); // 1
// console.log(DECtoSNAFU(2)); // 2
// console.log(DECtoSNAFU(3)); // 1=
// console.log(DECtoSNAFU(4)); // 1-
// console.log(DECtoSNAFU(5)); // 10
// console.log(DECtoSNAFU(6)); // 11
// console.log(DECtoSNAFU(7)); // 12
// console.log(DECtoSNAFU(8)); // 2=
// console.log(DECtoSNAFU(9)); // 2-
// console.log(DECtoSNAFU(10)); // 20
// console.log(DECtoSNAFU(15)); // 1=0
// console.log(DECtoSNAFU(20)); // 1-0
// console.log(DECtoSNAFU(2022)); // 1=11-2
// console.log(DECtoSNAFU(12345)); // 1-0---0
// console.log(DECtoSNAFU(314159265)); // 1121-1110-1=0
// console.log(DECtoSNAFU(4890)); // 2=-1=0

let input = `1=-0-2
12111
2=0=
21
2=01
111
20012
112
1=-1=
1-12
12
1=
122`;

console.log(solve(input)); // 4890 -> 2=-1=0

let input1 = `1==-20221
1101-20012
21-12--21=2-0-0-=0
2-12101=1-
1==-2
12-=0122=1=0-21=
120=11=-1=1012-12
100=22212-20=-01
10-==-0-21111221-=
1-=
21-2-20-
2-0202-=102-
1--1-110-=12=
2-2122=
1=1===2
2--===-10=-111--10
10--1--1101100
21-0==-1-=2211
2-2202=-0-0=0
2-2-1-=22=02--0
1=2-=10-02120----
10==1002=-
2-0=21-=-0
1=-=2201112-221==02
10-12-22=2=-
12-2-00000=-
1=10=2020200==01-022
1=2=
100220
2-1-2
1-12-021--=
1-022---2=1=010==
2201100==21
11==-002==0==20=0
1=22-01-1==2-=1=20
221-
11=
2==2-0021--
1---212--
202=11--=1-101-01
1-----10==12-021=
1-02=-00--
1=0
102---
2-2=1==11100
1=11=2
11200-=102==02=-20
11021100-00----0
121-0=00=22=10=-
2=-=21=
212202=1--1002=
10-=2=12--
2002-2
102-=-
1=0022
2011--0-2==012021
12=-0
1==--110=2-21
1-12-11==22-=2001
2=1112==22-0020-2
2--21=
1==0-0
1=2=-11-=2
2=120001=20=01-
111-1-0=
1-1-00=-2=002
1==-212=02=1=20-
22=
1--2
10--=11002=1-0-011=
1=01-1=0==0
1-=0-2---2=12
1-2-=-
22222
12002=0=021=22022
1=-0112021-
12=-20=0-=2=1
1=
22
1==1020--0-1=21=21
1=202=0021=2
1-22-022-1=01
1==-==1-02=
1-02-
21
1=2=010=
2=-==02211
1-22=--10=1=110-=
20-1222=-=1=2-12
2012=1-=
111=1=-100=2
11
20-=-20-111202
1=01
1-12=1-=10-0-1
10-02-2
200=01=
1=0002=01222-=100=
11-0-=1=011002=-0
10-=2-=-
1====2==0=1=02=-=20
11=-020012
21-11-22-0=0=2
1=20011
11-102021=122=-
2-2-12021
10--1=21=
100-111
1-2-201=0101-1
2=02-00-1=02=2=221=
1-=200=10=0-20
22=0-==-10=2-1
1==
11=002=201-2
2-12
211=-12=20=-2=-01-
102-100
10=12210=20=-2`;

console.log(solve(input1)); // 20===-20-020=0001-02

