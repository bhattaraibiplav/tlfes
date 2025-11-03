import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Triyuga Little Flowers' English School",
  description: "",
  icons: '/logo.png'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
