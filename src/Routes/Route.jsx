import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import ListedBooks from "../components/ListedBooks/ListedBooks";
import PagesToRead from "../components/PagesToRead/PagesToRead";
import BookDetails from "../components/BookDetails/BookDetails";
import WishlistBooks from "../components/WishlistBooks/WishlistBooks";
import ReadBooks from "../components/ReadBooks/ReadBooks";



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
          children: [
            {
              index: true,
              loader: ()=> fetch('/books.json'),
              element: <ReadBooks></ReadBooks>,
            },
            {
              path: 'wishlist',
              loader: ()=> fetch('/books.json'),
              element: <WishlistBooks></WishlistBooks>,
            },
          ],
        },
        {
          path: "/pagestoread",
          element: <PagesToRead></PagesToRead>,
        },
        {
          path: "/book/:id",
          loader: ()=> fetch('/books.json'),
          element: <BookDetails></BookDetails>,
        },
      ],
    },
  ]);