import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

// Components
import Loading from "./components/Loading";

// routes
// const Home = React.lazy(() => import("./pages/Home"));

const routeList = [
  {
    path: "/",
    page: Home,
  },
];

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* {routeList.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <Suspense fallback={<Loading />}>
                  <route.page />
                </Suspense>
              }
            />
          ))} */}
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
