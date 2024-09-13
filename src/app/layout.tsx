import type { Metadata } from "next";
import "./globals.css";
import { Lora, Sevillana, Playfair_Display, Quicksand } from 'next/font/google'
import ReactQueryClientProvider from "@/config/ReactQueryClientProvider";
import { createServerSupabaseClient } from "@/utils/supabase/server";
// import localFont from "next/font/local";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const lora = Lora({
  style: 'normal',
  weight: "400",
  subsets: ['latin'],
  variable: "--font-lora",
});

const sevillana = Sevillana({
  style: 'normal',
  weight: '400',
  subsets: ['latin'],
  variable: "--font-servillana"
})

const playfair = Playfair_Display({
  style: ["normal", "italic"],
  weight: '400',
  subsets: ['latin'],
  variable: "--font-playfair"
})

const quicksand = Quicksand({
  style: "normal",
  weight: '400',
  subsets: ['latin'],
  variable: "--font-quicksand"
})

export const metadata: Metadata = {
  title: "we invite you to wedding",
  description: "web wedding invitation",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createServerSupabaseClient()
  const { data: { session } } = await supabase.auth.getSession()
  console.log(session)
  
  return (
    <html lang="en">
      <ReactQueryClientProvider>
        <body
          className={`${lora.variable} ${sevillana.variable} ${playfair.variable} ${quicksand.variable} antialiased flex flex-col items-center`}
        >
          {children}
        </body>
      </ReactQueryClientProvider>
    </html>
  );
}
