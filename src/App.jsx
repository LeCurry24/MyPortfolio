import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Components/Home";
import Layout from "./Pages/Layout";
import AboutPage from "./Components/AboutPage"


const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <AboutPage/>
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
