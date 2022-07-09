/*
* first grading system: grades 1-5, a grade >= 3 is needed to pass
* second grading system: grades A, A-, B, B-, C, C-, where C is the lowest passing grade
* assignment: add all students to the array (studentsWhoPass) which have passed the course
*/

function checkWhoPassed(allStudents, studentsWhoPass) {
    for (let i = 0; i < allStudents.length; i++) {
        const grade = allStudents[i];
        if ((typeof grade) === 'number') {
            if (grade >= 3) {
                studentsWhoPass.push(i);
            }
        } else {
            if (grade !== 'C-') {
                studentsWhoPass.push(i);
            }
        }
    }
}

let allStudentsCourse0 = [
    'A',
    'B-',
    1,
    4,
    5,
    2
];
let studentsWhoPassCourse0 = [];
checkWhoPassed(allStudentsCourse0, studentsWhoPassCourse0);
console.log(studentsWhoPassCourse0);

let allStudentsCourse1 = [
    'C',
    'C-',
    1,
    'A',
    5
];
let studentsWhoPassCourse1 = [];
checkWhoPassed(allStudentsCourse1, studentsWhoPassCourse1);
console.log(studentsWhoPassCourse1);
