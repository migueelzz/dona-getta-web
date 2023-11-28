import { LiaShippingFastSolid } from "react-icons/lia";
import { IoWalletOutline } from "react-icons/io5";
import { BsShieldCheck } from "react-icons/bs";
import { BsBox2 } from "react-icons/bs";

const InfoHeader = () => {
    return ( 
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 mb-24">
            <div className="flex items-center justify-center mb-6 md:mb-0">
                <LiaShippingFastSolid size={30} />
                <div className="px-4">
                    <p className="text-xl uppercase">Frete Grátis</p>
                    <p className="text-xs">Compras acima de R$300</p>
                </div>
            </div>

            <div className="flex items-center justify-center mb-6 md:mb-0">
                <IoWalletOutline size={30} />
                <div className="px-4">
                    <p className="text-xl uppercase">Parcele em até 12x</p>
                    <p className="text-xs">ou 6x sem juros no cartão</p>
                </div>
            </div>

            <div className="flex items-center justify-center mb-6 md:mb-0">
                <BsBox2 size={30} />
                <div className="px-4">
                    <p className="text-xl uppercase">Entrega Ágil</p>
                    <p className="text-xs">Em todo o Brasil</p>
                </div>
            </div>

            <div className="flex items-center justify-center mb-6 md:mb-0">
                <BsShieldCheck size={30} />
                <div className="px-4">
                    <p className="text-xl uppercase">Compra segura</p>
                    <p className="text-xs">Segurança em todo o processo!</p>
                </div>
            </div>

        </div>
     );
}
 
export default InfoHeader;