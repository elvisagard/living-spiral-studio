import type { Metadata } from "next";
import "./globals.css";
import { montserrat, cormorant, mulish } from "./fonts";

export const metadata: Metadata = {
  title: {
    default: "Living Spiral Studio, LLC",
    template: "%s | Living Spiral Studio, LLC",
  },
  description:
    "Living Spiral Studio, LLC is the parent organization behind Chart-Ed Institute for Global Data Literacy, Chart-Ed Learning, and Living Spiral Education.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="corporate" lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Prevent FART (Flash of Accidental/Unstyled Theme)
              if (localStorage.getItem("theme") === null) {
                document.documentElement.setAttribute("data-theme", "corporate");
              } else {
                document.documentElement.setAttribute("data-theme", localStorage.getItem("theme"));
              }
            `,
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${cormorant.variable} ${mulish.variable} antialiased`}
      >
          {children}
      </body>
    </html>
  );
}
