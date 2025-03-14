import './globals.css';
import Layout from './components/Layout';
import { Metadata } from 'next';
import StyleLoader from './components/StyleLoader';
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
        {/* Stylesheets will be loaded dynamically by the StyleLoader component */}
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
        
        {/* StyleLoader will dynamically add all scripts and styles */}
        <StyleLoader />
      </body>
    </html>
  );
}
