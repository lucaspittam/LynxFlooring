// Global and third-party styles
import "@styles/scss/style.scss";
import "./globals.css";

// Component-specific styles
import "./_styles/hero.css";
import "./_styles/modern-backgrounds.css";
import "./_styles/css/plugins/bootstrap-grid.css";
import "./_styles/css/plugins/magnific-popup.css";

// Components
import ScrollbarProgress from "@layouts/scrollbar-progress/Index";
import AppData from "@data/app.json";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "Lynx Flooring",
  description: AppData.settings.siteDescription,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    other: {
      rel: "icon",
      url: "/favicon.ico",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
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
