import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

const title = 'Ferhat incekara';
const description =
  'I’m a front-end developer based in Tekirdağ. I have a keen interest in design, artificial intelligence, science, and entrepreneurship.';
const url = 'https://ferhatincekara.com';
const locale = 'en';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    siteName: title,
    locale,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title,
    description,
    site: '@ferhatincekara',
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: '#ffffff',
  icons: {
    icon: '/icons/android-chrome-192x192.png',
    apple: '/icons/apple-touch-icon.png',
  },
  manifest: `${url}/manifest.json`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-882T00TRKX" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-882T00TRKX');
        `}
      </Script>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
