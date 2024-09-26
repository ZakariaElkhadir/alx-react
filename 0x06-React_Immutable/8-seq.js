import { Seq } from 'immutable';
function getBestStudents(students) {
  return Seq(students)
    .filter(student => student.score < 70);
}
export default getBestStudents;