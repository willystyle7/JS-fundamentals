// Valid USA telephone numbers
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555 5555 55
// 1 555 555 5555

function telephoneCheck(str) {
    let pattern1 = /^(?:1\s?)?\d{3}-\d{3}-\d{4}$/;
    let pattern2 = /^(?:1\s?)?\(\d{3}\)\s?\d{3}-\d{4}$/;
    let pattern3 = /^(?:1\s?)?\d{3}\s\d{3}\s\d{4}$/;
    let pattern4 = /^(?:1\s?)?\d{10}$/;
    return pattern1.test(str) || pattern2.test(str) || pattern3.test(str) || pattern4.test(str);
}

console.log(telephoneCheck('555-555-5555'));
