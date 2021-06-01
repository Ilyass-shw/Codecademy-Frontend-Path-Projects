import React from 'react'

interface productViewImgSliderProps {
    productId: number | undefined;
}
const ProductViewImgSlider:React.FC<productViewImgSliderProps> = ({productId}) => {
    return (
        <div>
            <p>wiyéééé {productId}</p>
        </div>
    )
}

export default ProductViewImgSlider
