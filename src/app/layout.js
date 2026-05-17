import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Praveen Rathi | SME Automation Solutions",

  description:
    "Custom business automation systems, workflow tools, operational dashboards, Google Apps Script solutions, and reporting software for small and medium businesses.",

  keywords: [
    "Business Automation",
    "Workflow Automation",
    "Google Apps Script",
    "MIS Dashboard",
    "Operational Software",
    "SME Automation",
    "Custom Business Software",
    "Reporting Systems",
    "Business Web Applications",
    "Process Automation",
  ],

  authors: [{ name: "Praveen Rathi" }],

  creator: "Praveen Rathi",

  openGraph: {
    title: "Praveen Rathi | SME Automation Solutions",

    description:
      "Custom operational software and workflow automation solutions for SMEs.",

    url: "https://praveenrathi-portfolio.vercel.app",

    siteName: "Praveen Rathi Portfolio",

    locale: "en_US",

    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
