import Homepage from "./Homepage";
import Contact from "./Contact";
import Cart from "./Cart";
import CommandWindow from "./CommandWindow";
import Products from "./Products";
import About from "./About";
import Layout from "./Layout";
import AboutPlant from "./AboutPLant";

const my_routes = [
{
    path: "/",
    element:<Layout />,
    children: [    
        {
            path: "/",
            element: <Homepage />
        },
        {
            path: "/contact",
            element:<Contact />
        },
        {
            path: "/cart",
            element:<Cart />
        },
        {
            path: "/command",
            element: <CommandWindow />
        },
        {
            path: "/products",
            element: <Products/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/about/:name",
            element: <AboutPlant />
        }
    ]
}
]


export default my_routes