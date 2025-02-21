import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

const websiteUrl = "https://vagsheer-landing.vercel.app/"; // Update with your actual website URL
const imageUrl =
  "https://vagsheer-landing.vercel.app/_next/image?url=%2Fc9.jpg&w=2048&q=75"; // Update with your actual image URL

export const metadata: Metadata = {
  title: "Vagshree : Aerial Surveys and Engineering Solutions",
  description: "Elevating Precision, Empowering Industries!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* metadata */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <title>Vagsheer - Aerial Surveys and Engineering Solutions</title>
        <meta
          name="description"
          content="Vagsheer offers a wide range of services including Aerial Surveys, Mapping, Video Recording, Thermal and Visual Inspection, and more to enhance industries like solar plants, wind turbines, agriculture, smart cities, and beyond."
        />
        <meta
          name="keywords"
          content="Aerial Surveys, Mapping, Video Recording, Thermal Inspection, Visual Inspection, Solar Plants, Transmission Lines, Railway Lines, Wind Turbines, Telecom Towers, Factories, Dams, Hydropower, Mines, Rivers, Smart Cities, Urban Planning, Watersheds, Agriculture, Pipelines, Ports"
        />
        <meta name="author" content="Vagsheer" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Vagsheer - Aerial Surveys and Engineering Solutions"
        />
        <meta
          property="og:description"
          content="Explore the wide range of services provided by Vagsheer to support industries like solar, wind energy, agriculture, and urban development."
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={websiteUrl} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Vagsheer - Aerial Surveys and Engineering Solutions"
        />
        <meta
          name="twitter:description"
          content="Vagsheer offers expert aerial surveys, mapping, inspection, and engineering solutions for industries like solar, wind, telecom, and more."
        />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:site" content="@yourtwitterhandle" />

        {/* Robots Meta Tag */}
        <meta name="robots" content="index, follow" />

        {/* Contact Links */}
        <link rel="canonical" href={websiteUrl} />
        <meta name="support-email" content="mailto:support@untitledui.com" />
        <meta name="info-email" content="mailto:info@vagsheer.com" />
        <meta name="whatsapp" content="https://wa.me/+919794877798" />

        {/* Social Media Links */}
        <meta name="facebook" content="https://facebook.com/vagsheer" />
        <meta name="linkedin" content="https://linkedin.com/company/vagsheer" />
        <meta name="twitter" content="https://twitter.com/vagsheer" />
        <meta name="instagram" content="https://instagram.com/vagsheer" />
        {/* Add favicon links here if needed */}
        <link rel="icon" href="/favicon.ico" />
        {/* You can also add other favicons with different sizes if needed */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head>
      <body
        className={`${inter.className} bg-white dark:bg-black text-gray-900 dark:text-gray-100`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
