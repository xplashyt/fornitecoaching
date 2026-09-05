import type { Metadata } from "next";
import { Bowlby_One_SC, Public_Sans } from "next/font/google";
import "./globals.css";

const bowlby = Bowlby_One_SC({
  variable: "--font-bowlby",
  subsets: ["latin"],
  weight: "400",
});

const publicSans = Public_Sans({
  variable: "--font-public",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zonaclara.co"),
  title: "Zona Clara | Coaching independiente de Fortnite",
  description: "Coaching de Fortnite para aterrizaje, recursos, rotaciones, peleas y cierre de partida.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Zona Clara | Cae con un plan. Rota con tiempo.",
    description: "Entrenamiento independiente para leer la caída, la tormenta, las peleas y el cierre.",
    locale: "es_CO",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Atlas táctico original de Zona Clara" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zona Clara | Coaching independiente",
    description: "Cae con un plan. Rota con tiempo.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-CO">
      <body className={`${bowlby.variable} ${publicSans.variable}`}>{children}</body>
    </html>
  );
}
