import { GET_STUDENT } from "../utils/constants";

const studentReducer = (state = [], action) => {
  switch (action.type) {
    case GET_STUDENT:
      return action.student;
    default:
      return state;
  }
};

export default studentReducer;
