import type { Metadata } from "next";
import { Inter, Poppins, Raleway } from "next/font/google";
import "../../styles/globals.scss";
import Navbar from "../components/Navbar";
import { Providers } from "../providers";
import Footer from "../components/Footer";
import BottomSection from "../components/BottomSection";

export const metadata: Metadata = {
  title: "LENS",
  description: "Practice application",
};

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${raleway.variable} ${poppins.variable}`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <BottomSection />
        </Providers>
      </body>
    </html>
  );
}
