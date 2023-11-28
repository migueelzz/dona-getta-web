import Link from "next/link";
import Container from "../Container";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiShoppingBag } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
    return ( 
        <div className="sticky top-0 w-full bg-white z-30 shadow-lg">
            <div className="py-4 max-w-[1280px] mx-auto">
                <Container>
                    <div className="flex items-center justify-between gap-3 md:gap-0">
                        <Link href="/">
                            <Image 
                                src='/logo_dona_getta02.png'
                                width={200}
                                height={250}
                                alt="Dona Getta"
                            />
                        </Link>
                        <div className="hidden md:block text-sm uppercase">Buscar seu look aqui...</div>
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
                </Container>
            </div>
        </div>
    );
}
 
export default Navbar;