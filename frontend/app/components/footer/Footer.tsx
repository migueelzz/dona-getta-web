import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";

import { MdLocalPhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

const Footer = () => {
    return ( 
        <footer className="bg-zinc-950 text-zinc-300 text-sm font-light mt-16">
            <Container>
                <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
                    <div className="w-full lg:w-1/4 mb-6 md:mb-0 flex flex-col gap-2">
                        <h3 className="uppercase font-medium">sobre a loja</h3>
                        <div className="h-1 w-12 bg-white"></div>
                        <p className="text-sm">A Dona Getta é uma Loja especializada em Moda Feminina. Oferecemos Blusas, Calças, Macacões e mais. Confira Agora!</p>
                    </div>

                    <FooterList>
                        <h3 className="uppercase font-medium">institucional</h3>
                        <div className="h-1 w-12 bg-white"></div>
                        <Link href='#'>Fale Conosco</Link>
                        <Link href='#'>Quem é Dona Getta?</Link>
                        <Link href='#'>Troca e Devolução</Link>
                        <Link href='#'>Política de Privacidade</Link>
                        <Link href='#'>Termos de Uso</Link>
                    </FooterList>

                    <FooterList>
                        <h3 className="uppercase font-medium">contato</h3>
                        <div className="h-1 w-12 bg-white"></div>
                        <div className="flex items-center gap-2">
                            <MdLocalPhone />
                            <p className="text-sm">Telefone: (14) 99106-8858</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaWhatsapp />
                            <p className="text-sm">Whatsapp: (14) 99106-8858</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <GoMail />
                            <p className="text-sm">E-mail: atendimento@outlook.com</p>
                        </div>
                    </FooterList>

                    <FooterList>
                        <h3 className="uppercase font-medium">horários de atendimento</h3>
                        <div className="h-1 w-12 bg-white"></div>
                        <div className="flex items-center gap-2">
                            <MdOutlineAccessTimeFilled />
                            <p className="text-sm">Segunda a Sexta 8:30 as 18:00</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdOutlineAccessTime />
                            <p className="text-sm">Sábado e Feriados 9:00 as 14:00</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCheckCircle />
                            <p className="text-sm">Loja Online aberta 24 Horas</p>
                        </div>
                    </FooterList>
                    
                </div>
                
                <div className="text-zinc-500 text-xs py-4 flex justify-between items-center">
                    <div>
                        <p>Suzana Vieira Lemes - Rua Rosaria Mena Barnet, 560 - Lins SP - CNPJ: 12.123.123/0001-02</p>
                        <p>&copy; Todos os direitos reservados. {new Date().getFullYear()}</p>
                    </div>
                    <p className="text-zinc-600">Desenvolvido por Miguel Lemes</p>
                </div>
            </Container>

        </footer>
    );
}
 
export default Footer;