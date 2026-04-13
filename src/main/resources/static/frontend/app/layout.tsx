import "./globals.css";

export const metadata = {
  title: "Sistema Vacina",
  description: "Cartão de Vacinação",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}