"use client";

import { Header } from "../../components/header/index";
import { Poppins } from "next/font/google";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Spinner } from "../../components/spinner/spinner";
import favicon from "../../public/favicon.png";
import Head from "next/head"; // Head do next

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <html lang="pt-br">
      <Head>
        <title>PONTO3 ARQUITETURA</title>
        <link rel="icon" href={favicon.src} />
      </Head>

      <body suppressHydrationWarning={true} className={poppins.className}>
        {loading ? <Spinner /> : null}
        <Header />
        {children}
      </body>
    </html>
  );
}
