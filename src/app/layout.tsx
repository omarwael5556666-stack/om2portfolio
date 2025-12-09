import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/layouts';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
});

export const metadata = {
  title: 'Omar Wael | Developer Portfolio',
  description:
    'Portfolio website of Omar Wael: Web Developer, Designer, and Creator.',
  openGraph: {
    title: 'Omar Wael | Developer Portfolio',
    description:
      'Portfolio website of Omar Wael: Web Developer, Designer, and Creator.',
    url: '/',
    siteName: 'Omar Wael',
    images: [
      {
        url: '/images/about.png',
        width: 1200,
        height: 630,
        alt: 'Omar Wael Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omar Wael | Developer Portfolio',
    description:
      'Portfolio website of Omar Wael: Web Developer, Designer, and Creator.',
    images: ['/images/about.png'],
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
              name: 'Omar Wael',
              url: '/',
              image: '/images/about.png',
              jobTitle: 'Web Developer, Designer, Creator',
              sameAs: [
                'https://github.com/omarwael5556666-stack',
                'https://www.linkedin.com/in/omar-wael-60361239a',
                'https://www.instagram.com/oommaarrwael',
              ],
              description:
                'Portfolio website of Omar Wael: Web Developer, Designer, and Creator.',
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
