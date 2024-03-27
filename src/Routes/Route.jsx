import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import ListedBooks from "../components/ListedBooks/ListedBooks";
import PagesToRead from "../components/PagesToRead/PagesToRead";
import BookDetails from "../components/BookDetails/BookDetails";
import UserProfile from './../components/UserProfile/UserProfile';
import Blogs from "../components/Blogs/Blogs";
import WishBook from "../components/WishBook/WishBook";
import ReadBook from "../components/ReadBook/ReadBook";



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
          loader: ()=> fetch('/books.json'),
          element: <ListedBooks></ListedBooks>,
          children: [
            {
              path: 'read',
              element: <ReadBook></ReadBook>,
            },
            {
              path: 'wishlist',
              element: <WishBook></WishBook>,
            },
          ],
        },
        {
          path: "/pagestoread",
          loader: ()=> fetch('/books.json'),
          element: <PagesToRead></PagesToRead>,
        },
        {
          path: "/book/:id",
          loader: ()=> fetch('/books.json'),
          element: <BookDetails></BookDetails>,
        },
        {
          path: "/blogs",
          loader: ()=> fetch('/blogs.json'),
          element: <Blogs></Blogs>,
        },
        {
          path: "/user",
          element: <UserProfile></UserProfile>,
        },
      ],
    },
  ]);