import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Todo from "../pages/Todo";
import NotFound from "../pages/NotFound";
import Layout from "../components/common/Layout";
import Home from "../pages/Home";

function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default Router;
