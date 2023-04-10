import React, {Children} from 'react';
import Layout from './componentes/Layout';
import ReactDOM from 'react-dom/client';
import Root from './routes/root';
import './index.css';
import ItemRoot from './routes/itemRoot';
import Cart from './routes/cart';
import Checkout from './routes/checkout';
import {CartProvider}from '../src/context/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey, 
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  measurementId: import.meta.env.VITE_measurementId
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);




const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
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
        element: <Cart />,
      },  {
        path: "/checkout",
        element: <Checkout />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <CartProvider>
    <RouterProvider router={router} />
   </CartProvider>
  </React.StrictMode>,
)
