import Link from "next/link";
import Container from "../Container";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiShoppingBag } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoWalletOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { GoMail } from "react-icons/go";

const Navbar = () => {
    return (
        <div> 
            <div className="bg-zinc-950 text-zinc-200 text-xs p-4">
                <Container>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <LiaShippingFastSolid size={20} />
                            FRETE GRÁTIS para o SUDESTE acima de R$300
                        </div>
                        <div className="flex items-center gap-2">
                            <LiaShippingFastSolid size={20} />
                            Demais regiões FRETE GRÁTIS acima de R$500
                        </div>
                        <div className="flex items-center gap-2">
                            <IoWalletOutline size={20} />
                            Parcele em até 12x ou 6x sem juros no cartão
                        </div>
                    </div>
                </Container>
            </div>
            <div className="sticky top-0 w-full bg-white z-30 shadow-lg">
                <div className="py-4 max-w-[1280px] mx-auto">
                    <Container>
                        <div className="flex justify-between items-center text-colors-gold-dark text-xs mb-8">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <FaWhatsapp size={16} />
                                    Whatsapp: (14) 99106-8858
                                </div>
                                <div className="flex items-center gap-2">
                                    <GoMail size={16} />
                                    atendimentodonagetta.outlook.com
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="mx-6">
                                    Trocas e Devoluções
                                </div>
                                <div className="flex items-center gap-4">
                                    <FaInstagram size={16} />
                                    <FaFacebook size={16} />
                                </div>
                            </div>
                        </div>
                    </Container>
                    <Container>
                        <div className="flex items-center justify-between gap-3 md:gap-0">
                            <Link href="/">
                                <Image 
                                    src='/logo_dona_getta.png'
                                    width={300}
                                    height={350}
                                    alt="Dona Getta"
                                />
                            </Link>

                            <div className="hidden md:block text-sm uppercase w-[40%]">
                                <div className="flex items-end justify-between gap-2 p-3 border-b border-zinc-950">
                                    <input className="w-full outline-none placeholder:text-zinc-700" type="text" placeholder="O que você procura?" />
                                    <div className="text-zinc-700 ml-6">
                                        <IoSearchOutline size={20} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-8 md:gap-12">
                                <div className="cursor-pointer">
                                    <FiShoppingBag size={25} />
                                </div>
                                <div className="cursor-pointer">
                                    <FaRegUserCircle size={25} />
                                </div>
                                <div className="lg:hidden cursor-pointer">
                                    <GiHamburgerMenu size={25} />
                                </div>
                            </div>
                        </div>
                        <div className="text-xs uppercase font-medium text-zinc-950">
                            <div className="w-full my-6 mx-auto">
                                <div className="grid grid-cols-10 text-center">
                                    <div className="relative group">
                                        <Link href='#'>Roupas</Link>
                                        <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-zinc-950 group-hover:w-1/2 transition-all duration-500 delay-150"></span>
                                        <span className="absolute -bottom-2 right-1/2 w-0 h-[2px] bg-zinc-950 group-hover:w-1/2 transition-all duration-500 delay-150"></span>
                                    </div>
                                    <div className="relative group">
                                        <Link href='#'>Em Alta</Link>
                                        <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-zinc-950 group-hover:w-1/2 transition-all duration-500 delay-150"></span>
                                        <span className="absolute -bottom-2 right-1/2 w-0 h-[2px] bg-zinc-950 group-hover:w-1/2 transition-all duration-500 delay-150"></span>
                                    </div>
                                    <div className="relative group">
                                        <Link href='#'>Novidades</Link>
                                        <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-zinc-950 group-hover:w-1/2 transition-all duration-500 delay-150"></span>
                                        <span className="absolute -bottom-2 right-1/2 w-0 h-[2px] bg-zinc-950 group-hover:w-1/2 transition-all duration-500 delay-150"></span>
                                    </div>
                                    <div className="relative group">
                                        <Link href='#'>Acessórios</Link>
                                        <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-zinc-950 group-hover:w-1/2 transition-all duration-500 delay-150"></span>
                                        <span className="absolute -bottom-2 right-1/2 w-0 h-[2px] bg-zinc-950 group-hover:w-1/2 transition-all duration-500 delay-150"></span>
                                    </div>
                                    <div className="relative group">
                                        <Link href='#'>Kits</Link>
                                        <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-zinc-950 group-hover:w-1/2 transition-all duration-500 delay-150"></span>
                                        <span className="absolute -bottom-2 right-1/2 w-0 h-[2px] bg-zinc-950 group-hover:w-1/2 transition-all duration-500 delay-150"></span>
                                    </div>

                                    <div className="relative group">
                                        <Link href='#'>Roupas</Link>
                                        <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-zinc-950 group-hover:w-1/2 transition-all duration-500 delay-150"></span>
                                        <span className="absolute -bottom-2 right-1/2 w-0 h-[2px] bg-zinc-950 group-hover:w-1/2 transition-all duration-500 delay-150"></span>
                                    </div>
                                    <div className="relative group">
                                        <Link href='#'>Em Alta</Link>
                                        <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-zinc-950 group-hover:w-1/2 transition-all duration-500 delay-150"></span>
                                        <span className="absolute -bottom-2 right-1/2 w-0 h-[2px] bg-zinc-950 group-hover:w-1/2 transition-all duration-500 delay-150"></span>
                                    </div>
                                    <div className="relative group">
                                        <Link href='#'>Roupas</Link>
                                        <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-zinc-950 group-hover:w-1/2 transition-all duration-500 delay-150"></span>
                                        <span className="absolute -bottom-2 right-1/2 w-0 h-[2px] bg-zinc-950 group-hover:w-1/2 transition-all duration-500 delay-150"></span>
                                    </div>
                                    <div className="relative group">
                                        <Link href='#'>Em Alta</Link>
                                        <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-zinc-950 group-hover:w-1/2 transition-all duration-500 delay-150"></span>
                                        <span className="absolute -bottom-2 right-1/2 w-0 h-[2px] bg-zinc-950 group-hover:w-1/2 transition-all duration-500 delay-150"></span>
                                    </div>
                                    <div className="relative group">
                                        <Link href='#'>Roupas</Link>
                                        <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-zinc-950 group-hover:w-1/2 transition-all duration-500 delay-150"></span>
                                        <span className="absolute -bottom-2 right-1/2 w-0 h-[2px] bg-zinc-950 group-hover:w-1/2 transition-all duration-500 delay-150"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="w-3/4 mt-8 mx-auto">
                                <div className="grid grid-cols-7 text-center">
                                    <div className="relative group">
                                        <Link href='#'>Roupas</Link>
                                        <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-zinc-950 group-hover:w-1/2 transition-all duration-500 delay-150"></span>
                                        <span className="absolute -bottom-2 right-1/2 w-0 h-[2px] bg-zinc-950 group-hover:w-1/2 transition-all duration-500 delay-150"></span>
                                    </div>
                                    <div className="relative group">
                                        <Link href='#'>Em Alta</Link>
                                        <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-zinc-950 group-hover:w-1/2 transition-all duration-500 delay-150"></span>
                                        <span className="absolute -bottom-2 right-1/2 w-0 h-[2px] bg-zinc-950 group-hover:w-1/2 transition-all duration-500 delay-150"></span>
                                    </div>
                                    <div className="relative group">
                                        <Link href='#'>Novidades</Link>
                                        <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-zinc-950 group-hover:w-1/2 transition-all duration-500 delay-150"></span>
                                        <span className="absolute -bottom-2 right-1/2 w-0 h-[2px] bg-zinc-950 group-hover:w-1/2 transition-all duration-500 delay-150"></span>
                                    </div>
                                    <div className="relative group">
                                        <Link href='#'>Acessórios</Link>
                                        <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-zinc-950 group-hover:w-1/2 transition-all duration-500 delay-150"></span>
                                        <span className="absolute -bottom-2 right-1/2 w-0 h-[2px] bg-zinc-950 group-hover:w-1/2 transition-all duration-500 delay-150"></span>
                                    </div>
                                    <div className="relative group">
                                        <Link href='#'>Kits</Link>
                                        <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-zinc-950 group-hover:w-1/2 transition-all duration-500 delay-150"></span>
                                        <span className="absolute -bottom-2 right-1/2 w-0 h-[2px] bg-zinc-950 group-hover:w-1/2 transition-all duration-500 delay-150"></span>
                                    </div>
                                    <div className="relative group">
                                        <Link href='#'>Acessórios</Link>
                                        <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-zinc-950 group-hover:w-1/2 transition-all duration-500 delay-150"></span>
                                        <span className="absolute -bottom-2 right-1/2 w-0 h-[2px] bg-zinc-950 group-hover:w-1/2 transition-all duration-500 delay-150"></span>
                                    </div>
                                    <div className="relative group">
                                        <Link href='#'>Kits</Link>
                                        <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-zinc-950 group-hover:w-1/2 transition-all duration-500 delay-150"></span>
                                        <span className="absolute -bottom-2 right-1/2 w-0 h-[2px] bg-zinc-950 group-hover:w-1/2 transition-all duration-500 delay-150"></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Container>
                </div>
            </div>
        </div> 
    );
}
 
export default Navbar;