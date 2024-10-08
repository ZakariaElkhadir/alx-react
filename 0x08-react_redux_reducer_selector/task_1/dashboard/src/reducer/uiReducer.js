import * as uiActionTypes from '../actions/uiActionTypes'
const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
};

export const uiReducer = (state=initialState, action) =>{
    if(action.type === uiActionTypes.DISPLAY_NOTIFICATION_DRAWER){
       return {
        ...state,
        isNotificationDrawerVisible: true
       }
    } else if(action.type === uiActionTypes.HIDE_NOTIFICATION_DRAWER){
        return {
            ...state,
            isNotificationDrawerVisible: false
        }

    }else if(action.type === uiActionTypes.LOGIN_SUCCESS){
        return {
            ...state,
            isUserLoggedIn: true
        }
    }else if(action.type === uiActionTypes.LOGIN_FAILURE){
        return {
            ...state,
            isUserLoggedIn: false
        }
    }else if(action.type === uiActionTypes.LOGOUT){
        return {
            ...state,
        isUserLoggedIn:  false}
    }
    else{
        return state
    }
};
