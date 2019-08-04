// function studentsRegister(arr) {
//     let studentsWhoPass = [];
//     for (let line of arr) {
//         let tokens = line.split(', ');
//         let studentsScore = Number(tokens[2].split(': ')[1]);
//         if (studentsScore > 3) {
//             let obj = {
//                 grade: Number(tokens[1].split(': ')[1]),
//                 name: tokens[0].split(': ')[1],
//                 score: studentsScore
//             };
//             studentsWhoPass.push(obj);
//         }
//     }
//     let mainObj = {};
//     for (let i = 0; i < studentsWhoPass.length; i++) {
//         let names = [];
//         let avgScore = Object.values(studentsWhoPass[i])[2];
//         let gradeOfFirstStudent = Object.values(studentsWhoPass[i])[0];
//         if (!mainObj.hasOwnProperty(gradeOfFirstStudent.toString())) {
//             mainObj[`${gradeOfFirstStudent}`] = {};
//             names.push(Object.values(studentsWhoPass[i])[1]);
//             for (let j = i + 1; j < studentsWhoPass.length; j++) {
//                 let gradeOfSecondStudent = Object.values(studentsWhoPass[j])[0];
//                 if (gradeOfSecondStudent === gradeOfFirstStudent) {
//                     if (
//                         mainObj.hasOwnProperty(gradeOfSecondStudent.toString())
//                     ) {
//                         avgScore += Object.values(studentsWhoPass[j])[2];
//                         names.push(Object.values(studentsWhoPass[j])[1]);
//                     }
//                 }
//             }
//             mainObj[gradeOfFirstStudent]['List of students'] = names;
//             mainObj[gradeOfFirstStudent][
//                 'Average annual grade from last year'
//             ] = avgScore / names.length;
//         }
//     }
//     for (let element of Object.entries(mainObj)) {
//         let tokens = Object.entries(element[1]);
//         console.log(
//             `${Number(element[0]) + 1} Grade\n${
//                 tokens[0][0]
//             }: ${tokens[0][1].join(', ')}\n${
//                 tokens[1][0]
//             }: ${tokens[1][1].toFixed(2)}\n`
//         );
//     }
// }

function studentsRegister(arr) {
    let schoolRegister = {};
    for (let line of arr) {
        let tokens = line.split(', ');
        let grade = Number(tokens[1].split(': ')[1]) + 1;
        let name = tokens[0].split(': ')[1];
        let score = Number(tokens[2].split(': ')[1]);
        if (score > 3) {
            let student = {name, score};
            if (!schoolRegister.hasOwnProperty(grade)) {
                schoolRegister[grade] = [];
            }
            schoolRegister[grade].push(student);
        }
    }
    let sortedGrades = Object.keys(schoolRegister).sort((a,b) => a - b);
    for (let grade of sortedGrades) {
        let students = schoolRegister[grade];
        console.log(`${grade} Grade`);
        console.log(`List of students: ${students.map(s => s.name).join(', ')}`);
        console.log(`Average annual grade from last year: ${average(students.map(s => s.score)).toFixed(2)}`);
        console.log();
    }

    function average(arr) {
        return arr.reduce((a, b) => a + b, 0) / arr.length;
    }
}

studentsRegister([
    'Student name: Mark, Grade: 8, Graduated with an average score: 4.75',
    'Student name: Ethan, Grade: 9, Graduated with an average score: 5.66',
    'Student name: George, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Steven, Grade: 10, Graduated with an average score: 4.20',
    'Student name: Joey, Grade: 9, Graduated with an average score: 4.90',
    'Student name: Angus, Grade: 11, Graduated with an average score: 2.90',
    'Student name: Bob, Grade: 11, Graduated with an average score: 5.15',
    'Student name: Daryl, Grade: 8, Graduated with an average score: 5.95',
    'Student name: Bill, Grade: 9, Graduated with an average score: 6.00',
    'Student name: Philip, Grade: 10, Graduated with an average score: 5.05',
    'Student name: Peter, Grade: 11, Graduated with an average score: 4.88',
    'Student name: Gavin, Grade: 10, Graduated with an average score: 4.00'
]);
