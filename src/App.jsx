import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/footer'
import Home from './pages/home/home'
import Gigs from './pages/gigs/gigs'
import MyGigs from './pages/myGigs/myGigs'
import Orders from './pages/orders/orders'
import Message from './pages/message/message'
import Messages from './pages/messages/messages'
import Add from './pages/add/add'
import Gig from './pages/gig/gig'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

 function App(){
    const Layout =()=>{
        return (
            <div className="app">
              <Navbar />
              <Outlet />
              <Footer />
            </div>
          );
    }
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Layout/>,
          children :[
            {
                path:"/",
                element:<Home/>
            },
            {
                path: "/gigs",
                element: <Gigs />,
              },
              {
                path: "/myGigs",
                element: <MyGigs />,
              },
              {
                path: "/orders",
                element: <Orders />,
              },
              {
                path: "/messages",
                element: <Messages />,
              },
              {
                path: "/message/:id",
                element: <Message />,
              },
              {
                path: "/add",
                element: <Add />,
              },
              {
                path: "/gig/:id",
                element: <Gig />,
              },
          ]
        },
      ]);
  return <RouterProvider router={router} />
}
export default App