import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WalletContextProvider from '@/context/WalletContextProvider';
import { Providers } from "@/app/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChainWork",
  description: "Decentralized Freelancing Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" style={{scrollBehavior:'smooth'}}>
                <Providers>
          <WalletContextProvider>
      <body className={inter.className}>
        {children}
        </body>
    </WalletContextProvider>
    </Providers>
    </html>
  );
}
