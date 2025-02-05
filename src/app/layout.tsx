import { Header } from "../../components/header/index";
import { Poppins } from "next/font/google";

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
  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true} className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>

    // Adicionar suppressHydrationWarning={true} no body para evitar avisos de hidratação
  );
}
