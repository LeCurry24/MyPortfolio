import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Components/Home";
import Layout from "./Pages/Layout";
import AboutPage from "./Components/AboutPage"
import Experience from "./Components/Experience";
import Projects from "./Components/Projects"
import Resume from "./Pages/Resume";

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
      },
      {
        path: "/experience",
        element: <Experience/>
      },
      {
        path: "/projact",
        element: <Projects/>
      },
      {
        path: "/resume",
        element: <Resume/>
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
