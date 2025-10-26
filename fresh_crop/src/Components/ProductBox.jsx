export default function Box(props) {
    return (
        <>
                {/* scriem cumva titlul si pretul produsului peste poza */}
                <div className="item_picture">
                    <img src={props.searchImage} alt="marar" className="boxImages" />
                    <div className="item_title">{props.imageName}</div>
                    <button className="buyingButton" onClick={props.onButtonBuy}>{props.productPrice} RON</button>
                </div>

        
        </>
    )
}