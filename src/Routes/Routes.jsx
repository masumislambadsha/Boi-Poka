import { createBrowserRouter} from 'react-router'
import Root from '../pages/Root/Root'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import BookDetails from '../pages/BookDetails/BookDetails'
import Navbar from '../components/Header/Navbar'
export const router =createBrowserRouter([
 {
    path: '/',
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch('booksData.json'),
        Component: Home,
      },
      {
        path: 'about',
        Component: About,
      },
      {
        path: 'bookDetails/:id',
         loader: () => fetch('booksData.json'),
        Component: BookDetails,
      },
    ],
  },
]);
