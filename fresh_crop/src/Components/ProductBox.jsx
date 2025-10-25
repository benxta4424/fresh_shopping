import { useState } from "react";

export default function Box(prop_key, imageName) {
    return (
        <>
            <div className="box_container">
                {/* scriem cumva titlul si pretul produsului peste poza */}
                <div className="item_picture">
                    <img src="src\Components\img\anna-evans-h7sIa4E5mIg-unsplash.jpg" alt="marar" key={prop_key} className={imageName} />
                    <div className="item_title">pic title</div>
                    <div className="item_price">pic price</div>
                </div>
            </div>
        
        </>
    )
}