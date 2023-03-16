import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/root';
import './index.css';
import ItemRoot from './routes/itemRoot';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/category/:id",
    element: <Root />,
  },  {
    path: "/item/:id",
    element: <ItemRoot />,
  },  {
    path: "/cart",
    element: <div></div>,
  },  {
    path: "/checkout",
    element: <div></div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <RouterProvider router={router} />
        
  </React.StrictMode>,
)
