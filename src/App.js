import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Default from './Components/Default/Default';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Quizes from './Components/Quizes/Quizes';
import Statistics from './Components/Statistics/Statistics';
import Topics from './Components/Topics/Topics';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from './Components/Button';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Default></Default>,
        },
        {
          path: "/quiz/:quizId",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
            );
          },
          element: <Quizes></Quizes>,
        },
        {
          path: "/quiz/:quizId",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
            );
          },
          element:<Button></Button>
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/topics",
          element: <Topics></Topics>,
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
      ],
    },
    {
      path: "*",
      element: (
        <div className="text-5xl text-center flex justify-center items-center font-bold">
          404 Not Found!
        </div>
      ),
    },
  ]);
  return (
    <div className="App bg-indigo-50 min-h-screen">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
