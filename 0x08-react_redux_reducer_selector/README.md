# React Redux Reducer & Selector Project

This project focuses on creating reducers and selectors for a React-Redux application. The main components include:

1. **UI Reducer:** A basic reducer is created in `reducers/uiReducer.js`. It uses Immutable for state management.

2. **Course Reducer:** A reducer for courses is created in `courseReducer.js`. It handles actions like `FETCH_COURSE_SUCCESS`, `SELECT_COURSE`, and `UNSELECT_COURSE`. The state is an array of courses with each course having an `isSelected` attribute.

3. **Notification Reducer:** A reducer for notifications is created in `notificationReducer.js`. It handles actions like `FETCH_NOTIFICATIONS_SUCCESS`, `MARK_AS_READ`, and `SET_TYPE_FILTER`. The state is an object with notifications, each having an `isRead` attribute.

4. **Normalizr & Immutable:** Normalizr is used to simplify mutation in the course and notification reducers. Schemas for courses and notifications are created in `schema/courses.js` and `schema/notifications.js` respectively.

5. **Selectors:** Selectors are created for the Notifications reducer in `src/selectors/notificationSelector.js`. They provide an efficient way to access data from the state.

Each component has a corresponding test file for ensuring correct functionality. The project requires knowledge of React, Redux, and Immutable.js. The final code structure and test results should match the provided repo structure and tests.
