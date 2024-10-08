import * as uiActionTypes from '../actions/uiActionTypes'
import { Map } from 'immutable';
const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
});

const actionHandlers = new Map([
    [uiActionTypes.DISPLAY_NOTIFICATION_DRAWER, (state) => state.set('isNotificationDrawerVisible', true)],
    [uiActionTypes.HIDE_NOTIFICATION_DRAWER, (state) => state.set('isNotificationDrawerVisible', false)],
    [uiActionTypes.LOGIN_SUCCESS, (state) => state.set('isUserLoggedIn', true)],
    [uiActionTypes.LOGIN_FAILURE, (state) => state.set('isUserLoggedIn', false)],
    [uiActionTypes.LOGOUT, (state) => state.set('isUserLoggedIn', false)]
]);

export const uiReducer = (state = initialState, action) => {
    const handler = actionHandlers.get(action.type);
    return handler ? handler(state) : state;
};