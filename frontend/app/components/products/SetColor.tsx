'use client'

import { CartProductType, SelectedImgType } from "@/app/product/[productId]/ProductDetails";

interface SetColorProps {
    images: SelectedImgType[],
    cartProduct: CartProductType,
    handColorSelect: (value: SelectedImgType) => void
}

const SetColor: React.FC<SetColorProps> = ({images, cartProduct, handColorSelect}) => {
    return ( 
        <div>
            <span className="font-semibold">Cor:</span>
            <div className="flex gap-4 items-center">
                <div className="flex gap-1">
                    {images.map((image, index) => {
                        return (
                            <div 
                                key={image.color}
                                onClick={() => handColorSelect(image)}
                                className={`h-7 w-7 rounded-full border-colors-gold-dark flex items-center justify-center ${cartProduct.selectedImg.color === image.color ? 'border-[1.5px]' : 'border-none'}`}
                            >
                                <div style={{background: image.colorCode}} className="h-5 w-5 rounded-full border-[1.2px] border-zinc-500 cursor-pointer"></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
     );
}
 
export default SetColor;