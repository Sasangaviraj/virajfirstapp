import MainLayout from "../Layout/MainLayout"
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import User from "../Pages/User/User"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import UserProtected from "./UserProtected"
import Category from "../Pages/Category/Category"
import CategoryItems from "../Pages/CategoryItems/CategoryItems"
import ItemPage from "../Pages/ItemPage/ItemPage"


const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout />,
        children:[
            {
                index:true,
                element:<Home />
            },

            {
                path:'category',
               children:[
                    
                {
                    index:true,
                    element:<Category />,
                },
                 
                {
                    path:":categoryId",
                    children:[
                        {
                            index:true,
                            element:<CategoryItems />,
                        },
                        {
                            path:':itemId',
                            element:<ItemPage />,
                        }
                    ]
                },
               ],
            },
                  

                   

              
        
            {
                element:<UserProtected/>,
                children:[
                    {
                        path:'user',
                        element:<User/>
                    }
                ]
            }
        ]
    },
    {
        path:'/profile',
        element:<Login/>
    }
])


const AppRouter = () => {
  return (
    <RouterProvider router={ router}/>
  )
   
}

export default AppRouter
