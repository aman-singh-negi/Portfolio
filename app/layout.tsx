import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CommandPalette } from "@/components/navigation/CommandPalette";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amansinghnegi.vercel.app"),
  title: "Aman Singh Negi - Software Engineer",
  description: "Engineering ideas into working software. Fourth-year Computer Science student building products across software engineering, AI, and the web.",
  keywords: ["Aman Singh Negi", "Software Engineer", "Full Stack Developer", "AI", "Machine Learning", "Computer Science", "Portfolio"],
  authors: [{ name: "Aman Singh Negi" }],
  creator: "Aman Singh Negi",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Aman Singh Negi - Software Engineer",
    description: "Engineering ideas into working software. Fourth-year Computer Science student building products across software engineering, AI, and the web.",
    type: "website",
    url: "https://amansinghnegi.vercel.app",
    siteName: "Aman Singh Negi Portfolio",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Singh Negi - Software Engineer",
    description: "Engineering ideas into working software. Fourth-year Computer Science student building products across software engineering, AI, and the web.",
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased bg-[#F5F5F5] text-[#111111]">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <ScrollProgress />
        <Navbar />
        <CommandPalette />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
