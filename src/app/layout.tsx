import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/layouts';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
});

export const metadata = {
  title: 'Tah  | Developer Portfolio',
  description:
    'Portfolio website of Tah : Web Developer, Designer, and Creator.',
  openGraph: {
    title: 'Tah | Developer Portfolio',
    description:
      'Portfolio website of Tah : Web Developer, Designer, and Creator.',
    url: 'https://Tah-dev-portfolio.vercel.app/',
    siteName: 'Tah57',
    images: [
      {
        url: 'https://Tah-dev-portfolio.vercel.app/images/about.png',
        width: 1200,
        height: 630,
        alt: 'Tah Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tah  | Developer Portfolio',
    description:
      'Portfolio website of Tah : Web Developer, Designer, and Creator.',
    images: ['https://Tah-dev-portfolio.vercel.app/images/about.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Tah ',
              url: 'https://Tah-dev-portfolio.vercel.app/',
              image: 'https://Tah-dev-portfolio.vercel.app/images/about.png',
              jobTitle: 'Web Developer, Designer, Creator',
              sameAs: [
                'https://github.com/Tah57',
                'https://linkedin.com/in/k-dev',
                'https://instagram.com/kohamed_19',
              ],
              description:
                'Portfolio website of Tah57: Web Developer, Designer, and Creator.',
            }),
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
