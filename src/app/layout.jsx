import '@styles/scss/style.scss';
import "./globals.css";

// Import CSS files using relative paths to ensure proper compilation
import "./_styles/css/plugins/bootstrap-grid.css";
import "./_styles/css/plugins/magnific-popup.css";

// Import Swiper styles directly from node_modules
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

import ScrollbarProgress from "@layouts/scrollbar-progress/Index";
import AppData from "@data/app.json";

export const metadata = {
  title: "Lynx Flooring",
  description: AppData.settings.siteDescription,
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
    other: {
      rel: 'icon',
      url: '/favicon.ico',
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body>
        <div className="mil-wrapper">
          {children}
          <ScrollbarProgress />
        </div>
      </body>
    </html>
  );
}
