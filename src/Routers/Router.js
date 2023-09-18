import { createBrowserRouter } from "react-router-dom";
import Main from "../main/Main";
import Home from "../Components/page/Home/Home/Home";
import OneProducts from "../Components/page/Home/OneProducts/OneProducts";
import Onefeatureds from "../Components/Onefeatureds/Onefeatureds";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path : '/featured/:id',
                element : <Onefeatureds/>,
                loader : ({params})=> fetch(`http://localhost:5000/featureds/${params.id}`)
            },
            {
                path: '/product/:id',
                element : <OneProducts></OneProducts>,
                loader : ({params})=>fetch(`http://localhost:5000/allProduct/${params.id}`)
            }
        ]
    }
])