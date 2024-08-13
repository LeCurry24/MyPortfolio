import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Components/Home";
import Layout from "./Pages/Layout";
import AboutPage from "./Components/AboutPage"
import Projects from "./MyProjects/Projects"
import Resume from "./Pages/Resume";
import MyStory from "./Components/MyStory";
import ContactMe from "./Components/ContactMe";

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
        path: "/contactMe",
        element: <ContactMe/>
      },
      {
        path: "/projact",
        element: <Projects/>
      },
      {
        path: "/resume",
        element: <Resume/>
      },
      {
        path: "/myStory",
        element: <MyStory/>
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
