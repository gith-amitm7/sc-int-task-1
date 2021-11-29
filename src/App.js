import React from "react";
import Layout from "./layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "components/PrivateRoute";

// Lazy loading screens to reduce chunk size
const Login = React.lazy(() => import("screens/Login"));
const SignUp = React.lazy(() => import("screens/SignUp"));
const Landing = React.lazy(() => import("screens/Landing"));

const App = () => {
  return (
    <div id="app">
      <React.Suspense fallback={<>Loading...</>}>
        {/* Layout components has header and sidebar pre-fitted in a decided manner,
          this takes all the header, sidebar and main-content area related stylings &
          DOMs to one place
      */}
        <Router>
          <Layout>
            <Routes>
              {/* Wrapping all secured screens route inside a PrivateRoute */}
              <Route exact path="/" element={<PrivateRoute />}>
                <Route exact path="/video" element={<Landing />}></Route>
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </Layout>
        </Router>
      </React.Suspense>
    </div>
  );
};

export default App;
