import { stateActions } from "../store/users-data";
const updateUser = (item, dispatch, navigate, index) => {
  dispatch(stateActions.replaceSingleUser(item));
  navigate(`/user-details/${index + 1}`);
};

export default updateUser;
