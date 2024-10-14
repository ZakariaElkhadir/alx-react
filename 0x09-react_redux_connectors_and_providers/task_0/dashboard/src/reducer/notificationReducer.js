import { Map } from "immutable";
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from "../actions/notificationActionTypes";
import { notificationsNormalizer } from "../utils/notificationsNormalizer";

const initialState = Map({
  notifications: [],
  filter: "DEFAULT",
});

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedData = notificationsNormalizer(action.data);
      return state.merge({
        notifications: normalizedData.map((notification) => ({
          ...notification,
          isRead: false,
        })),
      });
    case MARK_AS_READ:
      return state.setIn(
        ["notifications", action.index, "isRead"],
        true
      );
    case SET_TYPE_FILTER:
      return state.set("filter", action.filter);
    default:
      return state;
  }
};
