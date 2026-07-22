import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";


export const metadata: Metadata = {
  title: "Accredian Enterprise",
  description: "Enterprise learning solutions landing page.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}

        <Toaster position="top-right" richColors duration={5000} />
      </body>
    </html>
  );
}
