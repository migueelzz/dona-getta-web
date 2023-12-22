'use client'

import { CartProductType, SelectedImgType } from "@/app/product/[productId]/ProductDetails";
import Image from "next/image";

interface ProductImageProps {
    cartProduct: CartProductType,
    product: any,
    handleColorSelect: (value: SelectedImgType) => void
}

const ProductImage: React.FC<ProductImageProps> = ({
    cartProduct,
    product,
    handleColorSelect
}) => {
    return ( 
        <div className="grid grid-rows-1 gap-2">
            <div className="relative aspect-square">
                <Image
                    src={cartProduct.selectedImg.image}
                    className="w-full h-full object-contain"
                    alt={cartProduct.name}
                    fill
                />
            </div>
            <div className="flex items-center justify-center gap-2 cursor-pointer">
                {product.images.map((image: SelectedImgType) => {
                    return (
                        <div 
                        key={image.color} 
                        onClick={() => handleColorSelect(image)} 
                        className={`relative w-[80%] 
                            aspect-square
                            border-colors-gold
                            ${cartProduct.selectedImg.color === image.color ? 'border-[1.5px]' : 'border-none'} 
                        `}>
                           <Image className="object-contain" src={image.image} alt={image.color} fill /> 
                        </div>
                    )
                })}
            </div>
            
        </div>
    );
}
 
export default ProductImage;