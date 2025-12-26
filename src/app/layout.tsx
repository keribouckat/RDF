import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Restauration des Familles | Eglise Chretienne",
  description: "L'Eglise Restauration des Familles - Une Eglise, Une Famille, Un Amour. Rejoignez-nous pour vivre une experience spirituelle transformante avec le Pasteur Philippe Mukoma Wetu.",
  keywords: ["eglise", "restauration", "familles", "chretienne", "philippe mukoma", "culte", "priere", "foi"],
  authors: [{ name: "Restauration des Familles" }],
  openGraph: {
    title: "Restauration des Familles",
    description: "Une Eglise, Une Famille, Un Amour",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
