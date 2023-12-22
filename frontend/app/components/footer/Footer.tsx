import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import FooterTitle from "./FooterTitle";

import { MdLocalPhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import Image from "next/image";

const Footer = () => {
    return ( 
        <footer className="text-zinc-900 text-sm mt-16 mx-auto">
            <div className="border-y border-zinc-400">
                <Container>
                    <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
                        <div className="w-full lg:w-1/4 mb-6 md:mb-0 flex flex-col gap-2">
                            <FooterTitle>
                                sobre a loja
                            </FooterTitle>
                            <p className="text-sm">
                                A Dona Getta é uma Loja especializada em Moda Feminina. 
                                Oferecemos Blusas, Calças, Macacões e mais. Confira Agora!
                            </p>
                            <div className="mt-4">
                                <Link href='#'>
                                    <Image
                                        src='/logo_dona_getta03.png'
                                        width={200}
                                        height={200}
                                        alt='Logo' 
                                    />
                                </Link>
                            </div>
                        </div>
                        

                        <FooterList>
                            <FooterTitle>
                                institucional
                            </FooterTitle>
                            <Link href='#'>Fale Conosco</Link>
                            <Link href='#'>Quem é Dona Getta?</Link>
                            <Link href='#'>Troca e Devolução</Link>
                            <Link href='#'>Política de Privacidade</Link>
                            <Link href='#'>Termos de Uso</Link>
                        </FooterList>

                        <FooterList>
                            <FooterTitle>
                                contatos
                            </FooterTitle>
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
                                <p className="text-sm">E-mail: atendimentodonagetta.outlook.com</p>
                            </div>

                            <div className="flex flex-col gap-2 mt-4">
                                <FooterTitle>
                                    acompanhe a gente
                                </FooterTitle>

                                <div className="flex items-center gap-2 my-2 text-colors-gold-dark">
                                    <Link className="cursor-pointer" href='#'>
                                        <FaInstagram size={25}/>
                                    </Link>
                                    <Link className="cursor-pointer" href='#'>
                                        <FaFacebook size={25}/>
                                    </Link>

                                </div>
                            </div>
                        </FooterList>

                        <FooterList>
                            <FooterTitle>
                                horários de atendimento
                            </FooterTitle>
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
                    
                </Container>

            </div>

            <div className="w-full text-zinc-950 text-sm font-light py-2">
                <Container>
                    <div className="flex justify-between items-center">
                        <div>
                            <p>Suzana Vieira Lemes - Rua Rosaria Mena Barnet, 560 - Lins SP - CNPJ: 12.123.123/0001-02</p>
                            <p>&copy; Todos os direitos reservados. {new Date().getFullYear()}</p>
                        </div>
                        <p className="text-zinc-950">Desenvolvido por 
                            <Link className="underline" href='https://github.com/migueelzz' target="_blank"> Miguel Lemes</Link>
                        </p>
                    </div>
                </Container>
            </div>

        </footer>
    );
}
 
export default Footer;