import React from 'react';

import { CartProductType, SelectedImgType } from "@/app/product/[productId]/ProductDetails";


interface SetSizeProps {
    images: SelectedImgType[];
    cartProduct: CartProductType;
    handColorSelect: (value: SelectedImgType) => void;
  }
  
  const SetSize: React.FC<SetSizeProps> = ({ images, cartProduct, handColorSelect }) => {
    // Find the selected image
    const selectedImage = images.find((image) => image.color === cartProduct.selectedImg.color);
  
    return (
      <div>
        <span className="font-semibold">Tamanho:</span>
        <div className="flex gap-4 items-center">
          <div className="flex gap-1">
            {selectedImage &&
              selectedImage.sizes.map((size, index) => (
                <div
                  key={index}
                  className={`h-7 w-7 flex items-center justify-center cursor-pointer ${
                    size.quantity > 0
                      ? cartProduct.selectedImg.sizes.length > 0 &&
                        cartProduct.selectedImg.sizes[0].size === size.size
                        ? 'border-colors-gold-dark border-[1.5px]'
                        : 'border-none'
                      : 'border-[1.5px] line-through text-gray-500' // Add a line-through and gray color for unavailable sizes
                  }`}
                  onClick={() => {
                    if (size.quantity > 0) {
                      handColorSelect({ ...selectedImage, sizes: [size] });
                    }
                  }}
                >
                  <div>{size.size}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default SetSize;
