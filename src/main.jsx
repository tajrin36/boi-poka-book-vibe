import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import ListedBooks from './components/ListedBooks';
import BookDetail from './components/BookDetail';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'books/:bookId',
        loader: () =>  fetch('/booksData.json'),
        element: <BookDetail></BookDetail>
      },
      {
        path: 'listedBooks',
        loader: () =>  fetch('/booksData.json'),
        element: <ListedBooks></ListedBooks>
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer></ToastContainer>
  </StrictMode>,
)
