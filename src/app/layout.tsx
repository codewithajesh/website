import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider"
import Navbar from "@/components/Navigation/NavBar";
import FooterArea from "@/components/Footer/FooterArea";
import TypewriterSmoothDesign from "@/components/Footer/TypewriterSmoothDesign";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AJ-Portfolio",
  description: "Portfolio Website",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["public/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <TypewriterSmoothDesign />
          <FooterArea />
        </ThemeProvider>
      </body>
    </html>
  );
}
