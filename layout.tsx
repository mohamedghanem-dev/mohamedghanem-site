import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Great_Vibes } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

// === Fonts ===
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });
const vibes = Great_Vibes({ subsets: ["latin"], weight: ["400"], variable: "--font-logo" });
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// === SEO Metadata ===
export const metadata: Metadata = {
  metadataBase: new URL("https://mohamedganem-dev.netlify.app"),
  title: "Mohamed Ghanem | Full Stack Developer Portfolio",
  description:
    "Official portfolio of Mohamed Ghanem — a Full Stack Developer skilled in React, Next.js, Ruby on Rails, and Flutter. Explore my projects, services, and development journey.",
  keywords: [
    "Mohamed Ghanem",
    "Full Stack Developer",
    "React Developer",
    "Ruby on Rails Developer",
    "Next.js Portfolio",
    "Software Engineer Egypt",
    "Frontend Developer",
    "Backend Developer",
    "Flutter Developer",
  ],
  authors: [{ name: "Mohamed Ghanem" }],
  openGraph: {
    title: "Mohamed Ghanem | Full Stack Developer",
    description:
      "Explore Mohamed Ghanem’s developer portfolio — projects, services, and journey in React, Ruby on Rails, and Flutter development.",
    url: "https://mohamedganem-dev.netlify.app",
    siteName: "Mohamed Ghanem Portfolio",
    images: [
      {
        url: "https://mohamedganem-dev.netlify.app/profile.png",
        width: 800,
        height: 600,
        alt: "Mohamed Ghanem - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Ghanem | Full Stack Developer",
    description:
      "Portfolio of Mohamed Ghanem — React, Ruby on Rails, Next.js, and Flutter developer building modern web & mobile solutions.",
    images: ["https://mohamedganem-dev.netlify.app/profile.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#ff6600",
};

// === Layout ===
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohamed Ghanem",
    alternateName: "Mohamed Ghanem",
    url: "https://mohamedganem-dev.netlify.app",
    image: "https://mohamedganem-dev.netlify.app/profile.png",
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Mohamed Ghanem",
      url: "https://mohamedganem-dev.netlify.app"
    },
    sameAs: [], // لو عندك روابط LinkedIn/GitHub/Facebook ممكن تضيفهم هنا
    description:
      "Full Stack Developer skilled in React, Next.js, Ruby on Rails, and Flutter. Explore projects, services, and portfolio.",
  };

  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className={`${poppins.className} ${vibes.variable} ${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>

        {/* === Google Structured Data === */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
      </body>
    </html>
  );
}
