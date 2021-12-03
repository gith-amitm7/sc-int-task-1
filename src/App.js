import React from "react";
import Layout from "./layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Jost, sans-serif",
  },
});

// Lazy loading screens to reduce chunk size

const Landing = React.lazy(() => import("screens/Landing"));
const PhotoEditor = React.lazy(() => import("screens/PhotoEditor"));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div id="app">
        <React.Suspense fallback={<>Loading...</>}>
          <Router>
            <Layout>
              <Routes>
                <Route exact path="/" element={<Landing />}></Route>
                <Route exact path="/task2" element={<PhotoEditor />}></Route>
              </Routes>
            </Layout>
          </Router>
        </React.Suspense>
      </div>
    </ThemeProvider>
  );
};

export default App;
