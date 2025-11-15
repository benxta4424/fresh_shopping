import { Link } from "react-router-dom"
import clip from "./imgs/clip_legume.mp4"

export default function About() {
    return (
        <>
            <div className="aboutContainer">
                <Link to={"/"} className="goBack">Back</Link>
                <div className="aboutUs">
                    <div className="titluAbout">About US</div>
                    <div className="descriereAbout">Suntem PODPIC și noi suntem fermierii! Nu există intermediari. Primești legume proaspete direct din grădina noastră, de la pământ la masa ta. Mai proaspăt și mai cinstit de atât nu se poate.</div>
                    <div className="linkuriAbout"></div>
                </div>

                <div className="clipContainer" >
                    <video src="src\Components\imgs\clip_legume.mp4" autoPlay loop muted className="clip" height={150} width={240}></video>
                </div>

            </div>
        </>
    )
}