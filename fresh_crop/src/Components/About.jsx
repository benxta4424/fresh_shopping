import { Link } from "react-router-dom"
import sunlogo from "./imgs/logosoare.jpeg"
import houseLogo from "./imgs/houseLogo.jpg"
import tractor from "./imgs/tractor.png"
import legumita from "./imgs/legumita.png"
import camion from "./imgs/camion.png"

export default function About() {
    return (
        <>
            <div className="aboutContainer">
                <div className="aboutUs">
                    <div className="titluAbout">Who are we?</div>
                    <div className="descriereAbout">
                        <div className="descriereAboutOne">
                            <p>Totul începe cu pământul. Misiunea noastră este simplă: să aducem gustul autentic al legumelor proaspăt culese direct pe masa ta. Credem într-o conexiune reală între om și natură, într-o alimentație curată, plină de nutrienți și vitalitate.Ne dedicăm să selectăm cele mai bune produse, cultivate cu grijă și respect pentru mediul înconjurător. Pentru noi, calitatea nu este un lux, ci un standard. Vrem să redescoperi bucuria legumelor care au gust... de legume.</p>
                            <img src={sunlogo} alt="" height={40} width={40} className="logosAbout"/>
                        </div>
                        
                        <div className="descriereAboutOne">
                            <p>Suntem Fermierii și povestea noastră este una de dragoste pentru agricultură. Ceea ce a început ca o mică grădină de familie s-a transformat într-o dorință de a împărtăși roadele pământului cu întreaga comunitate.Colaborăm direct cu fermieri locali și producători pasionați, care împărtășesc viziunea noastră. Cunoaștem fiecare partener și procesul său. Prin eliminarea intermediarilor, ne asigurăm că primești produse la prospețime maximă, sprijinind în același timp economia locală.</p>
                            <img src={houseLogo} alt=""  height={40} width={40} className="logosAbout" />
                        </div>
                    </div>
                    <div className="linkuriAbout">

                    </div>
                </div>

                <div className="proudOfContainer">
                    <div className="proudOfTitle">Things we are proud of</div>
                    
                    <div className="proudOfAchievements">
                        <div className="logoAndDescription">
                            <img src={tractor} width={100} height={100} alt="" className="aboutImage" />
                            <div className="aboutTitle">Direct de la fermieri</div>
                        </div>

                        <div className="logoAndDescription">
                            <img src={legumita} alt="" width={100} height={100} className="aboutImage"/>
                            <div className="aboutTitle">100% Natural</div>
                        </div>

                        <div className="logoAndDescription">
                            <img src={camion} alt="" width={100} height={100} className="aboutImage"/>
                            <div className="aboutTitle">Livrare Rapidă</div>
                        </div>
                    </div>
                </div>

                <div className="clipContainer" >
                    <video src="src\Components\imgs\clip_legume.mp4" autoPlay loop muted className="clip" height={150} width={240}></video>
                </div>

            </div>
        </>
    )
}