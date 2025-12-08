import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css"

const montserrat = Montserrat({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']})

export const metadata: Metadata = {
  title: "Responsive Medical Website",
  description: "Responsive Medical Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
