import { Link } from "react-router-dom"
import spanac from "./imgs/rachel-clark-rehLLLNNP94-unsplash.jpg"

export default function About() {
    return (
        <>
            <div className="aboutContainer">
                <Link to={"/"} className="goBack">Back</Link>
                <div className="aboutUs">
                    <div className="titluAbout">Who are we?</div>
                    <div className="descriereAbout">
                        <div className="descriereAboutOne">Totul începe cu pământul. Misiunea noastră este simplă: să aducem gustul autentic al legumelor proaspăt culese direct pe masa ta. Credem într-o conexiune reală între om și natură, într-o alimentație curată, plină de nutrienți și vitalitate.Ne dedicăm să selectăm cele mai bune produse, cultivate cu grijă și respect pentru mediul înconjurător. Pentru noi, calitatea nu este un lux, ci un standard. Vrem să redescoperi bucuria legumelor care au gust... de legume.</div>
                        <div className="descriereAboutOne">Suntem Fermierii și povestea noastră este una de dragoste pentru agricultură. Ceea ce a început ca o mică grădină de familie s-a transformat într-o dorință de a împărtăși roadele pământului cu întreaga comunitate.Colaborăm direct cu fermieri locali și producători pasionați, care împărtășesc viziunea noastră. Cunoaștem fiecare partener și procesul său. Prin eliminarea intermediarilor, ne asigurăm că primești produse la prospețime maximă, sprijinind în același timp economia locală.</div>
                    </div>
                    <div className="linkuriAbout">

                    </div>
                </div>

                <div className="clipContainer" >
                    <video src="src\Components\imgs\clip_legume.mp4" autoPlay loop muted className="clip" height={150} width={240}></video>
                </div>

            </div>
        </>
    )
}