import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amit kumar Raj- Full Stack Web Developer",
  description:
    "I'm Amit Kumar Raj, a passionate and dedicated 4th-year Computer Science student at Chandigarh University ,Gharuan Mohali,Punjab. Amit Kumar Raj is a Full Stack web developer from Sitamarhi, Bihar.",
  keywords: [
    "Amit",
    "Amit kumar Raj",
    "Amit Raj",
    "A K Raj",
    "Amit kumar Raj Sitamarhi",
    "Amit Raj Sitamarhi Bihar",
    "Amit kumar Raj web developer",
    "Amit kumar full stack developer",
    "Amit Raj MERN Stack developer",
    "Amit Sitamarhi",
    "Amit Raj Bihar",
    "Amit Bihar",
  ],
  authors: [
    { name: "Amit Kumar Raj" },
    { name: "Amit kumar Raj", url: "https://rajamitstm.in" },
  ],
  creator: "Amit Kumar Raj",
  publisher: "Amit Kumar Raj",
  category: "technology",
  metadataBase: new URL("https://rajamitstm.in"),
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Amit Kumar Raj",
    description:
      "I'm Amit Kumar Raj, a passionate and dedicated 4th-year Computer Science student at Chandigarh University ,Gharuan Mohali,Punjab",
    url: "https://rajamitstm.in",
    siteName: "Amit Kumar Raj",
    images: [
      {
        url: "/amitraj/amitraj.png",
        width: 600,
        height: 600,
      },
      {
        url: "/amitraj/amitraj.png",
        width: 500,
        height: 600,
      },
      // {
      //   url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
      //   width: 1800,
      //   height: 1600,
      //   alt: 'My custom alt',
      // },

    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amit Raj",
    description:
      "I'm Amit Kumar Raj, a passionate and dedicated 4th-year Computer Science student at Chandigarh University ,Gharuan Mohali,Punjab.",
    siteId: "",
    creator: "@rajamitstm",
    creatorId: "@rajamitstm",
    images: ["/amitraj/amitraj.png"],
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    // other: {
    //   me: ['my-email', 'my-link'],
    // },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-small bg-fixed bg-cover bg-center h-screen`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
