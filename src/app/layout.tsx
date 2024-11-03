'use client';
import type { AppProps } from "next/app";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import { appWithI18Next } from "ni18n";
import i18n from "../../next-i18next.config";
import { I18nextProvider } from 'react-i18next';
const inter = Inter({ subsets: ["latin"] });
import "reflect-metadata";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <I18nextProvider i18n={i18n}>
      <html lang="vi">
        <body className={inter.className}>
          <StoreProvider>
            <body className={inter.className}>{children}</body>
          </StoreProvider>
        </body>
      </html>
    </I18nextProvider>
  );
}
