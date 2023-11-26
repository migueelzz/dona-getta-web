import Link from "next/link";
import Container from "../Container";
import Image from "next/image";

const Navbar = () => {
    return ( 
        <div className="sticky top-0 w-ful bg-white z-30 shadow ">
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
                            <div>Carrinho</div>
                            <div>Menu</div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}
 
export default Navbar;