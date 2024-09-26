import { Seq } from 'immutable';

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function printBestStudents(students) {
    const bestStudents = Seq(students)
        .filter(student => student.score >= 70)
        .map(student => ({
            ...student,
            firstName: capitalize(student.firstName),
            lastName: capitalize(student.lastName),
        }))
        .toObject();
        return bestStudents;
}
export default printBestStudents;