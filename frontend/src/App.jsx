import Home from './pages/home'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Challenge from './pages/challenge'
import Community from './pages/community'
import Articles from './pages/articles'
import Error_404 from './pages/404'
import Login from './pages/login'
import Signup from './pages/signup'
import One_Article from './pages/one_article'
import LandingPage from './pages/landing_page'
import AboutPage from './pages/about'
import HelpSupport from './pages/help_support'
import TermsConditions from './pages/terms_conditions'
import Navbar from './components/common/navbar'
import Footer from './components/footer'
const PrivateRoute = ({ element }) => {
  const userId = localStorage.getItem("user_id");
  return userId ? element : <Navigate to="/login" />;
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: localStorage.getItem("user_id") ? <Home /> : <LandingPage/>,
      errorElement: <Error_404 />,
    },
    {
      path: "/home",
      element: <PrivateRoute element={<Home />} />,
    },
    {
      path: "/challenge",
      element: <PrivateRoute element={<Challenge />} />,
    },
    {
      path: "/community",
      element: <PrivateRoute element={<Community />} />,
    },
    {
      path: "/articles",
      element: <PrivateRoute element={<Articles />} />,
    },
    // {
    //   path: "/one_article",
    //   element: <PrivateRoute element={<One_Article />} />,
    // },
    // {
    //   path: "/about",
    //   element: <PrivateRoute element={<AboutPage/>} />,
    // },
    // {
    //   path: "/contact",
    //   element: <PrivateRoute element={<HelpSupport />} />,
    // },
    // {
    //   path: "/terms_conditions",
    //   element: <PrivateRoute element={<TermsConditions />} />,
    // },
    {
      path: "/landing_page",
      element: <LandingPage/>,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
