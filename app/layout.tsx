import './globals.css';
import Layout from './components/Layout';
import { Metadata } from 'next';
import Script from 'next/script';
import { getAssetPath } from './utils/paths';

export const metadata: Metadata = {
  title: 'Hari Masoor - Full Stack Developer',
  description: 'Portfolio website of Hari Masoor, a Full Stack Developer specializing in React, Ruby on Rails, and JavaScript',
  icons: {
    icon: [
      { url: getAssetPath('/images/brain-emoji.svg'), type: 'image/svg+xml' },
      { url: getAssetPath('/images/brain-emoji.png'), type: 'image/png' },
    ],
    apple: getAssetPath('/images/brain-emoji.png'),
    shortcut: getAssetPath('/images/brain-emoji.png'),
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
        {/* Use process.env.NODE_ENV to determine if we're in production */}
        <link rel="stylesheet" href={getAssetPath('/css/style.css')} />
        <link rel="stylesheet" href={getAssetPath('/css/all.min.css')} />
        <link rel="stylesheet" href={getAssetPath('/css/simple-line-icons.css')} />
        <link rel="stylesheet" href={getAssetPath('/css/bootstrap.min.css')} />
        <link rel="stylesheet" href={getAssetPath('/css/magnific-popup.css')} />
        <link rel="stylesheet" href={getAssetPath('/css/animate.css')} />
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
        <Script src={getAssetPath('/js/jquery-1.12.3.min.js')} strategy="beforeInteractive" />
        <Script src={getAssetPath('/js/jquery.appear.min.js')} strategy="afterInteractive" />
        <Script src={getAssetPath('/js/bootstrap.min.js')} strategy="afterInteractive" />
        <Script src={getAssetPath('/js/jquery.magnific-popup.min.js')} strategy="afterInteractive" />
        <Script src={getAssetPath('/js/preloader.js')} strategy="afterInteractive" />
      </body>
    </html>
  );
}
