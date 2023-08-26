import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Root from './routes/Root';
import MainPage from './components/MainPage';
import Filter from './components/Filter';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: '/details',
        element: <Filter />,
      },
    ],
  },
]);

function App() {
  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
