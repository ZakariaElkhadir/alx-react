import { Seq } from 'immutable';
function printBestStudents (object) {
  return Seq(object)
    .filter(student => student.score < 70);
}
