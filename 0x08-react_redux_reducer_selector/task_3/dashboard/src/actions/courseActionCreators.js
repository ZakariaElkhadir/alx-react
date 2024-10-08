import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS} from "./courseActionTypes";



export function fetchCourseSuccess(data){
  return {
    type: FETCH_COURSE_SUCCESS,
    data: data
  }

}
export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index: index,
  };
}

export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index: index,
  };
}
export function bindCourseActionCreators(dispatch) {
  return bindActionCreators(
    {
      selectCourse,
      unSelectCourse,
    },
    dispatch
  );
}