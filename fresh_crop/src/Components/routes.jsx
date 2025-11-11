import Homepage from "./Homepage";
import Contact from "./Contact";
import Cart from "./Cart";
import CommandWindow from "./CommandWindow";

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
    }

]

export default my_routes