import React from "react";
import Home from "./pages/Home";
import {
  BrowserRouter,
  createBrowserRouter,
  createHashRouter,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import PrivateRotes from "./routes/PrivateRotes";
// import PublicRotes from "./routes/PublicRotes";
import PageNotFound from "./pages/PageNotFound";
import { useUser } from "./context/CreateContext";
import Register from "./pages/Register";
import Login from "./pages/Login";

const router = createHashRouter([
  {
    path: "/",
    children: [
      { index: true, element: <Home /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
    ],
  },

  { path: "*", element: <PageNotFound /> },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
};

// const App = () => {
//   const { appKey } = useUser();
//   return (
//     <div key={appKey}>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/*" element={<PrivateRotes />} />
//           <Route path="/auth/*" element={<PublicRotes />} />
//         </Routes>
//       </BrowserRouter>
//       <ToastContainer />
//     </div>
//   );
// };

export default App;
