import { courseReducer } from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

describe('courseReducer', () => {
    it('should return the default state as an empty array', () => {
        const newState = courseReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it('should handle FETCH_COURSE_SUCCESS and return the data passed', () => {
        const courses = [
            { id: 1, name: 'Course 1', isSelected: false },
            { id: 2, name: 'Course 2', isSelected: false }
        ];
        const action = { type: FETCH_COURSE_SUCCESS, payload: courses };
        const newState = courseReducer([], action);
        expect(newState).toEqual(courses);
    });

    it('should handle SELECT_COURSE and update the right item', () => {
        const initialState = [
            { id: 1, name: 'Course 1', isSelected: false },
            { id: 2, name: 'Course 2', isSelected: false }
        ];
        const action = { type: SELECT_COURSE, payload: 1 };
        const newState = courseReducer(initialState, action);
        expect(newState).toEqual([
            { id: 1, name: 'Course 1', isSelected: true },
            { id: 2, name: 'Course 2', isSelected: false }
        ]);
    });

    it('should handle UNSELECT_COURSE and update the right item', () => {
        const initialState = [
            { id: 1, name: 'Course 1', isSelected: true },
            { id: 2, name: 'Course 2', isSelected: false }
        ];
        const action = { type: UNSELECT_COURSE, payload: 1 };
        const newState = courseReducer(initialState, action);
        expect(newState).toEqual([
            { id: 1, name: 'Course 1', isSelected: false },
            { id: 2, name: 'Course 2', isSelected: false }
        ]);
    });
});