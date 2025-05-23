// src/app/layout.tsx
import './globals.css'
import { Montserrat } from 'next/font/google'
import type { Metadata } from 'next'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import ScrollToTopButton from '@/components/common/ScrollToTopButton'
import KeyboardNavigation from '@/components/layout/KeyboardNavigation'
import { ThemeProvider, DataCacheProvider } from '@/context/ThemeContext'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { DISPLAY_NAME, SITE_TITLE, SITE_DESCRIPTION } from '@/lib/constants'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export const metadata: Metadata = {
  title: `${DISPLAY_NAME} - ${SITE_TITLE}`,
  description: SITE_DESCRIPTION,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${montserrat.variable}`}>
        <ThemeProvider>
          <DataCacheProvider>
            <Navigation />
            <KeyboardNavigation>
              <main>{children}</main>
            </KeyboardNavigation>
            <Footer />
            <ScrollToTopButton />
            <SpeedInsights />
            <Analytics />
          </DataCacheProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}