import { stateActions } from "../store/users-data";
export const getUsers = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=50");
      if (!response.ok) throw new Error("Request Failed Try Again");
      const data = await response.json();
      dispatch(stateActions.replaceUserDetails(data.results));
    } catch (err) {
      alert(err.message);
    }
  };
};
