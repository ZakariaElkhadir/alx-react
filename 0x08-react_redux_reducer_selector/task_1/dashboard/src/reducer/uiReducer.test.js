import { uiReducer } from './uiReducer';
import * as uiActionTypes from '../actions/uiActionTypes';
import { Map } from 'immutable';

describe('uiReducer', () => {
    it('should return the initial state', () => {
        const initialState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {}
        });
        expect(uiReducer(undefined, {}).toJS()).toEqual(initialState.toJS());
    });

    it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
        const initialState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {}
        });
        const expectedState = initialState.set('isNotificationDrawerVisible', true);
        expect(uiReducer(initialState, { type: uiActionTypes.DISPLAY_NOTIFICATION_DRAWER }).toJS()).toEqual(expectedState.toJS());
    });

    it('should handle HIDE_NOTIFICATION_DRAWER', () => {
        const initialState = Map({
            isNotificationDrawerVisible: true,
            isUserLoggedIn: false,
            user: {}
        });
        const expectedState = initialState.set('isNotificationDrawerVisible', false);
        expect(uiReducer(initialState, { type: uiActionTypes.HIDE_NOTIFICATION_DRAWER }).toJS()).toEqual(expectedState.toJS());
    });

    it('should handle LOGIN_SUCCESS', () => {
        const initialState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {}
        });
        const expectedState = initialState.set('isUserLoggedIn', true);
        expect(uiReducer(initialState, { type: uiActionTypes.LOGIN_SUCCESS }).toJS()).toEqual(expectedState.toJS());
    });

    it('should handle LOGIN_FAILURE', () => {
        const initialState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: true,
            user: {}
        });
        const expectedState = initialState.set('isUserLoggedIn', false);
        expect(uiReducer(initialState, { type: uiActionTypes.LOGIN_FAILURE }).toJS()).toEqual(expectedState.toJS());
    });

    it('should handle LOGOUT', () => {
        const initialState = Map({
            isNotificationDrawerVisible: false,
            isUserLoggedIn: true,
            user: {}
        });
        const expectedState = initialState.set('isUserLoggedIn', false);
        expect(uiReducer(initialState, { type: uiActionTypes.LOGOUT }).toJS()).toEqual(expectedState.toJS());
    });
});