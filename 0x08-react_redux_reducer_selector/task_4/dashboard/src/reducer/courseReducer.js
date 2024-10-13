import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

const courseReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            return action.payload;
        case SELECT_COURSE:
            return state.map(course =>
                course.id === action.payload ? { ...course, isSelected: true } : course
            );
        case UNSELECT_COURSE:
            return state.map(course =>
                course.id === action.payload ? { ...course, isSelected: false } : course
            );
        default:
            return state;
    }
};

export { courseReducer };