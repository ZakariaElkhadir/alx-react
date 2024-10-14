import { Map } from 'immutable';
import { normalizeCourses } from '../normalizer/courseNormalizer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

const initialState = Map({
    courses: [],
    selectedCourses: []
});
const courseReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            const normalizedData = normalizeCourses(action.payload);
            return state.merge(normalizedData);

        case SELECT_COURSE:
            return state.setIn(
            ['courses', action.payload, 'isSelected'],
            true
            );
        case UNSELECT_COURSE:
            return state.setIn(
            ['courses', action.payload, 'isSelected'],
            false
            );
        default:
            return state;
    }
};

export { courseReducer };