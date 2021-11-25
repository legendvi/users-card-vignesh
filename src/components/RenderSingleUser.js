import { useSelector } from "react-redux";
import SingleUser from "../layouts/SingleUser";

const RenderSingleUser = (props) => {
  const singleUserState = useSelector((state) => state.usersDetails.singleUser);

  return (
    <>
      <SingleUser
        name={`${singleUserState.name.title} ${singleUserState.name.first} ${singleUserState.name.last} `}
        email={singleUserState.email}
        picture={singleUserState.picture.large}
        age={singleUserState.dob.age}
        dob={singleUserState.dob.date.slice(0, 10)}
        street={`${singleUserState.location.street.number}, ${singleUserState.location.street.name}, `}
        city={singleUserState.location.city}
        state={singleUserState.location.state}
        postcode={singleUserState.location.postcode}
      />
    </>
  );
};

export default RenderSingleUser;
