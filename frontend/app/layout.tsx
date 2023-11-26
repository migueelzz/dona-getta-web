import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Navbar from './components/nav/Navbar'
import Footer from './components/footer/Footer'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '700'] })

export const metadata: Metadata = {
  title: 'Dona Getta | Loja de Moda Feminina',
  description: 'Dona Getta é uma loja virtual de moda feminina, blusas, conjuntos, camisetas, vestidos femininos, acessórios femininos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${montserrat.className} text-zinc-700`}>
        <div className='flex flex-col min-h-screen'>
          <Navbar />
          <main className='flex-grow'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
