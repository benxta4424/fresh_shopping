import Homepage from "./Homepage";
import Contact from "./Contact";
import Cart from "./Cart";
import CommandWindow from "./CommandWindow";
import Products from "./Products";
import About from "./About";

const my_routes = [
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
    }

]

export default my_routes