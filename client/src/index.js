import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import SignUp from './views/SignUp/SignUp';
import AddTransactions from './views/AddTransactions/AddTransactions';
import AllExpenses from './views/AllExpenses/AllExpenses';
import MyTransactions from './views/MyTransactions/MyTransactions';
//boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
      path:'/',
      element:<Home/>
  },
  {
      path:'/login',
      element:<Login/>
  },
  {
      path:'/signup',
      element:<SignUp/>
  },
  {
    path:'/addtransactions',
    element:<AddTransactions/>
  },
  {
    path:'/allexpenses',
    element:<AllExpenses/>
  },
  {
    path:'/mytransactions',
    element:<MyTransactions/>
  }
])
root.render(<RouterProvider router = {router} />
);


