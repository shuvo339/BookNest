import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import ListedBooks from "../components/ListedBooks/ListedBooks";
import PagesToRead from "../components/PagesToRead/PagesToRead";
import JobDetails from "../components/JobDetails/JobDetails";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/listedbook",
          element: <ListedBooks></ListedBooks>,
        },
        {
          path: "/pagestoread",
          element: <PagesToRead></PagesToRead>,
        },
        {
          path: "/book/:id",
          loader: ()=> fetch('/books.json'),
          element: <JobDetails></JobDetails>,
        },
      ],
    },
  ]);