//importing all required Components and hooks
import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { getUsers } from "./helpers-dispatch/getUser";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/header";
import RandomUsersPage from "./pages/RandomUsersPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import PageNotFound from "./pages/PageNotFound";
//-------------------------------
function App() {
  //getting current states from redux
  const state = useSelector((state) => state.usersDetails);
  const dispatch = useDispatch();
  //using useEffect to get Random user data when page loads
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <div className="App">
      <BrowserRouter>
        {/* using router-dom to render componetns based on path */}
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/random-users" />} />
          <Route path="/random-users" element={<RandomUsersPage />} />

          <Route
            path="/user-details/:id"
            element={
              state.singleUser === null ? (
                <Navigate to="/random-users" />
              ) : (
                <UserDetailsPage />
              )
            }
          />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
