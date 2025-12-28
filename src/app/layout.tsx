import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';

import './globals.css';
import { ThemeProvider } from '@/components/layouts';
import { personalData, socialLinks } from '@/services/data';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tah-dev-portfolio.vercel.app';
const fullName = `${personalData.firstName} ${personalData.lastName}`;
const title = `${fullName} | Developer Portfolio`;
const description = `Portfolio website of ${fullName}: ${personalData.role}.`;
const ogImage = `${siteUrl}/images/about.png`;

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: fullName,
  url: siteUrl,
  image: ogImage,
  jobTitle: personalData.role,
  sameAs: socialLinks.map((link) => link.href),
  description,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    personalData.role,
    'Next.js',
    'React',
    'TypeScript',
    'Frontend Developer',
    'Fullstack Developer',
  ],
  authors: [{ name: fullName, url: siteUrl }],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: fullName,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `${fullName} Portfolio Preview`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [ogImage],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
      { url: '/icon1.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon1.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: fullName,
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <meta name="application-name" content={`${fullName} Portfolio`} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={fullName} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#141313" />
        <meta name="msapplication-tap-highlight" content="no" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${ibmPlexSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
