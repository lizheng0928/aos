import type { Metadata } from "next";
import Script from "next/script";
import { assetPath } from "./site-paths";
import { playbookTitle } from "./playbook-data";
import "./globals.css";

export const metadata: Metadata = {
  title: playbookTitle,
  description: playbookTitle,
  icons: {
    icon: assetPath("/favicon.svg"),
    shortcut: assetPath("/favicon.svg"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <Script id="basil-theme-init" strategy="beforeInteractive">
          {`try{var t=localStorage.getItem("basil-theme")||"dark";document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme="dark";}`}
        </Script>
        {children}
      </body>
    </html>
  );
}
