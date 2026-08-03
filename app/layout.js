import './globals.css';

export const metadata = {
  title: 'Calici Hong Kong | Mediterranean Bistro, Wine & Grocer',
  description: 'A Mediterranean escape in the heart of Hong Kong. Coastal flavours, curated wines and artisanal groceries.',
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
