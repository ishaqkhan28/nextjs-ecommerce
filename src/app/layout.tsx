import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../style/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TopLabel from "@/components/toplabel";
import Provides from "./Provides";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shop Mart - Your One-Stop Shopping Destination",
  description: "Shop Mart offers a wide variety of products at unbeatable prices. From groceries and daily essentials to electronics, fashion, and home goods, we have everything you need under one roof. Enjoy convenient shopping, great deals, and fast delivery. Shop with us for quality, affordability, and customer satisfaction.",
  keywords:"shopping,male,female, fashion, home goods, daily essentials, deals, delivery, quality products, Shop Mart"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-myWhite`}>   
          <TopLabel />
      <div className="max-w-[90%] mx-auto">
        <Provides>
        <Navbar/>
        {children}
        <Footer/>
        </Provides>
        </div>
        </body>
    </html>
  );
}
