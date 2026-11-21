import BootstrapInit from "@/helper/BootstrapInit";
import RouteScrollToTop from "@/helper/RouteScrollToTop";
import ErrorBoundary from "@/helper/ErrorBoundary";
import CustomGSAP from "@/helper/CustomGsap";
import { Marcellus } from "next/font/google";
import "./globals.css";

/* Marcellus – Google Font */
const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
  display: "swap",
});

export async function generateMetadata() {
  return {
    title: {
      default: "Best Hotel in Patia, Bhubaneswar Near KIIT and Infocity - ABB Hotel",
      template: "%s | ABB Hotel",
    },
    description: "Stay at ABB Hotel in Patia, Bhubaneswar, near KIIT University and Infocity. Enjoy elegant rooms, modern amenities, warm hospitality and a comfortable stay for business or leisure.",
    robots: {
      index: true,
      follow: true,
    },
    verification: {
      google: "ShpBQKw9gUChGfa5JH_0i7nnETz9w9cJHO1zmA35Tu8",
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${marcellus.variable}`}>
      <head>
        {/* Google Tag */}
        <script
          async
          src="https://www.googletagmanager.com/gtm.js?id=GTM-MRLRCFPJ"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            `,
          }}
        />
      </head>
      <body>
        <ErrorBoundary>
          <BootstrapInit />
          <RouteScrollToTop />
          <CustomGSAP />
        </ErrorBoundary>

        {children}
      </body>
    </html>
  );
}
