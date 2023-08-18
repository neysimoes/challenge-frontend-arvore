import React from 'react'
import * as ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Root, rootAction }  from './routes/Root'
import { Home } from './routes/Home'
import { Search, searchLoader } from './routes/Search'
import './index.css'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    element: <Root />,
    action: rootAction(queryClient),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/busca",
        element: <Search />,
        loader: searchLoader(queryClient)
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
