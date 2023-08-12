import React from 'react'
import * as ReactDOM from "react-dom/client";
import { QueryClient } from '@tanstack/react-query'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.tsx'
import { Home, homeLoader } from './routes/Home'
import Search from './routes/Search'
import './index.css'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader(queryClient)
      },
      {
        path: "/busca",
        element: <Search />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
