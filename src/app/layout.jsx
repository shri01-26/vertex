import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css";

import Script from "next/script";
import ClientChrome from "./ClientChrome";

export const metadata = {
  title: "Vertex Suite",
  description:
    "Connected communication and business solutions from Vertex Suite.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body suppressHydrationWarning>
        <Script id="sw-cache-cleanup" strategy="afterInteractive">
          {`
            (function () {
              if ("serviceWorker" in navigator) {
                navigator.serviceWorker
                  .getRegistrations()
                  .then(function (registrations) {
                    registrations.forEach(function (registration) {
                      registration.unregister();
                    });
                  });
              }

              if (window.caches && caches.keys) {
                caches.keys().then(function (keys) {
                  keys.forEach(function (key) {
                    caches.delete(key);
                  });
                });
              }
            })();
          `}
        </Script>

        <ClientChrome>{children}</ClientChrome>
      </body>
    </html>
  );
}
