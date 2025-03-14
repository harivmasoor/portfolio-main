import './globals.css';
import Layout from './components/Layout';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Hari Masoor - Full Stack Developer',
  description: 'Portfolio website of Hari Masoor, a Full Stack Developer specializing in React, Ruby on Rails, and JavaScript',
  icons: {
    icon: [
      { url: '/images/brain-emoji.svg', type: 'image/svg+xml' },
      { url: '/images/brain-emoji.png', type: 'image/png' },
    ],
    apple: '/images/brain-emoji.png',
    shortcut: '/images/brain-emoji.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/all.min.css" />
        <link rel="stylesheet" href="/css/simple-line-icons.css" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/animate.css" />
      </head>
      <body>
        {/* Preloader */}
        <div id="preloader">
          <div className="outer">
            <div className="spinner">
              <div className="dot1"></div>
              <div className="dot2"></div>
            </div>
          </div>
        </div>
        
        <Layout>{children}</Layout>
        
        {/* Scripts */}
        <Script src="/js/jquery-1.12.3.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.appear.min.js" strategy="afterInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/js/preloader.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
