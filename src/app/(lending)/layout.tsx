import Header from '@/widgets/header/ui/Header'
import { Footer } from '@/widgets/footer'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
