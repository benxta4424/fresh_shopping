import Homepage from "./Homepage"
import { Link } from "react-router-dom"

export default function CommandWindow() {
    const reloadPage = () => {
        window.location.href = "/"
    }

    return(
        <>
            <div className="commandContainer">
                <div className="contactTitle">Thank you for choosing us!</div>
                <div className="contactSubTitle">If there are any concerns or problems feel free to reach out and we'll take care of it!</div>
                <button className="goBack" onClick={() => reloadPage()}>main</button>
            </div>
        </>
    )
}