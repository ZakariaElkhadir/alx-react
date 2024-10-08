export const SELECT_COURSE = { type: 'SELECT_COURSE' };
export const UNSELECT_COURSE = { type: 'UNSELECT_COURSE' };

export const FETCH_COURSE_SUCCESS = {
    type: FETCH_COURSE_SUCCESS,
    data: [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ]
  };
