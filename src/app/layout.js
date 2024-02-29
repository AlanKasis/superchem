import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import '../../node_modules/flowbite/dist/flowbite.min.css';
import Script from "next/script";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "300"
});

export const metadata = {
  title: "SuperChem",
  description: "Especialistas en procesos de separación"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js" />
    </html>
  );
}
