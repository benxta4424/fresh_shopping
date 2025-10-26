import Homepage from "./Homepage";
import Contact from "./Contact";
import Cart from "./Cart";

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
    }

]

export default my_routes