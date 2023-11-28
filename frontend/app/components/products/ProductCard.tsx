'use client';

import { formatPrice } from "@/utils/formatPrice";
import { truncate } from "@/utils/truncate";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaCartPlus } from "react-icons/fa";


interface ProductCardProps {
    data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({data}) => {
    const productRating = data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) / data.reviews.length

    const router = useRouter();

    return ( 
        <div
            onClick={() => router.push(`/product/${data.id}`)}
            className="col-span-1 cursor-pointer border-[1.2px] hover:-translate-y-1 transition duration-500 border-slate-200 bg-slate-50-sm p-2 text-zinc-950 text-center text-sm"
            >
            <div className="flex flex-col items-center w-full gap-1">
                <div className="aspect-square overflow-hidden relative w-full">
                    <Image
                        src={data.images[0].image}
                        fill
                        className="w-full h-full object-contain"
                        alt={data.name}
                    />
                    
                </div>

                <div className="font-medium my-4">
                    {truncate(data.name)}
                </div>
                <div className="flex items-center text-zinc-500">
                    <Rating value={productRating} readOnly/>
                    ({data.reviews.length})
                </div>
                <div className="text-xl font-bold">{formatPrice(data.price)}</div>
                <div>até <span className="font-bold">6x</span> de {formatPrice(data.price / 6)} sem juros</div>
                <div className="text-md uppercase font-medium gap-1 mt-3 w-full">
                    <div 
                        className="border border-zinc-950 hover:bg-zinc-900 hover:text-white duration-500 p-2 w-full"
                    >
                        Comprar
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ProductCard;