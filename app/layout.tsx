import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Providers } from './providers';
import { NotificationProvider } from '@/components/context/NotificationContext';
import NotificationPopup from '@/components/NotificationPopup'; // ⬅️ Tambahin ini

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lofty Florist - Buket Bunga Online Jakarta & Indramayu',
  description:
    'Toko buket online terpercaya dengan berbagai pilihan buket uang, bunga, dan snack. Melayani 24 jam dengan pengiriman ke Jakarta dan Indramayu.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Providers>
          <NotificationProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </NotificationProvider>
        </Providers>
      </body>
    </html>
  );
}
