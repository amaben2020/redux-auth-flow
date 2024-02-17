import ReduxProvider from "@/components/provider/ReduxProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Redux AUth",
  description: "PWA application with Redux AUth",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],

  authors: [
    { name: "Rajesh Prajapati" },
    {
      name: "Rajesh Prajapati",
      url: "https://www.linkedin.com/in/raazeshp96/",
    },
  ],

  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer position="top-center" />

        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
