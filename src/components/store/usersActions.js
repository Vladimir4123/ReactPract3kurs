import {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "./usersSlice";

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchUsersStart());
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      dispatch(fetchUsersSuccess(data));
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    }
  };
};
