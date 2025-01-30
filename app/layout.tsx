import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/main-nav"
import { Search } from "@/components/search"
import { ModeToggle } from "@/components/mode-toggle"
import { Sidebar } from "@/components/sidebar"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AirQo Data Pipeline Project",
  description: "Enhancing Air Quality Monitoring Through Advanced Technologies",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center">
                <MainNav />
                <div className="ml-auto flex items-center space-x-4">
                  <Search />
                  <ModeToggle />
                </div>
              </div>
            </header>
            <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
              <Sidebar className="hidden md:block" />
              <main className="relative py-6 lg:gap-10 lg:py-8">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'