export default function AboutPlant(props) {
    return (
        <>
            <div className="plantPhoto">{props.photo}</div>
            <div className="plantInfo">
                <div className="plantDescription"></div>
                <div className="plantStats">
                    <div className="calories"></div>
                    <div className="fiber"></div>
                    <div className="fats"></div>
                    <div className="sodium"></div>
                </div>
            </div>
        </>
    )
}