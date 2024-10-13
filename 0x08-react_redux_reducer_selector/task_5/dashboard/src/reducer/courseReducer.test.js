import { courseReducer } from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { Map } from 'immutable';

describe('courseReducer', () => {
    it('should return the default state as an empty Map', () => {
        const newState = courseReducer(undefined, {});
        expect(newState).toEqual(Map({
            courses: [],
            selectedCourses: []
        }));
    });

    it('should handle FETCH_COURSE_SUCCESS and return the data passed', () => {
        const courses = [
            { id: 1, name: 'Course 1', isSelected: false },
            { id: 2, name: 'Course 2', isSelected: false }
        ];
        const action = { type: FETCH_COURSE_SUCCESS, payload: courses };
        const newState = courseReducer(Map({
            courses: [],
            selectedCourses: []
        }), action);
        expect(newState.get('courses')).toEqual(courses);
    });

    it('should handle SELECT_COURSE and update the right item', () => {
        const initialState = Map({
            courses: [
                { id: 1, name: 'Course 1', isSelected: false },
                { id: 2, name: 'Course 2', isSelected: false }
            ],
            selectedCourses: []
        });
        const action = { type: SELECT_COURSE, payload: 1 };
        const newState = courseReducer(initialState, action);
        expect(newState.get('courses')).toEqual([
            { id: 1, name: 'Course 1', isSelected: true },
            { id: 2, name: 'Course 2', isSelected: false }
        ]);
    });

    it('should handle UNSELECT_COURSE and update the right item', () => {
        const initialState = Map({
            courses: [
                { id: 1, name: 'Course 1', isSelected: true },
                { id: 2, name: 'Course 2', isSelected: false }
            ],
            selectedCourses: []
        });
        const action = { type: UNSELECT_COURSE, payload: 1 };
        const newState = courseReducer(initialState, action);
        expect(newState.get('courses')).toEqual([
            { id: 1, name: 'Course 1', isSelected: false },
            { id: 2, name: 'Course 2', isSelected: false }
        ]);
    });

    it('should not mutate the state when handling actions', () => {
        const initialState = Map({
            courses: [
                { id: 1, name: 'Course 1', isSelected: false },
                { id: 2, name: 'Course 2', isSelected: false }
            ],
            selectedCourses: []
        });
        const action = { type: SELECT_COURSE, payload: 1 };
        const newState = courseReducer(initialState, action);
        expect(newState).not.toBe(initialState);
    });

    it('should handle unknown action types and return the current state', () => {
        const initialState = Map({
            courses: [
                { id: 1, name: 'Course 1', isSelected: false },
                { id: 2, name: 'Course 2', isSelected: false }
            ],
            selectedCourses: []
        });
        const action = { type: 'UNKNOWN_ACTION', payload: 1 };
        const newState = courseReducer(initialState, action);
        expect(newState).toBe(initialState);
    });
});