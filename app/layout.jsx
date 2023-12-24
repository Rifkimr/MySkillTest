import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { ThemeProvider } from '@/components/ThemeProvider'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MySkill',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className={inter.className} >
       <ThemeProvider attribute="class" defaultTheme="dark" >
        <Header />
         {children}
        <Footer />
      </ThemeProvider>
      </body>
    </html>
  )
}
