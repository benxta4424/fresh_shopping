import Homepage from "./Homepage"
import { Link } from "react-router-dom"

export default function CommandWindow() {
    const reloadPage = () => {
        window.reload()
    }

    return(
        <>
            <div className="commandContainer">
                <div className="contactTitle">Thank you for choosing us!</div>
                <div className="contactSubTitle">If there are any concerns or problems feel free to reach out and we'll take care of it!</div>
                <Link to={"/"}><button className="goBack">main</button></Link>
            </div>
        </>
    )
}