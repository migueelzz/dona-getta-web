'use client';

import { formatPrice } from "@/utils/formatPrice";
import { truncate } from "@/utils/truncate";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
    data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({data}) => {
    const productRating = data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) / data.reviews.length

    const router = useRouter();

    return ( 
        <div
            onClick={() => router.push(`/product/${data.id}`)} 
            className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-sm p-2 text-zinc-950 text-center text-sm"
            >
            <div className="flex flex-col items-center w-full gap-1 group transition-all delay-200">
                <div className="aspect-square overflow-hidden relative w-full">
                    <Image
                        src={data.images[0].image}
                        fill
                        className="w-full h-full object-contain"
                        alt={data.name}
                    />
                    <div className="hidden group-hover:block absolute bottom-0 left-0 bg-zinc-950 hover:opacity-100 opacity-90 text-white text-xl uppercase font-medium p-4 w-full">Comprar</div>
                </div>

                <div className="font-medium text-lg mt-4">
                    {truncate(data.name)}
                </div>
                <div className="flex items-center text-zinc-500">
                    <Rating value={productRating} readOnly/>
                    ({data.reviews.length})
                </div>
                <div className="text-xl font-bold">{formatPrice(data.price)}</div>
                <div>até <span className="font-bold">6x</span> de {formatPrice(data.price / 6)} sem juros</div>
                <p>ou <span className="font-bold">{formatPrice(data.price - 5)}</span> via Pix</p>
            </div>
        </div>
    );
}
 
export default ProductCard;