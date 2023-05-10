import { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Mert Turkmenoglu',
};

export interface RootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
