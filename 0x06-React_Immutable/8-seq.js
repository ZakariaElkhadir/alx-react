import { Seq } from 'immutable';

export default function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
  
export default function printBestStudents(object) {
  return Seq(object)
    .filter(student => student.score >= 70)
    .map(student => ({
      ...student,
      firstName: capitalize(student.firstName),
      lastName: capitalize(student.lastName)
    }))
    .forEach(student => {
      console.log(`${student.firstName} ${student.lastName}`);
    });
}