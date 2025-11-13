import { Link } from "react-router-dom"
import clip from "./imgs/clip_legume.mp4"

export default function About() {
    return (
        <>
            <div className="aboutContainer">
                <Link to={"/"} className="goBack">Back</Link>
                
                <div className="clipContainer" >
                    <video src="src\Components\imgs\clip_legume.mp4" autoPlay loop muted className="clip" width="40%" height="30%"></video>
                </div>

            </div>
        </>
    )
}