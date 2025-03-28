// Pagina de layout onde é definido toda a estrutura e cabecalho do projeto

import "./globals.css";
import Header from "../components/header/page";

// O objeto metadata no Next.js serve para configurar metadados da página,
// como título, descrição, informações para redes sociais e controle de indexação para mecanismos de busca.
// Ele é usado em páginas do Next.js para melhorar SEO e a forma como a página aparece em compartilhamentos.

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meu app Next.js",
  description: "Estudos usando o framework Next.js",
  openGraph: {
    // gerar prévias da página quando ela é compartilhada.
    title: "Meu app Next.js",
    description: "Estudos usando o framework Next.js",
    images: [
      "https://e7.pngegg.com/pngimages/313/617/png-clipart-mario-yoshi-super-mario-world-2-yoshi-s-island-yoshi-nintendo-vertebrate-thumbnail.png"
    ]
  },
  robots: {
    //controla como os crawlers (robôs de busca, como o do Google) interagem com a página.
    index: true, // Permite que a página seja indexada nos mecanismos de busca.
    follow: true, // Permite que os links dentro da página sejam seguidos pelos motores de busca.
    nocache: true, // Evita que o Google armazene uma versão em cache da página.
    googleBot: {
      // Especifica regras personalizadas para o robô do Google.
      index: true,
      follow: true,
      nocache: true
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        <div className="pt-16 mb-2">{children}</div> 
      </body>
    </html>
  );
}
