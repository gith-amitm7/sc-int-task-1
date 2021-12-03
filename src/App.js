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
        <Router>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Landing />}></Route>
            </Routes>
          </Layout>
        </Router>
      </React.Suspense>
    </div>
  );
};

export default App;
