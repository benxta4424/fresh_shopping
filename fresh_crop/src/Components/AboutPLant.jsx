import spanac from "./imgs/rachel-clark-rehLLLNNP94-unsplash.jpg"

export default function AboutPlant(props) {
    return (
        // Added the wrapper div with the class
        <div className="aboutPlantContainer"> 
            <div className="plantPhoto"><img src={spanac} alt="" /></div>
            <div className="plantInfo">
                <div className="plantDescription">Short description</div>
                <div className="plantStats">
                    <div className="calories">Calories: 10g</div>
                    <div className="fiber">Fibers: 15g</div>
                    <div className="fats">Fats: 4g</div>
                    <div className="sodium">Sodium: 0g</div>
                </div>
            </div>
        </div>
    )
}