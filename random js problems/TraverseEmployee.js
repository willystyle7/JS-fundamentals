// The problem is to traverse through a large JS object containing an array of objects with n levels deep array of objects for the reportees.
// The object is ~30K lines. We should determine for each department the employee (employeeId) with the largest number of reportees.

const eobj = [
    {
        employeeId: '1',
        fName: 'Johnny',
        lName: 'Chung',
        title: 'Something boss',
        department: 'business',
        managerEmployeeId: null,
        reports: [
            {
                employeeId: '763',
                fName: 'John',
                lName: 'Pittman',
                department: 'Design',
                managerEmployeeId: '1',
                reports: [
                    {
                        employeeId: '1118',
                        fName: 'Kate',
                        lName: 'Bowers',
                        department: 'Residential Architecture',
                        managerEmployeeId: '763',
                        reports: [
                            {
                                employeeId: '1191',
                                fName: 'Brylee',
                                lName: 'Sparks',
                                department: 'Residential Architecture',
                                managerEmployeeId: '1118',
                                reports: []
                            },
                            {
                                employeeId: '1200',
                                fName: 'Brielle',
                                lName: 'Gonzalez',
                                department: 'Residential Architecture',
                                managerEmployeeId: '1191',
                                reports: []
                            }
                        ]
                    },
                    {
                        employeeId: '923',
                        fName: 'Alexander',
                        lName: 'Reyes',
                        department: 'Commercial Architecture',
                        managerEmployeeId: '763',
                        reports: []
                    }
                ]
            }
        ]
    }
];

function traverseObj(obj, result = {}) {
    for (const person of obj) {
        if (!result.hasOwnProperty(person.department)) {
            result[person.department] = {};
            result[person.department][person.employeeId] = countReportee(
                person.reports
            );
        } else {
            let personId = Object.keys(result[person.department])[0];
            let count = countReportee(person.reports);
            if (count > result[person.department][personId]) {
                delete result[person.department][personId];
                result[person.department][person.employeeId] = count;
            }
        }
        traverseObj(person.reports, result);
    }
}

function countReportee(reports) {
    let count = reports.length;
    for (const person of reports) {
        count += countReportee(person.reports);
    }
    return count;
}

result = {};
traverseObj(eobj, result);
console.log(result);
