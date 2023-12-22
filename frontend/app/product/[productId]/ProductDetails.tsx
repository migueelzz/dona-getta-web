'use client'

import Button from "@/app/components/Button";
import ProductImage from "@/app/components/products/ProductImage";
import SetColor from "@/app/components/products/SetColor";
import SetQuantity from "@/app/components/products/SetQuantity";
import SetSize from "@/app/components/products/SetSize";
import { formatPrice } from "@/utils/formatPrice";
import { Rating } from "@mui/material";
import { useCallback, useState } from "react";

interface ProductDetailsProps {
    product: any;
}

export type CartProductType = {
    id: string,
    name: string,
    description: string,
    category: string,
    brand: string,
    selectedImg: SelectedImgType,
    quantity: number,
    price: number,
}

export type SelectedImgType = {
    color: string,
    colorCode: string,
    image: string,
    sizes: SelectedSizeType[]
}

export type SelectedSizeType = {
    size: string,
    quantity: number
}

const Horizontal = () => {
    return <hr className="my-2" />
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {

    const [cartProduct, setCartProduct] = useState<CartProductType>({
        id: product.id,
        name: product.name,
        description: product.description,
        category: product.category,
        brand: product.brand,
        selectedImg: {...product.images[0]},
        quantity: 1,
        price: product.price,
    })

    console.log(cartProduct)

    const productRating = product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) / product.reviews.length

    const handleColorSelect = useCallback((value: SelectedImgType) => {
        setCartProduct((prev) => {
            return {...prev, selectedImg: value}
        })
    }, [cartProduct.selectedImg])

    const handleQtyIncrease = useCallback(() => {
        if(cartProduct.quantity === 20) {
            return;
        }

        setCartProduct((prev) => {
            return {...prev, quantity: ++prev.quantity}
        })
    }, [cartProduct])

    const handleQtyDecrease = useCallback(() => {
        if(cartProduct.quantity === 1) {
            return;
        }

        setCartProduct((prev) => {
            return {...prev, quantity: --prev.quantity}
        })
    }, [cartProduct])

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
                <div className="block md:hidden">
                    <h2 className="text-3xl font-semibold uppercase text-zinc-950">{product.name}</h2>
                    <div className="flex items-center justify-between mt-4 text-xs">
                        <div>
                            <span className="font-semibold">Categoria:</span> {product.category}
                        </div>

                        <div>
                            <span className="font-semibold">Marca:</span> {product.brand}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Rating value={productRating} readOnly/>
                        <div className="text-xs text-zinc-400">({product.reviews.length})</div>
                    </div>
                </div>
                <ProductImage
                    cartProduct={cartProduct}
                    product={product}
                    handleColorSelect={handleColorSelect}
                />
                <div className="flex flex-col gap-1 text-zinc-700 text-sm">
                    <div className="hidden md:block">
                        <h2 className="text-3xl font-semibold uppercase text-zinc-950">{product.name}</h2>
                        <div className="flex items-center justify-between mt-4 text-xs">
                            <div>
                                <span className="font-semibold">Categoria:</span> {product.category}
                            </div>

                            <div>
                                <span className="font-semibold">Marca:</span> {product.brand}
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Rating value={productRating} readOnly/>
                            <div className="text-xs text-zinc-400">({product.reviews.length})</div>
                        </div>
                        <Horizontal />
                    </div>
                    <div>
                        <SetColor 
                            cartProduct={cartProduct}
                            images={product.images}
                            handColorSelect={handleColorSelect}
                        />
                    </div>
                    <div className="mt-4">
                        <SetSize 
                            cartProduct={cartProduct}
                            images={product.images}
                            handColorSelect={handleColorSelect}
                        />
                    </div>
                    <Horizontal />
                    <div className="my-3">
                        <h2 className="text-3xl font-semibold">{formatPrice(product.price)}</h2>
                        <div className="mt-2">Parcele até <span className="font-bold">6x</span> de {formatPrice(product.price / 6)} sem juros</div>
                        <div className="">ou <span className="font-bold">{formatPrice(product.price - 10.10)}</span> via</div>
                    </div>
                    <Horizontal />
                    {/* <SetQuantity 
                        cartProduct={cartProduct}
                        handleQtyDecrease={handleQtyDecrease}
                        handleQtyIncrease={handleQtyIncrease}
                    /> */}
                    <div className="mt-4">
                        <Button 
                            label="Comprar"
                            onClick={() => {}}
                        />
                    </div>
                    <div className="w-full">
                        <p className="text-sm text-zinc-400 p-2">Calcule o prazo e valor do frete deste produto</p>
                        <div className="flex items-center gap-2">
                            <input className="w-full outline-none p-4 border border-zinc-300 placeholder:text-zinc-800" type="text" placeholder="CEP" />
                            <button className="w-2/4 p-4 bg-zinc-800 hover:bg-zinc-900 uppercase text-white" type="button">Cacular</button>
                        </div>
                    </div>
                    <h2 className="font-semibold text-lg mt-3">Descrição do produto</h2>
                    <Horizontal />
                    <div className="text-justify">
                        {product.description}
                    </div>
                </div>
            </div>

            <div className="border border-zinc-400 p-8 mt-12">
                <h2 className="font-semibold">Avaliações</h2>
                <div className="text-justify text-sm my-4">
                    Miguel Lemes: {product.description}
                </div>
            </div>
        </div>
    );
}
 
export default ProductDetails;