import {createBrowserRouter,RouterProvider,Route, Outlet,} from "react-router-dom";


import AuthForms from "./pages/Authform.js";
import HomePage from "./pages/Homepage.js";
import Provider from "./pages/Provider.js";
import Reserve from "./pages/Reserve.js";
import Resale from "./pages/addticketresale.js";
import TicketCard from "./pages/myticket.js"



const router = createBrowserRouter([

 
  {
    path: "/",
    element: <AuthForms/>,
  },
  {
    path: "/home",
    element: <HomePage/>,
  },
  {
    path: "/provider",
    element: <Provider/>,
  },
  {
    path: "/reserve",
    element: <Reserve/>,
  },
  {
    path: "/resale",
    element: <Resale/>,
  },
  {
    path: "/ticket",
    element: <TicketCard/>,
  },
  

 
  
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}



export default App;
